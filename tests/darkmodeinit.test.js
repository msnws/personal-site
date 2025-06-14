import { JSDOM } from 'jsdom';

async function loadScript(prefersDark) {
  const dom = new JSDOM('<html><body><div id="toggle"></div></body></html>', {
    runScripts: 'dangerously',
    resources: 'usable'
  });
  global.window = dom.window;
  global.document = dom.window.document;
  global.toggle = dom.window.document.getElementById('toggle');

  dom.window.matchMedia = query => ({
    matches: prefersDark,
    media: query,
    addListener: () => {},
    removeListener: () => {}
  });

  await import('../src/scripts/darkmodeinit.js');
  dom.window.document.dispatchEvent(new dom.window.Event('DOMContentLoaded'));
  return dom;
}

test('adds dark class when prefers dark', async () => {
  const dom = await loadScript(true);
  const html = dom.window.document.querySelector('html');
  expect(html.classList.contains('dark')).toBe(true);
});

test('removes dark class when prefers light', async () => {
  const dom = await loadScript(false);
  const html = dom.window.document.querySelector('html');
  expect(html.classList.contains('dark')).toBe(false);
});

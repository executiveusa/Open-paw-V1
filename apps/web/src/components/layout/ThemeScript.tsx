'use client';

export function ThemeScript() {
  const script = `
    (function() {
      var t = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      document.documentElement.classList.toggle('dark', t === 'dark');
    })();
  `;
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}

import './index.css'; // This bundles Tailwind styles in single CSS file to import in consumer apps. If this file is imported in `src/App.tsx`, then CSS files imported to `src/App.tsx` should not include Tailwind directive (`@import 'tailwindcss'`), otherwise it will cause duplicate Tailwind classes in dev mode.

export * from './components';
export * from './hooks/useExternalStore';

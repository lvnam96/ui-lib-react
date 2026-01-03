import './index.css'; // This bundles Tailwind styles in single CSS file to import in consumer apps. If this file is imported in `src/App.tsx`, then CSS files imported to `src/App.tsx` should not include Tailwind directive (`@import 'tailwindcss'`), otherwise it will cause duplicate Tailwind classes in dev mode.

export * from './components/FancyBox';
export * from './components/BlinkBlink';
export * from './components/ErrorBoundary';
export * from './components/Pikachu';
export * from './components/TodoInput';

// Using rxjs store will create dependency to rxjs in react lib, adding extra step to convert it to React's way of state management in the future:
// export * from './components/BlinkBlink/BlinkBlinkWithRxjsStore';
// export * from './hooks/useExternalStore';

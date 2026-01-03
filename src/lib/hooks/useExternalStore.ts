import { useSyncExternalStore } from 'react';
import type { BehaviorSubject } from 'rxjs';

/**
 * Hook to subscribe to RxJS stores (BehaviorSubject, ReplaySubject) in React components.
 * Automatically subscribes and unsubscribes, and triggers re-renders on value changes.
 *
 * @param store An RxJS store with subscribe() and getValue() methods (BehaviorSubject/ReplaySubject)
 * @returns The current value from the store
 *
 * @example
 * ```tsx
 * function MyComponent({ subject }: { subject: BehaviorSubject<number> }) {
 *   const count = useRxjsStore(subject);
 *   return <div>Count: {count}</div>;
 * }
 * ```
 */
export function useRxjsStore<T>(store?: {
  subscribe: (cb: () => void) => {
    unsubscribe: () => void;
  };
  getValue: () => T;
} | null): T | undefined {
  return useSyncExternalStore(
    (callback) => {
      if (!store) {
        return () => {
          // No-op cleanup if store is not provided
        };
      }
      const subscription = store.subscribe(callback);
      return () => {
        subscription.unsubscribe();
      };
    },
    () => store?.getValue()
  );
}

/**
 * Type helper for components that receive a BehaviorSubject prop
 */
export interface WithRxjsStore<T> {
  subject?: BehaviorSubject<T>;
};

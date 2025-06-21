import { useSyncExternalStore } from 'react';

/**
 * @param store Can use BehaviorSubject or ReplaySubject with a getValue() method
 *
 */
export function useRxjsStore<T>(store: {
  subscribe: (cb: () => void) => {
    unsubscribe: () => void;
  };
  getValue: () => T;
}): T {
  return useSyncExternalStore(
    (callback) => {
      const subscription = store.subscribe(callback);
      return () => {
        subscription.unsubscribe();
      };
    },
    () => store.getValue()
  );
}

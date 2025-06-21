import styles from './index.module.css';
// import { useRxjsStore } from '../../hooks/useExternalStore';

export const BlinkBlink = ({ counter, ...props }: { counter?: number; onClick: () => void }) => {
  // useRxjsStore(behaviorSubjectInstance);
  return (
    <div
      className={styles.blink} // <-- CSS Modules works
      style={{ padding: '1rem' }} // <-- Inline CSS works too
      {...props}
    >
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-red-500">{counter}</span>
    </div>
  );
};

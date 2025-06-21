import styles from './index.module.css';
// import { useRxjsStore } from '../../hooks/useExternalStore';

export const FancyBox = ({ text = 'FancyBox!' }: { text?: string }) => {
  // useRxjsStore(behaviorSubjectInstance);
  return (
    <div
      className={styles.box} // <-- CSS Modules works
      style={{ padding: '1rem' }} // <-- Inline CSS works too
    >
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-red-500">{text}</span> 🚀
    </div>
  );
};

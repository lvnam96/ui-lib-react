import type { FC } from 'react';
import styles from './index.module.css';
// import { useRxjsStore } from '../../hooks/useExternalStore';

export interface FancyBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  text?: string;
}

export const FancyBox: FC<FancyBoxProps> = ({ text = 'FancyBox!' }) => {
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

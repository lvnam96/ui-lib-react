import type { FC } from 'react';
import styles from './index.module.css';
// import { useRxjsStore } from '../../hooks/useExternalStore';

export interface BlinkBlinkProps extends React.HTMLAttributes<HTMLDivElement> {
  counter?: number;
  onClick: React.HTMLAttributes<HTMLDivElement>['onClick'];
}

export const BlinkBlink: FC<BlinkBlinkProps> = ({ counter, ...props }) => {
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

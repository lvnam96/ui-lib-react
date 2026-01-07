import type { FC } from 'react';
import { cn } from '../../utils/classnames';

import './index.css';
import '../../index2.css'; // This kind of CSS import affects global styles of the host app, but it will be scoped inside Shadow DOM
import styles from './index.module.css';

export interface FancyBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  text?: string;
}

export const FancyBox: FC<FancyBoxProps> = ({ text = 'FancyBox!' }) => {
  return (
    <div
      className={cn(styles.box, 'text-center')} // <-- CSS Modules & Tailwind classes works
      style={{ padding: '1rem' }} // <-- Inline CSS works too
    >
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-red-500">{text}</span> 🚀
    </div>
  );
};

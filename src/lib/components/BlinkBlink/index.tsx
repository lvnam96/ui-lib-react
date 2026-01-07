import type { FC } from "react";
import styles from "./index.module.css";
import { cn } from "../../utils/classnames";
// import '../../index2.css'; // This kind of CSS import affects global styles of the host app

export interface BlinkBlinkProps extends React.HTMLAttributes<HTMLDivElement> {
  counter: number;
  onClick?: React.HTMLAttributes<HTMLDivElement>["onClick"];
}

export const BlinkBlink: FC<BlinkBlinkProps> = ({ counter, ...props }) => {
  return (
    <div
      className={cn(styles.blink, "text-center font-bold")} // <-- CSS Modules works
      style={{ padding: "1rem" }} // <-- Inline CSS works too
      {...props}
    >
      <span className={cn(styles.content, "text-transparent bg-clip-text")}>
        {counter}
      </span>
    </div>
  );
};

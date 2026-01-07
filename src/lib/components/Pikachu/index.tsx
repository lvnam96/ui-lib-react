import type { FC } from "react";
import pikachuImg from "../../../assets/pikachu.gif";
import { cn } from "../../utils/classnames";
import styles from "./index.module.css";

const placeholder = "https://placehold.co/600x400/EEE/31343C";

export interface PikachuProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
}

export const Pikachu: FC<PikachuProps> = ({ src = placeholder }) => {
  return (
    <div
      className={cn(
        styles.pikachu,
        "min-w-[300px] min-h-[300px] flex items-end-safe justify-between"
      )}
    >
      {}
      <img src={src} className="w-7/12 h-auto" />
      <img src={pikachuImg} className="w-7/12 h-auto" />
    </div>
  );
};

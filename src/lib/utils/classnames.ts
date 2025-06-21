import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...klasses: Parameters<typeof clsx>) => twMerge(clsx(klasses));

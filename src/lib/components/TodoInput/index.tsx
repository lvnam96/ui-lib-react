import type { FC } from 'react';
import React from 'react';
import styles from './index.module.css';

export interface TodoInputProps {
  /** Data FROM Angular -> React (one-way down) */
  placeholder?: string;
  initialValue?: string;
  maxLength?: number;

  /** Callbacks TO Angular <- React (events up) */
  onSubmit?: (value: string) => void;
  onChange?: (value: string) => void;
  onClear?: () => void;
}

/**
 * Demo component showing 2-way communication WITHOUT RxJS:
 * - Angular passes data via props (placeholder, initialValue, maxLength)
 * - React sends data back via callbacks (onSubmit, onChange, onClear)
 * - Follows standard React patterns (easy to migrate later)
 */
export const TodoInput: FC<TodoInputProps> = ({
  placeholder = 'Enter a todo...',
  initialValue = '',
  maxLength = 100,
  onSubmit,
  onChange,
  onClear,
}) => {
  const [value, setValue] = React.useState(initialValue);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);

    // Send change event to Angular
    onChange?.(newValue);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim()) {
      // Send submit event to Angular
      onSubmit?.(value);
      setValue('');
    }
  };

  const handleClear = () => {
    setValue('');
    // Send clear event to Angular
    onClear?.();
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          value={value}
          onChange={handleInputChange}
          placeholder={placeholder}
          maxLength={maxLength}
          className={styles.input}
        />
        <div className={styles.buttons}>
          <button
            type="submit"
            disabled={!value.trim()}
            className={styles.submitBtn}
          >
            Add Todo
          </button>
          <button
            type="button"
            onClick={handleClear}
            disabled={!value}
            className={styles.clearBtn}
          >
            Clear
          </button>
        </div>
      </form>
      <div className={styles.info}>
        <span className={styles.counter}>
          {value.length} / {maxLength}
        </span>
      </div>
    </div>
  );
};

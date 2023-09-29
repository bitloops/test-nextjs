import { useState } from 'react';
import styles from './styles.module.css';

interface ButtonProps {
  value: string;
  label: string;
  full?: boolean | string;
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url' | 'search' | 'date' | 'datetime-local' | 'time' | 'month' | 'week' | 'range' | 'color' | 'checkbox' | 'radio' | 'file' | 'image' | 'submit' | 'reset' | 'button' | undefined;
  action: (key: string) => void;
  tabIndex?: number;
}

export default function InputField(props: ButtonProps) {
  const { value, full, label, action, tabIndex, type } = props;
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={full && (full === 'true' || full === true) ? `${styles.InputField} ${styles.InputFieldFull}` : styles.InputField}>
      <input
        value={value}
        tabIndex={tabIndex}
        type={type}
        onChange={e => action(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        id="floatingInput"
        placeholder={isFocused || value ? '' : label}
      />
      {isFocused && <label htmlFor="floatingInput">{label}</label>}
    </div>
  );
}
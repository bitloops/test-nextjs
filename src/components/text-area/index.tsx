import { useState } from 'react';
import styles from './styles.module.css';

interface TextAreaProps {
  value: string;
  label: string;
  full?: boolean | string;
  action: (key: string) => void;
  tabIndex?: number;
}

export default function TextArea(props: TextAreaProps) {
  const { value, full, label, action, tabIndex } = props;
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={full && (full === 'true' || full === true) ? `${styles.TextArea} ${styles.TextAreaFull}` : styles.TextArea}>
      <textarea
        value={value}
        tabIndex={tabIndex}
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
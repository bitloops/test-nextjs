import { useState } from 'react';
import styles from './styles.module.css';

interface CheckboxProps {
  value: 1 | undefined;
  checkboxlabel: JSX.Element;
  full?: boolean | string;
  action: (val: 1 | undefined) => void;
  tabIndex?: number;
}

export default function Checkbox(props: CheckboxProps) {
  const { value, full, action, tabIndex, checkboxlabel } = props;
  const [isFocused, setIsFocused] = useState(false);

  const handleCheckAction = () => {
    if (value === 1) {
      action(undefined);
    } else {
      action(1);
    }
  }

  return (
    <div className={styles.Checkbox}>
      <label>
      <input
        value={value}
        tabIndex={tabIndex}
        type='checkbox'
        onChange={handleCheckAction}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        id="floatingInput"
      />
      <span></span>
      </label>
      {checkboxlabel}
    </div>
  );
}
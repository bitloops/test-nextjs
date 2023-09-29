import { useState } from 'react';
import styles from './styles.module.css';

interface DropdownProps {
  label: string;
  value: string;
  full?: boolean | string;
  options: string[];
  onSelect: (key: string) => void;
  tabIndex?: number;
}

export default function Dropdown(props: DropdownProps) {
  const { full, options, onSelect, label, tabIndex, value } = props;
  const handle = (event: any) => {
    const option = event.target.value;
    onSelect(option);
  };

  return (
    <div className={styles.Dropdown}>
      <input 
        list='data-list'
        tabIndex={tabIndex}
        value={value}
        onChange={handle}
        placeholder={label}
      />
      <datalist id='data-list'>
        {options.map((option, index) => (
          <option key={index} value={option} />
        ))}
      </datalist>
      <span className={styles.DropdownCaret}>▼</span>
    </div>
  );
}
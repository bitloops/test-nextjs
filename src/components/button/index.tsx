import styles from './styles.module.css';

interface ButtonProps {
  value: string;
  isActive: boolean;
  onClickAction: () => void;
  type?: ButtonStates;
  tabIndex?: number;
}

type ButtonStates = 'Default' | 'Secondary';

export default function Button(props: ButtonProps) {
  const { tabIndex, isActive, value, type, onClickAction } = props;
  return (
    <div className={`${styles[`Button${type ?? 'Default'}`]} ${isActive ? '': styles.ButtonInactive}`} 
      tabIndex={tabIndex || 0}
      role="button" 
      aria-pressed="false"
      onClick={() => {
        if (onClickAction !== undefined && isActive) {
          onClickAction();
        } // else alert('Button clicked!');
      }}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            if (onClickAction !== undefined && isActive) {
              onClickAction();
            } // else alert('Button clicked!');
            e.preventDefault();  // Prevents any default action associated with the keypress
        }
      }}
      >
        <p>{value}</p>
    </div>
  );
}
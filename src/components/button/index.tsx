import styles from './styles.module.css';

interface ButtonProps {
  value: string;
  onClickAction: () => void;
  type?: ButtonStates;
}

type ButtonStates = 'Default' | 'Secondary';

export default function Button(props: ButtonProps) {
  const { value, type, onClickAction } = props;
  return (
    <div className={styles[`Button${type ?? 'Default'}`]} 
      tabIndex={0} 
      role="button" 
      aria-pressed="false"
      onClick={() => {
        if (onClickAction !== undefined) {
          onClickAction();
        } else alert('Button clicked!');
      }}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            if (onClickAction !== undefined) {
              onClickAction();
            } else alert('Button clicked!');
            e.preventDefault();  // Prevents any default action associated with the keypress
        }
      }}
      >
        <p>{value}</p>
    </div>
  );
}
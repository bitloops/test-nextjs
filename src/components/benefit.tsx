import { useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/styles.module.css';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

type Benefit = {
  id: number;
  icon: StaticImport;
  iconAlt: string;
  title: string;
  description: string;
};

interface BenefitProps {
  benefit: Benefit;
}

type BenefitState = 'Default' | 'Hover';

export default function ComponentBenefit(props: BenefitProps) {
  const { benefit } = props;
  const { icon, iconAlt, title, description } = benefit;
  const [state, setState] = useState<BenefitState>('Default');

  const actions = {
    onMouseOverAction: () => {
      setState('Hover');
    },
    onMouseLeaveAction: () => {
      setState('Default');
    },
  };

  const componentContents = () => (
    <div className={styles.ComponentsBenefit}>
      <div className={styles.ComponentsBenefitHeader + ' ' + styles[`ComponentsBenefitHeader${state}`]}>
        <Image src={icon} alt={iconAlt} />
        <h3>{title}</h3>
      </div>
      <p>{description}</p>
    </div>
  );

  return (
    <div 
      onMouseOver={actions.onMouseOverAction}
      onMouseLeave={actions.onMouseLeaveAction}
    >
        { componentContents() }
    </div>
  );
}
import Image from 'next/image';
import styles from './styles.module.css';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

type Step = {
  id: number;
  image: StaticImport;
  imageAlt: string;
  title: string;
  description: string;
};

interface StepProps {
  step: Step;
}

export default function ComponentStep(props: StepProps) {
  const { step } = props;
  const { image, imageAlt, title, description } = step;

  return (
    <li className={styles.ComponentsStepVerticalContainer}>
      <div className={styles.ComponentsStepImage}>
        <Image src={image} alt="" style={{width: '323.33px', height: '301.731px'}} />
      </div>
      <div className={styles.ComponentsStepVerticalContainer2}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </li>
  );
}
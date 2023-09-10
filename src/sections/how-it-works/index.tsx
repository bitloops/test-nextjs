import { useRouter } from 'next/router';
import styles from './styles.module.css';
import { Steps } from '@/data/sections-data';
import Step from '@/components/step/step';

interface HowItWorksSectionProps {
  title: string;
  steps: Steps;
}

export default function HowItWorksSection(props: HowItWorksSectionProps) {  
  const locale = useRouter().locale || 'en';
  const { title, steps } = props;
  return (
    <div id='how-it-works' className={styles.HowItWorksSection}>
      <h1>{title}</h1>
      <div className={styles.HowItWorksGrid}>
        {steps.map((step) => (<Step key={step.id} step={{
          id: step.id,
          image: step.image,
          imageAlt: step.imageAlt[locale],
          title: step.title[locale],
          description: step.description[locale],
        }} />))}
      </div>
    </div>
  );
}
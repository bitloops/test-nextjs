import { useRouter } from 'next/router';
import Benefit from '@/components/benefit';
import styles from '@/styles/styles.module.css';
import { Benefits } from '@/data/sections-data';

interface BenefitsSectionProps {
  title: string;
  subtitle: string;
  benefits: Benefits;
}

export default function BenefitsSection(props: BenefitsSectionProps) {  
  const locale = useRouter().locale || 'en';
  const { title, subtitle, benefits } = props;
  return (
    <div className={styles.benefits}>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <div className={styles.benefitsBenefits}>
        {benefits.map((benefit) => (<Benefit key={benefit.id} benefit={{
          id: benefit.id,
          icon: benefit.icon,
          iconAlt: benefit.iconAlt[locale],
          title: benefit.title[locale],
          description: benefit.description[locale],
        }} />))}
      </div>
    </div>
  );
}
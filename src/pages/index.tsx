import { useRouter } from 'next/router';
import styles from '@/styles/styles.module.css';
import BenefitsSection from '@/sections/benefits';
import { benefitsBenefits, benefitsSubtitle, benefitsTitle, heroHeader, heroPrimaryCta, heroSecondaryCta, heroSubheader, howItWorksSteps, stepsTitle } from '@/data/sections-data';
import HowItWorksSection from '@/sections/how-it-works';
import HeroSection from '@/sections/hero';

export default function App() {
  const locale = useRouter().locale || 'en';
  return (
    <div className={styles.View}>
      <HeroSection header={heroHeader[locale]} subheader={heroSubheader[locale]} primaryCta={heroPrimaryCta[locale]} secondaryCta={heroSecondaryCta[locale]} />
      <BenefitsSection title={benefitsTitle[locale]} subtitle={benefitsSubtitle[locale]} benefits={benefitsBenefits} />
      <HowItWorksSection title={stepsTitle[locale]} steps={howItWorksSteps} />
    </div>
  );
}
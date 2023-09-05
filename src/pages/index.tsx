import { useRouter } from 'next/router';
import BenefitsSection from '@/sections/benefits';
import { benefitsBenefits, benefitsSubtitle, benefitsTitle } from '@/data/sections-data';

export default function App() {
  const locale = useRouter().locale || 'en';
  return (
    <BenefitsSection title={benefitsTitle[locale]} subtitle={benefitsSubtitle[locale]} benefits={benefitsBenefits}/>
  );
}
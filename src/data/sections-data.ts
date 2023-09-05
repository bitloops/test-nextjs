import SaveTimeIcon from '@/components/icons/SaveTimeIcon.svg';
import ScalabilityIcon from '@/components/icons/ScalabilityIcon.svg';
import EncryptionWithSafetyIcon from '@/components/icons/EncryptionWithSafetyIcon.svg';
import VisibilityAndAccountabilityIcon from '@/components/icons/VisibilityAndAccountabilityIcon.svg';
import CollaborationIcon from '@/components/icons/CollaborationIcon.svg';
import OptimiseYourResourcesIcon from '@/components/icons/OptimiseYourResourcesIcon.svg';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export const benefitsTitle: {[locale: string]: string} = {
  en: 'The benefits you get...',
  fr: 'Les bénéfices que vous obtenez...',
};

export const benefitsSubtitle: {[locale: string]: string} = {
  en: 'Save hours with our automatic reconciliation engine and focus on the unreconciled items',
  fr: 'Gagnez des heures avec notre moteur de rapprochement automatique et concentrez-vous sur les éléments non rapprochés',
};

export const benefitsBenefits = [
  {
    id: 1,
    icon: SaveTimeIcon,
    iconAlt: {
      en: 'Save Time Icon',
      fr: 'Icône Gagnez du temps'
    },
    title: {
      en: 'Save Time',
      fr: 'Gagnez du temps',
    },
    description: {
      en: 'Reconcile 1000s of transactions in seconds',
      fr: 'Réconciliez des milliers de transactions en quelques secondes',
    },
  },
  {
    id: 2,
    icon: ScalabilityIcon,
    iconAlt: {
      en: 'Scalability Icon',
      fr: 'Icône Scalabilité'
    },
    title: {
      en: 'Scalability',
      fr: 'Scalabilité',
    },
    description: {
      en: 'Reconcile thousands of transactions in several Reconciliation Accounts',
      fr: 'Réconciliez des milliers de transactions dans plusieurs comptes de réconciliation',
    },
  },
  {
    id: 3,
    icon: EncryptionWithSafetyIcon,
    iconAlt: {
      en: 'Encryption With Safety Icon',
      fr: 'Icône Cryptage avec sécurité'
    },
    title: {
      en: 'Encryption with Safety',
      fr: 'Cryptage avec sécurité',
    },
    description: {
      en: 'Know your data is safe and protected from any third-party',
      fr: 'Sachez que vos données sont en sécurité et protégées de tout tiers',
    },
  },
  {
    id: 4,
    icon: VisibilityAndAccountabilityIcon,
    iconAlt: {
      en: 'Visibility & Accountability Icon',
      fr: 'Icône Visibilité et responsabilité'
    },
    title: {
      en: 'Visibility & Accountability',
      fr: 'Visibilité et responsabilité',
    },
    description: {
      en: 'Track all of your reconciliation reports, adjustments and status online',
      fr: 'Suivez tous vos rapports de réconciliation, ajustements et statut en ligne',
    },
  },
  {
    id: 5,
    icon: CollaborationIcon,
    iconAlt: {
      en: 'Collaboration Icon',
      fr: 'Icône Collaboration'
    },
    title: {
      en: 'Collaboration',
      fr: 'Collaboration',
    },
    description: {
      en: 'Work collaboratively and online with your colleagues, customers or suppliers',
      fr: 'Travaillez en collaboration et en ligne avec vos collègues, clients ou fournisseurs',
    },
  },
  {
    id: 6,
    icon: OptimiseYourResourcesIcon,
    iconAlt: {
      en: 'Optimise Your Resources Icon',
      fr: 'Icône Optimisez vos ressources'
    },
    title: {
      en: 'Optimise your resources',
      fr: 'Optimisez vos ressources',
    },
    description: {
      en: 'Reduce costs and allocate your time on other matters',
      fr: 'Réduisez les coûts et allouez votre temps à d\'autres questions',
    },
  },
];

export type Benefits = {
  id: number;
  icon: StaticImport;
  iconAlt: {[langCode: string]: string};
  title: {[langCode: string]: string};
  description: {[langCode: string]: string};
}[];

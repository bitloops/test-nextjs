import SaveTimeIcon from '@/components/vector-graphics/SaveTimeIcon.svg';
import ScalabilityIcon from '@/components/vector-graphics/ScalabilityIcon.svg';
import EncryptionWithSafetyIcon from '@/components/vector-graphics/EncryptionWithSafetyIcon.svg';
import VisibilityAndAccountabilityIcon from '@/components/vector-graphics/VisibilityAndAccountabilityIcon.svg';
import CollaborationIcon from '@/components/vector-graphics/CollaborationIcon.svg';
import OptimiseYourResourcesIcon from '@/components/vector-graphics/OptimiseYourResourcesIcon.svg';
import UploadYourStatementsImage from '@/assets/Upload-your-Statements-Image.png';
import AutomaticMatchingOfTransactionsImage from '@/assets/Automatic-Matching-of-Transactions-Image.png';
import FinalizeReconciliationReportImage from '@/assets/Finalize-Reconciliation-Report-Image.png';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export const heroHeader: {[locale: string]: string} = {
  en: 'Automate, Standardize and Control Reconciliation processes in minutes!',
  fr: 'Automatisez, standardisez et contrôlez les processus de réconciliation en quelques minutes!',
};

export const heroSubheader: {[locale: string]: string} = {
  en: 'Save time, ensure accuracy and scalability, and focus on high value-added tasks',
  fr: 'Gagnez du temps, assurez la précision et la scalabilité, et concentrez-vous sur les tâches à forte valeur ajoutée',
};

export const heroPrimaryCta: {[locale: string]: string} = {
  en: 'Sign Up',
  fr: 'Inscrivez-vous',
};

export const heroSecondaryCta: {[locale: string]: string} = {
  en: 'I would like a demo',
  fr: 'Je voudrais une démo',
};

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

export const stepsTitle: {[locale: string]: string} = {
  en: 'Manage all your Reconciliations with a few clicks',
  fr: 'Gérez toutes vos réconciliations en quelques clics',
};

export const howItWorksSteps = [
  {
    id: 1,
    image: UploadYourStatementsImage,
    imageAlt: {
      en: 'Browser window showing how statements are uploaded',
      fr: 'Fenêtre du navigateur montrant comment les relevés sont téléchargés',
    },
    title: {
      en: 'Upload your Statements',
      fr: 'Téléchargez vos Relevés',
    },
    description: {
      en: 'Ledger, Bank, Supplier or Customer Statements - intelligent mapping & quality control',
      fr: 'Ledger, relevés bancaires, fournisseurs ou clients - mappage intelligent et contrôle qualité',
    },
  },
  {
    id: 2,
    image: AutomaticMatchingOfTransactionsImage,
    imageAlt: {
      en: 'Browser window showing how transactions are matched automatically',
      fr: 'Fenêtre du navigateur montrant comment les transactions sont automatiquement assorties',
    },
    title: {
      en: 'Automatic Matching of Transactions',
      fr: 'Rapprochement automatique des transactions',
    },
    description: {
      en: '1 to 1, many to 1 or 1 to many matching performed. Suggestions provided for low confidence matches',
      fr: 'Rapprochement 1 à 1, plusieurs à 1 ou 1 à plusieurs effectué. Des suggestions sont fournies pour les correspondances à faible confiance',
    },
  },
  {
    id: 3,
    image: FinalizeReconciliationReportImage,
    imageAlt: {
      en: 'Browser window showing how to finalize the reconciliation report',
      fr: 'Fenêtre du navigateur montrant comment finaliser le rapport de réconciliation',
    },
    title: {
      en: 'Finalize Reconciliation Report',
      fr: 'Finaliser le rapport de réconciliation',
    },
    description: {
      en: 'Manually reconcile items. Create or edit Ledger Transactions and lock your final reconciliation report',
      fr: 'Réconciliez manuellement les éléments. Créez ou modifiez des transactions de grand livre et verrouillez votre rapport de réconciliation final',
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

export type Steps = {
  id: number;
  image: StaticImport;
  imageAlt: {[langCode: string]: string};
  title: {[langCode: string]: string};
  description: {[langCode: string]: string};
}[];

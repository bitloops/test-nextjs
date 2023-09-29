type NavigationOption = {
  key: string;
  url: string;
};

export const navigationOptions: {[locale: string]: NavigationOption[]} = {
  en: [
    {
      key: 'Features & Benefits',
      url: '#features-and-benefits',
    },
    {
      key: 'How it Works',
      url: '#how-it-works',
    },
    {
      key: 'Request a Demo',
      url: '#contact-us',
    },
    {
      key: 'Contact Us',
      url: '#contact-us',
    },
  ],
  fr: [
    {
      key: 'Fonctionnalités et Avantages',
      url: '#features-and-benefits',
    },
    {
      key: 'Comment ça Marche',
      url: '#how-it-works',
    },
    {
      key: 'Demander une Démo',
      url: '#contact-us',
    },
    {
      key: 'Contact Us',
      url: '#contact-us',
    },
  ], 
};

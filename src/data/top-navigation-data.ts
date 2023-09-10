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
      url: 'mailto: hello@reconcilio.com',
    },
  ],
  fr: [
    {
      key: 'Fonctionnalités et avantages',
      url: '#features-and-benefits',
    },
    {
      key: 'Comment ça marche',
      url: '#how-it-works',
    },
    {
      key: 'Demander une démo',
      url: 'mailto: hello@reconcilio.com',
    },
  ], 
};

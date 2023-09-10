type NavigationOption = {
  key: string;
  url: string;
};

export const footerOptions: {[locale: string]: NavigationOption[]} = {
  en: [
    {
      key: 'hello@reconcilio.com',
      url: 'mailto: hello@reconcilio.com',
    },
    {
      key: 'Privacy Policy',
      url: '/privacy-policy',
    },
    {
      key: 'T&Cs',
      url: '/terms-and-conditions',
    },
  ],
  fr: [
    {
      key: 'hello@reconcilio.com',
      url: 'mailto: hello@reconcilio.com',
    },
    {
      key: 'Politique de confidentialité',
      url: '/privacy-policy',
    },
    {
      key: 'T&Cs',
      url: '/terms-and-conditions',
    },
  ], 
};

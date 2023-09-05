export const pageview = (url: any) => {
  (window as any).dataLayer.push({
    event: 'pageview',
    page: url,
  });
};
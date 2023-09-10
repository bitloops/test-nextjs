// import Head from 'next/head';
// import Script from 'next/script';
import type { AppProps } from 'next/app';
// import TagManager, { TagManagerArgs } from 'react-gtm-module';
import '../styles/globals.css'
import DefaultLayout from '../layouts/default';
// import { useEffect } from 'react';
// import { useRouter } from 'next/router';
// import { pageview } from '../lib/gtm';

function MyApp({ Component, pageProps }: AppProps) {
  // const router = useRouter();
  // const gtmId = process.env.NEXT_PUBLIC_GTM_ID || '';
  // const TagManagerArgs: TagManagerArgs = {
  //   gtmId,
  // };

  // useEffect(() => {
  //   TagManager.initialize(TagManagerArgs);
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  
  // useEffect(() => {
  //   router.events.on('routeChangeComplete', pageview);
  //   return () => {
  //     router.events.off('routeChangeComplete', pageview);
  //   };
  // }, [router.events]);
  
  return (
    <>
      {/* <Script
        src="https://tools.luckyorange.com/core/lo.js?site-id=02cc149c"
        strategy="afterInteractive"
      />
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-4FZTJJ23DY"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
window.dataLayer = window.dataLayer || [];
function gtag(){window.dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-4FZTJJ2XXY');
`}
      </Script> */}
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </>
  );
}

export default MyApp;
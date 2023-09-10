import Head from 'next/head';
import { useRouter } from 'next/router';
import styles from '@/styles/styles.module.css';
import TopNavigation from '@/sections/top-navigation';
import Footer from '@/sections/footer';
import { navigationOptions } from '@/data/top-navigation-data';
import { footerOptions } from '@/data/footer-data';

type DefaultLayoutProps = {
  children: React.ReactNode;
};

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  const locale = useRouter().locale || 'en';
  return (
    <div className={styles.Layout}>
      <Head>
        <title>Reconcilio - Automate, Standardize and Control Reconciliation processes in minutes!</title>
        <meta
          name="description"
          content="Automate, Standardize and Control Reconciliation processes in minutes!
          Save time, ensure accuracy and scalability, and focus on high value-added tasks
          "
        />
        <meta
          property="og:image"
          content="https://storage.googleapis.com/wwwbitloopscom/Bitloops-OG.png"
        />
        <meta property="og:title" content="Bitloops" />
        <meta
          property="og:description"
          content="Automate, Standardize and Control Reconciliation processes in minutes!
          Save time, ensure accuracy and scalability, and focus on high value-added tasks
          "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        {/* <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" /> */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://bitloops.com" />
      </Head>
      <TopNavigation navigationOptions={navigationOptions[locale]} />
      {children}
      <Footer navigationOptions={footerOptions[locale]} />
    </div>
  );
};

export default DefaultLayout;
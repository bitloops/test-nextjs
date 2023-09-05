import Head from 'next/head';

type DefaultLayoutProps = {
  children: React.ReactNode;
};

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <div>
      <Head>
        <title>Next.js Test Output - Replace this</title>
        <meta
          name="description"
          content="High-level language for building enterprise-grade backends 10x faster"
        />
        <meta
          property="og:image"
          content="https://storage.googleapis.com/wwwbitloopscom/Bitloops-OG.png"
        />
        <meta property="og:title" content="Bitloops" />
        <meta
          property="og:description"
          content="High-level language for building enterprise-grade backends 10x faster"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://bitloops.com" />
      </Head>
      {children}
      {/* <footer className={styles.footer}>
        Copyright © 2022. All rights reserved by Bitloops Ltd.
      </footer> */}
    </div>
  );
};

export default DefaultLayout;
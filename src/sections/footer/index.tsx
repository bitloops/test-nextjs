import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from './styles.module.css';
import ReconcilioLogo from '@/components/vector-graphics/ReconcilioLogo.svg';
import Link from 'next/link';

interface FooterProps {
  navigationOptions: {
    key: string;
    url: string;
  }[];
}

export default function Footer(props: FooterProps) {  
  const locale = useRouter().locale || 'en';
  const { navigationOptions } = props;
  return (
    <div className={styles.Footer}>
      <div className={styles.Footer__HorizontalContainer}>
        <div className={styles.Footer__ReconcilioLogo}>
          <Image src={ReconcilioLogo} alt="Reconcilio" />
        </div>
        <div className={styles.Footer__HorizontalContainer__HorizontalContainer}>
          {navigationOptions.map((navigationOption) => (
            <div key={navigationOption.key}>
              <Link href={navigationOption.url}>{navigationOption.key}</Link>
            </div> 
          ))}
        </div>
      </div>
      <div className={styles.Footer__Copyright}>
      Copyright Reconcilio Ltd 2023
      </div>
    </div>
  );
}
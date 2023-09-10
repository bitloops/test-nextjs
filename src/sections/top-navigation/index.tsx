import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from './styles.module.css';
import ReconcilioLogo from '@/components/vector-graphics/ReconcilioLogo.svg';
import DrawerButton from '@/components/vector-graphics/DrawerButton.svg';
import Button from '@/components/button';
import Link from 'next/link';

interface TopNavigationProps {
  navigationOptions: {
    key: string;
    url: string;
  }[];
}

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  event.preventDefault();
    
    const hash = (event.currentTarget.getAttribute('href') || '').split('#')[1];
    if (hash) {
        const target = document.getElementById(hash);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }
}

export default function TopNavigation(props: TopNavigationProps) {  
  const locale = useRouter().locale || 'en';
  const { navigationOptions } = props;
  return (
    <>
    {/* <div className={styles.TopNavigationDrawerButton}><Image src={DrawerButton} alt='Drawer Button' /></div> */}
      <div className={styles.TopNavigationContainer}>
        <div className={styles.TopNavigation}>
          <div className={styles.ReconcilioLogo}>
            <Image src={ReconcilioLogo} alt="Reconcilio Logo" />
          </div>
          <div className={styles.TopNavigation__HorizontalContainer}>
              {navigationOptions.map((navigationOption) => (
                <div key={navigationOption.key}>
                  <Link href={navigationOption.url} onClick={handleClick}>{navigationOption.key}</Link>
                </div> 
              ))}
              <Button value='Sign Up' onClickAction={() => { window.location.href = 'https://reconcilio.web.app/register';  }}/>
          </div>
        </div>
      </div>
    </>
  );
}
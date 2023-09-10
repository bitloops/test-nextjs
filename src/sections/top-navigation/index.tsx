import { useState } from 'react';
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

function handleClick(setIsOpen: (isOpen: boolean) => void, event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  event.preventDefault();
  setIsOpen(false);    
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
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.TopNavigationContainer}>
      <div className={`${styles.TopNavigation__Backdrop} ${isOpen ? styles.show : ''}`} onClick={() => setIsOpen(false)}>
        <div className={styles.TopNavigation__SideNavigation}>
          {isOpen && <nav key='Home'>
              <Link href='/' onClick={(e) => handleClick(setIsOpen, e)}>Home</Link>
            </nav> }
          {isOpen && navigationOptions.map((navigationOption) => (
            <nav key={navigationOption.key}>
              <Link href={navigationOption.url} onClick={(e) => handleClick(setIsOpen, e)}>{navigationOption.key}</Link>
            </nav> 
          ))}
          {isOpen && <Button value='Sign Up' onClickAction={() => { window.location.href = 'https://reconcilio.web.app/register';  }}/>}
        </div>
      </div>
      <div className={styles.TopNavigation__HorizontalContainer}>
        <div className={styles.TopNavigation__Mobile}>
          <button className={styles.TopNavigation__Hamburger} onClick={() => setIsOpen(!isOpen)}>☰</button>
          <div className={styles.TopNavigation__ReconcilioLogoMobile}>
            <Image src={ReconcilioLogo} alt="Reconcilio Logo" />
          </div>
          <div className={styles.TopNavigation__Dummy} />
        </div>
        <div className={styles.TopNavigation}>
          <div className={styles.ReconcilioLogo}>
            <Image src={ReconcilioLogo} alt="Reconcilio Logo" />
          </div>
          <div className={styles.TopNavigation__HorizontalContainer__HorizontalContainer}>
            {navigationOptions.map((navigationOption) => (
              <nav key={navigationOption.key}>
                <Link href={navigationOption.url} onClick={(e) => handleClick(setIsOpen, e)}>{navigationOption.key}</Link>
              </nav> 
            ))}
            <Button value='Sign Up' onClickAction={() => { window.location.href = 'https://reconcilio.web.app/register';  }}/>
          </div>
        </div>
      </div>
    </div>
  );
}
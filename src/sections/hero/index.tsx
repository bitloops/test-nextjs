import { useRouter } from 'next/router';
import Image from 'next/image';
// import HeroBackgroundPolygon from '@/components/vector-graphics/HeroBackgroundPolygon.svg';
import HeroImage from '@/assets/Hero-Image.png';
import styles from './styles.module.css';
import Button from '@/components/button';

interface HeroSectionProps {
  header: string;
  subheader: string;
  primaryCta: string;
  secondaryCta: string;
}

export default function HeroSection(props: HeroSectionProps) {  
  const locale = useRouter().locale || 'en';
  const { header, subheader, primaryCta, secondaryCta } = props;
  return (
    <div id='hero' className={styles.HeroSection}>
      {/* <div className={styles.HeroSection__HeroBackgroundPolygon}><Image className={styles.HeroSection__HeroBackgroundPolygon} src={HeroBackgroundPolygon} alt="Hero Background Polygon" /></div> */}
      <div className={styles.HeroSection__HorizontalContainer}>
        <div className={styles.HeroSection__HorizontalContainer__VerticalContainer}>
          <div className={styles.HeroSection__HorizontalContainer__VerticalContainer__VerticalContainer}>
            <h1>{header}</h1>
            <h2>{subheader}</h2>
          </div>
          <div className={styles.HeroSection__HorizontalContainer__VerticalContainer__HorizontalContainer}>
            <Button value={primaryCta} onClickAction={() => { window.location.href = 'https://reconcilio.web.app/register';  }} />
            <Button type='Secondary' value={secondaryCta} onClickAction={() => { window.open('mailto: hello@reconcilio.com', '_blank'); }} />
          </div>
        </div>
        <div className={styles.HeroSection__HorizontalContainer__HeroImageContainer} />
      </div>
    </div>
  );
}
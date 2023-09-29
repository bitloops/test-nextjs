import Image from 'next/image';
import styles from './styles.module.css';
import Button from '@/components/button';
import HeroImage from '@/assets/Hero-Image.png';
import HeroBackgroundPolygon from '@/components/vector-graphics/HeroBackgroundPolygon.svg';

interface HeroSectionProps {
  header: string;
  subheader: string;
  primaryCta: string;
  secondaryCta: string;
}

export default function HeroSection(props: HeroSectionProps) {  
  const { header, subheader, primaryCta, secondaryCta } = props;
  return (
    <div id='hero' className={styles.HeroSection}>
      <div className={styles.HeroSection__HorizontalContainer}>
        <div className={styles.HeroSection__HorizontalContainer__VerticalContainer}>
          <div className={styles.HeroSection__HorizontalContainer__VerticalContainer__VerticalContainer}>
            <h1>{header}</h1>
            <h2>{subheader}</h2>
          </div>
          <div className={styles.HeroSection__HorizontalContainer__VerticalContainer__HorizontalContainer}>
            <Button isActive value={primaryCta} onClickAction={() => { window.location.href = '/#contact-us';  }} />
            <Button isActive type='Secondary' value={secondaryCta} onClickAction={() => { window.location.href = '/#contact-us'; }} />
          </div>
        </div>
        <Image
          className={styles.HeroSection__HorizontalContainer__HeroImageContainer} 
          src={HeroImage}
          alt=''
          width={504.773} height={471.188} layout="responsive"
        /> 
      </div>
      <Image
        className={styles.HeroSection__HeroBackgroundPolygon}
        src={HeroBackgroundPolygon}
        alt=''
      /> 
    </div>
  );
}
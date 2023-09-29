import { useState } from 'react';
import styles from './styles.module.css';
import Link from 'next/link';

type HyperLink = {
  text: string;
  href: string;
};

interface CheckboxLabelProps1 {
  text1: string;
}

interface CheckboxLabelProps2 {
  text1: string;
  link1: HyperLink;
  text2: string;
  link2: HyperLink;
  text3: string;
}

export default function CheckboxLabel(props: CheckboxLabelProps1 | CheckboxLabelProps2) {
 const p2 = props as CheckboxLabelProps2;
 const p1 = props as CheckboxLabelProps1;

  if (p2.link1 && p2.link2 && p2.text2 && p2.link2 && p2.text3 !== undefined) {
    return (
      <div className={styles.CheckboxLabel}>
        {p2.text1}{' '}<Link href={p2.link1.href}>{p2.link1.text}</Link>{' '}{p2.text2}{' '}<Link href={p2.link2.href}>{p2.link2.text}</Link>{' '}{p2.text3}
      </div>
    );
  } else {
    return (
      <div className={styles.CheckboxLabel}>
        {p1.text1}
      </div>
    );
  }

}
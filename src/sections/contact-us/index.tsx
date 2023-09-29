import { useRouter } from 'next/router';
import styles from './styles.module.css';
import InputField from '@/components/input-field';
import { useEffect, useState } from 'react';
import Checkbox from '@/components/checkbox';
import Button from '@/components/button';
import CheckboxLabel from '@/components/checkbox-label';
import Dropdown from '@/components/dropdown';
import countries from '@/data/countries';
import TextArea from '@/components/text-area';

interface ContactUsSectionProps {
  title: string;
  tagline: string;
  formLabels: {[key: string]: {[locale: string]: string}};
}

export default function ContactUsSection(props: ContactUsSectionProps) {  
  const locale = useRouter().locale || 'en';
  const { title, tagline, formLabels } = props;

  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [company, setCompany] = useState('');
  const [country, setCountry] = useState('');
  const [comments, setComments] = useState('');

  const [policyAgree, setPolicyAgree] = useState<1 | undefined>(undefined);
  const [marketingAgree, setMarketingAgree] = useState<1 | undefined>(undefined);

  const [isSendActive, setIsSendActive] = useState(false);

  const sendEmail = () => {
    const API = 'https://europe-west1-bitloops-managed.cloudfunctions.net/send-email';
    const APP_KEY = '8f6b1988-d533-44bd-9e33-1bc2fffe7ac1';
    const emailSubject = 'Reconcilio - Contact Us Form Submitted';
    const senderName = `${firstName} ${lastName}`;
    const senderEmail = email;
    const data = encodeURI(`email=${email}&firstName=${firstName}&lastName=${lastName}&jobTitle=${jobTitle}&company=${company}&country=${country}&comments=${comments}`);
    const htmlContent = `<html>
    <div>
      <h1>Contact Us Form</h1>
      <table>
        <tr>
          <td>First Name</td>
          <td>${firstName}</td>
        </tr>
        <tr>
          <td>Last Name</td>
          <td>${lastName}</td>
        </tr>
        <tr>
          <td>Email</td>
          <td>${email}</td>
        </tr>
        <tr>
          <td>Job Title</td>
          <td>${jobTitle}</td>
        </tr>
        <tr>
          <td>Company</td>
          <td>${company}</td>
        </tr>
        <tr>
          <td>Country</td>
          <td>${country}</td>
        </tr>
        <tr>
          <td>Comments</td>
          <td>${comments}</td>
        </tr>
        <tr>
          <td>Data</td>
          <td><a href="https://app.reconcilio.com/register?${data}">Registration Link</a></td>
        </tr>
      </table>
    </div>
    </html>`;
    const body = {
      recipientEmail: senderEmail,
      emailSubject,
      senderName,
      senderEmail,
      htmlContent,
    };
    fetch(API, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
        'App_key': APP_KEY,
      },
    });
  }

  const clearForm = () => {
    setEmail('');
    setFirstName('');
    setLastName('');
    setJobTitle('');
    setCompany('');
    setCountry('');
    setComments('');
    setPolicyAgree(undefined);
    setMarketingAgree(undefined);
  }

  useEffect(() => {
    const shouldBeActive = !!firstName && !!lastName && !!email && !!jobTitle && !!company && !!country;
    setIsSendActive(shouldBeActive);
  }, [firstName, lastName, email, jobTitle, company, country]);

  const handleSend = () => {
    if (isSendActive) {
      sendEmail();
      clearForm();
      alert('Message sent!');
    }
  };

  return (
    <div id='contact-us' className={styles.ContactUsSection}>
      <h2>{title}</h2>
      <h3>{tagline}</h3>
      <form className={styles.ContactUsSection__Form}>
      <InputField label={formLabels.email[locale]} full value={email} tabIndex={1} action={setEmail} type='email' />
        <div className={styles.ContactUsSection__Form__HorizontalContainer}>
          <InputField label={formLabels.firstName[locale]} value={firstName} tabIndex={2} action={setFirstName} type='text' />
          <InputField label={formLabels.lastName[locale]} value={lastName} tabIndex={3} action={setLastName} type='text' />
        </div>
        <div className={styles.ContactUsSection__Form__HorizontalContainer}>
          <InputField label={formLabels.jobTitle[locale]} value={jobTitle} tabIndex={4} action={setJobTitle} type='text' />
          <InputField label={formLabels.company[locale]} value={company} tabIndex={5} action={setCompany} type='text' />
        </div>
        <Dropdown label={formLabels.country[locale]} value={country} options={countries} tabIndex={6} onSelect={setCountry}/>
        <TextArea label={formLabels.comments[locale]} full value={comments} tabIndex={7} action={setComments} />
        {/* <Checkbox checkboxlabel={
          <CheckboxLabel
            text1={formLabels.policyAgree__text1[locale]}
            link1={{text: formLabels.policyAgree__link1__text[locale], href: formLabels.policyAgree__link1__href[locale]}}
            text2={formLabels.policyAgree__text2[locale]}
            link2={{text: formLabels.policyAgree__link2__text[locale], href: formLabels.policyAgree__link2__href[locale]}}
            text3={formLabels.policyAgree__text3[locale]}
          />}
          value={policyAgree}
          action={setPolicyAgree}
        /> */}
        {/* <Checkbox checkboxlabel={<CheckboxLabel text1={formLabels.marketingAgree__text1[locale]} />} value={marketingAgree} action={setMarketingAgree} /> */}
        <Button value={formLabels.send[locale]} type='Default' isActive={isSendActive} tabIndex={8} onClickAction={handleSend} />
      </form>
    </div>
  );
}
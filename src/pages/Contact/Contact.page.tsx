//#region IMPORT
import { TitlePage } from '../../components';
import { ContactForm, ContactInfo } from './components';
import styles from './Contact.page.module.scss';
//#endregion

//#region MAIN
export const Contact: React.FC = () => {
  return (
    <div className={styles.container}>
      <TitlePage text="Get In Touch" />
      <div className={styles.content}>
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
};
//#endregion

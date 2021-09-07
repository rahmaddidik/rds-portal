//#region IMPORT
import { Button } from '../../../../components';
import styles from './ContactForm.component.module.scss';
//#endregion

//#region MAIN
export const ContactForm: React.FC = () => {
  return (
    <div
      data-aos="fade-left"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration={1000}
      className={styles.container}
    >
      <div className={styles.half}>
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          className={styles.inputText}
          autoComplete="off"
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          className={styles.inputText}
          autoComplete="off"
        />
      </div>
      <input
        name="subject"
        type="text"
        placeholder="Subject"
        className={styles.inputText}
        autoComplete="off"
      />
      <textarea
        name="message"
        rows={5}
        className={styles.inputTextarea}
        placeholder="Messages..."
        autoComplete="off"
      ></textarea>
      <Button className={styles.action} text="Send Message" />
    </div>
  );
};
//#endregion

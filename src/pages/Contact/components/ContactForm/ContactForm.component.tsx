//#region IMPORT
import { useState } from 'react';
import { Button } from '../../../../components';
import styles from './ContactForm.component.module.scss';
//#endregion

//#region MAIN
export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const generateWhatsAppLink = () => {
    const { name, email, subject, message } = formData;
    const text = `Name: ${name}%0AEmail: ${email}%0ASubject: ${subject}%0AMessage: ${message}`;

    // Replace '1234567890' with the recipient's WhatsApp number
    const whatsappURL = `https://wa.me/82136116811/?text=${text}`;

    window.open(whatsappURL);
  };

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
          onChange={handleChange}
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          className={styles.inputText}
          autoComplete="off"
          onChange={handleChange}
        />
      </div>
      <input
        name="subject"
        type="text"
        placeholder="Subject"
        className={styles.inputText}
        autoComplete="off"
        onChange={handleChange}
      />
      <textarea
        name="message"
        rows={5}
        className={styles.inputTextarea}
        placeholder="Messages..."
        autoComplete="off"
        onChange={handleChange}
      ></textarea>
      <Button
        className={styles.action}
        text="Send Message"
        onClick={generateWhatsAppLink}
      />
    </div>
  );
};
//#endregion

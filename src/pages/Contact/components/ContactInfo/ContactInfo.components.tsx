//#region IMPORT
import { IconMaps } from '../../../../assets/icons';
import styles from './ContactInfo.component.module.scss';
import { externalLink } from '../../../../utils';
import { PATH } from '../../../../constants';
//#endregion

//#region MAIN
export const ContactInfo: React.FC = () => {
  return (
    <div className={styles.container}>
      <div
        data-aos="fade-down"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration={1000}
        data-aos-delay={100}
        className={styles.title}
      >
        Let's talk about everything!
      </div>
      <div
        data-aos="fade-down"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration={1000}
        className={styles.description}
        >
        Don't like form? Send me an{' '}
        <span onClick={() => externalLink(PATH.EMAIL)}>email.</span>
      </div>
      <div
        data-aos="fade-right"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration={1000}
        className={styles.maps}
      >
        <IconMaps />
      </div>
    </div>
  );
};
//#endregion

//#region IMPORT
import {
  IoLogoDribbble,
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoYoutube,
} from 'react-icons/io5';
import Image from 'next/image';
import { Button } from '..';
import Typist from 'react-text-typist';
import styles from './Profile.component.module.scss';
import { externalLink } from '../../utils';
import { PATH } from '../../constants';
//#endregion

//#region INTERFACE
export interface Props {
  isSimple?: boolean;
}
//#endregion

//#region MAIN
export const Profile: React.FC<Props> = ({ isSimple }: Props) => {
  return (
    <div className={isSimple ? styles.containerSimple : styles.container}>
      <div
        data-aos="fade-down"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration={2000}
        className={styles.avatar}
      >
        <Image src="/avatar.png" alt="" layout="fill" />
      </div>
      {!isSimple && (
        <>
          <div className={styles.content}>
            <h1
              data-aos="fade-down"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration={1500}
            >
              Rahmad Didik
            </h1>
            <h3
              data-aos="fade-down"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration={1000}
            >
              I'am{' '}
              <Typist
                className={styles.stack}
                sentences={[
                  'UX Engineer',
                  'UI Designer',
                  'Creative Multimedia',
                ]}
                typingSpeed={100}
                deletingSpeed={50}
              />
            </h3>
            <div
              data-aos="fade-in"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration={1000}
              data-aos-delay={500}
              className={styles.media}
            >
              <div
                className={styles.mediaItem}
                onClick={() => externalLink(PATH.GITHUB)}
              >
                <IoLogoGithub />
              </div>
              <div
                className={styles.mediaItem}
                onClick={() => externalLink(PATH.DRIBBBLE)}
              >
                <IoLogoDribbble />
              </div>
              <div
                className={styles.mediaItem}
                onClick={() => externalLink(PATH.LINKED_IN)}
              >
                <IoLogoLinkedin />
              </div>
              <div
                className={styles.mediaItem}
                onClick={() => externalLink(PATH.YOUTUBE)}
              >
                <IoLogoYoutube />
              </div>
            </div>
          </div>
          <div
            data-aos="fade-in"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration={2000}
            data-aos-delay={500}
            className={styles.action}
          >
            <Button text="Hire Me" to="/contact" />
          </div>
        </>
      )}
    </div>
  );
};
//#endregion

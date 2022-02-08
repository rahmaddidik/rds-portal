//#region IMPORT
import {
  IconCSS3,
  IconFigma,
  IconFlutter,
  IconGulp,
  IconHTML5,
  IconJS,
  IconReact,
  IconSketch,
  IconWebpack,
} from '../../../../assets/icons';
import { Button, Profile } from '../../../../components';
import styles from './Stack.section.module.scss';
//#endregion

//#region MAIN
export const Stack: React.FC = () => {
  return (
    <div className={styles.container}>
      <Profile isSimple />
      <div
        data-aos="fade-left"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration={1000}
        className={styles.content}
      >
        <div className={styles.info}>
          <p>
            Hi, i’m a ux engineer from indonesia. I graduated from yogyakarta
            amikom university.
          </p>
          <p>
            My experience in the field of ui / ux designer and frontend
            developer about 5 more years and have worked in the developer
            company in yogyakarta. I have many projects that I do such as from
            the company profile, support big company product until government
            projects.
          </p>
          <a className={styles.button} download href="cv_rahmad_didik.pdf">
            Download CV
          </a>
        </div>
        <div
          data-aos="fade-left"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration={1000}
          className={styles.stack}
        >
          <IconHTML5 />
          <IconCSS3 />
          <IconJS />
          <IconReact />
          <IconFlutter />
          <IconGulp />
          <IconFigma />
          <IconSketch />
          <IconWebpack />
        </div>
      </div>
    </div>
  );
};
//#endregion

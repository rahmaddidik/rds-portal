//#region IMPORT
import {
  IconUIDesign,
  IconUxEngineer,
  IconVideoEditing,
} from '../../../../assets/icons';
import { SkillCard } from '../../components';
import styles from './Service.section.module.scss';
//#endregion

//#region MAIN
export const Service: React.FC = () => {
  return (
    <div className={styles.container}>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration={1000}
      >
        <SkillCard
          icon={<IconUIDesign />}
          title="UI Design"
          description="Designing mockup for website and mobile app with sketch or figma"
        />
      </div>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration={1000}
        data-aos-delay={100}
      >
        <SkillCard
          icon={<IconUxEngineer />}
          title="UX Engineer"
          description="Use Html, Css, Js, some framework and Gulp, Webpack for manage assets"
        />
      </div>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration={1000}
        data-aos-delay={200}
      >
        <SkillCard
          icon={<IconVideoEditing />}
          title="Video Editing"
          description="With After Effect and Premiere Pro, make beautiful video or animation"
        />
      </div>
    </div>
  );
};
//#endregion

//#region IMPORT
import {
  IoCodeSlashOutline,
  IoImages,
  IoPeople,
  IoRibbon,
} from 'react-icons/io5';
import styles from './TotalProject.section.module.scss';
import { CounterCard } from '../../components';
//#endregion

//#region MAIN
export const TotalProject: React.FC = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration={750}
      className={styles.container}
    >
      <CounterCard
        icon={<IoCodeSlashOutline />}
        value={25}
        text="Code Projects Completed"
        isMore
      />
      <CounterCard
        icon={<IoImages />}
        value={20}
        text="UI Projects Completed"
        isMore
      />
      <CounterCard
        icon={<IoPeople />}
        value={35}
        text="Satified Clients"
        isMore
      />
      <CounterCard icon={<IoRibbon />} value={6} text="Nominated & Award" />
    </div>
  );
};
//#endregion

//#region IMPORT
import { TitlePage } from '../../components';
import styles from './AboutMe.page.module.scss';
import { Stack, TotalProject } from './sections';
//#endregion

//#region MAIN
export const AboutMe: React.FC = () => {
  return (
    <div className={styles.container}>
      <TitlePage text="About Me" />
      <Stack />
      <TotalProject />
    </div>
  );
};
//#endregion

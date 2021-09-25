//#region IMPORT
import { TitlePage } from '../../components';
import styles from './Work.page.module.scss';
//#endregion

//#region MAIN
export const Work: React.FC = () => {
  return (
    <div className={styles.container}>
      <TitlePage text="Recent Works" />
      <div>Test</div>
    </div>
  );
};
//#endregion

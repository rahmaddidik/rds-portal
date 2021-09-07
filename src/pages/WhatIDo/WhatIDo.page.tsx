//#region IMPORT
import { TitlePage } from '../../components';
import { LookJob, Service } from './sections';
import styles from './WhatIDo.page.module.scss';
//#endregion

//#region MAIN
export const WhatIDo: React.FC = () => {
  return (
    <div className={styles.container}>
      <TitlePage text="What I Do?" />
      <Service />
      <LookJob />
    </div>
  );
};
//#endregion

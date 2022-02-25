//#region IMPORT
import { useState } from 'react';
import { TitlePage } from '../../components';
import { WorkItem, WorkTab } from './components';
import { TabItem } from './constants';
import recent_works from './entity/recent_works.json';
import styles from './Work.page.module.scss';
//#endregion

//#region MAIN
export const Work: React.FC = () => {
  const [active, setActive] = useState(TabItem.UID);

  return (
    <div className={styles.container}>
      <TitlePage text="Recent Works" />
      <WorkTab activeMenu={active} onClick={(value) => setActive(value)} />
      <div className={styles.tabContent}>
        {active === TabItem.UID && (
          <>
            {recent_works
              .filter((v) => v.type === 'UID')
              .map((item, index) => (
                <WorkItem
                  key={`uid-item-${index}`}
                  type={TabItem.UID}
                  src={item.image_url}
                  title={item.title}
                  link={item.link_url}
                />
              ))}
          </>
        )}
        {active === TabItem.UXE && (
          <>
            {recent_works
              .filter((v) => v.type === 'UXE')
              .map((item, index) => (
                <WorkItem
                  key={`uxe-item-${index}`}
                  type={TabItem.UXE}
                  src={item.image_url}
                  title={item.title}
                  link={item.link_url}
                />
              ))}
          </>
        )}
        {active === TabItem.VIDEO && (
          <>
            {recent_works
              .filter((v) => v.type === 'VIDEO')
              .map((item, index) => (
                <WorkItem
                  key={`video-item-${index}`}
                  type={TabItem.VIDEO}
                  src={item.image_url}
                  title={item.title}
                  link={item.link_url}
                />
              ))}
          </>
        )}
      </div>
    </div>
  );
};
//#endregion

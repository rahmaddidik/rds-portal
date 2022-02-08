//#region IMPORT
import { useState } from 'react';
import { TitlePage } from '../../components';
import { WorkItem, WorkTab } from './components';
import { TabItem } from './constants';
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
            <WorkItem
              type={TabItem.UID}
              src="/recent_works/jawilen.jpg"
              title="Tour Guide App"
            />
            <WorkItem
              type={TabItem.UID}
              src="/recent_works/theking.jpg"
              title="e Course Promo"
            />
            <WorkItem
              type={TabItem.UID}
              src="/recent_works/portfolio.jpg"
              title="Portfolio"
            />
            <WorkItem
              type={TabItem.UID}
              src="/recent_works/jenius_app.jpg"
              title="Jenius App"
            />
            <WorkItem
              type={TabItem.UID}
              src="/recent_works/rskia_sadewa.jpg"
              title="RSKIA Sadewa"
            />
            <WorkItem
              type={TabItem.UID}
              src="/recent_works/restaurant.jpg"
              title="Restaurant Portal"
            />
          </>
        )}
        {active === TabItem.UXE && (
          <>
            <WorkItem
              type={TabItem.UXE}
              src="/recent_works/portfolio.jpg"
              title="Portfolio"
            />
          </>
        )}
        {active === TabItem.VIDEO && (
          <>
            <WorkItem
              type={TabItem.VIDEO}
              src="/recent_works/eastparc.jpg"
              title="Staycation at Eastparc"
            />
            <WorkItem
              type={TabItem.VIDEO}
              src="/recent_works/wedding_invitation.jpg"
              title="Wedding Invitation"
            />
            <WorkItem
              type={TabItem.VIDEO}
              src="/recent_works/rumta.jpg"
              title="Promotion App"
            />
            <WorkItem
              type={TabItem.VIDEO}
              src="/recent_works/opening_meigivaa.jpg"
              title="Youtube Opener"
            />
            <WorkItem
              type={TabItem.VIDEO}
              src="/recent_works/promo_app.jpg"
              title="Promotion App"
            />
            <WorkItem
              type={TabItem.VIDEO}
              src="/recent_works/londrio.jpg"
              title="Laundry App"
            />
          </>
        )}
      </div>
    </div>
  );
};
//#endregion

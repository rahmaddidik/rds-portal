//#region IMPORT
import { IconScroll } from '../../assets/icons';
import { Profile } from '../../components';
import { Background, Wavify } from './components';
import Link from 'next/link';
import styles from './Home.page.module.scss';
//#endregion

//#region MAIN
export const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Profile />
      <Link href="/about">
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration={1000}
          className={styles.scroll}
        >
          <IconScroll />
          <span>See More</span>
        </div>
      </Link>
      <Background />
      <Wavify />
    </div>
  );
};
//#endregion

//#region IMPORT
import styles from './LookJob.section.module.scss';
import Link from 'next/link';
//#endregion
//#region MAIN
export const LookJob: React.FC = () => {
  return (
    <div
      data-aos="fade-in"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration={1000}
      data-aos-delay={250}
      className={styles.container}
    >
      Looking for a custom job?
      <Link href="/contact">
        <span> Click here </span>
      </Link>
      to contact me! 👋
    </div>
  );
};
//#endregion

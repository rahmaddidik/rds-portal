// #region IMPORT
import React from 'react';
import styles from './SideBar.component.module.scss';
import {
  IoHome,
  IoPerson,
  IoBriefcase,
  IoLayers,
  IoChatbubble,
} from 'react-icons/io5';
import { LogoInvert } from '../../assets/icons';
import { useRouter } from 'next/router';
import Link from 'next/link';

// #endregion

// #region MAIN
export const SideBar: React.FC = () => {
  const router = useRouter();
  return (
    <div
      data-aos="fade-right"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="1000"
      className={styles.container}
    >
      <div
        data-aos="fade-down"
        data-aos-anchor-placement="top-bottom"
        data-aos-delay="400"
        className={styles.logo}
      >
        <LogoInvert />
      </div>
      <div
        data-aos="fade-down"
        data-aos-anchor-placement="top-bottom"
        data-aos-delay="500"
        className={styles.menu}
      >
        <Link href="/">
          <div
            className={
              router.asPath === '/' ? styles.menuItemActive : styles.menuItem
            }
          >
            <IoHome title="Home" />
          </div>
        </Link>
        <Link href="/about">
          <div
            className={
              router.asPath === '/about'
                ? styles.menuItemActive
                : styles.menuItem
            }
          >
            <IoPerson title="About Me" />
          </div>
        </Link>
        <Link href="/stack">
          <div
            className={
              router.asPath === '/stack'
                ? styles.menuItemActive
                : styles.menuItem
            }
          >
            <IoBriefcase title="What I Do?" />
          </div>
        </Link>
        <Link href="/work">
          <div
            className={
              router.asPath === '/work'
                ? styles.menuItemActive
                : styles.menuItem
            }
          >
            <IoLayers title="Recent Works" />
          </div>
        </Link>
        <Link href="/contact">
          <div
            className={
              router.asPath === '/contact'
                ? styles.menuItemActive
                : styles.menuItem
            }
          >
            <IoChatbubble title="Get In Touch!" />
          </div>
        </Link>
      </div>
      <div className={styles.copyright}>&copy; 2021 Rahmad Didik</div>
    </div>
  );
};
// #endregion

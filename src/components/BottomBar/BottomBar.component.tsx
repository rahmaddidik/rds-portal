// #region IMPORT
import React from 'react';
import styles from './BottomBar.component.module.scss';
import {
  IoHome,
  IoPerson,
  IoBriefcase,
  IoLayers,
  IoChatbubble,
} from 'react-icons/io5';
import { useRouter } from 'next/router';
import Link from 'next/link';

// #endregion

// #region MAIN
export const BottomBar: React.FC = () => {
  const router = useRouter();
  return (
    <div
      data-aos="slide-up"
      data-aos-anchor-placement="top-bottom"
      className={styles.container}
    >
      <Link href="/">
        <div
          className={
            router.asPath === '/' ? styles.menuItemActive : styles.menuItem
          }
        >
          <IoHome title="Home" />
          <small>Home</small>
        </div>
      </Link>
      <Link href="/about">
        <div
          className={
            router.asPath === '/about' ? styles.menuItemActive : styles.menuItem
          }
        >
          <IoPerson title="About Me" />
          <small>About</small>
        </div>
      </Link>
      <Link href="/stack">
        <div
          className={
            router.asPath === '/stack' ? styles.menuItemActive : styles.menuItem
          }
        >
          <IoBriefcase title="What I Do?" />
          <small>What I Do</small>
        </div>
      </Link>
      <Link href="/work">
        <div
          className={
            router.asPath === '/work' ? styles.menuItemActive : styles.menuItem
          }
        >
          <IoLayers title="Recent Works" />
          <small>Work</small>
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
          <IoChatbubble title="Contact" />
          <small>Contact</small>
        </div>
      </Link>
    </div>
  );
};
// #endregion

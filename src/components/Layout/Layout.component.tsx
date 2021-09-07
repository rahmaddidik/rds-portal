import React, { useEffect, useState } from 'react';
import { BottomBar, SideBar } from '..';
import AOS from 'aos';
import styles from './Layout.component.module.scss';
import { useWindowSize } from '../../utils';

export const Layout: React.FC = ({ children }) => {
  const size = useWindowSize();
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
    size.width < 768 ? setIsMobile(true) : setIsMobile(false);
  });
  return (
    <>
      {isMobile ? <BottomBar /> : <SideBar />}
      <main className={isMobile ? styles.containerMobile : styles.container}>
        {children}
      </main>
    </>
  );
};

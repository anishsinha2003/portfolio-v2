"use client"
import React, { useEffect } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import { useDarkMode } from "./contexts/DarkModeContext";
import styles from '@/styles/mainLayout.module.css';
import { useCurrentPageContext } from './contexts/CurrentPageContext';
import { usePathname } from 'next/navigation';

interface LayoutProps {
  children: React.ReactNode;
}

const Main: React.FC<LayoutProps> = ({ children }) => {
  const pathname = usePathname();
  const {setPage} = useCurrentPageContext();

  useEffect(() => {
    if (pathname === "/") {
      setPage("/aboutMe")
    } else {
      setPage(pathname)
    }
  }, [pathname]);

  const { isDarkMode } = useDarkMode();
  return (
    <div className={styles.main} style={{backgroundColor: isDarkMode ? "" : "white", backgroundImage : isDarkMode ? "" : "url('/backgrounds/lightModeBg.png'"}}>
      <div className={styles.navbarContainer}>
        <NavBar />
      </div>
      <div className={styles.childrenContainer}>
        {children}
      </div>
      <div className={styles.footerContainer}>
        <Footer />
      </div>
    </div>
  );
};

export default Main;

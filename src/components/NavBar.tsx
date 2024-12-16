"use client"
import React, { ReactNode, useEffect, useState } from "react"; // Import ReactNode to type the children prop
import Image from "next/image";
import styles from "@/styles/navBar.module.css";
import Link from "next/link";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { styled } from '@mui/material/styles';
import { usePathname, useRouter } from "next/navigation";
import { useStringContext } from './StringContext';
import { useCurrentPageContext } from "./CurrentPageContext";
import PhoneIcon from '@mui/icons-material/Phone';

import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import MenuIcon from '@mui/icons-material/Menu';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Button, IconButton } from "@mui/material";
import { useWindowWidth } from "./WindowWidthContext";
import { useDarkMode } from "./DarkModeContext";



const NavBar = () => {
  const {prevPage, setPrevPage} = useStringContext();
  const {page, setPage} = useCurrentPageContext();
  const router = useRouter()

  const {isDarkMode} = useDarkMode()

  const tabs = [
    {
      index: 0,
      label: "ABOUT ME",
      path: "/aboutMe"

    },
    {
      index: 1,
      label: "EDUCATION",
      path: "/education"
    },
    {
      index: 2,
      label: "PROJECTS",
      path: "/projects"
    },
    {
      index: 3,
      label: "EXPERIENCE",
      path: "/experience"
    }
  ]
  const pathname = usePathname();

  // menu logic
  const windowWidth = useWindowWidth();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangeMenu = (event: any) => {
    const selectedMenu = event.target.textContent;
    let path = ""
    setPrevPage(pathname)

    switch (selectedMenu) {
      case "About Me":
        path = "/aboutMe"
        break;

      case "Education":
        path = "/education"
        break;

      case "Projects":
        path = "/projects"
        break;

      case "Experience":
        path = "/experience"
        break;

      default:
        path = ""
    }

    if (path === "") {
      return;
    }
    setPage(path)
    setTimeout(() => {
      router.push(path);
    }, 200);
    setAnchorEl(null);
  };

  // tabs logic
  const [value, setValue] = useState(0);

  useEffect(() => {
    const index = tabs.find(tab => tab.path === pathname)?.index;
    if (index === undefined) {
      return;
    }
    setValue(index);

  }, [pathname])

  const handleChange = (event: React.SyntheticEvent, newValue: any) => {
    const path = tabs.find(tab => tab.index === newValue)?.path;
    if (path === undefined) {
      return;
    }
    setPrevPage(pathname)
    setValue(newValue);
    setPage(path)
    setTimeout(() => {
      router.push(path);
    }, 200);
  };



  interface StyledTabProps {
    label: string;
  }
  const StyledTab = styled((props: StyledTabProps) => (
    <Tab {...props} />
  ))(({ theme }) => ({
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color: isDarkMode ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.3)',
    transition: "0.5s",
    "&:hover": {
      color: isDarkMode ? '#ededed' : 'rgba(0, 0, 0, 0.8)',
    },
    '&.Mui-selected': {
      color: isDarkMode ? '#8a3232' : '#d15959',
    },
    '&.Mui-focusVisible': {
      backgroundColor: 'rgba(100, 95, 228, 0.32)',
    },
  }));
  return (
    <div className={styles.navbarContainer} style={{padding : windowWidth < 1000 ? "30px 40px" : ""}}>
      <div className={styles.navRight}>
        {windowWidth < 1000
        ?  <>
            <IconButton
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              sx={{
                color: isDarkMode ? "rgba(255, 255, 255, 0.6)" : "rgba(0, 0, 0, 0.6)"
              }}
            >
              <MenuIcon/>
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleChangeMenu}>About Me</MenuItem>
              <MenuItem onClick={handleChangeMenu}>Education</MenuItem>
              <MenuItem onClick={handleChangeMenu}>Projects</MenuItem>
              <MenuItem onClick={handleChangeMenu}>Experience</MenuItem>
            </Menu>
          </>
        :
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="secondary tabs example"
          sx={{
            "& .MuiTab-root": {
              fontFamily: 'montserrat',
              fontSize: "13px",
              textTransform: "none",
              padding: "10px 20px",
              fontWeight: "bold",
              letterSpacing: "1px"

            },
            "& .Mui-selected": {
              color: "rgb(138, 50, 50)",
              fontWeight: "bold",
              letterSpacing: "1px"
            },
            "& .MuiTabs-indicator": {
              backgroundColor: isDarkMode ? "#8a3232" : "#d15959",
            },
          }}
        >
          {tabs.map((tab, index) => (
            <StyledTab key={index} label={tab.label} />
          ))}
        </Tabs>


        }
      </div>

      <div className={styles.navRight} style={{color: isDarkMode ? "" : "#fca9a9"}}>
        Portfolio.
      </div>

    </div>
  );
};

export default NavBar;

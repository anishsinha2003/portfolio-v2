"use client"
import { useState } from "react"; // Import ReactNode to type the children prop
import styles from "@/styles/footer.module.css";
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import { FormControlLabel, Snackbar } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { useWindowWidth } from "./contexts/WindowWidthContext";
import { useDarkMode } from "./contexts/DarkModeContext";

const Footer = () => {
  const [emailCopiedSnackBarOpen, setEmailCopiedSnackBarOpen] = useState(false);
  const windowWidth = useWindowWidth();
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const handleEmailCopy = () => {
    const emailToCopy = "anishsinha2003@gmail.com";
    navigator.clipboard.writeText(emailToCopy)
      .then(() => {
        setEmailCopiedSnackBarOpen(true);
      })
      .catch((err) => console.error("Failed to copy text: ", err));
  };

  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 80,
    height: 48,
    padding: 12,

    '& .MuiSwitch-switchBase': {
      margin: 2,
      padding: 0,
      transform: 'translateX(6px)',
      '&.Mui-checked': {
        color: '#d6d6d6',
        transform: 'translateX(30px)',
        '& .MuiSwitch-thumb:before': {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            '#d6d6d6',
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: '#7f7f7f',
          ...theme.applyStyles('dark', {
            backgroundColor: '#8796A5',
          }),
        },
      },
    },
    '& .MuiSwitch-thumb': {

      backgroundColor: isDarkMode ? '#8a3232' : "#d15959",
      "& :hover": { transition: "0.5s", cursor: "pointer", backgroundColor: "red"},
      width: 40,
      height: 40,
      '&::before': {
        content: "''",
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          'white',
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
      ...theme.applyStyles('dark', {
        backgroundColor: '#003892',
      }),
    },
    '& .MuiSwitch-track': {
      opacity: 1,
      backgroundColor: isDarkMode ? '#aab4be' : "#dbdbdb",
      borderRadius: 24 / 2,
      ...theme.applyStyles('dark', {
        backgroundColor: '#8796A5',
      }),
    },
  }));
  return (
    <div className={styles.footerContainer} style={{padding: windowWidth < 1000 ? "30px 40px" : ""}}>
      <div className={styles.footerLeft}>
        <FormControlLabel
          control={
            <MaterialUISwitch
              sx={{ m: 1 }}
              checked={isDarkMode}
              onClick={toggleDarkMode}
            />
          }
          label=""
        />
      </div>

      <div className={styles.footerRight} style={{color: isDarkMode ? "#6d6d6d" : "#848484"}}>
        <LinkedInIcon onClick={() => window.open("https://www.linkedin.com/in/anish-sinha-9a369b222/", "_blank")} sx={{"&:hover": { transition: "0.5s", cursor: "pointer", color: isDarkMode ? "white": "black", opacity: 0.8}}}/>
        <GitHubIcon onClick={() => window.open("https://github.com/anishsinha2003", "_blank")} sx={{"&:hover": { transition: "0.5s", cursor: "pointer", color: isDarkMode ? "white": "black", opacity: 0.8}}}/>
        <EmailIcon onClick={handleEmailCopy} sx={{"&:hover": { transition: "0.5s", cursor: "pointer", color: isDarkMode ? "white": "black", opacity: 0.8}}}/>
        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          open={emailCopiedSnackBarOpen}
          onClose={() => setEmailCopiedSnackBarOpen(false)}
          message="Email Copied to Clipboard"
          autoHideDuration={3000}
          sx={{
            "& .MuiSnackbarContent-root": {
              backgroundColor: isDarkMode ? "#eaeaea" : "#282828",
              color: isDarkMode ? "black" : "#e8e8e8",
              fontSize: "1rem",
              letterSpacing: 0.6,
              fontFamily: "montserrat",
            },
          }}
          key={"emailSnackBar"}
        />
      </div>
    </div>
  );
};

export default Footer;

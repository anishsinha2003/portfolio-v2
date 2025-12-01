"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import layoutStyle from "@/styles/pageLayout.module.css";
import { motion } from "framer-motion";
import { useStringContext } from "@/components/StringContext";
import { useCurrentPageContext } from "@/components/contexts/CurrentPageContext";
import { useRouter } from "next/navigation";
import style from "@/styles/pagesSpecficStyles/aboutMe.module.css";
import { useWindowWidth } from "@/components/contexts/WindowWidthContext";
import { useDarkMode } from "@/components/contexts/DarkModeContext";

export default function AboutMe() {
  const windowWidth = useWindowWidth();
  const { isDarkMode} = useDarkMode();

  const {prevPage, setPrevPage} = useStringContext();
  const {page, setPage} = useCurrentPageContext();
  const router = useRouter();

  const [isVisible, setIsVisible] = useState(true);
  const [animation, setAnimation] = useState({
    initial : "-400%",
    animate : "400%",
  })

  useEffect(() => {
    console.log(page)
    if (page !== "/aboutMe") {
      setAnimation({
        initial : "400%",
        animate : "-400%",
      })
      setIsVisible(false);
    }
  }, [page])

  const openCv = () => {
    window.open("https://drive.google.com/file/d/1kyNk5v7pLw3a8n44DbKPYbu13JGYeGS5/view?usp=sharing", "_blank");
  };

  const openStatement = () => {
    window.open("https://drive.google.com/file/d/1hanp8wIlAVV4edEpRU8bh5bIPujTKQEQ/view?usp=sharing", "_blank");
  };

  if (windowWidth === 0) {
    return <></>
  }
  return (
    <div className={layoutStyle.main}>
      <div className={layoutStyle.main}>
       <motion.div
        initial={{ x: animation.initial, opacity: 0 }}  // Set initial opacity to 0
        animate={{ x: isVisible ? 0 : animation.animate, opacity: isVisible ? 1 : 0 }}
        exit={{ x: isVisible ? animation.animate : animation.animate, opacity: isVisible ? 0 : 1 }}
        transition={{ type: "spring", duration: 0.7 }}
      >
        {windowWidth < 1000
        ?
          <div
            className={style.middleContentContainerMobile}
          >
            <div className={style.hiThereMobile} style={{color: isDarkMode ? "" : "black", opacity: isDarkMode ? "" : 0.3 }}>
              Hi there! I'm
            </div>
            <div className={style.nameMobile} style={{color: isDarkMode ? "" : "black", opacity: isDarkMode ? "" : 0.5 }}>
              Anish
            </div>
            <div className={style.profilePicMobile}>
              <Image src={"/profileImage.png"} alt={"profile-pic"} width={300} height={300}
                style={{position: "relative", top: "-58px", opacity: isDarkMode ? 0.9 : 0.9}}
                priority
              />
            </div>
            <div className={style.jobMobile}>
              Software Engineer
            </div>
            <div className={style.descMobile}  style={{color: isDarkMode ? "" : "black", opacity: isDarkMode ? "" : 0.4 }}>
              I am a fourth-year UNSW undergraduate majoring in Software and Biomedical Engineering with years of technical experience gained through coursework and side projects. My passion lies in software development and creating user-focused products, with the greatest fulfillment coming from knowing my work positively impacts real-world users.
            </div>
            <div className={style.buttonsMobile}>
              <div className={isDarkMode ? style.cvButtonMobile : style.cvButtonMobileLightMode} style={{width: "160px"}} onClick={openCv}>
                Open CV
              </div>
              <div className={isDarkMode ? style.atButtonMobile : style.atButtonMobileLightMode} onClick={openStatement}>
                Academic Transcript
              </div>
            </div>

          </div>
        :
          <div
            className={style.middleContentContainer}
          >
            <div className={style.profilePic}>
              <Image priority src={"/profileImage.png"} alt={"profile-pic"} width={900} height={900} style={{position: "relative", top: "-58px", opacity: isDarkMode ? 0.9 : 0.9}}/>
            </div>
            <div className={style.hiThere} style={{color: isDarkMode ? "" : "black", opacity: isDarkMode ? "" : 0.3 }}>
              Hi there! I'm
            </div>
            <div className={style.name} style={{color: isDarkMode ? "" : "black", opacity: isDarkMode ? "" : 0.5 }}>
              Anish
            </div>
            <div className={style.job}>
              Software Engineer
            </div>
            <div className={style.desc} style={{color: isDarkMode ? "" : "black", opacity: isDarkMode ? "" : 0.4 }}>
            I am a fourth-year UNSW undergraduate majoring in Software and Biomedical Engineering with years of technical experience gained through coursework and side projects. My passion lies in software development and creating user-focused products, with the greatest fulfillment coming from knowing my work positively impacts real-world users.
            </div>
            <div className={style.buttons}>
              <div className={isDarkMode ? style.cvButton : style.cvButtonLightMode} onClick={openCv}>
              Open CV
              </div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <div className={isDarkMode ? style.atButton : style.atButtonLightMode} onClick={openStatement}>
                Academic Transcript
              </div>
            </div>

          </div>

        }
      </motion.div>
    </div>
    </div>
  );
}

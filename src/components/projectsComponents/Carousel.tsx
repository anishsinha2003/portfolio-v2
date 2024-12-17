import React, { useState } from "react";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import CloseIcon from '@mui/icons-material/Close';

import Image from "next/image";

import styles from "@/styles/carousel.module.css";
import { Box, IconButton, Modal } from "@mui/material";
import { useDarkMode } from "../contexts/DarkModeContext";

export default (props: any) => {
  const {isDarkMode} = useDarkMode();
  const [activeSlide, setactiveSlide] = useState(props.activeSlide);

  const next = () =>
    activeSlide < props.data.length - 1 && setactiveSlide(activeSlide + 1);

  const prev = () => activeSlide > 0 && setactiveSlide(activeSlide - 1);

  const getStyles = (index: any) => {
    if (activeSlide === index)
      return {
        opacity: 1,
        transform: "translateX(0px) translateZ(0px) rotateY(0deg)",
        zIndex: 10,
        transition: "0.8s"
      };
    else if (activeSlide - 1 === index)
      return {
        opacity: 1,
        transform: "translateX(-240px) translateZ(-400px) rotateY(35deg)",
        zIndex: 9,
        filter: "brightness(60%)",
        transition: "0.8s"
      };
    else if (activeSlide + 1 === index)
      return {
        opacity: 1,
        transform: "translateX(240px) translateZ(-400px) rotateY(-35deg)",
        zIndex: 9,
        filter: "brightness(60%)",
        transition: "0.8s"
      };
    else if (activeSlide - 2 === index)
      return {
        opacity: 1,
        transform: "translateX(-480px) translateZ(-500px) rotateY(35deg)",
        zIndex: 8,
        filter: "brightness(60%)",
        transition: "0.8s"
      };
    else if (activeSlide + 2 === index)
      return {
        opacity: 1,
        transform: "translateX(480px) translateZ(-500px) rotateY(-35deg)",
        zIndex: 8,
        filter: "brightness(60%)",
        transition: "0.8s"
      };
    else if (index < activeSlide - 2)
      return {
        opacity: 0,
        transform: "translateX(-480px) translateZ(-500px) rotateY(35deg)",
        zIndex: 7,
        filter: "brightness(60%)",
        transition: "0.8s"
      };
    else if (index > activeSlide + 2)
      return {
        opacity: 0,
        transform: "translateX(480px) translateZ(-500px) rotateY(-35deg)",
        zIndex: 7,
        filter: "brightness(60%)",
        transition: "0.8s"
      };
  };

  return (
    <div className={styles.center}>
      <div className={styles.slideC}>
        {props.data.map((item: any, i: any) => (
          <React.Fragment key={item.id}>
            <div
              className={styles.slide}
              style={{
                background: item.bgColor,
                boxShadow: "rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px",
                // boxShadow: "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
                ...getStyles(i)
              }}
            >
               <SliderContent

                  {...item}
                  activeSlide={activeSlide}
                />
            </div>
          </React.Fragment>
        ))}
      </div>
      <br/>
      <div className={styles.btns}>
        <IconButton disabled={activeSlide === 0}>
          <ArrowCircleLeftIcon
            style={{pointerEvents : activeSlide === 0 ? "none" : "auto"}}
            onClick={prev}
            sx={{ transition: "0.5s", color: '#7f7f7f', "&:hover": { color: isDarkMode ? "#ededed" : "#474747",}, fontSize: "50px", opacity: activeSlide === 0 ? "0.1" : ""}}
          />
        </IconButton>

        <IconButton disabled={activeSlide === props.data.length - 1}>
          <ArrowCircleRightIcon
            style={{pointerEvents : activeSlide === props.data.length - 1 ? "none" : "auto"}}
            onClick={next}
            sx={{ transition: "0.5s", color: '#7f7f7f', "&:hover": { color: isDarkMode ? "#ededed" : "#474747",}, fontSize: "50px", opacity: activeSlide === props.data.length - 1 ? "0.1" : ""}}
          />
        </IconButton>
      </div>
    </div>
  );
};

interface SliderContentProps {
  id: any;
  title: any;
  date: any;
  links: any;
  skills: any;
  image: any;
  desc: any;
  activeSlide: any;
}
const SliderContent = ({
  id,
  title,
  date,
  links,
  skills,
  image,
  desc,
  activeSlide,
}: SliderContentProps) => {
  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "fit-content",
  };
  const {isDarkMode} = useDarkMode();
  const [demoVideoOpen, setDemoVideoOpen] = useState(null);
  function handleLinkClick(linkObj: any) {
    if (linkObj.type === "redirect") {
      window.open(linkObj.link, "_blank");
    }

    if (linkObj.type === "embedded") {
      setDemoVideoOpen(linkObj.link)
    }

  }
  return (
    <div className={styles.sliderContentCardContainer} style={{backgroundColor: isDarkMode ? "" : "rgb(250, 250, 250)", transition: "0.5s"}}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: isDarkMode ? "#545454" : "#e2e2e2",
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '10px',
          borderTopLeftRadius: '4px',
          borderTopRightRadius: '4px',
          margin: 0,
          padding: 0,
          paddingLeft: '20px',
        }}
      />
      <div className={styles.imageContainer}>
        <div
          style={{
            width: "100%",
            height: "100%",
            filter: isDarkMode ? "brightness(75%)" : "brightness(100%)",
            position: "relative",
            borderRadius: "10px",
            boxShadow: "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px"
          }}
        >
          <Image
            style={{ borderRadius: "12px"}}
            src={image}
            alt={image}
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      </div>
      <div className={styles.titleContainer} style={{color: isDarkMode ? "" : "black", opacity: isDarkMode ? "" : "0.4"}}>
        {title}
        <div style={{fontSize: "16px", opacity: isDarkMode ? 0.2 : 0.5}}>{date}</div>
      </div>
      <div className={styles.descriptionContainer} style={{color: isDarkMode ? "" : "black", opacity: isDarkMode ? "" : "0.3"}}>
        {desc}

      </div>
      <div className={styles.infoContainer}>
        <div className={styles.infoSkillsContainer} style={{width: links.length === 0 ? "100%" : "", backgroundColor: isDarkMode ? "" : "grey"}}>
          <div style={{position: "absolute", top: 20, left: 20, fontFamily: "montserrat", fontWeight: "bold", letterSpacing: "1px", opacity: isDarkMode ? "0.1" : "0.3"}}>
            SKILLS
          </div>
          <br/><br/>
          <div className={styles.infoSkillsText} style={{opacity: isDarkMode ? "" : "0.6"}}>
            {skills.map((skill: any, idx: any) => {
              return (
                <div key={idx}>
                  {skill}
                </div>
              );
            })}
          </div>
        </div>
        {links.length !== 0
        ?
          <div className={styles.infoLinksContainer} style={{width: links.length === 0 ? "100%" : "", backgroundColor: isDarkMode ? "" : "grey"}}>
            <div style={{position: "absolute", top: 20, left: 20, fontFamily: "montserrat", fontWeight: "bold", letterSpacing: "1px", opacity: isDarkMode ? "0.1" : "0.3"}}>
              LINKS
            </div>
            <br/><br/>
            <div className={styles.infoLinksText}>
              {links.map((linkObj: any, idx: any) => {
                return (
                  <div key={idx} className={styles.link} style={{color: isDarkMode ? "" : "white", opacity: isDarkMode ? "" : "0.6"}} onClick={() => handleLinkClick(linkObj)}>
                    {linkObj.label}
                  </div>
                );
              })}
            </div>

          </div>
        : <></>
        }

      </div>
      <Modal
        open={demoVideoOpen !== null}
        onClose={() => setDemoVideoOpen(null)}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...modalStyle }}>
          <iframe width="1200" height="815" allow="fullscreen" title='global chat'
            src={demoVideoOpen ? demoVideoOpen : ""}>
          </iframe>
          <div
            style={{
              position: "absolute",
              top: "-40px",
              right: "10px",
              zIndex: 9999,
              cursor: "pointer"
            }}
            onClick={() => setDemoVideoOpen(null)}
          >
            <CloseIcon sx={{fontSize: 30, color: isDarkMode ? "grey" : "#303030", transition: "0.5s", "&:hover": { color: isDarkMode ? "white" : "black"}}} />
          </div>

        </Box>
      </Modal>
    </div>
  );
};

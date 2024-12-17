"use client"
import { useEffect, useState } from "react";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DateRangeIcon from '@mui/icons-material/DateRange';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import data from "@/components/experienceComponents/data";

import Image from "next/image";

import styles from "@/styles/pagesSpecficStyles/experience.module.css";
import { Box, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import { useStringContext } from "@/components/StringContext";
import { useCurrentPageContext } from "@/components/contexts/CurrentPageContext";
import { useRouter } from "next/navigation";
import { useWindowWidth } from "@/components/contexts/WindowWidthContext";
import { useDarkMode } from "@/components/contexts/DarkModeContext";

export default function Experience() {
  const windowWidth = useWindowWidth();
  const {isDarkMode} = useDarkMode();
  const {prevPage, setPrevPage} = useStringContext();
  const {page, setPage} = useCurrentPageContext();
  const router = useRouter();

  const [isVisible, setIsVisible] = useState(true);
  const [animation, setAnimation] = useState({
    initial : prevPage === "/aboutMe" ||  prevPage === "/education" || prevPage === "/projects" ? "400%" : "-400%",
    animate : "400%",
  })

  useEffect(() => {
    if (page !== "/experience") {
      if (page === "/aboutMe" ||  page === "/education" || page === "/projects") {
        setAnimation({
          initial : "400%",
          animate : "400%",
        })
      }
      else {
        setAnimation({
          initial : "400%",
          animate : "-400%",
        })

      }
      setIsVisible(false);
    }
  }, [page])


  const [displayedData, setDisplayedData] = useState(data[0])
  const [currentPage, setCurrentPage] = useState(0)
  const [isNextPage, setIsNextPage] = useState(true);
  const [isFirstRender, setIsFirstRender] = useState(true);
  useEffect(() => {
      setIsFirstRender(false);
    }, []);


  function handleNextPage() {
      if (currentPage + 1 === data.length) {
          return
      }
      setCurrentPage(currentPage + 1);
      setDisplayedData(data[currentPage + 1])
      setIsNextPage(true);
  }
  function handlePreviousPage() {
      if (currentPage === 0) {
          return
      }
      setIsNextPage(false);
      setCurrentPage(currentPage - 1);
      setDisplayedData(data[currentPage - 1])
  }

  // flip fn for window width less than 715
  const [flippedCards, setFlippedCards] = useState<any>([]);

    const handleFlip = (id: any) => {
        if (flippedCards.includes(id)) {
          setFlippedCards(flippedCards.filter((idx: any) => idx !== id));
        } else {
          setFlippedCards([...flippedCards, id]);
        }
    };

  if (windowWidth === 0) {
    return <></>
  }

  return (
    <div className={styles.main}>
      <motion.div
        initial={{ x: animation.initial, opacity: 0 }}  // Set initial opacity to 0
        animate={{ x: isVisible ? 0 : animation.animate, opacity: isVisible ? 1 : 0 }}
        exit={{ x: isVisible ? animation.animate : animation.animate, opacity: isVisible ? 0 : 1 }}
        transition={{ type: "spring", duration: 0.4 }}
      >
        <div
          style={
            windowWidth < 1100
            ?
              {
                display: "flex",
                flexDirection: "column",
                overflow: "scroll",
                alignItems: "center",
                justifyContent: "flex-start",
                height: "700px",
                width: "clamp(320px, 60vw, 820px)",
                gap: "50px"
              }
            :
              {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                height: "100%"
              }
          }
        >
          {windowWidth < 1100
          ?
          <>
            {data.map((item: any, index: any) => (
              <div
                key={index}
                className={`${styles.flipCard} ${flippedCards.includes(item.id) ? styles.flipped : ""}`}
              >
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
                        zIndex: 10000,
                    }}
                />
                <div className={styles.flipCardInner} style={{width: "clamp(300px, 50vw, 800px)", minHeight: "clamp(600px, 50vw, 700px)"}}>
                    <div className={styles.flipCardFront} style={{backgroundColor: isDarkMode ? "" : "rgb(250, 250, 250)", boxShadow: isDarkMode ? "" : "rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px"}}>
                        <div className={styles.cardLogo}>
                          <Image priority src={item.logo} alt="logo" width={200} height={200} style={{opacity: isDarkMode ? 0.6 : 0.8, filter: "brightness(0.6)"}}/>
                        </div>
                        <div className={styles.cardTags} style={{color: isDarkMode ? "" : "black", opacity: isDarkMode ? "" : 0.2}}>
                          {windowWidth < 900
                          ?
                          <div key={index}>
                            {Object.entries(item.tags).map(([key, value]) => (

                              <div key={key}>
                                {key === "role"
                                ?
                                  <div key={key}>
                                    <BusinessCenterIcon sx={{ fontSize: "20px", position: "relative", top: "-2px" }} />
                                    &nbsp;
                                    {item.tags[key]}
                                  </div>
                                : <></>
                                }
                              </div>
                            ))}
                          </div>
                          :
                            <>
                            {Object.entries(item.tags).map(([key, value], index, array) => (
                                <div key={key}>
                                  {item.tags[key]} {index < array.length - 1 && <>&nbsp; - &nbsp;</>}
                                </div>
                              ))}
                            </>

                          }
                        </div>
                        <div className={styles.cardDesc} style={{color: isDarkMode ? "" : "black", opacity: isDarkMode ? "" : 0.6}}>
                            {item.overview}
                        </div>
                        <div className={styles.cardFooter}>
                            <button
                                className={isDarkMode ? styles.flipButton : styles.flipButtonLightMode}
                                onClick={() => handleFlip(item.id)}
                            >
                                Flip
                            </button>
                        </div>
                    </div>

                    <div className={styles.flipCardBack} style={{backgroundColor: isDarkMode ? "#232323" : "rgb(250, 250, 250)", height: "100%", boxShadow: isDarkMode ? "" : "rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px"}}>
                      <div className={styles.learningsContainer} style={{overflowY: "scroll", minHeight: "clamp(400px, 40vw, 500px)", paddingBottom: "23px",  paddingLeft: "24px",  paddingRight: "24px"}}>
                        {item.learnigs.map((learning: any, index: any) => {
                          const colors = ["#556398", "#424242", "#654545"];

                          const backgroundColor = colors[index % 3];
                          return (
                            <div key={index} className={styles.learningBubble} style={{backgroundColor : backgroundColor, opacity: isDarkMode ? "" : 0.6}}>
                              {learning}
                            </div>
                          )
                        })}
                      </div>
                      <div className={styles.cardFooter2}>
                          <button
                              className={isDarkMode ? styles.flipButton : styles.flipButtonLightMode}
                              onClick={() => handleFlip(item.id)}
                          >
                              Flip
                          </button>
                      </div>
                    </div>
                </div>
              </div>
            ))}
          </>
          :
            <>
              <IconButton disabled={currentPage === 0}>
                <ArrowCircleLeftIcon
                  style={{pointerEvents : currentPage === 0 ? "none" : "auto", zIndex: 0}}
                  onClick={handlePreviousPage}
                  sx={{ transition: "0.5s", color: '#7f7f7f', "&:hover": { color: isDarkMode ? "#ededed" : "#474747"}, fontSize: "50px", opacity: currentPage === 0 ? "0.1" : ""}}
                />
              </IconButton>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, x: isFirstRender ? 0 : isNextPage ? 300 : -300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: isFirstRender ? 0 : isNextPage ? -300 : 300 }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
              >
                <div className={styles.content} style={{width: "clamp(700px, 60vw, 1300px)", backgroundColor: isDarkMode ? "" : "rgb(250, 250, 250)", boxShadow: isDarkMode ? "" : "rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px"}}>
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
                  <Image priority src={displayedData.logo} alt="logo" width={260} height={260} style={{opacity: isDarkMode ? 0.6 : 0.8, filter: "brightness(0.6)"}}/>
                  <div className={styles.tagsContainer} style={{color: isDarkMode ? "" : "black", opacity: isDarkMode ? "" : 0.2}}>
                    {Object.entries(displayedData.tags).map(([tag, value], index, array) => (
                      <div className={styles.tag} key={tag}>
                          {tag === "location" && (
                            <>
                              <LocationOnIcon sx={{ fontSize: "20px", position: "relative", top: "-2px" }} />
                              &nbsp;
                              {value}
                            </>
                          )}
                          {tag === "duration" && (
                            <>
                              <DateRangeIcon sx={{ fontSize: "20px", position: "relative", top: "-2px" }} />
                              &nbsp;
                              {value}
                            </>
                          )}
                          {tag === "role" && (
                            <>
                              <BusinessCenterIcon sx={{ fontSize: "20px", position: "relative", top: "-2px" }} />
                              &nbsp;
                              {value}
                            </>
                          )}
                          {tag !== "location" && tag !== "duration" && tag !== "role" && value}
                          &nbsp;&nbsp;
                        {index < array.length - 1 && "|"}
                        &nbsp;&nbsp;
                      </div>
                    ))}
                  </div>
                  <br/><br/>
                  <div className={styles.subHeading} style={{color: isDarkMode ? "" : "black", opacity: isDarkMode ? "" : 0.4}}>
                    Overview
                  </div>
                  <br/>
                  <div className={styles.overviewText} style={{color: isDarkMode ? "" : "black", opacity: isDarkMode ? "" : 0.4}}>
                    {displayedData.overview}
                  </div>
                  <br/><br/>
                  <div className={styles.subHeading} style={{color: isDarkMode ? "" : "black", opacity: isDarkMode ? "" : 0.4}}>
                    Learnings
                  </div>
                  <br/><br/>
                  <div className={styles.learningsContainer}>
                    {displayedData.learnigs.map((learning: any, index: any) => {
                      const colors = ["#556398", "#424242", "#654545"];

                      const backgroundColor = colors[index % 3];
                      return (
                        <div key={index} className={styles.learningBubble} style={{backgroundColor : backgroundColor, opacity: isDarkMode ? "" : 0.6}}>
                          {learning}
                        </div>
                      )
                    })}
                  </div>
                </div>
              </motion.div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <IconButton disabled={currentPage === data.length - 1}>
                <ArrowCircleRightIcon
                  style={{pointerEvents : currentPage === data.length - 1 ? "none" : "auto"}}
                  onClick={handleNextPage}
                  sx={{ transition: "0.5s", color: '#7f7f7f', "&:hover": { color: isDarkMode ? "#ededed" : "#474747"}, fontSize: "50px", opacity: currentPage === data.length - 1 ? "0.1" : ""}}
                />
              </IconButton>
            </>

          }
          <div>

          </div>
        </div>
      </motion.div>
    </div>
  );
}

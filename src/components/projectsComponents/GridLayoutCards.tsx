"use client"
import React, { useEffect, useState } from "react";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import CloseIcon from '@mui/icons-material/Close';
import data from "./data";

import Image from "next/image";

import styles from "@/styles/gridLayoutCards.module.css";
import { Box, IconButton, Modal } from "@mui/material";
import { motion } from "framer-motion";
import { useWindowWidth } from "../contexts/WindowWidthContext";
import { useDarkMode } from "../contexts/DarkModeContext";

const GridLayoutCards = () => {
    const {isDarkMode} = useDarkMode();
    const windowWidth = useWindowWidth();
    const [cardsPerPage, setCardsPerPage] = useState(windowWidth > 1700 ? 6 : windowWidth > 1200 ? 4 : 2)

    useEffect(() => {
        setCardsPerPage(windowWidth > 1700 ? 6 : windowWidth > 1200 ? 4 : 2);
    }, [windowWidth])

    useEffect(() => {
        const chunks = chunkData(data, cardsPerPage);
        setChunkedData(chunks);
        setDisplayedData(data.slice(0,cardsPerPage))
    }, [cardsPerPage])

    // demo vid
    const modalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "fit-content",
      };
      const [demoVideoOpen, setDemoVideoOpen] = useState(null);
      function handleLinkClick(linkObj: any) {
        if (linkObj.type === "redirect") {
          window.open(linkObj.link, "_blank");
        }

        if (linkObj.type === "embedded" && windowWidth >= 1550) {
            console.log(linkObj)
          setDemoVideoOpen(linkObj.link)
        } else {
            if (linkObj.browserLink) {
                window.open(linkObj.browserLink, "_blank");
            } else {
                window.open(linkObj.link, "_blank");
            }
        }

      }

    const [displayedData, setDisplayedData] = useState(data.slice(0,cardsPerPage))
    const [currentPage, setCurrentPage] = useState(0)
    const [isNextPage, setIsNextPage] = useState(true);
    const [isFirstRender, setIsFirstRender] = useState(true);
    useEffect(() => {
        setIsFirstRender(false);
      }, []);

    const [flippedCards, setFlippedCards] = useState<any>([]);

    const handleFlip = (id: any) => {
        if (flippedCards.includes(id)) {
          setFlippedCards(flippedCards.filter((idx: any) => idx !== id));
        } else {
          setFlippedCards([...flippedCards, id]);
        }
    };

    const chunkData = (data: any, chunkSize: any) => {
        const result = [];
        for (let i = 0; i < data.length; i += chunkSize) {
            result.push(data.slice(i, i + chunkSize));
        }
        return result;
    };

    const [chunkedData, setChunkedData] = useState<any>([]);

    useEffect(() => {
        const chunks = chunkData(data, cardsPerPage);
        setChunkedData(chunks);
    }, []);


    function handleNextPage() {
        if (currentPage + 1 === chunkedData.length) {
            return
        }
        setCurrentPage(currentPage + 1);
        setDisplayedData(chunkedData[currentPage + 1])
        setIsNextPage(true);
    }
    function handlePreviousPage() {
        if (currentPage === 0) {
            return
        }
        setIsNextPage(false);
        setCurrentPage(currentPage - 1);
        setDisplayedData(chunkedData[currentPage - 1])
    }

  return (
    <div className={styles.main}>
        {windowWidth < 715
        ? <></>
        :
        <>
            <IconButton disabled={currentPage === 0}>
                <ArrowCircleLeftIcon
                    style={{pointerEvents : currentPage === 0 ? "none" : "auto"}}
                    onClick={handlePreviousPage}
                    sx={{ transition: "0.5s", color: '#7f7f7f', "&:hover": { color: isDarkMode ? "#ededed" : "#474747"}, fontSize: "50px", opacity: currentPage === 0 ? "0.1" : ""}}
                />
            </IconButton>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </>

        }
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
                {windowWidth < 715
                ?
                    <div style={{display: "flex", flexDirection: "column", overflow: "scroll", alignItems: "center", justifyContent: "flex-start", height: "700px", width: "clamp(320px, 60vw, 820px)", gap: "50px", paddingBottom: 35}}>
                        {data.map((item: any, index: any) => (
                        <div
                            key={index}
                            className={`${styles.flipCard} ${flippedCards.includes(item.id) ? styles.flipped : ""}`}
                        >
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                backgroundColor: isDarkMode ? "#333333" : "#e2e2e2",
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
                        <div className={styles.flipCardInner} style={{width: "clamp(300px, 50vw, 800px)", height: "400px"}}>
                            <div className={styles.flipCardFront} style={{backgroundColor: isDarkMode ? "" : "rgb(250, 250, 250)", boxShadow: isDarkMode ? "" : "rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px"}}>
                                <div className={styles.cardTitle} style={{color: isDarkMode ? "" : "black", opacity: isDarkMode ? "" : 0.6}}>
                                    {item.title}
                                </div>
                                <div className={styles.cardDate} style={{color: isDarkMode ? "" : "black", opacity: isDarkMode ? "" : 0.3}}>
                                    {item.date}
                                </div>
                                <div className={styles.cardDesc} style={{color: isDarkMode ? "" : "black", opacity: isDarkMode ? "" : 0.4}}>
                                    {item.desc}
                                </div>
                                <div className={styles.cardFooter} style={{justifyContent: "flex-end"}}>
                                    <button
                                        className={isDarkMode ? styles.flipButton : styles.flipButtonLightMode}
                                        onClick={() => handleFlip(item.id)}
                                    >
                                        Flip
                                    </button>
                                </div>
                            </div>
                            <div className={styles.flipCardBack} style={{backgroundColor: isDarkMode ? "" : "#fff7f7", boxShadow: isDarkMode ? "" : "rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px"}}>
                                <div className={styles.cardSkillsTitle} style={{color: isDarkMode ? "" : "black", opacity: isDarkMode ? "0.3" : "0.1"}}>
                                    SKILLS
                                </div>
                                <div className={styles.cardSkills} style={{color: isDarkMode ? "" : "black", opacity: isDarkMode ? "0.8" : 0.4}}>
                                    {item.skills.join(', ')}
                                </div>
                                <div className={styles.cardLinksTitle} style={{color: isDarkMode ? "" : "black", opacity: isDarkMode ? "0.3" : 0.1}}>
                                    { item.links.length === 0
                                    ? <></>
                                    : <>LINKS</>
                                    }
                                </div>
                                <div className={styles.cardLinks}>
                                    {item.links.map((linkObj: any, index: any) => (
                                        <div key={index} style={{color: "#9299d1"}}>
                                            <span onClick={() => handleLinkClick(linkObj)} style={{textDecoration: "underline", color: "#9299d1", opacity: isDarkMode ? "0.5" : "0.8"}}>{linkObj.label}</span>
                                            {index !== item.links.length - 1 && ","}
                                            &nbsp;&nbsp;&nbsp;
                                        </div>
                                    ))}
                                </div>
                                <div className={styles.cardFooter2}>
                                    <button
                                        className={isDarkMode ? styles.flipButton2 : styles.flipButtonLightMode}
                                        onClick={() => handleFlip(item.id)}
                                    >
                                        Flip
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    ))}
                    </div>
                :
                    <div className={windowWidth > 1700 ? styles.container : windowWidth > 1200 ? styles.container2 : styles.container3} style={{width: windowWidth < 715 ? 300 : ""}}>
                        {displayedData.map((item: any, index: any) => (
                                <div
                                    key={index}
                                    className={`${styles.flipCard} ${flippedCards.includes(item.id) ? styles.flipped : ""}`}
                                >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        backgroundColor: isDarkMode ? "#333333" : "#e2e2e2",
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
                                <div className={styles.flipCardInner}>
                                    <div className={styles.flipCardFront} style={{backgroundColor: isDarkMode ? "" : "rgb(250, 250, 250)", boxShadow: isDarkMode ? "" : "rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px"}}>
                                        <div className={styles.cardTitle} style={{color: isDarkMode ? "" : "black", opacity: isDarkMode ? "" : 0.6}}>
                                            {item.title}
                                        </div>
                                        <div className={styles.cardDate} style={{color: isDarkMode ? "" : "black", opacity: isDarkMode ? "" : 0.3}}>
                                            {item.date}
                                        </div>
                                        <div className={styles.cardDesc} style={{color: isDarkMode ? "" : "black", opacity: isDarkMode ? "" : 0.4}}>
                                            {item.desc}
                                        </div>
                                        <div className={styles.cardFooter}>
                                            <div className={styles.iconList}>
                                                {item.icons.map((iconSrc: string, index: number) => (
                                                    <Image priority key={index} src={iconSrc} alt={"d"} width={40} height={40} style={{opacity: isDarkMode ? 1 : 0.8, filter: isDarkMode ? "brightness(60%)" : "brightness(100%)"}} layout="intrinsic" objectFit="contain"/>
                                                ))}
                                            </div>
                                            <button
                                                className={isDarkMode ? styles.flipButton2 : styles.flipButtonLightMode}
                                                onClick={() => handleFlip(item.id)}
                                            >
                                                Flip
                                            </button>
                                        </div>
                                    </div>
                                    <div className={styles.flipCardBack} style={{backgroundColor: isDarkMode ? "" : "#fff7f7", boxShadow: isDarkMode ? "" : "rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px"}}>
                                        <div className={styles.cardSkillsTitle} style={{color: isDarkMode ? "" : "black", opacity: isDarkMode ? "0.3" : "0.1"}}>
                                            SKILLS
                                        </div>
                                        <div className={styles.cardSkills} style={{color: isDarkMode ? "" : "black", opacity: isDarkMode ? "0.8" : 0.4}}>
                                            {item.skills.join(', ')}
                                        </div>
                                        <div className={styles.cardLinksTitle} style={{color: isDarkMode ? "" : "black", opacity: isDarkMode ? "0.3" : 0.1}}>
                                            { item.links.length === 0
                                            ? <></>
                                            : <>LINKS</>
                                            }
                                        </div>
                                        <div className={styles.cardLinks}>
                                            {item.links.map((linkObj: any, index: any) => (
                                                <div key={index} style={{color: "#9299d1"}}>
                                                    <span onClick={() => handleLinkClick(linkObj)} style={{textDecoration: "underline", color: "#9299d1", opacity: isDarkMode ? "0.5" : "0.8"}}>{linkObj.label}</span>
                                                    {index !== item.links.length - 1 && ","}
                                                    &nbsp;&nbsp;&nbsp;
                                                </div>
                                            ))}
                                        </div>
                                        <div className={styles.cardFooter2}>
                                            <button
                                                className={isDarkMode ? styles.flipButton2 : styles.flipButtonLightMode}
                                                onClick={() => handleFlip(item.id)}
                                            >
                                                Flip
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                }
            </motion.div>
        {windowWidth < 715
        ? <></>
        :
        <>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton disabled={currentPage === chunkedData.length - 1}>
            <ArrowCircleRightIcon
                style={{pointerEvents : currentPage === chunkedData.length - 1 ? "none" : "auto"}}
                onClick={handleNextPage}
                sx={{ transition: "0.5s", color: '#7f7f7f', "&:hover": { color: isDarkMode ? "#ededed" : "#474747"}, fontSize: "50px", opacity: currentPage === chunkedData.length - 1 ? "0.1" : ""}}
            />
            </IconButton>
        </>
        }
        <Modal
            open={demoVideoOpen !== null}
            onClose={() => setDemoVideoOpen(null)}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
        >
            <Box sx={{ ...modalStyle }}>
            <iframe
                width="1200"
                height="815"
                allow="fullscreen"
                title='global chat'
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
                <CloseIcon sx={{fontSize: 30, color: "grey", transition: "0.5s", "&:hover": { color: isDarkMode ? "white" : "black"}}} />
            </div>

            </Box>
        </Modal>

    </div>
  );
};

export default GridLayoutCards;

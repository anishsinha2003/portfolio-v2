"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import layoutStyle from "@/styles/pageLayout.module.css"
import { motion } from "framer-motion";
import { useStringContext } from "@/components/StringContext";
import { usePathname, useRouter } from "next/navigation";
import { useCurrentPageContext } from "@/components/CurrentPageContext";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, IconButton, Modal } from "@mui/material";
import style from "@/styles/pagesSpecficStyles/education.module.css";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import CloseIcon from '@mui/icons-material/Close';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';

export default function UnswPage({setEduPage, page, setRenderFromSubPage}: {setEduPage: any, page: any, setRenderFromSubPage: any}) {
  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "fit-content",
  };
  const [isVisible, setIsVisible] = useState(true);
  const {prevPage, setPrevPage} = useStringContext();
  const [animation, setAnimation] = useState({
    initial : prevPage === "/aboutMe" ? "400%" : "-400%",
    animate : "400%",
  })
  useEffect(() => {
    if (page !== "/education") {
      if (page === "/aboutMe") {
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

  const [isFirstRender, setIsFirstRender] = useState(true);
  const [isNextPage, setIsNextPage] = useState(true);
  const [currentPage, setCurrentPage] = useState("sunswift")
  const [modalExpanded, setModalExpanded] = useState<string>("")

  useEffect(() => {
    setIsFirstRender(false);
  }, []);

  function handleNextPage() {
    if (currentPage === "3D4Health") {
        return
    }
    setCurrentPage("3D4Health");
    setIsNextPage(true);
  }
  function handlePreviousPage() {
      if (currentPage === "sunswift") {
          return
      }
      setIsNextPage(false);
      setCurrentPage("sunswift");
  }

  function handleBack() {
    setRenderFromSubPage(true)
    setEduPage("home")
  }
  return (
    <motion.div
    initial={{ x: isFirstRender ? 0 : animation.initial, opacity: 0 }}  // Set initial opacity to 0
    animate={{ x: isFirstRender ? 0 : isVisible ? 0 : animation.animate, opacity: isVisible ? 1 : 0 }}
    exit={{ x: isFirstRender ? 0 :isVisible ? animation.animate : animation.animate, opacity: isVisible ? 0 : 1 }}
    transition={{ type: "spring", duration: 0.7 }}
  >
    <div className={style.main} style={{position: "relative"}}>
      <IconButton onClick={handleBack}>
          <div style={{ zIndex: 0, position: "absolute", top: -340, right: 70, fontFamily: "montserrat", fontWeight: "bold", color: "white", opacity: 0.3, letterSpacing: 1, fontSize: "15px"}}>
          <ArrowBackIcon />&nbsp;BACK
        </div>
        </IconButton>
       <IconButton disabled={currentPage === "sunswift"}>
        <ArrowCircleLeftIcon
          style={{pointerEvents : currentPage === "sunswift" ? "none" : "auto", position: "absolute", right: "100px", zIndex: 0}}
          onClick={handlePreviousPage}
          sx={{ transition: "0.5s", color: '#7f7f7f', "&:hover": { color: "#ededed",}, fontSize: "50px", opacity: currentPage === "sunswift" ? "0.1" : ""}}
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
        {currentPage === "sunswift"
        ?  <div className={style.content}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  backgroundColor: "#5D5D5D",
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
              <div className={style.title}>
                UNSW - Sunswift Racing
              </div>
              <br/>
              <div className={style.overview}>
                Part of the Sunswift Racing Society. Sunswift Racing is Australia’s top solar-electric development project, being crowned champions in the 2023 Bridgestone World Solar Challenge (see more on this in the projects section)
              </div>
              <br/><br/><br/>
              <div className={style.mediaContainer}>
                <div className={style.tss}>
                  <div className={style.mediaTitle}>TSS - Team</div>
                  <Image src={"/TSS.png"} alt={"tss"} height={500} width={500} style={{opacity: 0.6, borderRadius: 4, boxShadow: "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px"}}/>

                </div>
                <div className={style.vid}>
                <div className={style.mediaTitle}>Solar-Electric Car on Track Day</div>
                  <video width="580" height="580" controls style={{opacity: 0.6, borderRadius: 4, boxShadow: "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px"}}>
                    <source src="/sunswift.mp4" type="video/mp4" />
                  </video>
                </div>

              </div>
            </div>
        : <div className={style.content}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: "#5D5D5D",
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
            <div className={style.title}>
              UNSW - 3D 4 Health
            </div>
            <br/>
            <div className={style.overview}>
            Part of a project that has the potential to benefit millions of patients worldwide. It will fill a critical knowledge gap in the medical implant field by developing new topology-optimised designs and 3D printing processes to promote bone in-growth.
            </div>
            <br/><br/><br/>
            <div className={style.mediaContainer}>
              <div>
                <div className={style.mediaTitle}>My Research <IconButton sx={{cursor: "pointer"}}onClick={() => setModalExpanded("/research.pdf")}><OpenInFullIcon sx={{color: "white", fontSize: "19px"}}/></IconButton></div>
                <iframe src="/research.pdf" width="100%" height="450px"  style={{opacity: 0.6, boxShadow: "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px"}}></iframe>
              </div>
              <div>
                <div className={style.mediaTitle}>Experiment Report<IconButton sx={{cursor: "pointer"}}onClick={() => setModalExpanded("/threeDfourhealthPDF.pdf")}><OpenInFullIcon sx={{color: "white", fontSize: "19px"}}/></IconButton></div>
                <iframe allow="fullscreen" src="/threeDfourhealthPDF.pdf" width="100%" height="450px"  style={{opacity: 0.6, boxShadow: "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px"}}></iframe>
              </div>
            </div>
          </div>

        }
      </motion.div>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <IconButton disabled={currentPage === "3D4Health"}>
        <ArrowCircleRightIcon
          style={{pointerEvents : currentPage === "3D4Health" ? "none" : "auto", position: "absolute", right: "-100px"}}
          onClick={handleNextPage}
          sx={{ transition: "0.5s", color: '#7f7f7f', "&:hover": { color: "#ededed",}, fontSize: "50px", opacity: currentPage === "3D4Health" ? "0.1" : ""}}
        />
      </IconButton>
      <Modal
        open={modalExpanded !== ""}
        onClose={() => setModalExpanded("")}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...modalStyle }}>
          <iframe width="1200" height="815" allow="fullscreen" title='pdf'
            src={modalExpanded ? modalExpanded : ""}>
          </iframe>
          <div
            style={{
              position: "absolute",
              top: "-40px",
              right: "10px",
              cursor: "pointer"
            }}
            onClick={() => setModalExpanded("")}
          >
            {/* <CloseIcon sx={{fontSize: 30, color: "grey", transition: "0.5s", "&:hover": { color: "white",}}} /> */}
          </div>

        </Box>
      </Modal>
    </div>
    </motion.div>
  );
}

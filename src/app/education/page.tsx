"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import layoutStyle from "@/styles/pageLayout.module.css"
import { motion } from "framer-motion";
import { useStringContext } from "@/components/StringContext";
import { usePathname, useRouter } from "next/navigation";
import { useCurrentPageContext } from "@/components/CurrentPageContext";
import { Box, styled, Tooltip, tooltipClasses, TooltipProps } from "@mui/material";
import HortizontalLine from "./HortizontalLine";
import VerticalLine from "./VerticalLine";
import { useWindowWidth } from "@/components/WindowWidthContext";


export default function Education() {
  const windowWidth = useWindowWidth();
  console.log(windowWidth)
  const CustomWidthTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} sx={{color: "20px"}}/>
  ))({
    [`& .${tooltipClasses.tooltip}`]: {
      maxWidth: 500,
    },
  });

  const {prevPage, setPrevPage} = useStringContext();
  const {page, setPage} = useCurrentPageContext();
  const router = useRouter();

  const [renderFromSubPage, setRenderFromSubPage] = useState(false);


  const [eduPage, setEduPage] = useState("home")

  const [isVisible, setIsVisible] = useState(true);
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
      setRenderFromSubPage(false)
    }
  }, [page])
  if (windowWidth === 0) {
    return <></>
  }
  // hieght is dependt on which one to show
  return (
    <div className={layoutStyle.main} style={{position: "relative", display: "flex", justifyContent: "center", alignItems: "center"}}>
      {eduPage === "home"
      ?
        <div style={{width: "80%", height: windowWidth <= 1000 ? "90%" : "", color: "green"}}>
          <motion.div
            initial={{ x: renderFromSubPage ? 0 : animation.initial, opacity: 0 }}
            animate={{ x: renderFromSubPage ? 0 : isVisible ? 0 : animation.animate, opacity: isVisible ? 1 : 0 }}
            exit={{ x: renderFromSubPage ? 0 : isVisible ? animation.animate : animation.animate, opacity: isVisible ? 0 : 1 }}
            transition={{ type: "spring", duration: 0.7 }}
            style={{width: "100%", height: windowWidth <= 1000 ? "100%" : ""}}
          >
            {windowWidth > 1000
            ? <HortizontalLine/>
            :  <VerticalLine/>
            }
          </motion.div>
        </div>
      : <></>


      }
    </div>
  );
}

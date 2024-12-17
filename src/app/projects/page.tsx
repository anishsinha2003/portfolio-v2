"use client"
import layoutStyle from "@/styles/pageLayout.module.css";
import { useEffect, useState } from "react";
import { useStringContext } from "@/components/StringContext";
import { useCurrentPageContext } from "@/components/contexts/CurrentPageContext";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Carousel from "@/components/projectsComponents/Carousel";
import data from "@/components/projectsComponents/data";
import GridLayoutCards from "@/components/projectsComponents/GridLayoutCards";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import { useWindowWidth } from "@/components/contexts/WindowWidthContext";
import { useDarkMode } from "@/components/contexts/DarkModeContext";

export default function Projects() {
  const windowWidth = useWindowWidth();
  const {isDarkMode} = useDarkMode();
  const [selectedLayout, setSelectedLayout] = useState<string>('carousel');
  const [showToggle, setShowToggle] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowToggle(true);
    }, 850);

    return () => clearTimeout(timer);
  }, []);


  const handleSelectLayout = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    if (newAlignment === selectedLayout || newAlignment === null || newAlignment === undefined) {
      return;
    }
    setSelectedLayout(newAlignment);
  };

  useEffect(() => {
    if (windowWidth < 1700) {
      setSelectedLayout("grid")
    }
  }, [windowWidth])

  const {prevPage, setPrevPage} = useStringContext();
  const {page, setPage} = useCurrentPageContext();
  const router = useRouter();

  const [isVisible, setIsVisible] = useState(true);
  const [animation, setAnimation] = useState({
    initial : prevPage === "/aboutMe" ||  prevPage === "/education" ? "400%" : "-400%",
    animate : "400%",
  })

  useEffect(() => {
    if (page !== "/projects") {
      if (page === "/aboutMe" ||  page === "/education") {
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

  if (windowWidth === 0) {
    return <></>
  }

  return (
    <div className={layoutStyle.main} style={{backgroundColor: "transparent", position: "relative"}}>
      <motion.div
        initial={{ x: animation.initial, opacity: 0 }}
        animate={{ x: isVisible ? 0 : animation.animate, opacity: isVisible ? 1 : 0 }}
        exit={{ x: isVisible ? animation.animate : animation.animate, opacity: isVisible ? 0 : 1 }}
        transition={{ type: "spring", duration: 0.7 }}
      >

        <div style={{backgroundColor: "transparent"}}>
          <div style={{ position: "relative", top: selectedLayout === "grid" ? "4px" : "0px" }}>
            {windowWidth >= 1700
              ?
              <>
                <div>
                  <ToggleButtonGroup
                    value={selectedLayout}
                    exclusive
                    onChange={handleSelectLayout}
                    sx={{
                      opacity:  0.8,
                    }}
                  >
                    <ToggleButton
                      value="carousel"
                      aria-label="carousel view"
                      sx={{
                        backgroundColor: isDarkMode
                          ? selectedLayout === "carousel"
                            ? "red"
                            : "grey"
                          : selectedLayout === "carousel"
                            ? "pink"
                            : "#EAEAEA",
                        color: selectedLayout === "carousel" ? "#fff" : "#000",
                        transition: "0.3s",
                        '&:hover': {
                          backgroundColor: isDarkMode ? "#aaaaaa" : "#afafaf",
                        },
                        '&.Mui-selected': {
                          backgroundColor: isDarkMode ? "#722b2a" : "#EDB7B7",
                          color: "#fff",
                        },
                        '&.Mui-selected:hover': {
                          backgroundColor: "#722b2a",
                        },
                        '& svg': {
                          color: isDarkMode
                          ? selectedLayout === "carousel"
                            ? "#aaaaaa"
                            : "#383838"
                          : selectedLayout === "carousel"
                            ? "white"
                            : "grey",
                        },
                      }}
                    >
                      <ViewCarouselIcon />
                    </ToggleButton>
                    <ToggleButton
                      value="grid"
                      aria-label="grid view"
                      sx={{
                        backgroundColor: isDarkMode
                          ? selectedLayout === "grid"
                            ? "red"
                            : "grey"
                          : selectedLayout === "grid"
                            ? "pink"
                            : "#EAEAEA",
                        color: selectedLayout === "grid" ? "#fff" : "#000",
                        transition: "0.3s",
                        '&:hover': {
                          backgroundColor: isDarkMode ? "#aaaaaa" : "#afafaf",
                        },
                        '&.Mui-selected': {
                          backgroundColor: isDarkMode ? "#722b2a" : "#EDB7B7",
                          color: "#fff",
                        },
                        '&.Mui-selected:hover': {
                          backgroundColor: isDarkMode ? "#722b2a" : "#EDB7B7"
                        },
                        '& svg': {
                          color: isDarkMode
                          ? selectedLayout === "grid"
                            ? "#aaaaaa"
                            : "#383838"
                          : selectedLayout === "grid"
                            ? "white"
                            : "grey",
                        },
                      }}

                    >
                      <ViewModuleIcon/>
                    </ToggleButton>
                  </ToggleButtonGroup>
                </div>
                  <br/><br/>
              </>
              : <></>
            }
          </div>
          <motion.div
            key={selectedLayout}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            {selectedLayout === "carousel" ? (
              <Carousel data={data} activeSlide={0} />
            ) : (
              <GridLayoutCards />
            )}
          </motion.div>
        </div>

      </motion.div>
    </div>
  );
}


// <button onClick={handlePreviousPage}>previous page</button>
// <motion.div
// key={currentPage}
//   initial={{ opacity: 0 }}
//   animate={{ opacity: 1 }}
//   exit={{ opacity: 0 }}
//   transition={{
//     duration: 1,
//     ease: 'easeInOut',
//   }}
// >
//   {displayedData.map((item: any, index: any) => (
//     <div key={index}>
//       <p>{item.name}{item.idx}</p>
//     </div>
//   ))}
// </motion.div>
// <button onClick={handleNextPage}>next page</button>
"use client"
import Image from "next/image";
import { Box, Tooltip } from "@mui/material";
import { useDarkMode } from "@/components/contexts/DarkModeContext";
import { useEffect, useRef, useState } from "react";

export default function HortizontalLine() {
  const {isDarkMode} = useDarkMode();

  const [unswToolTipOpen, setUnswToolTipOpen] = useState(false)
  const [cthsToolTipOpen, setCthsToolTipOpen] = useState(false)

  const cthsRef = useRef<HTMLDivElement>(null);
  const unswRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (cthsRef.current && !cthsRef.current.contains(event.target as Node)) {
      setCthsToolTipOpen(false)
    }
    if (unswRef.current && !unswRef.current.contains(event.target as Node)) {
      setUnswToolTipOpen(false)
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
    style={{width: "100%", height: "2px", backgroundColor: "grey", position: "relative", opacity: isDarkMode ? 1 : 0.8}}
    >
    {/* mfhs */}
    <div
      style={{
        position: "absolute",
        left: "10%",
        top: "-40px",
        textAlign: "center",
        width: "100px",
      }}
    >
      <div style={{fontFamily: "montserrat", color: isDarkMode ? "white" : "black", opacity: isDarkMode ? "0.2" : "0.5", letterSpacing: "1px"}}>2015 - 2016</div>
      <div
        style={{
          width: "20px",
          height: "20px",
          backgroundColor: isDarkMode ? "#962828" : "#D05859",
          borderRadius: "50%",
          margin: "8px auto 0",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          top: "70px",
          left: "-125px",
          backgroundColor: isDarkMode ? "#262626" : "#eaeaea",
          color: "black",
          padding: "10px",
          borderRadius: "8px",
          width: "350px",
          height: "100px",
          textAlign: "center",
          boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
          paddingLeft: '20px',
          paddingBottom: '10px',
        }}
      >
        <div style={{display: "flex", justifyContent: "row", alignItems: "center", width: "100%", height: "100%"}}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: isDarkMode ? "#5D5D5D" : "#AFAFAF",
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '7px',
              borderBottomLeftRadius: '4px',
              borderBottomRightRadius: '4px',
              margin: 0,
              padding: 0,
              paddingLeft: '20px',
            }}
          />
          <Image priority src={"/educationIcons/mfhs.png"} width={50} height={50} alt={""} style={{opacity: isDarkMode ? 0.6 : 0.8}}/>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <div style={{fontFamily: "montserrat", fontSize: "17px", color: isDarkMode ? "white" : "black", opacity: isDarkMode ? "0.3" : "0.5", letterSpacing: "0.5px"}}>
            Model Farms High School
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            top: "-5px",
            left: "calc(50% - 5px)",
            width: "100",
            height: "100",
            borderLeft: "5px solid transparent",
            borderRight: "5px solid transparent",
            borderBottom: isDarkMode ? "5px solid #262626" : "5px solid #eaeaea",
          }}
        ></div>
      </div>
    </div>


    {/* cths */}
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "-17px",
        transform: "translateX(-40%)",
        textAlign: "center",
        width: "100px",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-120px",
          left: "-145px",
          backgroundColor: isDarkMode ? "#262626" : "#eaeaea",
          color: "black",
          padding: "10px",
          borderRadius: "8px",
          width: "390px",
          height: "100px",
          textAlign: "center",
          boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
          paddingLeft: '20px',
          paddingBottom: '10px',
        }}
      >
        <div style={{display: "flex", justifyContent: "row", alignItems: "center", width: "100%", height: "100%"}}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: isDarkMode ? "#5D5D5D" : "#AFAFAF",
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '7px',
              borderTopLeftRadius: '4px',
              borderTopRightRadius: '4px',
              margin: 0,
              padding: 0,
              paddingLeft: '20px',
            }}
          />
          <Tooltip
            open={cthsToolTipOpen}
            disableHoverListener
            placement="top-start"
            title={
              <div style={{ color: "#9b9b9b", padding: 14, fontFamily: "montserrat", fontSize: 15, opacity: isDarkMode ? 0.5 : 1, textAlign: "left", letterSpacing: "0.7px", lineHeight: 1.7 }}>
                Graduated with an ATAR of&nbsp;
                <span style={{fontWeight: "bold", color: "#c47b7b"}}>96.1</span>&nbsp;
                with band 5 or 6 in &nbsp;
                <span style={{fontWeight: "bold"}}>Physics</span>,&nbsp;
                <span style={{fontWeight: "bold"}}>Biology</span>, &nbsp;
                <span style={{fontWeight: "bold"}}>Software</span>,&nbsp;
                <span style={{fontWeight: "bold"}}>Ext 1 & 2 Maths </span> &nbsp;
                and &nbsp;
                <span style={{fontWeight: "bold"}}>Adv English </span>
              </div>
            }
            sx={{
              width: "5000px"
            }}
            slotProps={{
              tooltip: {
                sx: {
                  backgroundColor: isDarkMode ? "#2b2b2b" : "rgb(250, 250, 250)",
                  border: isDarkMode ? "1px solid #595959" : "1px solid #c6c6c6",
                  minWidth: "600px",
                },
              },
            }}
          >
            <div
              ref={cthsRef}
              style={{
                position : "absolute",
                top: -30,
                left: 0,
                fontFamily: "montserrat",
                fontSize: "15px",
                letterSpacing: "0.6px",
                color: "#be4141",
                textDecoration: "underline",
                opacity: isDarkMode ? 0.5 : 0.8,
                cursor: "pointer"
              }}
              onClick={() => setCthsToolTipOpen(!cthsToolTipOpen)}
            >
              {cthsToolTipOpen
                ? <>HIDE</>
                : <>SHOW MORE</>
              }
            </div>
          </Tooltip>
          <Image priority src={"/educationIcons/cths.png"} width={50} height={50} alt={""} style={{opacity: isDarkMode ? 0.6 : 0.8}}/>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <div style={{fontFamily: "montserrat", fontSize: "17px", color: isDarkMode ? "white" : "black", opacity: isDarkMode ? "0.3" : "0.5", letterSpacing: "0.5px"}}>
            Cherrybrook Tech High School
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "-5px",
            left: "calc(50% - 5px)",
            width: "100",
            height: "100",
            borderLeft: "5px solid transparent",
            borderRight: "5px solid transparent",
            borderBottom: isDarkMode ? "5px solid #262626" : "5px solid #eaeaea",
            transform: "rotate(180deg)"
          }}
        ></div>
      </div>
      <div
        style={{
          width: "20px",
          height: "20px",
          backgroundColor: isDarkMode ? "#962828" : "#D05859",
          borderRadius: "50%",
          margin: "8px auto 0",
        }}
      ></div>
      <div style={{fontFamily: "montserrat", color: isDarkMode ? "white" : "black", opacity: isDarkMode ? "0.2" : "0.5", letterSpacing: "1px", paddingTop: "10px"}}>2017 - 2020</div>
    </div>

    {/* UNSW */}
    <div
      style={{
        position: "absolute",
        right: "10%",
        top: "-40px",
        textAlign: "center",
        width: "100px",
      }}
    >
      <div style={{fontFamily: "montserrat", color: isDarkMode ? "white" : "black", opacity: isDarkMode ? "0.2" : "0.5", letterSpacing: "1px"}}>2021 - 2025</div>
      <div
        style={{
          width: "20px",
          height: "20px",
          backgroundColor: isDarkMode ? "#962828" : "#D05859",
          borderRadius: "50%",
          margin: "8px auto 0",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          top: "70px",
          left: "-140px",
          backgroundColor: isDarkMode ? "#262626" : "#eaeaea",
          color: "black",
          padding: "10px",
          borderRadius: "8px",
          width: "380px",
          height: "100px",
          textAlign: "center",
          boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
          paddingLeft: '20px',
          paddingBottom: '10px',
        }}
      >
        <div style={{display: "flex", justifyContent: "row", alignItems: "center", width: "100%", height: "100%"}}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: isDarkMode ? "#5D5D5D" : "#AFAFAF",
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '7px',
              borderBottomLeftRadius: '4px',
              borderBottomRightRadius: '4px',
              margin: 0,
              padding: 0,
              paddingLeft: '20px',
            }}
          />
         <Tooltip
            open={unswToolTipOpen}
            disableHoverListener
            placement="top-start"
            title={
              <div style={{ color: "#9b9b9b", padding: 14, fontFamily: "montserrat", fontSize: 15, opacity: isDarkMode ? 0.5 : 1, textAlign: "left", letterSpacing: "0.7px", lineHeight: 1.7 }}>
                 <span style={{fontWeight: "bold", color: "#c47b7b"}}>Master of Biomedical Engineering/Bachelor of Software Engineering</span>&nbsp;
                  with a &nbsp;
                  <span style={{fontWeight: "bold"}}>Distinction WAM (75%+)</span>.
                  Completed high-achieving coursework in &nbsp;
                  <span style={{fontWeight: "bold"}}>Data Structures & Algorithms, Networks & Applications, Databases, and Web Frontend Development</span>.
              </div>
            }
            sx={{
              width: "5000px"
            }}
            slotProps={{
              tooltip: {
                sx: {
                  backgroundColor: isDarkMode ? "#2b2b2b" : "rgb(250, 250, 250)",
                  border: isDarkMode ? "1px solid #595959" : "1px solid #c6c6c6",
                  minWidth: "600px",
                },
              },
            }}
          >
          <div
            ref={unswRef}
            style={{
              position : "absolute",
              bottom: -30,
              left: 0,
              fontFamily: "montserrat",
              fontSize: "15px",
              letterSpacing: "0.6px",
              color: "#be4141",
              textDecoration: "underline",
              opacity: isDarkMode ? 0.5 : 0.8,
              cursor: "pointer"
            }}
            onClick={() => setUnswToolTipOpen(!unswToolTipOpen)}
          >
            {unswToolTipOpen
              ? <>HIDE</>
              : <>SHOW MORE</>
            }
          </div>
          </Tooltip>
          <Image priority src={"/educationIcons/unsw.png"} width={40} height={40} alt={""} style={{opacity: isDarkMode ? 0.6 : 0.8}}/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div style={{fontFamily: "montserrat", fontSize: "17px", color: isDarkMode ? "white" : "black", opacity: isDarkMode ? "0.3" : "0.5", letterSpacing: "0.5px"}}>
            University of New South Wales
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            top: "-5px",
            left: "calc(50% - 5px)",
            width: "100",
            height: "100",
            borderLeft: "5px solid transparent",
            borderRight: "5px solid transparent",
            borderBottom: isDarkMode ? "5px solid #262626" : "5px solid #eaeaea",
          }}
        ></div>
      </div>
    </div>

  </div>
  );
}

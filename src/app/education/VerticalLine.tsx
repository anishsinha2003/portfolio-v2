"use client"
import { Tooltip } from "@mui/material";
import { useDarkMode } from "@/components/contexts/DarkModeContext";
import { useEffect, useRef, useState } from "react";

export default function VerticalLine() {
  const [unswToolTipOpen, setUnswToolTipOpen] = useState(false)
  const [cthsToolTipOpen, setCthsToolTipOpen] = useState(false)
  const {isDarkMode} = useDarkMode();

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
      style={{
        width: "2px",
        backgroundColor: "grey",
        opacity: isDarkMode ? 1 : 0.8,
        margin: "0 auto",
        position: "relative",
        height: "100%",
        display: "flex",
        justifyContent: "space-around",
        flexDirection: "column"
      }}
    >
      <div
        key={"MFHS"}
        style={{
          position: "relative",
          marginBottom: "60px",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: "-176px",
            top: "41px",
            backgroundColor: isDarkMode ? "#262626" : "#eaeaea",
            color: "black",
            padding: "10px",
            borderRadius: "8px",
            textAlign: "center",
            boxShadow: isDarkMode ? "0px 4px 6px rgba(0, 0, 0, 0.1)" : "rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px"
,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              width: "100%",
              height: "100%",
            }}
          >
            <div
              style={{
                fontFamily: "montserrat",
                fontSize: "13px",
                color: isDarkMode ? "white" : "black",
                opacity: isDarkMode ? "0.3" : "0.7",
                letterSpacing: "0.5px",
              }}
            >
              Model Farms HS
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "100%",
              transform: "translateY(-50%)",
              borderTop: "5px solid transparent",
              borderBottom: "5px solid transparent",
              borderLeft: isDarkMode ? "5px solid #262626" : "5px solid #eaeaea",
            }}
          ></div>
        </div>
        <div
          style={{
            position: "absolute",
            top: "80%",
            transform: "translateX(-50%)",
            width: "45px",
            height: "45px",
            backgroundColor: "#962828",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "50%",
            zIndex: 1,
          }}
        >
          <div
              style={{
                width: "30px",
                height: "30px",
                // opacity: 0.8,
                backgroundImage: "url(/educationIcons/mfhs.png)",
                backgroundSize: "cover",
                borderRadius: "50%",
              }}
            ></div>

        </div>
        <div
          style={{
            fontFamily: "montserrat",
            color: isDarkMode ? "white" : "black",
            opacity: isDarkMode ? "0.2" : "0.5",
            letterSpacing: "1px",
            fontSize: "14px",
            marginTop: "30px",
            textAlign: "center",
            position: "relative",
            bottom: -24,
            right: -30,
            width: "100px"
          }}
        >
          2015 - 2016
        </div>
      </div>
      <div
        key={"CTHS"}
        style={{
          position: "relative",
          marginBottom: "60px",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: "-155px",
            top: "22px",
            backgroundColor: isDarkMode ? "#262626" : "#eaeaea",
            color: "black",
            padding: "10px",
            paddingRight: "15px",
            borderRadius: "8px",
            textAlign: "center",
            boxShadow: isDarkMode ? "0px 4px 6px rgba(0, 0, 0, 0.1)" : "rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px"
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "flex-end",
              textAlign: "left",
              flexDirection: "column",
              width: "100%",
              height: "100%",
            }}
          >
            <div
              style={{
                fontFamily: "montserrat",
                fontSize: "13px",
                color: isDarkMode ? "white" : "black",
                opacity: isDarkMode ? "0.3" : "0.7",
                letterSpacing: "0.5px",
                paddingBottom: "10px"
              }}
            >
              Cherrybrook <br/> Tech HS
            </div>
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
                width: "3000px"
              }}
              slotProps={{
                tooltip: {
                  sx: {
                    backgroundColor: isDarkMode ? "#2b2b2b" : "rgb(250, 250, 250)",
                    border: isDarkMode ? "1px solid #595959" : "1px solid #c6c6c6",
                    minWidth: "300px",
                  },
                },
              }}
            >
              <div
                ref={cthsRef}
                style={{
                  // position : "absolute",
                  top: -30,
                  left: 0,
                  fontFamily: "montserrat",
                  fontSize: "11px",
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
          </div>
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "100%",
              transform: "translateY(-50%)",
              borderTop: "5px solid transparent",
              borderBottom: "5px solid transparent",
              borderLeft: isDarkMode ? "5px solid #262626" : "5px solid #eaeaea",
            }}
          ></div>
        </div>
        <div
          style={{
            position: "absolute",
            top: "80%",
            transform: "translateX(-50%)",
            width: "45px",
            height: "45px",
            backgroundColor: "#962828",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "50%",
            zIndex: 1,
          }}
        >
          <div
              style={{
                width: "30px",
                height: "30px",
                // opacity: 0.9,
                backgroundImage: "url(/educationIcons/cths.png)",
                backgroundSize: "cover",
                borderRadius: "50%",
              }}
            ></div>

        </div>
        <div
          style={{
            fontFamily: "montserrat",
            color: isDarkMode ? "white" : "black",
            opacity: isDarkMode ? "0.2" : "0.5",
            letterSpacing: "1px",
            fontSize: "14px",
            marginTop: "30px",
            textAlign: "center",
            position: "relative",
            bottom: -24,
            right: -30,
            width: "100px"
          }}
        >
          2017 - 2020
        </div>
      </div>
      <div
        key={"UNSW"}
        style={{
          position: "relative",
          marginBottom: "60px",
          // top: "60%"
        }}
      >
        <div
          style={{
            position: "absolute",
            left: "-155px",
            top: "25px",
            backgroundColor: isDarkMode ? "#262626" : "#eaeaea",
            color: "black",
            padding: "10px",
            borderRadius: "8px",
            textAlign: "center",
            paddingRight: "15px",
            boxShadow: isDarkMode ? "0px 4px 6px rgba(0, 0, 0, 0.1)" : "rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px"
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "flex-end",
              textAlign: "left",
              flexDirection: "column",
              width: "100%",
              height: "100%",
            }}
          >
            <div
              style={{
                fontFamily: "montserrat",
                fontSize: "13px",
                color: isDarkMode ? "white" : "black",
                opacity: isDarkMode ? "0.3" : "0.7",
                letterSpacing: "0.5px",
                paddingBottom: "10px",
              }}
            >
              University of <br/>NSW
            </div>
            <Tooltip
              placement="top-start"
              open={unswToolTipOpen}
              disableHoverListener
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
                width: "3000px"
              }}
              slotProps={{
                tooltip: {
                  sx: {
                    backgroundColor: isDarkMode ? "#2b2b2b" : "rgb(250, 250, 250)",
                    border: isDarkMode ? "1px solid #595959" : "1px solid #c6c6c6",
                    minWidth: "300px",
                  },
                },
              }}
            >
              <div
                ref={unswRef}
                style={{
                  // position : "absolute",
                  top: -30,
                  left: 0,
                  fontFamily: "montserrat",
                  fontSize: "11px",
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
          </div>
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "100%",
              transform: "translateY(-50%)",
              borderTop: "5px solid transparent",
              borderBottom: "5px solid transparent",
              borderLeft: isDarkMode ? "5px solid #262626" : "5px solid #eaeaea",
            }}
          ></div>
        </div>
        <div
          style={{
            position: "absolute",
            top: "80%",
            transform: "translateX(-50%)",
            width: "45px",
            height: "45px",
            backgroundColor: "#962828",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "50%",
            zIndex: 1,
          }}
        >
          <div
              style={{
                width: "30px",
                height: "30px",
                backgroundImage: "url(/educationIcons/unsw.png)",
                backgroundSize: "cover",
              }}
            ></div>

        </div>
        <div
          style={{
            fontFamily: "montserrat",
            color: isDarkMode ? "white" : "black",
            opacity: isDarkMode ? "0.2" : "0.5",
            letterSpacing: "1px",
            fontSize: "14px",
            marginTop: "30px",
            textAlign: "center",
            position: "relative",
            bottom: -24,
            right: -30,
            width: "100px"
          }}
        >
          2017 - 2020
        </div>
      </div>

      {/* <div
        key={"CTHS"}
        style={{
          position: "relative",
          marginBottom: "60px",
          bottom: "-170px"
        }}
      >
        <div
          style={{
            position: "absolute",
            right: "-425px",
            top: "-40px",
            backgroundColor: "#262626",
            color: "black",
            padding: "10px",
            borderRadius: "8px",
            width: "390px",
            height: "100px",
            textAlign: "center",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              height: "100%",
            }}
          >
            <div
              style={{
                width: "50px",
                height: "50px",
                opacity: 0.6,
                backgroundImage: "url(/cths.png)",
                backgroundSize: "cover",
                borderRadius: "50%",
              }}
            ></div>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <div
              style={{
                fontFamily: "montserrat",
                fontSize: "17px",
                color: "white",
                opacity: "0.3",
                letterSpacing: "0.5px",
              }}
            >
              Cherrybrook Tech High School
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              top: "50%",
              right: "100%",
              transform: "translateY(-50%)",
              borderTop: "5px solid transparent",
              borderBottom: "5px solid transparent",
              borderRight: "5px solid #262626",
            }}
          ></div>
        </div>
        <div
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            width: "20px",
            height: "20px",
            backgroundColor: "#962828",
            borderRadius: "50%",
            zIndex: 1,
          }}
        ></div>
        <div
          style={{
            fontFamily: "montserrat",
            color: "white",
            opacity: "0.2",
            letterSpacing: "1px",
            marginTop: "30px",
            textAlign: "center",
            position: "relative",
            bottom: 0,
            left: -130,
            width: "100px"
          }}
        >
          2017 - 2020
        </div>
      </div>

      <div
        key={"UNSW"}
        style={{
          position: "relative",
          marginBottom: "60px",
          bottom: "-240px"
        }}
      >
        <div
          style={{
            position: "absolute",
            left: "-410px",
            top: "-40px",
            backgroundColor: "#262626",
            color: "black",
            padding: "10px",
            borderRadius: "8px",
            width: "380px",
            height: "100px",
            textAlign: "center",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              height: "100%",
            }}
          >
            <div
              style={{
                width: "45px",
                height: "45px",
                opacity: 0.6,
                backgroundImage: "url(/unsw.png)",
                backgroundSize: "cover",
                borderRadius: "50%",
              }}
            ></div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div
              style={{
                fontFamily: "montserrat",
                fontSize: "17px",
                color: "white",
                opacity: "0.3",
                letterSpacing: "0.5px",
              }}
            >
              University of New South Wales
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "100%",
              transform: "translateY(-50%)",
              borderTop: "5px solid transparent",
              borderBottom: "5px solid transparent",
              borderLeft: isDarkMode ? "5px solid #262626" : "5px solid #eaeaea",
            }}
          ></div>
        </div>
        <div
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            width: "20px",
            height: "20px",
            backgroundColor: "#962828",
            borderRadius: "50%",
            zIndex: 1,
          }}
        ></div>
        <div
          style={{
            fontFamily: "montserrat",
            color: "white",
            opacity: "0.2",
            letterSpacing: "1px",
            marginTop: "30px",
            textAlign: "center",
            position: "relative",
            bottom: 0,
            right: -30,
            width: "100px"
          }}
        >
          2021 - 2025
        </div>
      </div> */}
    </div>

  );
}


import React from "react"
import "./ocr.css"
function Ocr()  {
	
	
	return ( 
	<div className="stl_02">
  <div className="stl_03">
    <img
      src="data:image/png;base64,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AAAgQ8AAAAAZAgYAAMgQMAAAQIaAAQAAMgQMAACQIWAAAIAMAQMAAGQIGAAAIEPAAAAAGQIGAADIEDAAAECGgAEAADIEDAAAkCFgAACADAEDAABkCBgAACBDwAAAABkCBgAAyBAwAABAhoABAAAyBAwAAJAhYAAAgAwBAwAAZAgYAAAgQ8AAAAAZAgYAAMgQMAAAQIaAAQAAMgQMAACQIWAAAIAMAQMAAGQIGAAAIEPAAAAAGQIGAADIEDAAAECGgAEAADIEDAAAkCFgAACADAEDAABkCBgAACBDwAAAABkCBgAAyBAwAABAhoABAAAyBAwAAJAhYAAAgAwBAwAAZAgYAAAgQ8AAAAAZAgYAAMgQMAAAQIaAAQAAMgQMAACQIWAAAIAMAQMAAGQIGAAAIEPAAAAAGQIGAADIEDAAAECGgAEAADIEDAAAkCFgAACADAEDAABkCBgAACBDwAAAABkCBgAAyBAwAABAhoABAAAyBAwAAJAhYAAAgAwBAwAAZAgYAAAgQ8AAAAAZAgYAAMgQMAAAQIaAAQAAMgQMAACQIWAAAIAMAQMAAGQIGAAAIEPAAAAAGQIGAADIEDAAAECGgAEAADIEDAAAkCFgAACADAEDAABkCBgAACBDwAAAABkCBgAAyBAwAABAhoABAAAyBAwAAJAhYAAAgAwBAwAAZAgYAAAgQ8AAAAAZAgYAAMgQMAAAQIaAAQAAMgQMAACQIWAAAIAMAQMAAGQIGAAAIEPAAAAAGQIGAADIEDAAAECGgAEAADIEDAAAkCFgAACADAEDAABkCBgAACBDwAAAABkCBgAAyBAwAABAhoABAAAyBAwAAJAhYAAAgAwBAwAAZAgYAAAgQ8AAAAAZAgYAAMgQMAAAQIaAAQAAMgQMAACQIWAAAIAMAQMAAGQIGAAAIEPAAAAAGQIGAADIEDAAAECGgAEAADIEDAAAkCFgAACADAEDAABkCBgAACBDwAAAABkCBgAAyBAwAABAhoABAAAyBAwAAJAhYAAAgAwBAwAAZAgYAAAgQ8AAAAAZAgYAAMgQMAAAQIaAAQAAMgQMAACQIWAAAIAMAQMAAGQIGAAAIEPAAAAAGQIGAADIEDAAAECGgAEAADIEDAAAkCFgAACADAEDAABkCBgAACBDwAAAABkCBgAAyBAwAABAhoABAAAyBAwAAJAhYAAAgAwBAwAAZAgYAAAgQ8AAAAAZAgYAAMgQMAAAQIaAAQAAMgQMAACQIWAAAIAMAQMAAGQIGAAAIEPAAAAAGQIGAADImC5gjuMY+76bmZmZmdmz9z6eiYAxMzMzM5t4AgYAAOCHCBgAACBDwAAAABkCBgAAyBAwAABAhoABAAAyBAwAAJAhYAAAgAwBAwAAZAgYAAAgQ8AAAAAZAgYAAMgQMAAAQIaAAQAAMgQMAACQIWAAAIAMAQMAAGQIGAAAIEPAAAAAGQIGAADIEDAAAECGgAEAADIEDAAAkCFgAACADAEDAABkCBgAACBDwAAAABkCBgAAyBAwAABAhoABAAAyBAwAAJAhYAAAgAwBAwAAZAgYAAAgQ8AAAAAZAgYAAMgQMAAAQIaAAQAAMgQMAACQIWAAAIAMAQMAAGQIGAAAIEPAAAAAGQIGAADIEDAAAECGgAEAADIEDAAAkCFgAACADAEDAABkCBgAACBDwAAAABkCBgAAyBAwAABAhoABAAAyBAwAAJAhYAAAgAwBAwAAZAgYAAAgQ8AAAAAZAgYAAMgQMAAAQIaAAQAAMgQMAACQIWAAAIAMAQMAAGQIGAAAIEPAAAAAGQIGAADIEDAAAECGgAEAADIEDAAAkCFgAACADAEDAABkCBgAACBDwAAAABkCBgAAyBAwAABAhoABAAAyBAwAAJAhYAAAgAwBAwAAZAgYAAAgQ8AAAAAZAgYAAMgQMAAAQIaAAQAAMgQMAACQIWAAAIAMAQMAAGQIGAAAIEPAAAAAGQIGAADIEDAAAECGgAEAADIEDAAAkCFgAACADAEDAABkCBgAACBDwAAAABkCBgAAyBAwAABAhoABAAAyBAwAAJAhYAAAgAwBAwAAZAgYAAAgQ8AAAAAZAgYAAMgQMAAAQIaAAQAAMgQMAACQIWAAAIAMAQMAAGQIGAAAIEPAAAAAGQIGAADIEDAAAECGgAEAADIEDAAAkCFgAACADAEDAABkCBgAACBDwAAAABkCBgAAyBAwAABAhoABAAAyBAwAAJAhYAAAgAwBAwAAZAgYAAAgQ8AAAAAZAgYAAMgQMAAAQIaAAQAAMgQMAACQIWAAAIAMAQMAAGQIGAAAIEPAAAAAGQIGAADIEDAAAECGgAEAADKmC5jjOMa+72ZmZmZm9uy9j2ciYMzMzMzMJp6AAQAA+CECBgAAyBAwAABAhoABAAAyBAwAAJAhYAAAgAwBAwAAZAgYAAAgQ8AAAAAZAgYAAMgQMAAAQIaAAQAAMgQMAACQIWAAAIAMAQMAAGQIGAAAIEPAAAAAGQIGAADIEDAAAECGgAEAADIEDAAAkCFgAACADAEDAABkCBgAACBDwAAAABkCBgAAyBAwAABAhoABAAAyBAwAAJAhYAAAgAwBAwAAZAgYAAAgQ8AAAAAZAgYAAMgQMAAAQIaAAQAAMgQMAACQIWAAAIAMAQMAAGQIGAAAIEPAAAAAGQIGAADIEDAAAECGgAEAADIEDAAAkCFgAACADAEDAABkCBgAACBDwAAAABkCBgAAyBAwAABAhoABAAAyBAwAAJAhYAAAgAwBAwAAZAgYAAAgQ8AAAAAZAgYAAMgQMAAAQIaAAQAAMgQMAACQIWAAAIAMAQMAAGQIGAAAIEPAAAAAGQIGAADIEDAAAECGgAEAADIEDAAAkCFgAACADAEDAABkCBgAACBDwAAAABkCBgAAyBAwAABAhoABAAAyBAwAAJAhYAAAgAwBAwAAZAgYAAAgQ8AAAAAZAgYAAMgQMAAAQIaAAQAAMgQMAACQIWAAAIAMAQMAAGQIGAAAIEPAAAAAGQIGAADIEDAAAECGgAEAADIEDAAAkCFgAACADAEDAABkCBgAACBDwAAAABkCBgAAyBAwAABAhoABAAAyBAwAAJAhYAAAgAwBAwAAZAgYAAAgQ8AAAAAZAgYAAMgQMAAAQIaAAQAAMgQMAACQIWAAAIAMAQMAAGQIGAAAIEPAAAAAGQIGAADIEDAAAECGgAEAADIEDAAAkCFgAACADAEDAABkCBgAACBDwAAAABkCBgAAyBAwAABAhoABAAAyBAwAAJAhYAAAgAwBAwAAZAgYAAAgQ8AAAAAZAgYAAMgQMAAAQIaAAQAAMgQMAACQIWAAAIAMAQMAAGQIGAAAIEPAAAAAGQIGAADIEDAAAECGgAEAADIEDAAAkCFgAACADAEDAABkCBgAACBDwAAAABkCBgAAyBAwAABAhoABAAAyBAwAAJAhYAAAgAwBAwAAZAgYAAAgQ8AAAAAZAgYAAMgQMAAAQIaAAQAAMgQMAACQIWAAAIAMAQMAAGQIGAAAIEPAAAAAGQIGAADIEDAAAECGgAEAADIEDAAAkCFgAACADAEDAABkCBgAACBDwAAAABkCBgAAyBAwAABAhoABAAAyBAwAAJAhYAAAgAwBAwAAZAgYAAAgQ8AAAAAZAgYAAMgQMAAAQIaAAQAAMgQMAACQIWAAAIAMAQMAAGQIGAAAIEPAAAAAGQIGAADIEDAAAECGgAEAADIEDAAAkCFgAACADAEDAABkCBgAACBDwAAAABkCBgAAyBAwAABAhoABAAAyBAwAAJAhYAAAgAwBAwAAZAgYAAAgQ8AAAAAZAgYAAMgQMAAAQIaAAQAAMgQMAACQIWAAAIAMAQMAAGQIGAAAIEPAAAAAGdMFzLIs4/P5mJmZmZnZs/c+nok/MAAAQIaAAQAAMgQMAACQIWAAAIAMAQMAAGQIGAAAIEPAAAAAGQIGAADIEDAAAECGgAEAADIEDAAAkCFgAACADAEDAABkCBgAACBDwAAAABkCBgAAyBAwAABAhoABAAAyBAwAAJAhYAAAgAwBAwAAZAgYAAAgQ8AAAAAZAgYAAMgQMAAAQIaAAQAAMgQMAACQIWAAAIAMAQMAAGQIGAAAIEPAAAAAGQIGAADIEDAAAECGgAEAADIEDAAAkCFgAACADAEDAABkCBgAACBDwAAAABkCBgAAyBAwAABAhoABAAAyBAwAAJAhYAAAgAwBAwAAZAgYAAAgQ8AAAAAZAgYAAMgQMAAAQIaAAQAAMgQMAACQIWAAAIAMAQMAAGQIGAAAIEPAAAAAGQIGAADIEDAAAECGgAEAADIEDAAAkCFgAACADAEDAABkCBgAACBDwAAAABkCBgAAyBAwAABAhoABAAAyBAwAAJAhYAAAgAwBAwAAZAgYAAAgQ8AAAAAZAgYAAMgQMAAAQIaAAQAAMgQMAACQIWAAAIAMAQMAAGQIGAAAIEPAAAAAGQIGAADIEDAAAECGgAEAADIEDAAAkCFgAACADAEDAABkCBgAACBDwAAAABkCBgAAyBAwAABAhoABAAAyBAwAAJAhYAAAgAwBAwAAZAgYAAAgQ8AAAAAZAgYAAMgQMAAAQIaAAQAAMgQMAACQIWAAAIAMAQMAAGQIGAAAIEPAAAAAGQIGAADIEDAAAECGgAEAADIEDAAAkCFgAACADAEDAABkCBgAACBDwAAAABkCBgAAyBAwAABAhoABAAAyBAwAAJAhYAAAgAwBAwAAZAgYAAAgQ8AAAAAZAgYAAMgQMAAAQIaAAQAAMgQMAACQIWAAAIAMAQMAAGQIGAAAIEPAAAAAGQIGAADIEDAAAECGgAEAADIEDAAAkCFgAACADAEDAABkCBgAACBDwAAAABkCBgAAyBAwAABAhoABAAAyBAwAAJAhYAAAgAwBAwAAZAgYAAAgQ8AAAAAZAgYAAMgQMAAAQIaAAQAAMgQMAACQIWAAAIAMAQMAAGQIGAAAIEPAAAAAGQIGAADIEDAAAECGgAEAADIEDAAAkCFgAACADAEDAABkCBgAACBDwAAAABkCBgAAyBAwAABAhoABAAAyBAwAAJAhYAAAgAwBAwAAZAgYAAAgQ8AAAAAZAgYAAMgQMAAAQIaAAQAAMgQMAACQIWAAAIAMAQMAAGQIGAAAIEPAAAAAGQIGAADIEDAAAECGgAEAADIEDAAAkCFgAACADAEDAABkCBgAACBDwAAAABkCBgAAyBAwAABAhoABAAAyBAwAAJAhYAAAgAwBAwAAZAgYAAAgQ8AAAAAZAgYAAMgQMAAAQIaAAQAAMgQMAACQIWAAAIAMAQMAAGQIGAAAIEPAAAAAGQIGAADIEDAAAECGgAEAADIEDAAAkCFgAACADAEDAABkCBgAACBDwAAAABkCBgAAyBAwAABAhoABAAAyBAwAAJAhYAAAgAwBAwAAZAgYAAAgQ8AAAAAZAgYAAMgQMAAAQIaAAQAAMgQMAACQIWAAAIAMAQMAAGQIGAAAIEPAAAAAGQIGAADIEDAAAEDEGP8B2f1ffqmtbSIAAAAASUVORK5CYII="
      alt=""
      className="stl_04"
    />
  </div>
  <div className="stl_view">
    <div className="stl_05 stl_06">
      <div className="stl_01" style={{ top: "3.0602em", left: "20.5626em" }}>
        <a href="mailto:thomaswconrad2004@gmail.com" target="_blank">
          <span
            className="stl_07 stl_08"
            style={{ fontWeight: "bold", wordSpacing: "0.09em" }}
          >
            Thomas Conrad &nbsp;
          </span>
        </a>
      </div>
      <div className="stl_01" style={{ top: "4.9123em", left: "12.7342em" }}>
        <span className="stl_09 stl_08" style={{ wordSpacing: "0.03em" }}>
          College Park, MD |{" "}
        </span>
        <a href="mailto:thomaswconrad2004@gmail.com" target="_blank">
          <span className="stl_09 stl_10" style={{ wordSpacing: "0em" }}>
            thomaswconrad2004@<span className="stl_08">gmail.com </span>
          </span>
        </a>
        <span className="stl_09" style={{ wordSpacing: "0em" }}>
          |{" "}
        </span>
        <a href="tel:+13012335934" target="_blank">
          <span className="stl_09 stl_10" style={{ wordSpacing: "0em" }}>
            301-233-<span className="stl_08">5984 &nbsp;</span>
          </span>
        </a>
      </div>
      <div className="stl_01" style={{ top: "6.1316em", left: "3em" }}>
        <span className="stl_11 stl_08" style={{ fontWeight: "bold" }}>
          EDUCATIO<span className="stl_12">N &nbsp;</span>
        </span>
      </div>
      <div className="stl_01" style={{ top: "7.805em", left: "3em" }}>
        <span
          className="stl_13 stl_08"
          style={{ fontWeight: "bold", wordSpacing: "0.07em" }}
        >
          University of Maryland &nbsp;
        </span>
      </div>
      <div className="stl_01" style={{ top: "7.805em", left: "40.832em" }}>
        <span
          className="stl_13 stl_08"
          style={{ fontWeight: "bold", wordSpacing: "0.05em" }}
        >
          College Park, MD &nbsp;
        </span>
      </div>
      <div className="stl_01" style={{ top: "9.0172em", left: "3em" }}>
        <span
          className="stl_14 stl_08"
          style={{ fontStyle: "italic", wordSpacing: "0.04em" }}
        >
          Computer Science - Sophomore &nbsp;
        </span>
      </div>
      <div className="stl_01" style={{ top: "9.0172em", left: "39.687em" }}>
        <span
          className="stl_14 stl_08"
          style={{ fontStyle: "italic", wordSpacing: "0.06em" }}
        >
          Graduating May 2027 &nbsp;
        </span>
      </div>
      <div className="stl_01" style={{ top: "10.2294em", left: "3em" }}>
        <span
          className="stl_13 stl_12"
          style={{ fontWeight: "bold", wordSpacing: "0.04em" }}
        >
          GPA:{" "}
        </span>
        <span className="stl_09 stl_08" style={{ wordSpacing: "0.02em" }}>
          3.76<span className="stl_12">5 &nbsp;</span>
        </span>
      </div>
      <div className="stl_01" style={{ top: "11.4416em", left: "3em" }}>
        <span
          className="stl_13 stl_08"
          style={{ fontWeight: "bold", wordSpacing: "0.06em" }}
        >
          Relevant Coursework:{" "}
        </span>
        <span className="stl_09 stl_08" style={{ wordSpacing: "0.05em" }}>
          Object Oriented Programming I &amp; II, Calculus II, Systems
          Programming, Ethics of AI, &nbsp;
        </span>
      </div>
      <div className="stl_01" style={{ top: "12.6538em", left: "12em" }}>
        <span className="stl_09 stl_08" style={{ wordSpacing: "0.07em" }}>
          Discrete Structures, Calculus III, Organization of Programming
          Languages, Algorithms &nbsp;
        </span>
      </div>
      <div className="stl_01" style={{ top: "15.0853em", left: "3em" }}>
        <span
          className="stl_11 stl_10"
          style={{ fontWeight: "bold", wordSpacing: "0em" }}
        >
          WORK EXPERIE<span className="stl_08">NCE &nbsp;</span>
        </span>
      </div>
      <div className="stl_01" style={{ top: "16.8198em", left: "3em" }}>
        <span
          className="stl_13 stl_08"
          style={{ fontWeight: "bold", wordSpacing: "0.05em" }}
        >
          Code Wizards &nbsp;
        </span>
      </div>
      <div className="stl_01" style={{ top: "16.8198em", left: "43.603em" }}>
        <span
          className="stl_13 stl_08"
          style={{ fontWeight: "bold", wordSpacing: "0.06em" }}
        >
          Austin, TX &nbsp;
        </span>
      </div>
      <div className="stl_01" style={{ top: "18.032em", left: "3em" }}>
        <span
          className="stl_14 stl_08"
          style={{ fontStyle: "italic", wordSpacing: "0.1em" }}
        >
          Programming Instructor &nbsp;
        </span>
      </div>
      <div className="stl_01" style={{ top: "18.032em", left: "39.916em" }}>
        <span
          className="stl_14 stl_08"
          style={{ fontStyle: "italic", wordSpacing: "0.03em" }}
        >
          June 2023 - Oct 2023 &nbsp;
        </span>
      </div>
      <div className="stl_01" style={{ top: "19.2352em", left: "4.5em" }}>
        <span className="stl_15">●</span>
      </div>
      <div className="stl_01" style={{ top: "20.4521em", left: "4.5em" }}>
        <span className="stl_15">●</span>
      </div>
      <div className="stl_01" style={{ top: "21.6689em", left: "4.5em" }}>
        <span className="stl_15">●</span>
      </div>
      <div className="stl_01" style={{ top: "19.2482em", left: "6em" }}>
        <span className="stl_09 stl_08" style={{ wordSpacing: "0.05em" }}>
          Taught programming fundamentals in Python to 6 classNamees
          concurrently &nbsp;
        </span>
      </div>
      <div className="stl_01" style={{ top: "20.465em", left: "6em" }}>
        <span className="stl_09 stl_08" style={{ wordSpacing: "0.05em" }}>
          Graded, evaluated, and debugged code for 30 different students &nbsp;
        </span>
      </div>
      <div className="stl_01" style={{ top: "21.6819em", left: "6em" }}>
        <span className="stl_09 stl_08" style={{ wordSpacing: "0.05em" }}>
          Recorded academic performance and applied this information to better
          help students &nbsp;
        </span>
      </div>
      <div className="stl_01" style={{ top: "23.4456em", left: "3.1233em" }}>
        <span
          className="stl_13 stl_08"
          style={{ fontWeight: "bold", wordSpacing: "0.06em" }}
        >
          American Indian Education Program &nbsp;
        </span>
      </div>
      <div className="stl_01" style={{ top: "23.4456em", left: "42.3523em" }}>
        <span
          className="stl_13 stl_08"
          style={{ fontWeight: "bold", wordSpacing: "0.08em" }}
        >
          Rockville, MD &nbsp;
        </span>
      </div>
      <div className="stl_01" style={{ top: "24.6578em", left: "3.0379em" }}>
        <span className="stl_14 stl_12" style={{ fontStyle: "italic" }}>
          Tuto<span className="stl_08">r &nbsp;</span>
        </span>
      </div>
      <div className="stl_01" style={{ top: "24.6578em", left: "38.7859em" }}>
        <span
          className="stl_14 stl_08"
          style={{ fontStyle: "italic", wordSpacing: "0.03em" }}
        >
          March 2022 - April 2023 &nbsp;
        </span>
      </div>
      <div className="stl_01" style={{ top: "25.8611em", left: "4.5em" }}>
        <span className="stl_15">●</span>
      </div>
      <div className="stl_01" style={{ top: "25.874em", left: "6em" }}>
        <span className="stl_09 stl_08" style={{ wordSpacing: "0.04em" }}>
          Taught programming, mathematics, history, and English to marginalized
          students &nbsp;
        </span>
      </div>
      <div className="stl_01" style={{ top: "28.3061em", left: "3em" }}>
        <span className="stl_11" style={{ fontWeight: "bold" }}>
          SKILLS &nbsp;
        </span>
      </div>
      <div className="stl_01" style={{ top: "29.9706em", left: "4.5em" }}>
        <span className="stl_15">●</span>
      </div>
      <div className="stl_01" style={{ top: "29.9836em", left: "6em" }}>
        <span className="stl_09 stl_08" style={{ wordSpacing: "0.05em" }}>
          Proficiency and experience with software development in an academic
          context with Java, Python, C, and C++, &nbsp;
        </span>
      </div>
      <div className="stl_01" style={{ top: "31.1964em", left: "6em" }}>
        <span className="stl_09 stl_08" style={{ wordSpacing: "0.05em" }}>
          using version control tools such as Git, and relational databases with
          MySQL. &nbsp;
        </span>
      </div>
      <div className="stl_01" style={{ top: "32.4126em", left: "6em" }}>
        <span className="stl_09 stl_08" style={{ wordSpacing: "0.05em" }}>
          Experienced in developing software on Windows, Linux and Unix-like
          operating systems. &nbsp;
        </span>
      </div>
      <div className="stl_01" style={{ top: "33.6294em", left: "6em" }}>
        <span className="stl_09 stl_08" style={{ wordSpacing: "0.05em" }}>
          Proficiency and experience with web development in personal projects,
          with Javascript/Typescript, React, CSS, &nbsp;
        </span>
      </div>
      <div className="stl_01" style={{ top: "34.8422em", left: "6em" }}>
        <span className="stl_09 stl_08" style={{ wordSpacing: "0.04em" }}>
          HTML, and Node &nbsp;
        </span>
      </div>
      <div className="stl_01" style={{ top: "32.3996em", left: "4.5em" }}>
        <span className="stl_15">●</span>
      </div>
      <div className="stl_01" style={{ top: "33.6164em", left: "4.5em" }}>
        <span className="stl_15">●</span>
      </div>
      <div className="stl_01" style={{ top: "37.2737em", left: "3em" }}>
        <span
          className="stl_11 stl_08"
          style={{ fontWeight: "bold", wordSpacing: "0.09em" }}
        >
          LEADERSHIP EXPERIENCE &amp; ACTIVITIES &nbsp;
        </span>
      </div>
      <div className="stl_01" style={{ top: "38.9471em", left: "3.1497em" }}>
        <span
          className="stl_13 stl_08"
          style={{ fontWeight: "bold", wordSpacing: "0.04em" }}
        >
          National Technical Honors Society &nbsp;
        </span>
      </div>
      <div className="stl_01" style={{ top: "38.9471em", left: "42.6077em" }}>
        <span
          className="stl_13 stl_08"
          style={{ fontWeight: "bold", wordSpacing: "0.06em" }}
        >
          Potomac, MD &nbsp;
        </span>
      </div>
      <div className="stl_01" style={{ top: "40.1593em", left: "3.2232em" }}>
        <span
          className="stl_14 stl_08"
          style={{ fontStyle: "italic", wordSpacing: "0.07em" }}
        >
          Chapter Secretary &nbsp;
        </span>
      </div>
      <div className="stl_01" style={{ top: "40.1593em", left: "39.9102em" }}>
        <span
          className="stl_14 stl_08"
          style={{ fontStyle: "italic", wordSpacing: "0.03em" }}
        >
          Nov 2022 - June 2023 &nbsp;
        </span>
      </div>
      <div className="stl_01" style={{ top: "41.3626em", left: "4.5em" }}>
        <span className="stl_15">●</span>
      </div>
      <div className="stl_01" style={{ top: "42.5794em", left: "4.5em" }}>
        <span className="stl_15">●</span>
      </div>
      <div className="stl_01" style={{ top: "41.3755em", left: "6em" }}>
        <span className="stl_09 stl_08" style={{ wordSpacing: "0.06em" }}>
          Organized meetings and distribution of materials &nbsp;
        </span>
      </div>
      <div className="stl_01" style={{ top: "42.5924em", left: "6em" }}>
        <span className="stl_09 stl_08" style={{ wordSpacing: "0.04em" }}>
          Communicated with students and faculty about management of the
          organization and the needs of the group &nbsp;
        </span>
      </div>
      <div className="stl_01" style={{ top: "44.3561em", left: "3.1497em" }}>
        <span
          className="stl_13 stl_08"
          style={{ fontWeight: "bold", wordSpacing: "0.05em" }}
        >
          WCHS Game Development Club &nbsp;
        </span>
      </div>
      <div className="stl_01" style={{ top: "44.3561em", left: "42.6077em" }}>
        <span
          className="stl_13 stl_08"
          style={{ fontWeight: "bold", wordSpacing: "0.06em" }}
        >
          Potomac, MD &nbsp;
        </span>
      </div>
      <div className="stl_01" style={{ top: "45.5683em", left: "3.1216em" }}>
        <span className="stl_14 stl_08" style={{ fontStyle: "italic" }}>
          Presiden<span className="stl_10">t &nbsp;</span>
        </span>
      </div>
      <div className="stl_01" style={{ top: "45.5683em", left: "39.8086em" }}>
        <span
          className="stl_14 stl_08"
          style={{ fontStyle: "italic", wordSpacing: "0.03em" }}
        >
          Sept 2022 - June 2023 &nbsp;
        </span>
      </div>
      <div className="stl_01" style={{ top: "46.7716em", left: "4.5em" }}>
        <span className="stl_15">●</span>
      </div>
      <div className="stl_01" style={{ top: "47.9884em", left: "4.5em" }}>
        <span className="stl_15">●</span>
      </div>
      <div className="stl_01" style={{ top: "46.7846em", left: "6em" }}>
        <span className="stl_09 stl_08" style={{ wordSpacing: "0.05em" }}>
          Created and executed lesson plans focusing on efficient and reusable
          code &nbsp;
        </span>
      </div>
      <div className="stl_01" style={{ top: "48.0014em", left: "6em" }}>
        <span className="stl_09 stl_08" style={{ wordSpacing: "0.04em" }}>
          Taught programming and design concepts applicable to the field of game
          development &nbsp;
        </span>
      </div>
      <div className="stl_01" style={{ top: "50.4334em", left: "3em" }}>
        <span
          className="stl_11 stl_12"
          style={{ fontWeight: "bold", wordSpacing: "0.08em" }}
        >
          AWARDS AND RECOGNITIONS &nbsp;
        </span>
      </div>
      <div className="stl_01" style={{ top: "52.0979em", left: "4.5em" }}>
        <span className="stl_15">●</span>
      </div>
      <div className="stl_01" style={{ top: "53.3148em", left: "4.5em" }}>
        <span className="stl_15">●</span>
      </div>
      <div className="stl_01" style={{ top: "54.5316em", left: "4.5em" }}>
        <span className="stl_15">●</span>
      </div>
      <div className="stl_01" style={{ top: "55.7484em", left: "4.5em" }}>
        <span className="stl_15">●</span>
      </div>
      <div className="stl_01" style={{ top: "52.1109em", left: "6em" }}>
        <span className="stl_09 stl_08" style={{ wordSpacing: "0.06em" }}>
          Dean's List (all semesters) &nbsp;
        </span>
      </div>
      <div className="stl_01" style={{ top: "53.3277em", left: "6em" }}>
        <span className="stl_09 stl_08" style={{ wordSpacing: "0.05em" }}>
          Participant, Career Launch Program: producing a full-stack web app (
        </span>
        <span
          className="stl_14 stl_08"
          style={{ fontStyle: "italic", wordSpacing: "0.03em" }}
        >
          Nov 2023 - Feb 2024
        </span>
        <span className="stl_09" style={{ wordSpacing: "0em" }}>
          ) &nbsp;
        </span>
      </div>
      <div className="stl_01" style={{ top: "54.5446em", left: "6em" }}>
        <span className="stl_09 stl_08" style={{ wordSpacing: "0.05em" }}>
          American Computer Science League Finalist (
        </span>
        <span
          className="stl_14 stl_08"
          style={{ fontStyle: "italic", wordSpacing: "0.03em" }}
        >
          2022 &amp; 2023
        </span>
        <span className="stl_09" style={{ wordSpacing: "0em" }}>
          ) &nbsp;
        </span>
      </div>
      <div className="stl_01" style={{ top: "55.7614em", left: "6em" }}>
        <span className="stl_09 stl_08" style={{ wordSpacing: "0.03em" }}>
          RIT Innovation and Creativity Award (
        </span>
        <span
          className="stl_14 stl_08"
          style={{ fontStyle: "italic", wordSpacing: "0.04em" }}
        >
          Spring 2022
        </span>
        <span className="stl_09 stl_08" style={{ wordSpacing: "0.01em" }}>
          ) &nbsp;
        </span>
      </div>
    </div>
  </div>
</div>
		);
};


export default Ocr;
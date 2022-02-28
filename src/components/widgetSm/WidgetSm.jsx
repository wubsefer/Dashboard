import { Visibility } from "@mui/icons-material";
import React from "react";
import "./widgetSm.css";

const WidgetSm = () => {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Member</span>
      <ul className="widgetSmList">
        <li className="widgetListItem">
          <img src="./images/profilePic.jpeg" alt="" className="widgetImg" />
          <div className="widgetUser">
            <span className="widgetSmUsername">Wubsefer Mengitu</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetButton">
            <Visibility className="widgetIcon" />
            Display
          </button>
        </li>
        <li className="widgetListItem">
          <img src="./images/profilePic.jpeg" alt="" className="widgetImg" />
          <div className="widgetUser">
            <span className="widgetSmUsername">Wubsefer Mengitu</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetButton">
            <Visibility className="widgetIcon" />
            Display
          </button>
        </li>{" "}
        <li className="widgetListItem">
          <img src="./images/profilePic.jpeg" alt="" className="widgetImg" />
          <div className="widgetUser">
            <span className="widgetSmUsername">Wubsefer Mengitu</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetButton">
            <Visibility className="widgetIcon" />
            Display
          </button>
        </li>{" "}
        <li className="widgetListItem">
          <img src="./images/profilePic.jpeg" alt="" className="widgetImg" />
          <div className="widgetUser">
            <span className="widgetSmUsername">Wubsefer Mengitu</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetButton">
            <Visibility className="widgetIcon" />
            Display
          </button>
        </li>{" "}
        <li className="widgetListItem">
          <img src="./images/profilePic.jpeg" alt="" className="widgetImg" />
          <div className="widgetUser">
            <span className="widgetSmUsername">Wubsefer Mengitu</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetButton">
            <Visibility className="widgetIcon" />
            Display
          </button>
        </li>{" "}
        <li className="widgetListItem">
          <img src="./images/profilePic.jpeg" alt="" className="widgetImg" />
          <div className="widgetUser">
            <span className="widgetSmUsername">Wubsefer Mengitu</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetButton">
            <Visibility className="widgetIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
};

export default WidgetSm;

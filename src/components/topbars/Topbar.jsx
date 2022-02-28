import React from "react";
import "./topbar.css";
import {
  LanguageOutlined,
  NotificationsNoneOutlined,
  Settings,
} from "@mui/icons-material";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topleft">
          <space className="logo">Admin Panel</space>
        </div>
        <div className="topright">
          <div className="topbarIconContainer">
            <NotificationsNoneOutlined />
            <span className="topIconBadge">3</span>
          </div>
          <div className="topbarIconContainer">
            <LanguageOutlined />
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="./images/profilePic.jpeg" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;

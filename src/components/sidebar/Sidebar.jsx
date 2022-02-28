import {
    BarChartOutlined,
    ChatBubbleOutlineOutlined,
    EmailOutlined,
    GradingOutlined,
    Inventory2Outlined,
  LineStyleOutlined,
  ManageAccountsOutlined,
  OutlinedFlagOutlined,
  PaidOutlined,
  PersonOutlineOutlined,
  ReportOutlined,
  TimelineOutlined,
  TrendingUpOutlined,
} from "@mui/icons-material";
import React from "react";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="siderbarList">
            <li className="sidebarListItem active">
              <LineStyleOutlined className="sidebarIcon"/>
              Home
            </li>
            <li className="sidebarListItem">
              <TimelineOutlined className="sidebarIcon" />
              Analytic
            </li>
            <li className="sidebarListItem">
              <TrendingUpOutlined className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menus</h3>
          <ul className="siderbarList">
            <li className="sidebarListItem">
              <PersonOutlineOutlined className="sidebarIcon"/>
              User
            </li>
            <li className="sidebarListItem">
              <Inventory2Outlined className="sidebarIcon" />
              Products
            </li>
            <li className="sidebarListItem">
              <PaidOutlined className="sidebarIcon" />
              Transactions
            </li>
            <li className="sidebarListItem">
              <OutlinedFlagOutlined className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notification</h3>
          <ul className="siderbarList">
            <li className="sidebarListItem">
              <EmailOutlined className="sidebarIcon"/>
              Mail
            </li>
            <li className="sidebarListItem">
              <GradingOutlined className="sidebarIcon" />
              Feedbacks
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutlineOutlined className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="siderbarList">
            <li className="sidebarListItem">
              <ManageAccountsOutlined className="sidebarIcon"/>
              Manage
            </li>
            <li className="sidebarListItem">
              <BarChartOutlined className="sidebarIcon" />
              Analytic
            </li>
            <li className="sidebarListItem">
              <ReportOutlined className="sidebarIcon" />
              Report
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

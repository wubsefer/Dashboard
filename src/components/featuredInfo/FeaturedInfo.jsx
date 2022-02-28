import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import React from "react";
import "./featuredInfo.css";

const featuredInfo = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revanue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$3457</span>
          <span className="featuredMoneyRate">
            -11.4 <ArrowDownward className="featuedIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compare to last month.</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$5457</span>
          <span className="featuredMoneyRate">
            -11.4 <ArrowDownward className="featuedIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compare to last month.</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$1457</span>
          <span className="featuredMoneyRate">
            4.4 <ArrowUpward className="featuedIcon" />
          </span>
        </div>
        <span className="featuredSub">Compare to last month.</span>
      </div>
    </div>
  );
};

export default featuredInfo;

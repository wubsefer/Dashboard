import React from "react";
import "./widgetLg.css";

const WidgetSm = () => {
  const Button = ({ type }) => {
    return <button className={" widgetLgButton " + type}> {type} </button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Transaction</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="./images/profilePic.jpeg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Hope Wubsefer</span>
          </td>
          <td className="widgetLgDate">20 Feb 2022</td>
          <td className="widgetLgAmount">$234.00</td>
          <td className="widgetLgAmount">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="./images/profilePic.jpeg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Yeabsira Desalegn</span>
          </td>
          <td className="widgetLgDate">20 Feb 2022</td>
          <td className="widgetLgAmount">$234.00</td>
          <td className="widgetLgAmount">
            <Button type="Declined" />
          </td>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="./images/profilePic.jpeg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Abenezer Mekru</span>
          </td>
          <td className="widgetLgDate">20 Feb 2022</td>
          <td className="widgetLgAmount">$234.00</td>
          <td className="widgetLgAmount">
            <Button type="Pending" />
          </td>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="./images/profilePic.jpeg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Henok Abera</span>
          </td>
          <td className="widgetLgDate">20 Feb 2022</td>
          <td className="widgetLgAmount">$234.00</td>
          <td className="widgetLgAmount">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default WidgetSm;

import React from 'react'
import './widgetLg.css';

const WidgetSm = () => {
  return (
    <div className='widgetLg'>
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
          <img src="./images/profilePic.jpeg" alt="" className="widgetLgImg" />
          <span className="widgetLgName">Hope Wubsefer</span>
          </td>
          <td className="widgetLgDate">20 Feb 2022</td>
          <td className="widgetLgAmount">$234.00</td>
        </tr>
      </table>
    </div>
  )
}

export default WidgetSm
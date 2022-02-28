import React from "react";
import "./chart.css";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";





const Chart = ({title, data, dataKey, grid}) => {
  

  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey={dataKey} stroke="#5550BD" />
          <Line type="monotone" dataKey={dataKey} stroke="#5550BD" />
          <Tooltip />
         { grid && <CartesianGrid stroke="#f1efed" strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;

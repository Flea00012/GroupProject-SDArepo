//react core
import React from "react";
//import rechart and components
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Label,
  ResponsiveContainer,
} from "recharts";

//ScatterPlot component
export default function ScatterPlot({ data }) {
  return (
    <ResponsiveContainer height={300} width="100%">
      <AreaChart
        width={800}
        height={600}
        data={data}
        margin={{ top: 15, right: 30, left: 15, bottom: 15 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis domain={[0, 100]}>
          <Label value="Questions" offset={0} position="insideBottom" />
        </XAxis>
        <YAxis domain={[0, 1]}>
          <Label value="Sentiment" angle={-90} position="insideLeft" />
        </YAxis>

        <Tooltip />
        <Area
          type="monotone"
          dataKey="good"
          stroke="#8884d8"
          fill="#6AD1FA"
          fillOpacity={0.3}
          isAnimationActive={false}
          dot={true}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

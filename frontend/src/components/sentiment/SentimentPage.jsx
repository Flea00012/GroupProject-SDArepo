//react core imports
import React from "react";
//NLP algorithm import
import Sentiment from "./Sentiment";

const mystyle = {
  padding: "10px",
  width: "100%",
  height: "auto",
};

export default function SentimentPage() {
  return (
    <>
      <div style={mystyle}>
        <Sentiment />
      </div>
    </>
  );
}

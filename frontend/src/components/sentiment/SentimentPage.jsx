//react core imports
import React from "react";
//NLP algorithm import
import Sentiment from "./Sentiment";

export default function SentimentPage() {
  return (
    <>
      <div className="card">
        <div className="student-banner">Question Sentiment</div>

        <div
          style={{
            justifyItems: "center",
            marginTop: "15px",
            width: "100%",
          }}
        >
          <Sentiment />
        </div>
      </div>
    </>
  );
}

import React, { useState, useEffect } from "react";

import QuestionsApi from "../../api/QuestionsApi";

import ScatterPlot from "../chartplots/ScatterPlot";

const TrainingSet = require("../../resources/trainingdata.json");
const natural = require("natural");
const BrainJs = require("brain.js");

export default function Sentiment() {
  const [questions, setQuestions] = useState([]);

  const viewQuestions = () => {
    QuestionsApi.getAllQuestions()
      .then((response) => {
        setQuestions(response.data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    viewQuestions();
  }, []);

  function buildWordDictionary(trainingData) {
    const tokenisedArray = trainingData.map((item) => {
      const tokens = item.phrase.split(" ");
      return tokens.map((token) => natural.PorterStemmer.stem(token));
    });

    const flattenedArray = [].concat.apply([], tokenisedArray);
    return flattenedArray.filter(
      (item, pos, self) => self.indexOf(item) == pos
    );
  }

  const dictionary = buildWordDictionary(TrainingSet);

  function encode(phrase) {
    const phraseTokens = phrase.split(" ");
    const encodedPhrase = dictionary.map((word) =>
      phraseTokens.includes(word) ? 1 : 0
    );
    return encodedPhrase;
  }

  const encodedTrainingSet = TrainingSet.map((dataSet) => {
    const encodedValue = encode(dataSet.phrase);
    return { input: encodedValue, output: dataSet.result };
  });

  const network = new BrainJs.NeuralNetwork();
  network.train(encodedTrainingSet);

  const questionBody = questions.map((item) => {
    const encoded = encode(item.textBody);
    let data = network.run(encoded);
    return data;
  });

  return (
    <>
      <ScatterPlot data={questionBody} />
    </>
  );
}

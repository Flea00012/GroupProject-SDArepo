
//react core 
import React, { useState, useEffect } from "react";
//axios API instance
import QuestionsApi from "../../api/QuestionsApi";
//rechart plot object
import ScatterPlot from "../chartplots/ScatterPlot";

//training data for NLP model
const TrainingSet = require("../../resources/trainingdata.json");
//import NLP model for natural language processing
const natural = require("natural");
//import brain.js library for getting the neural network object
const BrainJs = require("brain.js");

export default function Sentiment() {
  const [questions, setQuestions] = useState([]);

  //GET request for questions from DB
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

  //create dictionary and tokenize the training data
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

  //encoder for the questions from the student users
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

  //train the Neural Network on the training data
  const network = new BrainJs.NeuralNetwork();
  network.train(encodedTrainingSet);

  //run encoded questions against the trained Neural Network
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

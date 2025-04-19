import { useEffect, useReducer, useState } from "react";
import Header from "./Header";
import MainSection from "./MainSection";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
//dùng json-server để mock API lấy questions từ data/questions

const initialState = {
  questions: [],
  status: "loading", //'loading', 'error', 'ready', 'active', 'finished'
  index: 0,
  answer: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };

    case "dataFailed":
      return {
        ...state,
        status: "error",
      };
    case "start":
      return {
        ...state,
        status: "active",
      };
    case "newAnswer":
      return {
        ...state,
        answer: action.payload,
      };

    default:
      throw new Error("Action Unknown");
  }
}

export default function App() {
  const [{ questions, status, index, answer }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const numQuestions = questions.length;
  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);
  return (
    <div className="app">
      <Header />
      <MainSection>
        {(() => {
          switch (status) {
            case "loading":
              return <Loader />;
            case "error":
              return <Error />;
            case "ready":
              return <StartScreen numQuestions={numQuestions} dispatch={dispatch} />;
            case "active":
              return (
                <Question
                  curQuest={questions[index]}
                  dispatch={dispatch}
                  answer={answer}
                />
              );
            default:
              return null;
          }
        })()}
      </MainSection>
    </div>
  );
}

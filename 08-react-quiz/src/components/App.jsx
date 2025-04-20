import { useEffect, useReducer } from "react";
import Header from "./Header";
import MainSection from "./MainSection";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
import NextButton from "./NextButton";
import Progress from "./Progress";
import Finish from "./Finish";
import Footer from "./Footer";
import Timer from "./Timer";
//dùng json-server để mock API lấy questions từ data/questions

const initialState = {
  questions: [],
  status: "loading", //'loading', 'error', 'ready', 'active', 'finished'
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondsRemain: null,
};

const SECONDS_PER_QUESTION = 30;

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
        secondsRemain: state.questions.length * SECONDS_PER_QUESTION,
      };

    case "newAnswer": {
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    }

    case "nextQuestion": {
      return {
        ...state,
        index: state.index + 1,
        answer: null,
      };
    }

    case "lastQuestion": {
      return {
        ...state,
        status: "finish",
        highscore: state.points > state.highscore ? state.points : state.highscore,
      };
    }

    case "restart":
      return {
        ...initialState,
        questions: state.questions,
        status: "ready",
      };
    case "tick":
      return {
        ...state,
        secondsRemain: state.secondsRemain - 1,
        status: state.secondsRemain === 0 ? "finish" : state.status,
      };

    default:
      throw new Error("Action Unknown");
  }
}

export default function App() {
  const [
    { questions, status, index, answer, points, highscore, secondsRemain },
    dispatch,
  ] = useReducer(reducer, initialState);

  const numQuestions = questions.length;
  const maxPoints = questions.reduce((prev, cur) => prev + cur.points, 0);
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
                <>
                  <Progress
                    index={index}
                    numQuestions={numQuestions}
                    points={points}
                    answer={answer}
                    maxPoints={maxPoints}
                  />
                  <Question
                    curQuest={questions[index]}
                    dispatch={dispatch}
                    answer={answer}
                  />

                  <NextButton
                    dispatch={dispatch}
                    answer={answer}
                    isLast={index + 1 == numQuestions}
                  />
                  <Footer>
                    <Timer secondsRemain={secondsRemain} dispatch={dispatch} />
                  </Footer>
                </>
              );
            case "finish":
              return (
                <Finish
                  points={points}
                  maxPoints={maxPoints}
                  highscore={highscore}
                  dispatch={dispatch}
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

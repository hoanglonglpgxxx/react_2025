import { useQuestion } from "../context/QuestionContext";

function NextButton({ restart }) {
  const { dispatch, answer, index, numQuestions } = useQuestion();
  const isLast = index + 1 == numQuestions;
  if (answer === null) return null;
  if (!restart) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: isLast ? "lastQuestion" : "nextQuestion" })}
      >
        {isLast ? "Finish" : "Next"}
      </button>
    );
  } else {
    return (
      <button className="btn btn-ui" onClick={() => dispatch({ type: "restart" })}>
        Restart Quiz
      </button>
    );
  }
}

export default NextButton;

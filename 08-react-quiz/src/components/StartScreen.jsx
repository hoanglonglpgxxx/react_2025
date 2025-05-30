import { useQuestion } from "../context/QuestionContext";

function StartScreen() {
  const { numQuestions, dispatch } = useQuestion();
  return (
    <div className="start">
      <h2>Welcome to The React Quiz</h2>
      <h3>{numQuestions} questions to test your react skill</h3>
      <button className="btn btn-ui" onClick={() => dispatch({ type: "start" })}>
        Let's start
      </button>
    </div>
  );
}

export default StartScreen;

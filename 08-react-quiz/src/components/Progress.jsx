import { useQuestion } from "../context/QuestionContext";

function Progress() {
  const { index, numQuestions, points, answer, maxPoints } = useQuestion();
  return (
    <div className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong>/{numQuestions}
      </p>
      <p>
        <strong>{points}</strong>/{maxPoints}
      </p>
    </div>
  );
}

export default Progress;

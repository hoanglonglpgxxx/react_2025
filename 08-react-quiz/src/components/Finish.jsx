import { useQuestion } from "../context/QuestionContext";
import NextButton from "./NextButton";

function Finish() {
  const { points, maxPoints, highscore, dispatch } = useQuestion();
  const percent = (points / maxPoints) * 100;
  let emoji;
  if (percent === 100) emoji = "🥇";
  if (percent >= 80 && percent < 100) emoji = "🥈";
  if (percent >= 50 && percent < 80) emoji = "🥉";
  if (percent >= 0 && percent < 50) emoji = "😥";
  if (percent == 0) emoji = "😭";
  return (
    <>
      <p className="result">
        <span>{emoji}</span>
        You scored <strong>{points}</strong> out of {maxPoints} ({Math.ceil(percent)}%)
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <NextButton dispatch={dispatch} restart="1" />
    </>
  );
}

export default Finish;

import { useEffect } from "react";
import { useQuestion } from "../context/QuestionContext";

function Timer() {
  const { dispatch, secondsRemain } = useQuestion();
  const INTERVAL = 1000;
  const mins = Math.floor(secondsRemain / 60);
  const seconds = secondsRemain % 60;
  useEffect(
    function () {
      const id = setInterval(() => dispatch({ type: "tick" }), INTERVAL);
      return () => clearInterval(id);
    },
    [dispatch]
  );
  return (
    <div className="timer">
      {mins < 10 ? "0" : ""}
      {mins}:{seconds < 10 ? "0" : ""}
      {seconds}
    </div>
  );
}

export default Timer;

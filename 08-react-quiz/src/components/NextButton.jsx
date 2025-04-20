function NextButton({ dispatch, answer, isLast, restart }) {
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

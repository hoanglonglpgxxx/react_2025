function Options({ options, dispatch, answer, curQuest }) {
  const hasAnswer = answer !== null;
  return (
    <div className="options">
      {options.map((e, index) => (
        <button
          className={`btn btn-option 
            ${index === answer ? "answer" : ""}
            ${hasAnswer ? (index === curQuest.correctOption ? "correct" : "wrong") : ""}
            `}
          key={index}
          disabled={hasAnswer}
          onClick={() =>
            dispatch({
              type: "newAnswer",
              payload: index,
            })
          }
        >
          {e}
        </button>
      ))}
    </div>
  );
}

export default Options;

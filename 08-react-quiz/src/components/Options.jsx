function Options({ options, dispatch, answer }) {
  return (
    <div className="options">
      {options.map((e, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""}`}
          key={index}
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

import Options from "./Options";

function curQuestion({ curQuest, dispatch, answer }) {
  return (
    <div>
      <h4>{curQuest.question} </h4>
      <Options
        options={curQuest.options}
        dispatch={dispatch}
        answer={answer}
        curQuest={curQuest}
      />
    </div>
  );
}

export default curQuestion;

import Options from "./Options";

function curQuestion({ curQuest, dispatch, answer }) {
  return (
    <div>
      <h4>{curQuest.question} </h4>
      <Options options={curQuest.options} dispatch={dispatch} answer={answer} />
      <p>{curQuest.correctOption}</p>
      <p>{curQuest.points}</p>
    </div>
  );
}

export default curQuestion;

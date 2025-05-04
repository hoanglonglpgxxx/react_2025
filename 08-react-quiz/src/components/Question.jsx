import { useQuestion } from "../context/QuestionContext";
import Options from "./Options";

function curQuestion() {
  const { questions, dispatch, answer, index } = useQuestion();
  const curQuest = questions[index];
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

import PropTypes from "prop-types";
import { useState } from "react";
const questionsList = [
  { id: 1, question: "What language is that 1?", answer: "AAAA", background: "red" },
  { id: 2, question: "What language is that 2?", answer: "AAAA", background: "blue" },
  { id: 3, question: "What language is that 3?", answer: "AAAA", background: "black" },
  { id: 4, question: "What language is that 4?", answer: "AAAA", background: "purple" },
  { id: 5, question: "What language is that 5?", answer: "AAAA", background: "orange" },
  { id: 6, question: "What language is that 6?", answer: "AAAA", background: "deeppink" },
];
export default function App() {
  return (
    <div>
      <CardList></CardList>
    </div>
  );
}

function CardList() {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <>
      {questionsList.map((question) => (
        <Card
          key={question.id}
          question={question}
          isActive={activeCard === question.id}
          setActiveCard={setActiveCard}
        />
      ))}
    </>
  );
}

function Card({ question, isActive, setActiveCard }) {
  function handleClick() {
    setActiveCard(isActive ? null : question.id);
  }

  return (
    <div
      onClick={handleClick}
      style={{
        background: isActive ? question.background : "transparent",
        padding: "10px",
        margin: "5px",
        cursor: "pointer",
        border: "1px solid #ccc",
        textAlign: "center",
        color: isActive ? "#fff" : "#000",
      }}
    >
      <span>{isActive ? question.answer : question.question}</span>
    </div>
  );
}

Card.propTypes = {
  question: PropTypes.object.isRequired,
  isActive: PropTypes.bool.isRequired,
  setActiveCard: PropTypes.func.isRequired,
};

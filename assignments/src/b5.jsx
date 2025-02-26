import PropTypes from "prop-types";
import "./b5.css";
import { useState } from "react";
// Accordions
const faqs = [
  {
    title: "Title 1",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi placeat sequi perferendis tempore praesentium inventore odit repudiandae quidem possimus unde, laudantium modi, sed iure sit esse beatae cum error laborum.",
  },
  {
    title: "Title 2",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi placeat sequi perferendis tempore praesentium inventore odit repudiandae quidem possimus unde, laudantium modi, sed iure sit esse beatae cum error laborum.",
  },
  {
    title: "Title 3",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi placeat sequi perferendis tempore praesentium inventore odit repudiandae quidem possimus unde, laudantium modi, sed iure sit esse beatae cum error laborum.",
  },
];
export default function App() {
  return <Accordion data={faqs} />;
}

function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);
  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          key={i}
          num={i}
          title={el.title}
        >
          {el.text}
        </AccordionItem>
      ))}
    </div>
  );
}

Accordion.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
};

function AccordionItem({ curOpen, onOpen, num, title, children }) {
  const isOpen = num === curOpen;
  function handleToggle() {
    onOpen(isOpen ? null : num);
  }
  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : `${num + 1}`}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>

      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
AccordionItem.propTypes = {
  curOpen: PropTypes.number.isRequired,
  onOpen: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  num: PropTypes.number.isRequired,
};

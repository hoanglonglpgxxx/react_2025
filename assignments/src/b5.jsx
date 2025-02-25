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
    title: "Title 1",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi placeat sequi perferendis tempore praesentium inventore odit repudiandae quidem possimus unde, laudantium modi, sed iure sit esse beatae cum error laborum.",
  },
];
export default function App() {
  return (
    <>
      <Accordion />
    </>
  );
}

function Accordion() {
  return <div>ToDo</div>;
}

function AccordionItem(num, title, text) {
  return (
    <div className="item">
      <p className="number">{num}</p>
      <p className="title">{title}</p>
      <p className="icon">-</p>
      <div className="content-box">{text}</div>
    </div>
  );
}

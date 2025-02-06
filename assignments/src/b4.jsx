//FIND DATE WITH RANGE FROM CURRENT DATE
import PropTypes from "prop-types";
import { useState } from "react";

export default function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  return (
    <div>
      <Slider step={step} setStep={setStep} />
      <Counter step={step} count={count} setCount={setCount} />
      <Day count={count} setCount={setCount}></Day>
    </div>
  );
}

function Slider({ step, setStep }) {
  return (
    <>
      <input
        type="range"
        min="0"
        max="20"
        onChange={(e) => setStep(parseInt(e.target.value))}
        value={step}
      />
      <span>{step}</span>
    </>
  );
}

Slider.propTypes = {
  step: PropTypes.number.isRequired,
  setStep: PropTypes.func.isRequired,
};

function Counter({ step, count, setCount }) {
  return (
    <div>
      <button onClick={() => setCount(count - step)}>-</button>
      <input
        type="text"
        value={count}
        onChange={(e) => setCount(parseInt(e.target.value))}
      />
      <button onClick={() => setCount(count + step)}>+</button>
    </div>
  );
}

Counter.propTypes = {
  step: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  setCount: PropTypes.func.isRequired,
};

function Day({ count, setCount }) {
  const date = new Date();
  date.setDate(date.getDate() + count);
  return (
    <>
      <span>
        {count === 0
          ? "Today is"
          : count > 0
          ? `${count} days from today is`
          : `${Math.abs(count)} days ago was`}
        &nbsp;
      </span>
      <span>{date.toDateString()}</span>
      {Math.abs(count) > 0 && <button onClick={() => setCount(0)}>Reset</button>}
    </>
  );
}

Day.propTypes = {
  count: PropTypes.number.isRequired,
  setCount: PropTypes.func.isRequired,
};

import { useState } from "react";
import PropTypes from "prop-types";

function App() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);

  return (
    <div>
      <Step step={step} setStep={setStep} />
      <Count count={count} setCount={setCount} step={step} />
      <Day count={count} />
    </div>
  );
}

function Step({ step, setStep }) {
  function handleDecrease() {
    setStep((s) => s - 1);
  }

  function handleIncrease() {
    setStep((s) => s + 1);
  }

  return (
    <div style={{ display: "flex" }}>
      <button className="decrease" onClick={handleDecrease}>
        -
      </button>
      <p className="count">Step: {step}</p>
      <button className="increase" onClick={handleIncrease}>
        +
      </button>
    </div>
  );
}

Step.propTypes = {
  step: PropTypes.number.isRequired,
  setStep: PropTypes.func.isRequired,
};

function Count({ count, setCount, step }) {
  function handleDecrease() {
    setCount((s) => s - step);
  }

  function handleIncrease() {
    setCount((s) => s + step);
  }

  return (
    <div style={{ display: "flex" }}>
      <button className="decrease" onClick={handleDecrease}>
        -
      </button>
      <p className="count">Count: {count}</p>
      <button className="increase" onClick={handleIncrease}>
        +
      </button>
    </div>
  );
}

Count.propTypes = {
  count: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  setCount: PropTypes.func.isRequired,
};

function Day({ count }) {
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
    </>
  );
}

Day.propTypes = {
  count: PropTypes.number.isRequired,
};

export default App;

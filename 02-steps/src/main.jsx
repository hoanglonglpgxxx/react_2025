import { useState } from "react";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const messages = ["Learn React ⚛️", "Apply for jobs 💼", "Invest your new income 🤑"];

function App() {
  return (
    <>
      <Steps />
    </>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  function handlePrev() {
    if (step > 1) {
      setStep(step - 1);
    } else {
      setStep(3);
    }
  }

  function handleNext() {
    if (step < messages.length) {
      setStep((s) => s + 1);
    } else {
      setStep(1);
    }
  }
  return (
    <>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? String.fromCharCode(215) : "-"}
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>

            <p className="message">
              Step {step} : {messages[step - 1]}
            </p>

            <div className="buttons">
              <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrev}>
                Previous <span>!!</span>
              </Button>
              <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
                Next <span>??</span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: "${bgColor}", color: "${textColor}" }}
      onClick={handleNext}
    >
      {children}
    </button>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

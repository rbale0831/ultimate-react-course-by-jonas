import { useEffect, useState } from 'react';
import './App.css';

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

const App = () => {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true)

  // const [test, setTest] = useState({name:"John"});

  const handlePrevious = () => {
    if (step > 1) setStep((s) => (s - 1));
  }
  const handleNext = () => {
    if (step < 3) setStep((s) => (s - 1));

    // Bad Practice
    // test.name="Fred";
    // Good Practice
    // setTest({name: "Fred"})
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((o) => (!o))} >&times;</button>
      {isOpen && (
        <div className='steps'>
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className='message'>
            Step {step}: {messages[step - 1]}
            {/* {test.name} */}
          </p>

          <div className="buttons">
            <button 
              style={{ backgroundColor: '#7950f2', color: "#fff" }} 
              onClick={handlePrevious}
            >Previous</button>
            <button 
              style={{ backgroundColor: '#7950f2', color: "#fff" }} 
              onClick={handleNext}
            >Next</button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;

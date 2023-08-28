import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [isStart, setIsStart] = useState<boolean>(false);
  const [currentNumber, setCurrentNumber] = useState<number>(0);
  const [oddList, setOddList] = useState<Array<number>>([]);
  const [evenList, setEvenList] = useState<Array<number>>([]);

  const onClickStartButton = () => {
    setIsStart(!isStart);
  };

  const isEven = (number: any) => number % 2 === 0;
  const onGetNumber = () => {
    if (isEven(currentNumber)) {
      setEvenList([...evenList, currentNumber]);
    } else {
      setOddList([...oddList, currentNumber]);
    }
  };

  useEffect(() => {
    let timer: any;
    if (isStart) {
      timer = setInterval(() => {
        setCurrentNumber((preNumber) => preNumber + 1);
      }, 1000);
    }

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [isStart]);

  return (
    <div className="container">
      <div className="item1 item">
        <div>
          <button onClick={onClickStartButton}>
            {!isStart ? "start" : "stop"}
          </button>
        </div>
        <div>
          <button onClick={onGetNumber}> get number</button>
        </div>
      </div>
      <div className="item2 item">
        {oddList.map((item) => (
          <p>{item}</p>
        ))}
      </div>
      <div className="item3 item">{currentNumber}</div>
      {/* <div className="item4 item">Item 4</div> */}
      <div className="item4 item">
        {evenList.map((item) => (
          <p>{item}</p>
        ))}
      </div>
    </div>
  );
}

export default App;

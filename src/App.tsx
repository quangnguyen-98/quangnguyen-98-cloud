import { useState, useEffect, useRef } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [number, setNumber] = useState<number>(0);
  const [isStart, setIsStart] = useState<boolean>(false);
  const [oddNumberList, setOddNumberList] = useState<Array<number>>([]);
  const [evenNumberList, setEvenNumberList] = useState<Array<number>>([]);
  // const counter = useRef<any>(null);

  const isEven = (number: number) => number % 2 === 0;

  const onStart = () => {
    setIsStart(true);
  };

  const onGetNumber = () => {
    setIsStart(false);
    if (isEven(number)) {
      setEvenNumberList([...evenNumberList, number]);
    } else {
      setOddNumberList([...oddNumberList, number]);
    }
  };

  useEffect(() => {
    // if (isStart) {
    //   counter.current = setInterval(() => {
    //     setNumber((prevNumber) => prevNumber + 1);
    //   }, 1000);
    // } else {
    //   clearInterval(counter.current);
    // }
    let timer: any;
    if (isStart) {
      timer = setInterval(() => {
        setNumber((prevNumber) => prevNumber + 1);
      }, 1000);
    }
    // else {
    //   clearInterval(timer);
    // }
    return () => {
      clearInterval(timer);
    };
  }, [isStart]);

  return (
    <div className="container">
      <div className="flex-container">
        <div className="flex-item"></div>
        <div className="flex-item">
          <p>
            {!isStart ? (
              <button onClick={onStart}> start</button>
            ) : (
              <button onClick={onGetNumber}>get number</button>
            )}
          </p>
          <p>{number}</p>
        </div>
        <div className="flex-item"></div>
      </div>
      <div className="flex-container">
        <div className="flex-item">
          <div className="sub-box">
            {oddNumberList.map((item) => (
              <p>{item}</p>
            ))}
          </div>
        </div>
        <div className="flex-item"></div>
        <div className="flex-item">
          <div className="sub-box">
            {evenNumberList.map((item) => (
              <p>{item}</p>
            ))}
          </div>
        </div>
      </div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;

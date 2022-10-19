import "./App.css";
import { useState, useEffect } from "react";

const App = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handelMouseLeave = () => {
    setIsHover(false);
  };

  const handleDobleClic = () => {
    setIsHover(!isHover);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (isHover === true) {
        setRed(Math.floor(Math.random() * 255));
        setGreen(Math.floor(Math.random() * 255));
        setBlue(Math.floor(Math.random() * 255));
      }
    }, 500);
    return () => clearInterval(interval);
  }, [isHover]);

  const boxStyle = {
    height: "255px",
    width: "255px",
    display: "flex",
    justifyContent: "center",
    cursor: "pointer",
    backgroundColor: `rgb(${red}, ${green}, ${blue})`,
  };

  return (
    <div className="App">
      <header className="App-header">
        <title>Square random colors</title>
        <h1>
          Square Random Color <br />
          Color: {boxStyle.backgroundColor}
        </h1>
        <p>
          <strong>Hover the mouse</strong> over the square and this will change
          it the color randomizer. <br/>If the mouse hover leave the square, the change it will stop. <br/>Press <strong>double click</strong> on the
          square for stop/start it. 
        </p>
        <div>
          <div
            style={boxStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handelMouseLeave}
            onDoubleClick={handleDobleClic}
          ></div>
        </div>
      </header>
    </div>
  );
};

export default App;

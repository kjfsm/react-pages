import React, { useState } from "react";

interface AppState {
  randomData: string[];
  clearCheck: string;
  clearText: string;
}

const App: React.FC<AppState> = (props) => {
  const [text, setText] = useState("");
  const [clear, setClear] = useState(false);

  const getRandom = (data: string[]): string => {
    const index = Math.floor(Math.random() * Math.floor(data.length));
    return data[index];
  };

  const handleClick = () => {
    if (text.endsWith(props.clearCheck)) {
      setClear(true);
      setText(text + " " + props.clearText);
      return;
    }
    setText(text + getRandom(props.randomData));
  };

  const handleReset = () => {
    setText("");
    setClear(false);
  };

  return (
    <>
      <div>
        <button onClick={handleClick} disabled={clear} >{props.clearCheck + "ボタン"}</button>
        <button onClick={handleReset} >リセット</button>
        <div>{text}</div>
      </div>
    </>
  );
};

export default App;

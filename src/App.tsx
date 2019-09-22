import React, { useState } from "react";
import { TwitterIcon, TwitterShareButton } from "react-share";

const App: React.FC = () => {
  const [text, setText] = useState("");
  const [clear, setClear] = useState(false);

  const [randomData, setRandomData] = useState(["あ", "み", "は", "む"]);
  const [clearCheck, setClearCheck] = useState("あみはむ");
  const [clearText, setClearText] = useState("はむぅ！");
  const [gameState, setGameState] = useState({
    randomData,
    clearCheck,
    clearText,
  });

  const getRandom = (data: string[]): string => {
    const index = Math.floor(Math.random() * Math.floor(data.length));
    return data[index];
  };

  const handleClick = () => {
    if (text.endsWith(gameState.clearCheck)) {
      setClear(true);
      setText(text + " " + gameState.clearText);
      return;
    }
    setText(text + getRandom(gameState.randomData));
  };

  const handleReset = () => {
    setText("");
    setClear(false);
  };

  return (
    <>
      <div>
        出てくる文字(コンマ区切り)<br />
        <input type="text" value={randomData}
          onChange={(event) => setRandomData(event.target.value.split(","))}
        />
      </div>
      <div>
        当たり<br />
        <input type="text" value={clearCheck}
          onChange={(event) => setClearCheck(event.target.value)}
        />
      </div>
      <div>
        当たりのときに出る文字<br />
        <input type="text" value={clearText}
          onChange={(event) => setClearText(event.target.value)}
        />
      </div>
      <div>
        <button
          onClick={() => {
            setGameState({
              randomData,
              clearCheck,
              clearText,
            });
            setText("");
            setClear(false);
          }}
        >
          決定
        </button>
      </div>
      <div>
        <button onClick={handleClick} disabled={clear} >{gameState.clearCheck + "ボタン"}</button>
        <button onClick={handleReset} >リセット</button>
        <div>{text}</div>
        <TwitterShareButton　title={text} url={window.location.origin} disabled={!clear}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>
      </div>
    </>
  );
};

export default App;

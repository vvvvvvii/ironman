import React, { useState, useEffect, useRef } from "react";

function HookTimer() {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    // 如果這樣宣告在 useEffect 以外就取不到了，而且會無限迴圈
    // const interval = setInterval(()=>{
    //   setTimer(prevTimer => prevTimer +1)
    // },1000)

    // 在 functional component 裡做 componentWillUnmount 的卸載動作
    return () => {};
  }, []);
  return (
    <div>
      <p>{timer}</p>
      {/* 在 useEffect 以外的地方也能取得 interval */}
      <button
        className="button"
        // onClick={() => }
      >
        stop!
      </button>
    </div>
  );
}
export default HookTimer;

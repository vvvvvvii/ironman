import React from "react";
import ComponentA from "../components/componentA";
import ComponentB from "../components/componentB";

function Memo() {
  return (
    <div>
      <h1>引入 CSS ： Styled Components</h1>
      <h3>安裝</h3>
      <p>npm install --save styled-components</p>
      <p>Emmet: vscode-styled-components 套件</p>
      <h3>實際撰寫</h3>
      <h3>好處</h3>
      <ul>
        <li>不會有覆蓋問題</li>
        <ComponentA />
        <ComponentB />
        <li>只載入相關樣式</li>
        <li>和 React 元件化的概念相符</li>
      </ul>
      <h3>注意：樣式亂數問題與解法</h3>
    </div>
  );
}

export default Memo;

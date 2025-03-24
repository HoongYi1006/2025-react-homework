import './App.css';
import React, { useState } from 'react';

function Hello(props){
  return(
    <div>
      <h1>嗨,{props.name}</h1>
      <p>(值從props來，固定不動，輸入的)</p>
    </div>
  )
}

function Accept(props){
  return(
    <div>
      <h1>你現在有,{props.number}元</h1>
      <p>(接收的值是一樣從props傳來，但這個props的值本身是一個state)</p>
    </div>
  )
}


function App() {
  const [myMoney, addMyMoney] = useState(100);
  return (
    <div className="App">
      <Hello name="黃宏益"/>
      <Accept number={myMoney}/>
      <button onClick={e=>{var currentMoney = myMoney + 100 ; addMyMoney(currentMoney)}}>更多錢</button>
      <button onClick={e=>{var currentMoney = myMoney -100 ; addMyMoney(currentMoney)}}>更少錢</button>
      
    </div>
  );
}

export default App;
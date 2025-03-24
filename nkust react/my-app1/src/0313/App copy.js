// import './App.css';
import React from 'react';

function Compon(props) {
  return (
    <ul>
      <li >{props.item}</li>
    </ul>
  );
}
const compons =Array.from({length:10});
var list = ["第1項","第2項","第3項","第4項","第5項","第6項","第7項","第8項","第9項","第10項"];
function App() {
  return (
    <div className="App">
      <main> 
        {compons.map((_, index) => (
          <Compon key={index} item={`${index + 1}. ${list[index]}`} />
        ))}
      </main>
    </div>
  );
}
export default App;
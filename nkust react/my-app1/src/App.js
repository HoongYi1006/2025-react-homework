import React, { useState } from 'react';
// import './App.css'; // 引入 CSS 檔案

export default function App() {
  const [text, setText] = useState('nothing');
  return (
    <>
    <input
      type="text"
      onChange={(e) => setText(e.target.value)}>
      </input>
      <p>{text}</p>
    </>
  );
}

import React, { useState } from 'react';
// import './App.css'; // 引入 CSS 檔案

export default function App() {
  const [studentId, setStudentId] = useState('');
  const [name, setName] = useState('');


  return (
    <>
      <div>
        <input
          type="studentId"
          onChange={(e) => setStudentId(e.target.value)}
        /><p>學號: {studentId}</p>
      </div>
      <div>
        <label>姓名: </label>
        <input
          type="name"
          onChange={(e) => setName(e.target.value)}
        />
        <p>姓名: {name}</p>
      </div>

    </>
  );
}
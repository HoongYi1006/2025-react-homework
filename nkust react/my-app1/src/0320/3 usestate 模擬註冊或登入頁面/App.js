import React, { useState } from 'react';
import './App.css'; // 引入 CSS 檔案

export default function App() {
  const [ID, setID] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = () => {
    let loginMessage = '';
    
    if (ID === '123456' && password === 'Admin') {
      loginMessage = '登入成功！';
    } else {
      loginMessage = '登入失敗，請檢查學號或密碼。';
    }
    
    setMessage(loginMessage);
    
    // 顯示彈出視窗，包含訊息和使用者輸入的學號（不包含密碼）
    alert(`${loginMessage}\n\n學號: ${ID}\n密碼: ${'*'.repeat(password.length)}`);
  };

  return (
    <div className="login-container">
      <h1>登入系統</h1>
      <input
        className="input-field"
        placeholder="請輸入學號"
        type="text"
        onChange={(e) => setID(e.target.value)}
      />
      <input
        className="input-field"
        placeholder="請輸入密碼"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="login-button" onClick={handleLogin}>
        登入
      </button>
      <p className="message">{message}</p>
    </div>
  );
}
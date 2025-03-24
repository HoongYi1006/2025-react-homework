import InputTexts from './InputTexts';
import React, { useState } from 'react';
import './App.css';
function App() {
  const [referenceBooks, setReferenceBooks] = useState(0);
  const [notebooks, setNotebooks] = useState(0);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    address: ''
  });

  // 設定商品單價
  const prices = {
    referenceBook: 300,
    notebook: 50
  };

  // 計算總金額
  const calculateTotal = () => {
    return (referenceBooks * prices.referenceBook) + (notebooks * prices.notebook);
  };

  return (
    <div className="App-body">
      <h1>訂購單</h1>
      <InputTexts
        customerInfo={customerInfo}
        setCustomerInfo={setCustomerInfo}
      />

      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ flex: 1 }}>
          <h2>選擇商品數量</h2>
          <h3>參考書 (單價: ${prices.referenceBook})</h3>
          <Numbers 
            value={referenceBooks}
            onChange={setReferenceBooks}
          />
          <h3>筆記本 (單價: ${prices.notebook})</h3>
          <Numbers 
            value={notebooks}
            onChange={setNotebooks}
          />
        </div>
        
        <div style={{ flex: 1, padding: "20px", borderLeft: "1px solid #ccc" }}>
          <h2>訂單摘要</h2>
          <div className="order-summary">
            <h3>客戶資訊</h3>
            <p><strong>姓名:</strong> {customerInfo.name || '未填寫'}</p>
            <p><strong>電話:</strong> {customerInfo.phone || '未填寫'}</p>
            <p><strong>地址:</strong> {customerInfo.address || '未填寫'}</p>
            
            <h3>商品明細</h3>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th>商品</th>
                  <th>單價</th>
                  <th>數量</th>
                  <th>小計</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>參考書</td>
                  <td>${prices.referenceBook}</td>
                  <td>{referenceBooks}</td>
                  <td>${referenceBooks * prices.referenceBook}</td>
                </tr>
                <tr>
                  <td>筆記本</td>
                  <td>${prices.notebook}</td>
                  <td>{notebooks}</td>
                  <td>${notebooks * prices.notebook}</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="3"><strong>總計</strong></td>
                  <td><strong>${calculateTotal()}</strong></td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Numbers({ value, onChange }) {
  const handleInputChange = (e) => {
    const newValue = parseInt(e.target.value) || 0;
    onChange(newValue);
  };

  const increment = () => {
    onChange(value + 1);
  };

  const decrement = () => {
    onChange(value - 1);
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <button onClick={decrement}>減1</button>
      <input 
        type="number" 
        value={value} 
        onChange={handleInputChange}
        style={{ margin: "0 10px", width: "60px", textAlign: "center" }}
      />
      <button onClick={increment}>加1</button>
    </div>
  );
}

export default App;
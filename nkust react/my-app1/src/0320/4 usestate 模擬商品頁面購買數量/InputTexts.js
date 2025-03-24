import React from 'react';

function InputTexts({ customerInfo, setCustomerInfo }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo(prevInfo => ({
      ...prevInfo,
      [name]: value
    }));
  };

  return (
    <div className="customer-info">
      <h2>客戶資訊</h2>
      <div>
        <label htmlFor="name">姓名：</label>
        <input
          type="text"
          id="name"
          name="name"
          value={customerInfo.name}
          onChange={handleChange}
          className="input-field"
          placeholder="請輸入姓名"
        />
      </div>
      <div>
        <label htmlFor="phone">電話：</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={customerInfo.phone}
          onChange={handleChange}
          className="input-field"
          placeholder="請輸入電話"
        />
      </div>
      <div>
        <label htmlFor="address">地址：</label>
        <input
          type="text"
          id="address"
          name="address"
          value={customerInfo.address}
          onChange={handleChange}
          className="input-field"
          placeholder="請輸入地址"
        />
      </div>
    </div>
  );
}

export default InputTexts;
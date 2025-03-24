import React, { useState } from "react";

export default function Numbers() {
  const [number, setNumber] = useState(10);
  return (
    <>
      <button onClick={() => setNumber(number + 1)}>加1</button>
      <p>{number}</p>
      <button onClick={() => setNumber(number - 1)}>減1</button>
    </>
  );
}

export function NumbersWithLimitByHTML() {
  const [number, setNumber] = useState(10);
  return (
    <>
      {number < 15 && (
        <button onClick={() => setNumber(number + 1)}>加1</button>
      )}
      <p>{number}</p>
      {number > 0 && (
        <button onClick={() => setNumber(number - 1)}>減1</button>
      )}
    </>
  );
}

export function NumbersWithLimitByCSS() {
  const [number, setNumber] = useState(10);
  return (
    <>
      <button
        style={{ visibility: number >= 15 ? "hidden" : "visible" }}
        onClick={() => setNumber(number + 1)}
      >
        加1
      </button>
      <p>{number}</p>
      <button
        style={{ visibility: number <= 0 ? "hidden" : "visible" }}
        onClick={() => setNumber(number - 1)}
      >
        減1
      </button>
    </>
  );
}


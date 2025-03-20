// currency converter
// Tip calculator
import { useState } from "react";
import { useEffect } from "react";

export default function App() {
  const [amount, setAmount] = useState(0);
  const [fromCur, setFromCur] = useState("");
  const [toCur, setToCur] = useState("");
  const [total, setTotal] = useState(0);
  useEffect(
    function () {
      async function convert(from, to, amount) {
        if (from && to && amount && from !== to) {
          fetch(`https://api.frankfurter.dev/v1/latest?base=${from}&symbols=${to}`)
            .then((resp) => resp.json())
            .then((data) => {
              const convertedAmount = (amount * data.rates[to]).toFixed(2);
              setTotal(convertedAmount);
            });
        }
      }
      convert(fromCur, toCur, amount);
    },
    [fromCur, toCur, amount]
  );

  return (
    <div>
      <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <select value={fromCur} onChange={(e) => setFromCur(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select value={toCur} onChange={(e) => setToCur(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      {fromCur && toCur && amount && total && (
        <p>
          OUTPUT: {amount} {fromCur} = {total} {toCur}
        </p>
      )}
    </div>
  );
}

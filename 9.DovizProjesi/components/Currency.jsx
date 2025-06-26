import React, { useState } from "react";
import "../css/currency.css";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import axios from "axios";

let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
let API_KEY = "fca_live_osCScDkogRKRXPdO2IFPGbrBdgwcf5VTFTGKTKEC";

function Currency() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("TRY");
  const [result, setResult] = useState("");

  const exchange = async () => {
    const response = await axios.get(`${BASE_URL}`, {
      params: {
        apikey: API_KEY,
        base_currency: fromCurrency,
      },
    });
    const result = (response.data.data[toCurrency] * amount).toFixed(2);
    setResult(result);
  };

  return (
    <div className="currency-div">
      <div className="title">
        <h2>Currency Converter</h2>
      </div>

      <div className="currency-converter">
        <input
          value={amount}
          type="number"
          className="amount"
          placeholder="Enter Amount"
          onChange={(e) => setAmount(e.target.value)}
        />

        <select
          className="from-currency"
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="TRY">TRY</option>
        </select>

        <FaRegArrowAltCircleRight className="arrow" />

        <select
          className="to-currency"
          onChange={(e) => setToCurrency(e.target.value)}
        >
          <option value="TRY">TRY</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>

        <input
          value={result}
          type="number"
          className="result"
          placeholder="Result Amount"
          onChange={(e) => setResult(e.target.value)}
        />
      </div>
      <div className="convert-button">
        <button onClick={exchange}>Convert</button>
      </div>
    </div>
  );
}

export default Currency;

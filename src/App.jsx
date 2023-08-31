import { useState } from "react";
import "./App.css";
import ExchangeResult from "./Components/ExchangeResult";

function App() {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [exchangeHistory, setExchangeHistory] = useState([]);

  const currencyMap = {
    USD: 16.74,
    EUR: 18.3,
    GBP: 21.31,
  };

  const amountHandler = (event) => {
    const value = Number(event.target.value);
    setAmount(value);
  };

  const currencyHandler = (event) => {
    const value = event.target.value;
    console.log(value);
    setCurrency(value);
  };

  const saveExchange = () => {
    const item = `${amount} MXN -> ${calculateExchange(
      amount,
      currency
    )} ${currency}`;
    setExchangeHistory([...exchangeHistory, item]);
    setAmount(0);
  };

  const calculateExchange = (amount, currency) =>
    amount / currencyMap[currency];

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <h1>Ingresa el monto a convertir en MXN</h1>
            <form
              action=""
              className="border rounded border-secondary shadow p-3"
            >
              <div className="form-group">
                <input
                  type="number"
                  className="form-control"
                  onChange={amountHandler}
                  value={amount}
                />
              </div>
            </form>
            <h1>Selecciona la divisa a la que quieres convertir el monto:</h1>
            <div className="card">
              <div className="card-body">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="currency"
                    id="USD"
                    value="USD"
                    checked={currency === "USD"}
                    onChange={currencyHandler}
                  />
                  <label className="form-check-label" for="USD">
                    USD
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="currency"
                    id="EUR"
                    value="EUR"
                    checked={currency === "EUR"}
                    onChange={currencyHandler}
                  />
                  <label className="form-check-label" for="EUR">
                    EUR
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="currency"
                    id="GBP"
                    value="GBP"
                    checked={currency === "GBP"}
                    onChange={currencyHandler}
                  />
                  <label className="form-check-label" for="GBP">
                    GBP
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <ExchangeResult
              result={calculateExchange(amount, currency)}
              currency={currency}
            />
            <button className="btn btn-primary" onClick={saveExchange}>
              Guardar conversión
            </button>
            <hr />
            <ul className="list-group">
              {exchangeHistory.map((item) => {
                return <li className="list-group-item">{item}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

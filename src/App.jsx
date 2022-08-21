import { useState } from "react";
import "./App.css";

function outputMsg(transfer, balance) {
  if (transfer <= balance) {
    setBalance(balance - transfer);
    return `£${transfer} transferred successfully`;
  }
  return `You do not have £${transfer} to transfer`;
}

function App() {
  const [amount, setAmount] = useState("");
  const [transfer, setTransfer] = useState("");
  const [balance, setBalance] = useState(100);

  const handleChange = (event) => setAmount(event.target.value);
  const handleClick = () => {
    setTransfer(amount);
    setAmount("");
  };

  return (
    <>
      <h1>Welcome to PalPay!</h1>
      <h2>Your balance is:</h2>
      <strong>£{balance}</strong>
      <h3>How much would you like to transfer?</h3>
      <input id="amount" value={amount} onChange={handleChange} />
      <button type="button" onClick={handleClick}>
        Send
      </button>
      <p>{outputMsg(transfer, balance)}</p>
    </>
  );
}

export default App;

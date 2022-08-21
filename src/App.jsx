import { useState } from "react";
import "./App.css";

function App() {
  const [amount, setAmount] = useState("");
  const [balance, setBalance] = useState(100);
  const [msg, setMsg] = useState("");
  const handleChange = (event) => setAmount(event.target.value);
  const handleClick = () => {
    if (balance >= amount && typeof amount === "number" && amount > 0) {
      setMsg(`£${amount} transferred successfully`);
      setBalance(balance - amount);
    } else {
      setMsg(
        `Insufficient balance: you do not have ${amount} available to transfer`
      );
    }
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
      <p>{msg}</p>
    </>
  );
}

export default App;

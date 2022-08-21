import { useState } from "react";
import "./App.css";
import PalPayLogo from "./images/PalPay.png";

function App() {
  const [amount, setAmount] = useState("");
  const [balance, setBalance] = useState(100);
  const [msg, setMsg] = useState("");
  const handleChange = (event) => setAmount(event.target.value);
  const handleClick = () => {
    if (balance >= amount && amount > 0) {
      setMsg(`£${amount} transferred successfully`);
      setBalance(balance - amount);
    } else {
      setMsg(
        `Insufficient balance: you do not have £${amount} available to transfer`
      );
    }
    setAmount("");
  };

  return (
    <div className="balance-box">
      <img
        className="mx-auto flex h-[80%] w-[80%] justify-center"
        src={PalPayLogo}
        alt="PalPay Logo"
      />
      <h1>Welcome to PalPay!</h1>

      <h2>Your balance is:</h2>
      <strong aria-label="balance">£{balance}</strong>

      <h3>How much would you like to transfer?</h3>
      <input
        id="amount"
        value={amount}
        onChange={handleChange}
        className="my-2 mx-auto justify-center rounded-full border py-1 px-2 text-center"
        aria-label="amount"
      />
      <button
        type="button"
        onClick={handleClick}
        className="center mx-auto max-w-fit content-center items-center justify-center rounded-full bg-pink-400 px-4 py-2 text-center font-bold text-white"
      >
        Send
      </button>
      <p className="pt-2" aria-label="message">
        {msg}
      </p>
    </div>
  );
}

export default App;

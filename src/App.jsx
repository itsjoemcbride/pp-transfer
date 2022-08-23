import "./App.css";
import { useState } from "react";
import Form from "./Components/Form/Form";

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

  const handleFocus = () => {
    setMsg("");
  };

  return (
    <Form
      amount={amount}
      setAmount={setAmount}
      setBalance={setBalance}
      msg={msg}
      setMsg={setMsg}
      handleChange={handleChange}
      handleClick={handleClick}
      handleFocus={handleFocus}
      balance={balance}
    />
  );
}

export default App;

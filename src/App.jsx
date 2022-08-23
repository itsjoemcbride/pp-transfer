import { useEffect, useState } from "react";
import apiService from "./api";
import "./App.css";
import Form from "./Components/Form/Form";

function App() {
  useEffect(() => {
    apiService
      .getAllUsers()
      .then((users) => {
        console.log(users);
      })
      .catch((error) => {
        console.log(error);
      });
  });
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

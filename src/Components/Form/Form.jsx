import PropTypes from "prop-types";
import PalPayLogo from "../../images/PalPay.png";

export default function Form({
  amount,
  msg,
  handleChange,
  handleClick,
  handleFocus,
  balance,
}) {
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
        onFocus={handleFocus}
      />
      <button
        type="button"
        onClick={handleClick}
        className="center mx-auto max-w-fit content-center items-center justify-center rounded-full bg-pink-400 px-4 py-2 text-center font-bold text-white hover:bg-pink-600"
        aria-label="button"
      >
        Send
      </button>
      <p className="pt-2" aria-label="message">
        {msg}
      </p>
    </div>
  );
}

Form.propTypes = {
  amount: PropTypes.string.isRequired,
  msg: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleFocus: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  balance: PropTypes.number.isRequired,
};

import arrow from "../assets/icon-arrow.svg";
import "../component/validation.css";
import iconError from "../assets/icon-error.svg";
const email = document.querySelector(".email-input");
const error = document.querySelector(".error");

const Validation = () => {
  function errorMessage() {
    if (email === "") {
      return (error.style.display = "black");
    } else {
      console.log("connected");
    }
  }
  return (
    <div className="validation">
      <form action="">
        <input
          type="email"
          placeholder="Email Address"
          className="email-input"
        />
        <img src={iconError} alt="" />
        <button className="arrow" onClick={errorMessage()}>
          <img src={arrow} alt="" />
        </button>
      </form>
      <p className="error">Please provide a valid email </p>
    </div>
  );
};

export default Validation;

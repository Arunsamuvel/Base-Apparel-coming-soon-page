import "./bground.css";
import hero from "../assets/logo.svg";
import Validation from "./Validation";

const Bgcomponent = () => {
  const Maintext = {
    text1: "W E ' R E",
    text2: "C O M I N G",
    text3: "S O O N",
    text4:
      "Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals",
  };
  return (
    <div>
      <div className="bground">
        <img
          src={hero}
          alt=""
          className="logo
      "
        />
        <p className="text1">{Maintext.text1}</p>
        <p className="text2">{Maintext.text2}</p>
        <p className="text3">{Maintext.text3}</p>
        <p className="text4">{Maintext.text4}</p>
        <Validation />
      </div>
    </div>
  );
};

export default Bgcomponent;

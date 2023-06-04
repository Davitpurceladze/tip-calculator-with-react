import { useState } from "react";
import TipStyle from "./TipStyle.css";

function Tip(props) {
  const tipAmount = (number) => {
    props.setTip(number);
    switch (number) {
      case "5":
        setIsActive({
          five: true,
          ten: false,
          fifteen: false,
          twentyFive: false,
          fifty: false,
        });
        break;
      case "10":
        setIsActive({
          five: false,
          ten: true,
          fifteen: false,
          twentyFive: false,
          fifty: false,
        });
        break;
      case "15":
        setIsActive({
          five: false,
          ten: false,
          fifteen: true,
          twentyFive: false,
          fifty: false,
        });
        break;
      case "25":
        setIsActive({
          five: false,
          ten: false,
          fifteen: false,
          twentyFive: true,
          fifty: false,
        });
        break;
      case "50":
        setIsActive({
          five: false,
          ten: false,
          fifteen: false,
          twentyFive: false,
          fifty: true,
        });
        break;
    }
  };

  const [isActive, setIsActive] = useState({
    five: null,
    ten: null,
    fifteen: null,
    twentyFive: null,
    fifty: null,
  });

  return (
    <div className="TipContainer">
      <div className="tipTitle">
        <p>Select Tip %</p>
      </div>
      <div className="buttonsContainer">
        <div
          style={isActive.five ? styles.isActive : null}
          onClick={() => {
            tipAmount("5");
          }}
        >
          5%
        </div>
        <div
          style={isActive.ten ? styles.isActive : null}
          onClick={() => {
            tipAmount("10");
          }}
        >
          10%
        </div>
        <div
          style={isActive.fifteen ? styles.isActive : null}
          onClick={() => {
            tipAmount("15");
          }}
        >
          15%
        </div>
        <div
          style={isActive.twentyFive ? styles.isActive : null}
          onClick={() => {
            tipAmount("25");
          }}
        >
          25%
        </div>
        <div
          style={isActive.fifty ? styles.isActive : null}
          onClick={() => {
            tipAmount("50");
          }}
        >
          50%
        </div>
        <input
          type="number"
          id="customTip"
          className="customTip"
          placeholder="custom"
          onChange={(e) => {
            tipAmount(e.target.value);
          }}
        />
      </div>
    </div>
  );
}

export default Tip;

const styles = {
  isActive: {
    color: "#00474B",
    backgroundColor: "#26C2AE",
  },
};

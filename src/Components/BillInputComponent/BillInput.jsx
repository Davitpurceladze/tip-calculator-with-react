import { useState } from "react";
import BillInputStyle from "./BillInputStyle.css";

function Input(props) {
  const validateBill = (e) => {
    let number = e.target.value;
    if (number !== "") {
      props.setBill(number);
      setBillError(true);
    }
  };
  const [billError, setBillError] = useState(false);

  return (
    <div className="billInputContainer">
      <label htmlFor="billAmount">Bill</label>
      <input
        style={billError ? styles.valid : null}
        type="number"
        id="billAmount"
        name="billAmount"
        onChange={(e) => {
          validateBill(e);
        }}
      />
    </div>
  );
}

export default Input;

const styles = {
  valid: {
    outline: "2px solid #26C2AE",
  },
};

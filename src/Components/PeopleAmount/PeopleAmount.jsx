import { useState } from "react";
import PeopleAmountStyle from "./PeopleAmountStyle.css";

function PeopleAmount(props) {
  const validatePeopleAmount = (e) => {
    let number = e.target.value;
    if (number == "0") {
      setPeopleAmountError(false);
    } else {
      props.setPeopleAmount(number);
      setPeopleAmountError(true);
    }
  };
  const [peopleAmountError, setPeopleAmountError] = useState(true);
  return (
    <div className="peopleAmountContainer">
      <div>
        <label htmlFor="peopleAmount">Number of People</label>
        {peopleAmountError ? null : (
          <p className="PeopleErrorText">Can’t be zero</p>
        )}
      </div>
      <input
        style={peopleAmountError ? null : styles.error}
        type="number"
        id="peopleAmount"
        name="peopleAmount"
        onChange={(e) => {
          validatePeopleAmount(e);
        }}
      />
    </div>
  );
}

export default PeopleAmount;

const styles = {
  error: {
    outline: "2px solid #E17052",
  },
};

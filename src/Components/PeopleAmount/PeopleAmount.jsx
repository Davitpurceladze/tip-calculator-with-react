import PeopleAmountStyle from "./PeopleAmountStyle.css";

function PeopleAmount() {
  return (
    <div className="peopleAmountContainer">
      <label htmlFor="peopleAmount">Number of People</label>
      <input type="text" id="peopleAmount" name="peopleAmount" />
    </div>
  );
}

export default PeopleAmount;

import BillInputStyle from "./BillInputStyle.css";

function Input() {
  return (
    <div className="inputContainer">
      <label htmlFor="billAmount">Bill</label>
      <input type="text" id="billAmount" name="billAmount" />
    </div>
  );
}

export default Input;

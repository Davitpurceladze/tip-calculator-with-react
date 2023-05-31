import TipStyle from "./TipStyle.css";

function Tip() {
  return (
    <div className="TipContainer">
      <div className="tipTitle">
        <p>Select Tip %</p>
      </div>
      <div className="buttonsContainer">
        <div>5%</div>
        <div>10%</div>
        <div>15%</div>
        <div>25%</div>
        <div>50%</div>
        <input
          type="text"
          id="customTip"
          className="customTip"
          placeholder="custom"
        />
      </div>
    </div>
  );
}

export default Tip;

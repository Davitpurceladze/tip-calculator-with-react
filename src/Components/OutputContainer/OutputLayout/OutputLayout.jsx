import OutputLayoutStyle from "./OutputLayoutStyle.css";

function OutputLayout(props) {
  return (
    <div className="outputLayout">
      <div>
        <p className="TipAmount">{props.outputName}</p>
        <p className="person">/ person</p>
      </div>
      <div>
        <p className="output"> {props.billAmount}</p>
      </div>
    </div>
  );
}

export default OutputLayout;

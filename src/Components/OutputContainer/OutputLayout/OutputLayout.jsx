import OutputLayoutStyle from "./OutputLayoutStyle.css";

function OutputLayout() {
  return (
    <div className="outputLayout">
      <div>
        <p className="TipAmount">Tip Amount</p>
        <p className="person">/ person</p>
      </div>
      <div>
        <p className="output">$4.25</p>
      </div>
    </div>
  );
}

export default OutputLayout;

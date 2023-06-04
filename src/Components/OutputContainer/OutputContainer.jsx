import OutputContainerStyle from "./OutputContainerStyle.css";
import OutputLayout from "./OutputLayout/OutputLayout";

function OutputContainer(props) {
  return (
    <div className="outputContainer">
      <div>
        <OutputLayout
          billAmount={props.tipAmountOnPerson}
          outputName="Tip Amount"
        ></OutputLayout>
        <OutputLayout
          billAmount={props.totalBillOnPerson}
          outputName="Total"
        ></OutputLayout>
      </div>
      <button
        className="reset"
        onClick={() => {
          window.location.reload();
        }}
      >
        RESET
      </button>
    </div>
  );
}

export default OutputContainer;

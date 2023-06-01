import OutputContainerStyle from "./OutputContainerStyle.css";
import OutputLayout from "./OutputLayout/OutputLayout";

function OutputContainer() {
  return (
    <div className="outputContainer">
      <div>
        <OutputLayout></OutputLayout>
        <OutputLayout></OutputLayout>
      </div>
      <button className="reset">RESET</button>
    </div>
  );
}

export default OutputContainer;

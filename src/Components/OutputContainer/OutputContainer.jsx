import OutputContainerStyle from "./OutputContainerStyle.css";
import OutputLayout from "./OutputLayout/OutputLayout";

function OutputContainer() {
  return (
    <div className="outputContainer">
      <OutputLayout></OutputLayout>
      <OutputLayout></OutputLayout>
      <button className="reset">RESET</button>
    </div>
  );
}

export default OutputContainer;

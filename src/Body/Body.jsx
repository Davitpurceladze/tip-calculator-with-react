import BodyStyle from "./BodyStyle.css";
import BillInput from "../Components/BillInputComponent/BillInput";
import Tip from "../Components/Tip/Tip";
import PeopleAmount from "../Components/PeopleAmount/PeopleAmount";
import OutputContainer from "../Components/OutputContainer/OutputContainer";

function Body() {
  return (
    <div className="bodyContainer">
      <BillInput></BillInput>
      <Tip></Tip>
      <PeopleAmount></PeopleAmount>
      <OutputContainer></OutputContainer>
    </div>
  );
}

export default Body;

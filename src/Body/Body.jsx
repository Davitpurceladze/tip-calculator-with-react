import BodyStyle from "./BodyStyle.css";
import BillInput from "../Components/BillInputComponent/BillInput";
import Tip from "../Components/Tip/Tip";
import PeopleAmount from "../Components/PeopleAmount/PeopleAmount";
import OutputContainer from "../Components/OutputContainer/OutputContainer";
import { useEffect, useState } from "react";

function Body() {
  const [bill, setBill] = useState(null);
  const [tip, setTip] = useState(null);
  const [peopleAmount, setPeopleAmount] = useState(null);

  const [tipAmountOnPerson, setTipAmountOnPerson] = useState(null);
  const [totalBillOnPerson, setTotalBillOnPerson] = useState(null);

  console.log(tipAmountOnPerson);
  useEffect(() => {
    if (bill && tip && peopleAmount) {
      setTotalBillOnPerson(
        (parseInt(bill) + (parseInt(bill) * parseInt(tip)) / 100) /
          parseInt(peopleAmount)
      );
      setTipAmountOnPerson(
        (parseInt(bill) * parseInt(tip)) / 100 / parseInt(peopleAmount)
      );
    }
  }, [bill, peopleAmount, tip]);
  return (
    <div className="bodyContainer">
      <div className="inputContainer">
        <BillInput setBill={setBill}></BillInput>
        <Tip setTip={setTip}></Tip>
        <PeopleAmount setPeopleAmount={setPeopleAmount}></PeopleAmount>
      </div>
      <OutputContainer
        tipAmountOnPerson={tipAmountOnPerson}
        totalBillOnPerson={totalBillOnPerson}
      ></OutputContainer>
    </div>
  );
}

export default Body;

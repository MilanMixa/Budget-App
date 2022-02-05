import { SingleIncome } from "./SingleIncome";

//style
import "./IncomeList.css";

export const IncomeList = () => {
  return (
    <div className="income-list">
      <h3>INCOME</h3>
      <ul>
        <SingleIncome />
      </ul>
    </div>
  );
};

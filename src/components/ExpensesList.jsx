import { SingleExpense } from "./SingleExpense";

//styles
import "./ExpenseList.css";

export const ExpensesList = () => {
  return (
    <div className="expense-list">
      <h3>EXPENSES</h3>
      <ul>
        <SingleExpense />
      </ul>
    </div>
  );
};

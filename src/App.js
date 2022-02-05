import "./App.css";

//components

import Header from "./components/Header";
import { ExpensesList } from "./components/ExpensesList";
import { IncomeAndExpenses } from "./components/IncomeAndExpenses";
import { IncomeList } from "./components/IncomeList";
import { InputFields } from "./components/InputFields";

function App() {
  return (
    <div className="App">
      <Header />
      <IncomeAndExpenses />
      <InputFields />
      <div className="IncomeExpenseList">
        <IncomeList />
        <ExpensesList />
      </div>
    </div>
  );
}

export default App;

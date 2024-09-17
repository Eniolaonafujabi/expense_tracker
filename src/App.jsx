import './App.css'
import Expenses from "./component/Expenses.jsx";
import NewExpenses from "./component/NewExpenses.jsx";
import {useState} from "react";

const Dummy_Expenses = [
    {
        id: "e1",
        title: "Car Insurance",
        price: 150,
        date: new Date("2024-05-12")
    },
    {
        id: "e2",
        title: "Toilet Paper",
        price: 70,
        date: new Date("2024-05-12")
    },
    {
        id: "e3",
        title: "New Tv",
        price: 400,
        date: new Date("2024-05-12")
    },
]

function App() {
    const [expenses, setExpenses] = useState(Dummy_Expenses);

    const addExpenseHandler = (expense) =>{
        setExpenses((prevExpenses) => [expense, ...prevExpenses]);
    }
  return (
      <div>
          <NewExpenses onAddExpense={addExpenseHandler}/>
          <Expenses items={expenses} />
      </div>
  )
}

export default App

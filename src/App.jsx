import './App.css'
import Expenses from "./component/Expenses.jsx";

function App() {
    const expenses = [
        {
            id: "e1",
            title: "Car Insurance",
            price: 150,
            date: new Date("2021-05-12")
        },
        {
            id: "e2",
            title: "Toilet Paper",
            price: 70,
            date: new Date("2021-05-12")
        },
        {
            id: "e3",
            title: "New Tv",
            price: 400,
            date: new Date("2021-05-12")
        },

    ]
  return (
      <div>
          <Expenses items={expenses} />
      </div>
  )
}

export default App

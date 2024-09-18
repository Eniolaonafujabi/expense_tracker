import './style/Expenses.css'
import Card from "./Card.jsx";
import ExpensesFilter from "./ExpensesFilter.jsx";
import {useState} from "react";
import ExpensesList from "./ExpensesList.jsx";
import ExpenseChart from "./ExpenseChart.jsx";

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2024');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });



    return(
        <Card className="expenses">
            <ExpensesFilter
                selected={filteredYear}
                onChangeFilter={filterChangeHandler}
            />
            <ExpenseChart expenses={filteredExpenses} />
            {<ExpensesList items={filteredExpenses} />}
        </Card>
        );
}

export default Expenses;
import './style/ExpensesList.css'
import ExpenseItems from "./ExpenseItems.jsx";

const ExpensesList = (props) => {
    let expensesContent = <p>No expenses found.</p>;

    if (props.items.length > 0) {
        return <h1></h1>
    }
    return(
        <ul className="expenses-list">
            expensesContent = filteredExpenses.map((expense) => (
            <ExpenseItems
                key={expense.id}
                title={expense.title}
                price={expense.price}
                date={expense.date}
            />
            ));
        </ul>
    )
}
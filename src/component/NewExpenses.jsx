import './style/NewExpenses.css'
import ExpensesForm from "./ExpensesForm.jsx";

const NewExpenses = (props) => {
    const SaveExpenseDataHandler=(enteredExpenseData)=>{
        const expenseData=
            {
                ...enteredExpenseData,
                id: Math.random().toString(36)
            };
        props.onAddExpense(expenseData);
    }
    return (
        <div className='new-expense'>
            <ExpensesForm onSaveExpenseData={SaveExpenseDataHandler}/>
        </div>
    )
}

export default NewExpenses;
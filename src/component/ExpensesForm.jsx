import './style/ExpenseForm.css'
import {useState} from "react";
const ExpensesForm =(props) => {
    const [enteredTitle,setEnteredTitle] = useState("");
    const [enteredAmount,setEnteredAmount] = useState("");
    const [enteredDate,setEnteredDate] = useState("");
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title : enteredTitle,
            price : enteredAmount,
            date : new Date(enteredDate),
        };
        props.onSaveExpenseData(expenseData);
        setEnteredTitle("")
        setEnteredAmount("");
        setEnteredDate("");
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input
                        type='text'
                        onChange={titleChangeHandler}
                        value={enteredTitle}
                    />
                </div>

                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input
                        type='number'
                        min='0.1'
                        step='0.01'
                        onChange={amountChangeHandler}
                        value={enteredAmount}
                    />
                </div>

                <div className='new-expense__control'>
                    <label>Date</label>
                    <input
                        type='date'
                        min="2024-01-01"
                        max="2027-12-31"
                        onChange={dateChangeHandler}
                        value={enteredDate}
                    />
                </div>
                <div className='new-expense__actions'>
                    <button type='submit'>Add Expenses</button>
                </div>
            </div>
        </form>
    )
}

export default ExpensesForm
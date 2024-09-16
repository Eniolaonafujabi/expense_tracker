import './style/ExpenseItems.css'
import ExpenseDate from "./ExpenseDate.jsx";
import Card from "./Card.jsx";
import {useState}  from "react";
function ExpenseItems(props) {
    const[title,setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle('updated');
        console.log(title);
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.price}</div>
            </div>
            <button onClick={clickHandler}>change title</button>
        </Card>
    );
}

export default ExpenseItems;
import './style/ExpenseItems.css'
import ExpenseDate from "./ExpenseDate.jsx";
import Card from "./Card.jsx";
function ExpenseItems(props) {

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.price}</div>
            </div>
        </Card>
    );
}

export default ExpenseItems;
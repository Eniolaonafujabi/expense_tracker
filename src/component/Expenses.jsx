import ExpenseItems from "./ExpenseItems.jsx";
import './style/Expenses.css'
import Card from "./Card.jsx";

function Expenses(props) {
    return(
        <Card className="expenses">
            <ExpenseItems title = {props.items[0].title} date = {props.items[0].date} price = {props.items[0].price}/>
            <ExpenseItems title = {props.items[1].title} date = {props.items[1].date} price = {props.items[1].price}/>
            <ExpenseItems title = {props.items[2].title} date = {props.items[2].date} price = {props.items[2].price}/>
        </Card>
        );
}

export default Expenses;
import Chart from "./Chart.jsx";

const ExpenseChart = (props) => {

    const charDataPoints = [
        {'label': 'Jan', 'value': 0},
        {'label': 'Feb', 'value': 0},
        {'label': 'Mar', 'value': 0},
        {'label': 'Apr', 'value': 0},
        {'label': 'May', 'value': 0},
        {'label': 'Jun', 'value': 0},
        {'label': 'Jul', 'value': 0},
        {'label': 'Aug', 'value': 0},
        {'label': 'Sep', 'value': 0},
        {'label': 'Oct', 'value': 0},
        {'label': 'Nov', 'value': 0},
        {'label': 'Dec', 'value': 0},
    ]

    for (const expense of props.expenses){
        const expenseMonth = expense.date.getMonth();
        charDataPoints[expenseMonth].value += expense.price;
        // console.log(charDataPoints);
        // console.log(charDataPoints[expenseMonth].value)
        // // console.log(expense)
    }
    return (
        <div>
            <Chart dataPoints={charDataPoints}/>
        </div>
    )
}
export default ExpenseChart
import './style/Chat.css'
import ChartBar from "./ChartBar.jsx";

const Chart = props =>{

    const dataPointsValue = props.dataPoints.map((dataPoint) => dataPoint.value);
    // console.log(dataPointsValue);
    const totalMaximum = Math.max(...dataPointsValue)
    // console.log(totalMaximum);
    // console.log(props.dataPoints);

    return (
        <div className='chart'>

            {props.dataPoints.map((dataPoint) => (
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={totalMaximum}
                    label={dataPoint.label}
                />
            ))}
        </div>
    )
}
export default Chart;
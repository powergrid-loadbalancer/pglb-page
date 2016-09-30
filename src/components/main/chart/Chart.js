import React from 'react'
import GraphStore from "../../../stores/graphStore"
var LineChart = require("react-chartjs").Line;
var Immutable = require('immutable');

export default class Chart extends React.Component {
    constructor(props) {
        super(props)
        this.start = true

        this.state = {
        }
    }

    componentDidMount() {
        GraphStore.addChangeListener(this._updateGraph.bind(this))
    }

    componentWillUnmount() {
        GraphStore.removeChangeListener(this._updateGraph.bind(this))
    }

    _updateGraph = () => {

    }

    render () {
        var chartData = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [
                {
                    label: "My First dataset",
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: "rgba(75,192,192,0.4)",
                    borderColor: "rgba(75,192,192,1)",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: "rgba(75,192,192,1)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(75,192,192,1)",
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [65, 59, 80, 81, 56, 55, 40],
                    spanGaps: false,
                }
            ]
        };

        let chartOptions = {

        }

        return (
            <div className="chartTable">
                <div className="chart">
                    <LineChart data={chartData} options={chartOptions} width="600" height="250"/>
                </div>
            </div>
        )
    }
}
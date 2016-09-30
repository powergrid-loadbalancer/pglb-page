import React from 'react'
import GraphStore from "../../../stores/graphStore"
import { Line } from 'react-chartjs-2';

export default class Chart extends React.Component {
    constructor(props) {
        super(props)

        this.options = {
            animation : false,
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                    scaleLabel: {
                        labelString: "Time (minutes)",
                        display: true
                    }
                }],
                yAxes: [{
                    scaleLabel: {
                        labelString: "kWh",
                        display: true
                    }
                }]
            }
        }

        const data = {
            labels: ["TIME", "TIME + 00:15", "TIME + 00:30", "TIME + 00:45", "TIME + 01:00", "TIME + 01:15", "TIME + 01:30", "TIME + 01:45", "TIME + 02:00", "TIME + 02:15"],
            datasets: [{
                label: 'Produced',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(46, 125, 50, 0.4)',
                borderColor: 'rgba(46, 125, 50, 1)',
                pointBorderColor: 'rgba(46, 125, 50, 1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(46, 125, 50, 1)',
                pointHoverBorderColor: 'rgba(46, 125, 50, 1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: []
            }, {
                label: 'Consumed without SmartDevices',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(198,40,40,0.4)',
                borderColor: 'rgba(198,40,40,1)',
                pointBorderColor: 'rgba(198,40,40,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(198,40,40,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: []
            }, {
                label: 'Consumed with SmartDevices',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(2, 119, 189, 0.4)',
                borderColor: 'rgba(2, 119, 189, 1)',
                pointBorderColor: 'rgba(2, 119, 189, 1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(2, 119, 189, 1)',
                pointHoverBorderColor: 'rgba(2, 119, 189, 1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: []
            }]
        };

        this.state = {
            graph: <Line data={data} options={this.options} width={700} height={400}/>
        }
    }

    componentDidMount() {
        GraphStore.addChangeListener(this._updateGraph.bind(this))
    }

    componentWillUnmount() {
        GraphStore.removeChangeListener(this._updateGraph.bind(this))
    }

    _updateGraph = () => {

        const data = {
            labels: ["TIME", "TIME + 00:15", "TIME + 00:30", "TIME + 00:45", "TIME + 01:00", "TIME + 01:15", "TIME + 01:30", "TIME + 01:45", "TIME + 02:00", "TIME + 02:15"],
            datasets: [{
                label: 'Produced',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(46, 125, 50, 0.4)',
                borderColor: 'rgba(46, 125, 50, 1)',
                pointBorderColor: 'rgba(46, 125, 50, 1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(46, 125, 50, 1)',
                pointHoverBorderColor: 'rgba(46, 125, 50, 1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: GraphStore.getProducedDataPoint()
            }, {
                label: 'Consumed without SmartDevices',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(198,40,40,0.4)',
                borderColor: 'rgba(198,40,40,1)',
                pointBorderColor: 'rgba(198,40,40,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(198,40,40,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: GraphStore.getConsumedNoBuyingDataPoint()
            }, {
                label: 'Consumed with SmartDevices',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(2, 119, 189, 0.4)',
                borderColor: 'rgba(2, 119, 189, 1)',
                pointBorderColor: 'rgba(2, 119, 189, 1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(2, 119, 189, 1)',
                pointHoverBorderColor: 'rgba(2, 119, 189, 1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: GraphStore.getConsumedWithBuyingDataPoint()
            }]
        };

        let options = {
            animation : false,
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                    scaleLabel: {
                        labelString: "Test X",
                        display: true
                    }
                }],
                yAxes: [{
                    scaleLabel: {
                        labelString: "Test X",
                        display: true
                    }
                }]
            }
        }

        this.setState({
            graph: <div></div>
        })

        console.log(GraphStore.getProducedDataPoint())
        this.setState({
            graph: <Line data={data} options={this.options} width={700} height={400}/>
        })
    }

    render () {
        return (
            <div className="chartTable">
                <div className="chart">
                    <div>
                        {this.state.graph}
                    </div>
                </div>
            </div>
        )
    }
}
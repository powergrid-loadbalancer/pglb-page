import React from 'react'
import Chart from "./chart/Chart"
import Table from "./table/TableElement"
import StartButton from "./start/StartButton"

export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.start = true

        this.state = {
        }
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render () {
        return (
            <div className="main">
                <h2 className="main-title">Power-Grid Load Balancer Demo</h2>
                <div className="content">
                    <div className="content-chart">
                        <Chart/>
                    </div>
                    <div className="content-table">
                        <Table/>
                    </div>
                </div>
                <StartButton/>
            </div>
        )
    }
}
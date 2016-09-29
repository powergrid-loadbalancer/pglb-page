import React from 'react'
import Chart from "./chart/Chart"

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
                <Chart/>
            </div>
        )
    }
}
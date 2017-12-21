import React, { Component } from 'react'

import { Bar, Line } from 'react-chartjs-2';

class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = this.props
    }
    render() {
        return (
            <div className="chart">
                {/* {this.props.chartData} */}
                <Line
                    data={this.state.data}
                    options={{
                        maintainAspectRatio: false
                    }}
                />

            </div>

        );
    }

}

export default Chart
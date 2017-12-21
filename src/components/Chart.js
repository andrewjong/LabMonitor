import React, { Component } from 'react'

import { Bar, Line } from 'react-chartjs-2';

class Chart extends Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        return (
            <div className="chart">
                {/* {this.props.chartData} */}
                <Line
                    data={this.props.data}
                    options={{
                        maintainAspectRatio: false
                    }}
                />

            </div>

        );
    }

}

export default Chart
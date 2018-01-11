import React, { Component } from 'react'
import { Bar, Line } from 'react-chartjs-2';
import './Chart.css'

/**
 * A chart component contains state about 
 * - how many datasets it can display
 *      E.g. gas sensor will have 3: CO, H, and CH4. 
 *       Temperature will have 2, infared and the other thingy
 * - which of these datasets to display or hide
 * - information about its status, Good, Warning, Critical
 * 
 */
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
                    options={this.props.options}
                />

            </div>

        );
    }

}

export default Chart
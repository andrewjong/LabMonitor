import React from 'react'
import { Card, Grid, Dropdown } from 'semantic-ui-react'
import SensorCard from '../components/SensorCard'

class ExperimentCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shownSensors: {
                'humidity': true,
                'temperature': true,
                'gas': true,
                'sound': true,
                'vibration': true,
                'battery': true
            }
        }
        this.makeHideCallBack = this.makeHideCallBack.bind(this);
    }

    makeHideCallBack = sensorGroup => {
        return () => {
            const newState = Object.assign({}, this.state)
            newState.shownSensors[sensorGroup] = !newState.shownSensors[sensorGroup];
            this.setState(newState);
            // console.log(JSON.stringify(this.state.shownSensors))
        }
    }

    render() {
        const shownData = this.props.sensorData.filter(data => this.state.shownSensors[data.title]);
        return (
            <Card fluid centered>
                <Card.Content>
                    <Card.Header>
                        {`Experiment by ${this.props.owner}`}
                    </Card.Header>
                    <Card.Description>
                        {this.props.description}
                    </Card.Description>
                    <Grid divided container>
                        {
                            shownData.map(data => <SensorCard sensorData={data} hideSensor={this.makeHideCallBack(data.title)} />)
                        }
                    </Grid>
                </Card.Content>
                {
                    // Something down here for hidden charts? or should we put it on top? probably bottom makes more sense because they're hidden
                }
            </Card>
        );
    }

}

export default ExperimentCard
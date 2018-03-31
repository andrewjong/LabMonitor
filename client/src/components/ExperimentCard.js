import React from 'react'
import { Card, Grid, Dropdown } from 'semantic-ui-react'
import SensorCard from '../components/SensorCard'

class ExperimentCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hiddenSensors: {
                'humidity': false,
                'temperature': false,
                'gas': false,
                'sound': false,
                'vibration': false,
                'battery': false
            }
        }
    }

    render() {
        return (
            <Card fluid centered>
                <Card.Content>
                    <Card.Meta>
                        {`Experiment by ${this.props.owner}`}
                    </Card.Meta>
                    <Card.Description>
                        {this.props.description}
                    </Card.Description>
                    <Grid centered divided>
                        {
                            this.props.sensorData.map(data => <SensorCard sensorData={data} />)
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
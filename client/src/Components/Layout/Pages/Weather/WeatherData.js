import React, { Fragment, Component } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = {
    Paper: {
        padding: 25,
        marginTop: 10,
        marginbottom: 10,
        height: 100,
        overFlowY: 'auto',
    }
}
export default class Encrypt extends Component {

    state = {
        city: 'city',
        summary: '',
        temp: '',
        feelsLike: '',
    };

    componentDidMount() {
        axios.post("/weather/" + this.props.city).then(res => this.setState({
            city: res.data['city'],
            summary: res.data['weather']['Summary'] != null ? res.data['weather']['Summary'] : null,
            temp: res.data['weather']['Temperature'] != null ? res.data['weather']['Temperature'] : null,
            feelsLike: res.data['weather']['RealFeel'] != null ? res.data['weather']['RealFeel'] : null
        }))
    }

    render() {
        console.log(this.state)
        return (
            <Fragment>
                <Paper style={styles.Paper}>
                    <Typography variant="display1" >
                        {this.state.city}
                    </Typography>
                    <Typography variant="subheading" >
                    Temperature: {this.state.temp} Celsius
                    </Typography>
                    <Typography variant="subheading" >
                    Feel Like: {this.state.feelsLike} Celsius
                    </Typography>
                    <Typography variant="subheading" >
                    Summary: {this.state.summary} 
                    </Typography>
                </Paper>
            </Fragment>
        )
    }
}
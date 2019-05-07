import React, { Fragment, Component } from 'react';
import Grid from '@material-ui/core/Grid';
import WeatherData from './WeatherData';

export default class Weather extends Component {

    render() {
        return (
            <Fragment>
                <Grid container>
                    <Grid item sm style={{ marginRight: 10 }}>
                        <WeatherData city={'Jeddah'}/>
                    </Grid>
                    <Grid item sm style={{ marginLeft: 10 }}>
                        <WeatherData city={'Dubai'}/>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item sm style={{ marginRight: 10 }}>
                        <WeatherData city={'Manama'}/>
                    </Grid>
                    <Grid item sm style={{ marginLeft: 10 }}>
                        <WeatherData city={'Tokyo'}/>
                    </Grid>
                </Grid>
            </Fragment>
        )

    }
}


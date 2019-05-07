import React, { Component, Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Encrypt from './Encrypt';
import Decrypt from './Decrypt';

export default class Message extends Component {

    render() {
        return (
            <Fragment>
                <Grid container>
                    <Encrypt />
                </Grid>
                <Grid container>
                    <Decrypt />
                </Grid>
            </Fragment>

        )

    }


}


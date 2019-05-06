import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Encrypt from './Encrypt';
import Decrypt from './Decrypt';

export default class Message extends Component {

    render() {
        return (
            <Grid container>
            <Encrypt/>
                <br />
            <Decrypt/>
            </Grid>
        )

    }


}


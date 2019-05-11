import React, { Component, Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ChangeColor from './ChangeColor';
import Rotate from './Rotate';
import Flip from './Flip';
import Swing from './Swing';
import Button from '@material-ui/core/Button';


const styles = {
    Paper: {
        padding: 25,
        marginTop: 10,
        marginbottom: 10,
        height: 300,
        overFlowY: 'auto',
    }
}

export default class Animation extends Component {

    render() {
        return (
            <Fragment>
                <Grid container>
                    <Grid item sm style={{ margin: 5 }}>
                        <Paper style={styles.Paper}>
                            <Typography variant="display1">
                                Color change animation:
                            </Typography>
                            <ChangeColor />
                        </Paper>
                    </Grid>
                    <Grid item sm style={{ margin: 5 }}>
                        <Paper style={styles.Paper}>
                            <Typography variant="display1">
                                Rotation animation:
                            </Typography>
                            <Rotate />
                        </Paper>
                    </Grid>
                    <Grid item sm style={{ margin: 5 }}>
                        <Paper style={styles.Paper}>
                            <Typography variant="display1">
                                Flip animation:
                            </Typography>
                            <Flip />
                        </Paper>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item sm style={{ margin: 5 }}>
                        <Paper style={styles.Paper}>
                            <Typography variant="display1">
                                Swing animation:
                            </Typography>
                            <Swing />
                        </Paper>
                    </Grid>
                    <Grid item sm style={{ margin: 5 }}>
                        <Paper style={styles.Paper}>
                            <Typography variant="display1">
                                Shake animation:
                            </Typography>
                            <Button variant="outlined" className="shake-horizontal">    
                                SHAKE
                            </Button>
                        </Paper>
                    </Grid>
                    <Grid item sm style={{ margin: 5 }}>
                        <Paper style={styles.Paper}>
                        <Typography variant="display1">
                                Tracking animation:
                            </Typography>
                            <Typography variant="subheading" className="tracking-in-expand">
                                TRACKING
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Fragment>

        )

    }


}


import React, { Fragment, Component } from 'react'
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = {
    Paper: {
        padding: 25,
        marginTop: 10,
        marginbottom: 10,
        height: 50,
        overFlowY: 'auto',
    }
}

export default class Encrypt extends Component {

    state = {
        message: '',
        response: 'Your Decrption Displays Here'
    };


    render() {
        return (
            <Fragment>
                <Grid item sm style={{ marginRight: 10 }}>
                    <Paper style={styles.Paper}>
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            axios.post('/crypt/decrypt', { message: this.state.message }).then(res => this.setState({ message: '', response: res.data['message'] }))
                        }}
                            style={{ display: 'flex' }}>
                            <Input
                                placeholder="Message to decrypt"
                                inputProps={{
                                    'aria-label': 'Description',
                                }}
                                name="message"
                                value={this.state.message}
                                onChange={(e) => this.setState({ message: e.target.value })}
                                style={{ width: 480 }}
                            />
                            <Button variant="outlined" style={{ marginLeft: 15 }} type="submit">
                                Decrypt
                            </Button>
                        </form>
                    </Paper>
                </Grid>
                <Grid item sm style={{ marginLeft: 10 }}>
                    <Paper style={styles.Paper}>
                        <Typography variant="headline" >
                            {this.state.response}
                        </Typography>
                    </Paper>
                </Grid>
            </Fragment>
        )
    }
}

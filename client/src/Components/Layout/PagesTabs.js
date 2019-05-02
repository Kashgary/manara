import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export default probs => {

    return <Paper>
        <Tabs
            value={0}
            indicatorColor="primary"
            textColor="primary"
            centered>
            <Tab label="Message" /> />
            <Tab label="Weather" /> />
            <Tab label="Animation" /> />
            <Tab label="Web Technologies" /> />
        </Tabs>
    </Paper>
}
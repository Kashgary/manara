import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import NoSsr from '@material-ui/core/NoSsr';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Message from "./Pages/Message/Message";
import Wheather from './Pages/Weather/Weather';
import Animation from './Pages/Animation/Animation';
import WebTech from './Pages/WebTech/WebTech'

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

function LinkTab(props) {
  return <Tab component="a" onClick={event => event.preventDefault()} {...props} />;
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class NavTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <NoSsr>
        <div className={classes.root}>
          <AppBar position="static" color="default">
            <Tabs 
            variant="fullWidth" 
            value={value} 
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered>
              <LinkTab label="Message" href="page1" />
              <LinkTab label="Weather" href="weather" />
              <LinkTab label="Animation" href="page3" />
              <LinkTab label="Web Technologies" href="page3" />
            </Tabs>
          </AppBar>
          {value === 0 && <TabContainer><Message/></TabContainer>}
          {value === 1 && <TabContainer><Wheather/></TabContainer>}
          {value === 2 && <TabContainer><Animation/></TabContainer>}
          {value === 3 && <TabContainer><WebTech/></TabContainer>}
        </div>
      </NoSsr>
    );
  }
}

NavTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavTabs);
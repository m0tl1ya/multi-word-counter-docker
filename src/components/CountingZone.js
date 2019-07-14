import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Refresh from '@material-ui/icons/Refresh';

import WordCounter from './WordCounter';


const styles = theme => ({
  container: {
    margin: '1em',
  },
  refreshButton: {
    color: 'white',
    // backgroundColor: '#2196F3',
    background: 'linear-gradient(45deg, #2196f3 30%, #21cbf3 90%)',
    position: 'fixed',
    bottom: theme.spacing.unit * 12,
    right: theme.spacing.unit * 2,
  },
  addButton: {
    position: 'fixed',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  },
});

class CountingZone extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const { classes, counters, actions, mode } = this.props;
    // console.log(filteredParameters);
    return (
      <div className={classes.container}>
        {counters.map(counter =>
          <WordCounter
            counter={counter}
            actions={actions}
            mode={mode}
          />)}
        <Fab
          color="primary"
          aria-label="Refresh"
          className={classes.refreshButton}
          onClick={actions.refresh}
        >
          <Refresh />
        </Fab>
        <Fab
          color="primary"
          aria-label="Add"
          className={classes.addButton}
          onClick={actions.addCounterBelow}
        >
          <AddIcon />
        </Fab>
      </div>
    );
  }
}

CountingZone.propTypes = {
  classes: PropTypes.objectOf.isRequired,
  counters: PropTypes.arrayOf.isRequired,
  actions: PropTypes.objectOf.isRequired,
  mode: PropTypes.objectOf.isRequired,
};

export default withStyles(styles)(CountingZone);

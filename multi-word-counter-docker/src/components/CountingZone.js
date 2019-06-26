import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
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
    backgroundColor: '#2196F3',
    position: 'fixed',
    bottom: theme.spacing.unit * 12,
    right: theme.spacing.unit * 2,
  },
  addButton: {
    position: 'fixed',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  },
});

class CountingZone extends Component {
  constructor(props) {
    super(props);
  }

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
        <Button
          variant="fab"
          color="primary"
          className={classes.refreshButton}
          onClick={actions.refresh}
        >
          <Refresh />
        </Button>
        <Button
          variant="fab"
          color="secondary"
          className={classes.addButton}
          onClick={actions.addCounterBelow}
        >
          <AddIcon />
        </Button>
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

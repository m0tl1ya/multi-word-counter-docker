import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';
// import { blueGrey } from '@material-ui/core/colors';
import Switch from '@material-ui/core/Switch';


const styles = theme => ({
  button: {
    top: '0.0em',
    marginLeft: theme.spacing.unit * 7,
  },
});


class WordCounterHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: this.props.onActive,
    };
    // this.handleSwitch = this.handleSwitch.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ checked: nextProps.onActive });
  }

  render() {
    const {
      classes,
      id,
      words,
      characters,
      textLength,
      switchCount,
      deleteCounter,
      displayMode,
    } = this.props;

    let element;
    if (displayMode.mode === 'Words') {
      if (words > 0) {
        element = (
          <span>
            {words} words
          </span>
        );
      } else {
        element = (
          <span>
            {words} word
          </span>
        );
      }
    }
    if (displayMode.mode === 'Characters') {
      if (characters > 0) {
        element = (
          <span>
            {characters} characters
          </span>
        );
      } else {
        element = (
          <span>
            {characters} character
          </span>
        );
      }
    }
    if (displayMode.mode === 'Characters including space') {
      if (textLength > 0) {
        element = (
          <span>
            {textLength} characters
          </span>
        );
      } else {
        element = (
          <span>
            {textLength} character
          </span>
        );
      }
    }
    return (
      <div className="CounterHeader">
        {element}
        <Switch
          checked={this.props.onActive}
          onChange={() => switchCount()}
        />
        <IconButton
          className={classes.deleteButton}
          aria-label="Delete"
          onClick={() => deleteCounter(id)}
        >
          <ClearIcon />
        </IconButton>

      </div>
    );
  }
}

WordCounterHeader.propTypes = {
  classes: PropTypes.objectOf.isRequired,
  id: PropTypes.number.isRequired,
  words: PropTypes.number.isRequired,
  characters: PropTypes.number.isRequired,
  textLength: PropTypes.number.isRequired,
  deleteCounter: PropTypes.func.isRequired,
  switchCount: PropTypes.func.isRequired,
  onActive: PropTypes.bool.isRequired,
  displayMode: PropTypes.objectOf.isRequired,
};

export default withStyles(styles)(WordCounterHeader);

import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';

const typeOfCounter= [
  {
    value: 'Words',
    label: 'Words',
  },
  {
    value: 'Characters',
    label: 'Characters',
  },
  {
    value: 'Characters including space',
    label: 'Characters including space',
  },
];

const styles = theme => ({
  root: {
    width: '100%',
    display: 'flex',
    margin: '0.5em',
    alignItems: 'center',
  },
  addButton: {
    margin: '0.5em',
  },
  refreshButton: {
    margin: '0.5em',
    color: 'white',
    backgroundColor: '#2196F3',
  },
  selectField: {
    margin: '0.5em',
  },
  menu: {
    width: 200,
  },
});

class TotalCountBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalWords: 0,
      totalCharacters: 0,
      totalCharactersIncludingSpace: 0,
      type: 'Characters',
      checked: true,
    };
    this.handleType = this.handleType.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    // this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    let newTotalWords;
    let newTotalCharacters;
    let newTotalCharactersIncludingSpace;
    // console.log('length');
    // console.log(nextProps.counters.length);
    // console.log(nextProps.counters);
    if (nextProps.counters.length === 1) {
      newTotalWords = nextProps.counters[0].words;
      newTotalCharacters = nextProps.counters[0].characters;
      newTotalCharactersIncludingSpace = nextProps.counters[0].allCharacters;
    }
    if (nextProps.counters.length === 0) {
      newTotalWords = 0;
      newTotalCharacters = 0;
      newTotalCharactersIncludingSpace = 0;
    }
    if (nextProps.counters.length > 1) {
      newTotalWords = nextProps.counters.reduce((sum, counter) => sum += counter.words, 0);
      newTotalCharacters = nextProps.counters.reduce((sum, counter) => sum += counter.characters, 0);
      newTotalCharactersIncludingSpace = nextProps.counters.reduce((sum, counter) => sum += counter.allCharacters, 0);

      // console.log(newTotalCharacters);
    }
    // console.log(newTotalWords);
    this.setState({ totalWords: newTotalWords });
    this.setState({ totalCharacters: newTotalCharacters });
    this.setState({ totalCharactersIncludingSpace: newTotalCharactersIncludingSpace });
  }

  handleType(event) {
    // this.props.editParameterType(id, event.target.value);
    this.setState({
      type: event.target.value,
    });
    this.props.switchMode.switchType(event.target.value);
  }

  handleChange = event => {
    this.setState({ checked: event.target.checked });
  }

  handleClick() {
    if (this.state.checked) {
      this.props.addCounterBelow();
    } else {
      this.props.addCounterTop();
    }
  }

  render() {
    const { classes, refresh } = this.props;
    const {
      totalWords,
      totalCharacters,
      totalCharactersIncludingSpace,
    } = this.state;

    let element;
    if (this.state.type === 'Words') {
      if (totalWords > 0) {
        element = (
          <span>
            {totalWords} words
          </span>
        );
      } else {
        element = (
          <span>
            {totalWords} word
          </span>
        );
      }
    }
    if (this.state.type === 'Characters') {
      if (totalCharacters > 0) {
        element = (
          <span>
            {totalCharacters} characters
          </span>
        );
      } else {
        element = (
          <span>
            {totalCharacters} character
          </span>
        );
      }
    }
    if (this.state.type === 'Characters including space') {
      if (totalCharactersIncludingSpace > 0) {
        element = (
          <span>
            {totalCharactersIncludingSpace} characters (space)
          </span>
        );
      } else {
        element = (
          <span>
            {totalCharactersIncludingSpace} character (space)
          </span>
        );
      }
    }
    return (
      <div className={classes.root}>
        <Typography variant="title" color="inherit">
          {element}
        </Typography>
        <TextField
          id="select-type"
          select
          className={classes.selectField}
          value={this.state.type}
          onChange={this.handleType}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          margin="normal"
        >
          {typeOfCounter.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <Button
          variant="raised"
          color="secondary"
          className={classes.addButton}
          onClick={this.handleClick}
        >
          Add
        </Button>
        <FormControlLabel
          control={
            <Checkbox
              checked={this.state.checked}
              onChange={this.handleChange}
            />
          }
          label="Add below"
        />
        <Button
          variant="raised"
          color="primary"
          className={classes.refreshButton}
          onClick={() => refresh()}
        >
          Refresh
        </Button>
      </div>
    );
  }
}


TotalCountBar.propTypes = {
  classes: PropTypes.objectOf.isRequired,
  counters: PropTypes.arrayOf.isRequired,
  addCounterTop: PropTypes.func.isRequired,
  addCounterBelow: PropTypes.func.isRequired,
  refresh: PropTypes.func.isRequired,
  switchMode: PropTypes.objectOf.isRequired,
};

export default withStyles(styles)(TotalCountBar);

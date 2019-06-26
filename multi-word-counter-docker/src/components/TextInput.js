import React, { Component } from 'react';

import PropTypes from 'prop-types';
// import classnames from 'classnames';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 2,
    paddingBottom: 2,
    // marginTop: theme.spacing.unit,
    // width: 600,
    // marginLeft: '1em',
    // display: 'flex',
    // flexWrap: 'wrap',
  }),
  textField: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '90%',
    margin: '1em',
    // marginLeft: '0.2em',
    // // marginLeft: '2em',
    // marginBottom: '0.9em',
    // marginRight: theme.spacing.unit,
  },
});


class TextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.text || '',
    };
    this.handleChange = this.handleChange.bind(this);
    // this.handleSwitch = this.handleSwitch.bind(this);
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
    this.props.edit(e.target.value);
  }

  render() {
    const { classes } = this.props;
    return (
      <TextField
        id="textarea"
        label="With placeholder multiline"
        placeholder="Paste your text"
        multiline
        value={this.props.text}
        className={classes.textField}
        margin="normal"
        onChange={this.handleChange}
        autoFocus="true"
      />

    );
  }
}

TextInput.propTypes = {
  classes: PropTypes.objectOf.isRequired,
  edit: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default withStyles(styles)(TextInput);

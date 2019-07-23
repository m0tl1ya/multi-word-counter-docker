import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from 'material-ui-icons/Menu';
// import Switch from '@material-ui/core/Switch';
// import { FormControlLabel, FormGroup } from '@material-ui/core/Form';


const styles = theme => ({
  root: {
    width: '100%',
    background: 'linear-gradient(45deg, #2196f3 30%, #21cbf3 90%)',
    boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .30)',
  },
  flex: {
    flex: 1,
    padding: '0.5em',
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

class TitleBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;

    return (
      <AppBar
        position="static"
        className={classes.root}
      >
        <Typography variant="h5" color="inherit" className={classes.flex}>
            Multi Word Counter
        </Typography>
      </AppBar>
    );
  }
}
// <FormGroup>
//   <FormControlLabel
//     control={
//       <Switch
//         checked={words}
//         onChange={this.handleChange}
//       />
//     }
//     label={words ? 'word' : 'character'}
//   />
// </FormGroup>


TitleBar.propTypes = {
  classes: PropTypes.objectOf.isRequired,
};

export default withStyles(styles)(TitleBar);

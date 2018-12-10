import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


const styles = {
  root: {
    color: green[600],
    '&$checked': {
      color: green[500],
    },
  },
  checked: {},
};

class Qsofa extends React.Component {
  state = {
    checkedA: false,
    checkedB: false,
    checkedC: false,
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    const { classes } = this.props;

    return (
      <FormGroup >
       
        <FormControlLabel
          control={
            <Checkbox
              checked={this.state.checkedA}
              onChange={this.handleChange('checkedA')}
              value="checkedA"
              classes={{
                root: classes.root,
                checked: classes.checked,
              }}
            />
          }
          label="sBP ≦ 100mmHg"
        />
            
       <FormControlLabel
          control={
            <Checkbox
              checked={this.state.checkedB}
              onChange={this.handleChange('checkedB')}
              value="checkedB"
              classes={{
                root: classes.root,
                checked: classes.checked,
              }}
            />
          }
          label="呼吸数 ≧ 22回/分"
        />

  
        <FormControlLabel
          control={
            <Checkbox
              checked={this.state.checkedC}
              onChange={this.handleChange('checkedC')}
              value="checkedC"
              classes={{
                root: classes.root,
                checked: classes.checked,
              }}
            />
          }
          label="意識状態の変化"
        />

      </FormGroup>
    );
  }
}

Qsofa.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Qsofa);

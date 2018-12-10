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

class Adrop extends React.Component {
  state = {
    checkedA: false,
    checkedB: false,
    checkedC: false,
    checkedD: false,
    checkedE: false,
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
          label=" A: 年齢　　　　　男性 ≧ 70歳、女性 ≧ 75歳"
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
          label="D: 脱水　　　　　BUN ≧ 21  または、脱水あり"
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
          label="R: 呼吸　　　　　SpO2 ≦ 90%"
        />

          
          <FormControlLabel
          control={
            <Checkbox
              checked={this.state.checkedD}
              onChange={this.handleChange('checkedD')}
              value="checkedD"
              classes={{
                root: classes.root,
                checked: classes.checked,
              }}
            />
          }
          label=" O: 意識　　　　　意識障害あり"
        />

          
          <FormControlLabel
          control={
            <Checkbox
              checked={this.state.checkedE}
              onChange={this.handleChange('checkedE')}
              value="checkedE"
              classes={{
                root: classes.root,
                checked: classes.checked,
              }}
            />
          }
          label="P: 血圧　　　　　sBP ≦ 90mmHg"
        />



      </FormGroup>
    );
  }
}

Adrop.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Adrop);

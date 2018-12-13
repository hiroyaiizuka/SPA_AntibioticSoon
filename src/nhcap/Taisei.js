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

class Taisei extends React.Component {
  state = {
    checkedA: false,
    checkedB: false,
    checkedC: false,
    checkedD: false,

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
          label=" 1) 過去90日以内の経静脈的抗菌薬の使用歴"
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
          label=" 2) 過去90日以内に2日以上の入院歴"
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
          label=" 3) 免疫抑制状態"
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
          label=" 4) 活動性の低下"
        />

          
        


      </FormGroup>
    );
  }
}

Taisei.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Taisei);

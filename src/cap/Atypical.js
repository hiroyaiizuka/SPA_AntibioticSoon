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

class Atypical extends React.Component {
  state = {
    checkedA: false,
    checkedB: false,
    checkedC: false,
    checkedD: false,
    checkedE: false,
    checkedF: false,
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
          label=" 1) 年齢　　< 60 歳"
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
          label=" 2) 基礎疾患がない、あるいは軽微"
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
          label=" 3) 頑固な席がある"
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
          label=" 4) 聴診所見に乏しい"
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
          label=" 5) 痰がない or 迅速診断法で原因菌が証明されない"
        />

          
          <FormControlLabel
          control={
            <Checkbox
              checked={this.state.checkedE}
              onChange={this.handleChange('checkedE')}
              value="checkedF"
              classes={{
                root: classes.root,
                checked: classes.checked,
              }}
            />
          }
          label=" 6) 白血球数 < 10000/μl"
        />



      </FormGroup>
    );
  }
}

Atypical.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Atypical);

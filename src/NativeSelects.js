import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import { withStyles } from "@material-ui/core/styles";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Calc from "./Calc";


class NativeSelects extends React.Component {
 constructor(props){
   super (props);
   this.state = {
    sex2: "",
    labelWidth: 0,
  };

 }

  componentDidMount() {
    this.setState({
      labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth
    });
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value});
  };

  render() {
    const { classes } = this.props;
   

    return (
      <div>
        <div className={classes.root}>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel
              ref={ref => {
                this.InputLabelRef = ref;
              }}
              htmlFor="outlined-age-native-simple"
            >
              性別
            </InputLabel>
            <Select
              native
              value={this.state.sex2}
              onChange={this.handleChange("sex2")}
              input={
                <OutlinedInput
                  name="sex2"
                  labelWidth={this.state.labelWidth}
                  id="outlined-age-native-simple"
                />
              }
            >
              <option value="" />
              <option value={10}>男性</option>
              <option value={20}>女性</option>
            </Select>
          </FormControl>
        </div>
        <Calc sex = {this.state.sex2} />
       </div>
    );
  }
}

const styles = theme => ({
  root: {
    justifyContent: "center",
    display: "flex",  
    marginTop:50,
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
});


NativeSelects.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NativeSelects);

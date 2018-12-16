import React from "react";

import "./styles.css";
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';


class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: "",
      age: "",
      cr: "",
      result: ""
    };
  }


  handleChange1 = e => {
    const newValue = e.target.value;
    const numValue = newValue.replace(/[^0-9]/g, "");
    this.setState({ weight: numValue });
  };

  handleChange2 = e => {
    const newValue = e.target.value;
    const numValue = newValue.replace(/[^0-9]/g, "");
    this.setState({ age: numValue });
  };

  handleChange3 = e => {
    const newValue = e.target.value;
    this.setState({ cr: newValue });
  };

  resultCcr = e => {
    e.preventDefault();
    const a = 140 - this.state.age;
    const b = 72 * this.state.cr;
    const c = this.state.weight / b;
    const d = a * c;
    const f = d * 0.85;


    this.props.sex === "10"
      ? this.setState({ result: d })
      : this.setState({ result: f });
  };

  render() {
     console.log (this.props.sex)

    return (
      <div className = "container">
        <div style = {{marginTop: 40}} >
            <TextField
            id="outlined-adornment-weight"    
            label="体重"
            className="weight"
            value={this.state.weight}
            onChange={this.handleChange1}
            InputProps={{
                endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
            }}
            />
        </div>

        <div style = {{marginTop: 40}}>
            <TextField
            id="outlined-adornment-weight"
            label="年令"
            className="age"
            value={this.state.age}
            onChange={this.handleChange2}
            InputProps={{
                endAdornment: <InputAdornment position="end">歳</InputAdornment>,
            }}
            />
        </div>

       <div style = {{marginTop: 40, marginBottom: 40}} >
            <TextField
            id="outlined-adornment-weight"
            label="Cr"
            className="cr"
            value={this.state.Cr}
            onChange={this.handleChange3}
            InputProps={{
                endAdornment: <InputAdornment position="end">mg/dl</InputAdornment>,
            }}
            />
        </div>
          
        <div style = {{marginRoght: 20}}>
          <Button variant="contained" color="primary" onClick = {this.resultCcr}> 計算 </Button>
        </div> 

          <input
            className="ccr"
            type="text"
            value={Math.floor(this.state.result)}
          />
          <label> ml/min </label>


      </div>
    );
  }
}


export default Calc;
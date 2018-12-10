import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Iv from './Iv';
import Med from './Med';
import Dialysis from './Dialysis';

const styles = theme => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  actionsContainer: {
    marginTop: 40,
    marginBottom: theme.spacing.unit * 2,
  },
  resetContainer: {
    padding: theme.spacing.unit * 3,
  },
});

function getSteps() {
  return ['静注抗菌薬', '経口抗菌薬', '透析患者への投与量'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Iv />;
    case 1:
      return <Med /> ;
    case 2:
      return <Dialysis />;
    default:
      return 'Unknown step';
  }
}

class Dose extends React.Component {
  state = {
    activeStep: 0,
  };


  handleStep = step => () => {
    this.setState({
      activeStep: step,
    });
  };


  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };
　

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      <div className={classes.root}>
        <Stepper activeStep={activeStep} nonLinear orientation="vertical">
          {steps.map((label, index) => {
            return (
              <Step key={label}>
                <StepButton　 style = {{marginBottom: 0}} onClick={this.handleStep(index)} >{label}</StepButton>
                <StepContent>
                  <Typography >{getStepContent(index)}</Typography>
                  <div className={classes.actionsContainer}>
                    <div>
                      <Button
                        disabled={activeStep === 0}
                        onClick={this.handleBack}
                        className={classes.button}
                      >
                        Back
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={this.handleNext}
                        className={classes.button}
                        disabled={activeStep === 2}
                      >
                         Next
                      </Button>
                    </div>
                  </div>
                </StepContent>
              </Step>
            );
          })}
        </Stepper>
      </div>
    );
  }
}

Dose.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(Dose);
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
import Adrop from '../cap/Adrop';
import Qsofa from '../cap/Qsofa';
import Taisei from './Taisei';



function getSteps() {
  return ['A-DROP', 'q-SOFA', '耐性菌リスク'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
  return (
    <div>
    <Adrop/>
     <div style = {{ backgroundColor: 'rgb(130,200,143)',
            marginTop: 25,
            marginBottom: 25,
            height: 90,
            width: 165,
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 0.5},
            shadowOpacity: 0.2,
            shadowRadius: 1,
            alignSelf: 'center',
            padding: 19,}}>
      <Typography style={{marginBottom: 8, marginTop:0, fontSize: 15,color: 'rgb(25,255,255)'}}>１-２項目    中等症</Typography>
      <Typography style = {{  fontSize: 15,color: 'rgb(255,255,255)',padding:6}}> ≧ ３項目     重症</Typography>
     </div>
    </div>)
   
    case 1:
      return (
        <div>
            <Qsofa/>
          <div style = {{     
            backgroundColor: 'rgb(130,200,143)',
            color: 'rgb(255,255,255)',
            fontWeight:'bold',
            marginTop: 50,
            height: 60,
            width: 250,
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 0.5},
            shadowOpacity: 0.2,
            shadowRadius: 1,
            textAlign: 'center',
            alignSelf: 'center',
            padding: 17,
            fontSize: 16}}>
            <Typography style={{marginBottom: 8, marginTop:0, fontSize: 15,color: 'rgb(25,255,255)'}}> qSOFA ≧２項目     敗血症疑い </Typography>
            <Typography style={{marginBottom: 8, marginTop:0, fontSize: 15,color: 'rgb(25,255,255)'}}> ADROP ≧３項目  qSOFA ≧２項目{"\n"}{"\n"}➡︎  超重症 (ICU 検討) </Typography>
          </div>
        </div>
      );
    case 2:
      return (
        <div>
            <Taisei/>
          <div style = {{ backgroundColor: 'rgb(130,200,143)',
            marginTop: 40,
            height: 80,
            width: 480,
            padding: 15,
            }}>
          <Typography style={{marginBottom: 8, marginTop:0, fontSize: 15,color: 'rgb(25,255,255)'}}> 2項目以上で耐性菌リスク(+)</Typography>
          </div>
        </div>
      );
    default:
      return 'Unknown step';
  }
}

class NhcapSevererity extends React.Component {
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
        <h3 >重症度評価</h3>
        <Button href="/nhcaptreat" style = {{position: "relative", top: -50, left: 350 }}>
            治療
         </Button>
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


NhcapSevererity.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(NhcapSevererity);
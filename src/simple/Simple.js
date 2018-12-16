import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class Simple extends Component {
    state = {
        open: false,
        open2: false,
        scroll: 'paper',
    }


  handleClickOpen = scroll => () => {
    this.setState({ open: true, scroll });
  };
  handleClickOpen2 = scroll => () => {
    this.setState({ open2: true, scroll });
  };


  handleClose = () => {
    this.setState({ open: false });
  };
  handleClose2 = () => {
    this.setState({ open2: false });
  };

  
  render() {

    const { classes } = this.props;
    return (
        <div>
            <div style={{
                backgroundColor: '#E10050',
                width: 150,
                margin: "auto",
                marginTop: 50,
                borderRadius: 1,

                borderColor: "black",
                boxShadow: "1px 0px 2px 0px #000",
                shadowOpacity: 0.1,
                shadowOffset: {width: 0, height: 0.5},
            }}>
            <Typography style = {{  fontSize: 15, color: "white", textAlign: "center", padding: 10}}>膀胱炎</Typography>
            </div>

            <Card className={classes.card}>           
                    <CardContent>
                        <Typography style={{ fontWeight: 'bold', fontSize: 18, marginTop: 15}} >原因微生物:</Typography>
                        <Typography >・E.coli (80%以上)</Typography>
                        <Typography >・Klebsiella、Proteus</Typography>
                        <Typography >・腐性ブドウ球菌  (性的に activeな女性に多い)</Typography>
                        <Typography  style={{color: 'red', marginTop: 4}}>　健常者からのESBL産生E.coliが、増加傾向！</Typography>
                        <Typography  style={{ fontWeight: 'bold', fontSize: 18, marginTop: 25}}>注意点:</Typography>
                        <Typography >・クラビット耐性のEcoliが増えてきた (全国平均31%)</Typography>
                        <Typography >　緑膿菌への貴重な治療薬であるため</Typography>
                        <Typography style={{color: 'red'}}>　膀胱炎には、できるだけ使用しないで温存する！</Typography>
                        <Typography style={{ marginTop: 10}}>・無症候性細菌尿は、治療対象にならないが</Typography>
                        <Typography >　妊婦、侵襲性の泌尿器処置後、小児などの場合は、治療を検討する</Typography>
                        <Typography style = {{fontSize: 10, marginTop: 21}} align="right">感染症プラチナマニュアル2018,  MEDSi</Typography>
                    </CardContent>
                <CardActions>
                <Button onClick={this.handleClickOpen('paper')} color="primary" size = "small">Example</Button>
                </CardActions>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    scroll={this.state.scroll}
                    aria-labelledby="scroll-dialog-title"
                    >
                    <DialogTitle id="scroll-dialog-title"></DialogTitle>
                    <DialogContent>
                        <DialogContentText style={{ fontWeight: 'bold'}}>内服薬:</DialogContentText>
                        <DialogContentText style={{ marginTop: 5}}>バクタ2錠　1日2回　3日間</DialogContentText>
                        <DialogContentText>ケフレックス500mg　1日3回　7日間</DialogContentText>
                        <DialogContentText>オーグメンチン1錠　1日2回　3日間</DialogContentText>
                        <DialogContentText>ホスミシン3g　1回経口投与</DialogContentText>
                        <DialogContentText style = {{marginBottom: 25, marginTop: 20}}>バクタは妊婦には使用を避ける</DialogContentText>
                        <DialogContentText style={{ fontSize: 6, textAlign: 'right', position: 'relative', top: 1, right: 12 }}>感染症プラチナマニュアル2018,  MEDSi </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                        Cancel
                        </Button>
                    </DialogActions>
                </Dialog>

            </Card>



             <div style={{
                backgroundColor: '#E10050',
                width: 150,
                margin: "auto",
                marginTop: 80,
                borderRadius: 1,

                borderColor: "black",
                boxShadow: "1px 0px 2px 0px #000",
                shadowOpacity: 0.1,
                shadowOffset: {width: 0, height: 0.5},
            }}>
            <Typography style = {{  fontSize: 15, color: "white", textAlign: "center", padding: 10}}>腎盂腎炎</Typography>
            </div>

             <Card className={classes.card}>
                    <CardContent>
                    <Typography style={{ fontWeight: 'bold', fontSize: 18, marginTop: 15}}>注意点:</Typography>
                        <Typography  style={{ marginTop: 10}}>1. 3日治療しても解熱しないとき</Typography>
                        <Typography >　起因菌の感受性を確認するとともに、腎膿瘍の合併を考える</Typography>
                        <Typography  style={{ marginTop: 10}}>2. ESBL産生菌を疑うとき</Typography>
                        <Typography >　軽症例では、セフメタゾール</Typography>
                        <Typography >　重症例では、カルバペネム系で治療する</Typography>
                        <Typography style = {{fontSize: 10, marginTop: 21}}align="right">感染症プラチナマニュアル2018,  MEDSi</Typography>
                    </CardContent>
                <CardActions>
                <Button onClick={this.handleClickOpen2('paper')} color="primary" size = "small">Example</Button>
                </CardActions>
                <Dialog
                    open={this.state.open2}
                    onClose={this.handleClose2}
                    scroll={this.state.scroll}
                    aria-labelledby="scroll-dialog-title"
                    >
                    <DialogTitle id="scroll-dialog-title"></DialogTitle>
                    <DialogContent>
                    <DialogContentText style={{ fontWeight: 'bold'}}>軽症、外来治療: </DialogContentText>
                        <DialogContentText >バクタ2錠　1日2回　14日間</DialogContentText>
                        <DialogContentText>ロセフィン2g 外来で投与後に</DialogContentText>
                        <DialogContentText　style = {{marginBottom: 25}}>オーグメンチン375mg　+　サワシリン250mg　1日3回　14日間</DialogContentText>
                        <DialogContentText style={{ fontWeight: 'bold' }}>中等症以上、入院治療:</DialogContentText>
                        <DialogContentText>セフメタゾール2g　12時間毎</DialogContentText>
                        <DialogContentText　style = {{marginBottom: 25}}>ロセフィン2g　24時間毎</DialogContentText>
                        <DialogContentText style={{ fontWeight: 'bold' }}>ショック:</DialogContentText>
                        <DialogContentText　style = {{marginBottom: 25}}>メロペン1g　8時間毎</DialogContentText>
                        <DialogContentText style={{ fontSize: 6, textAlign: 'right', position: 'relative', top: 1, right: 12 }}>感染症プラチナマニュアル2018,  MEDSi </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose2} color="primary">
                        Cancel
                        </Button>
                    </DialogActions>
                </Dialog>
            </Card>

        </div>
    );
  }
}


const styles = {
    card: {
      maxWidth: 500,
      margin: "auto",
      marginTop: 30
    },
    media: {
      height: 140,
    },
  };

Simple.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
   

  export default withStyles(styles)(Simple);
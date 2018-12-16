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

class Complex extends Component {
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
            <Typography style = {{  fontSize: 15, color: "white", textAlign: "center", padding: 10}}>膀胱炎<br/>急性腎盂腎炎</Typography>
            </div>

            <Card className={classes.card}>
                    <CardContent>
                        <Typography  style={{ fontWeight: 'bold', fontSize: 18, marginTop: 15}} >原因微生物:</Typography>
                        <Typography style={{ marginTop: 5}}>1. グラム陰性桿菌の頻度は6割程度に減り</Typography>
                        <Typography >　薬剤耐性菌の頻度が増える</Typography>
                        <Typography  style={{ marginTop: 10}}>2. 黄色ブドウ球菌が検出された場合</Typography>
                        <Typography >　感染性心内膜炎等の血流感染、腎･前立腺膿瘍を疑う</Typography>
                        <Typography style={{ fontWeight: 'bold', fontSize: 18, marginTop: 15}}>治療期間:</Typography>
                        <Typography >　膀胱炎、腎盂腎炎:　7-14日間</Typography>
                        <Typography >　再発例や泌尿器科的異常がある場合:　6週間</Typography>
                        <Typography  style={{ fontWeight: 'bold', fontSize: 18, marginTop: 15}} >注意点:</Typography>
                        <Typography style={{ marginTop: 5}}>1. 男性には直腸診を行い、前立腺腫大、圧痛等を確認</Typography>
                        <Typography  style={{ marginTop: 10}}>2. 無症候性細菌尿は、治療対象にならない</Typography>
                        <Typography >　例外: 妊婦、侵襲性の泌尿器科処置、好中球減少時</Typography>
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
                        <DialogContentText style={{ fontWeight: 'bold', fontSize: 20}}>膀胱炎</DialogContentText>
                        <DialogContentText style={{ marginTop: 5}}>内服薬:</DialogContentText>
                        <DialogContentText >バクタ2錠　1日2回　7-14日間</DialogContentText>
                        <DialogContentText style = {{marginBottom: 25}}>オーグメンチン375mg　+　サワシリン250mg　1日3回　14日間</DialogContentText>
                        <DialogContentText style={{ fontSize: 6, textAlign: 'right', position: 'relative', top: 1, right: 12 }}>JAID/JSC感染症治療ガイドライン2015</DialogContentText>
                        <DialogContentText style={{ fontWeight: 'bold', marginTop:25, fontSize: 20}}>腎盂腎炎</DialogContentText>
                        <DialogContentText style={{ marginTop: 5}}>軽症:</DialogContentText>
                        <DialogContentText>セフメタゾール2g　12時間毎</DialogContentText>
                        <DialogContentText>ロセフィン2g　24時間毎</DialogContentText>
                        <DialogContentText style={{ marginTop: 15}}>中等症:</DialogContentText>
                        <DialogContentText>ゾシン4.5g　6時間毎 </DialogContentText>
                        <DialogContentText>マキシピーム2g　6時間毎</DialogContentText>
                        <DialogContentText style={{ marginTop: 15}}>重症:</DialogContentText>
                        <DialogContentText>メロペン1g　8時間毎</DialogContentText>
                        <DialogContentText>クラビット500mg/日　上記に追加を検討する</DialogContentText>
                        <DialogContentText style={{ marginTop: 15}}>グラム染色で、グラム陽性球菌(+):</DialogContentText>
                        <DialogContentText>Enterococcus  facium を考慮し</DialogContentText>
                        <DialogContentText style = {{marginBottom: 25}}>バンコマイシン1g　12時間毎 を追加する</DialogContentText>
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
            <Typography style = {{  fontSize: 15, color: "white", textAlign: "center", padding: 10}}>急性前立腺炎</Typography>
            </div>

             <Card className={classes.card}>
                    <CardContent>
                    <Typography style={{ fontWeight: 'bold', fontSize: 18, marginTop: 15}}>注意点:</Typography>
                        <Typography style={{ marginTop: 5}}>1. 前立腺移行性を考慮した抗菌薬選択をする</Typography>
                        <Typography >　ST合剤、ニューキノロン系は前立腺移行性が良い</Typography>
                        <Typography >　急性の場合、激しい炎症のため、βラクタム系も有効</Typography>
                        <Typography  style={{ marginTop: 15}}>2. 治療期間：3週間以上 (3-6週間)</Typography>
                        <Typography >　十分な治療にもかかわらず感染を除去できなかったり</Typography>
                        <Typography >　膿瘍を形成したりすることがある</Typography>
                        <Typography style = {{fontSize: 10, marginTop: 21}} align="right">感染症プラチナマニュアル2018,  MEDSi</Typography>
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
                    <DialogContentText style={{ fontWeight: 'bold'}}>軽症、外来治療:</DialogContentText>
                        <DialogContentText >バクタ2錠　1日2回　最低14日間 (通常3-4週間)</DialogContentText>
                        <DialogContentText>クラビット500mg　1日1回　最低14日間 (通常3-4週間)</DialogContentText>
                        <DialogContentText style={{ fontWeight: 'bold',  marginTop: 15 }}>中等症以上、入院治療:</DialogContentText>
                        <DialogContentText >腎盂腎炎と同じ治療薬</DialogContentText>
                        <DialogContentText style={{ fontWeight: 'bold', marginTop: 15 }}>重症で腸球菌の関与が疑われる場合:</DialogContentText>
                        <DialogContentText>ゲンタシン5mg/kg/日</DialogContentText>
                        <DialogContentText>アンピシリン2g　4-6時間毎　上記治療に追加する</DialogContentText>
                        <DialogContentText style = {{marginBottom: 25}}>(培養結果によっては、バンコマイシンに)</DialogContentText>
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

Complex.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
   

  export default withStyles(styles)(Complex);
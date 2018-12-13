import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
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
                width: '20%',
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
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image=""
                    title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography  variant="h5" >原因微生物</Typography>
                        <Typography >Ecoli (80%以上、近年健常者からのESBL産生Ecoliが、増加傾向！) </Typography>
                        <Typography >Klebsiella</Typography>
                        <Typography >Proteus</Typography>
                        <Typography variant="h5">治療期間</Typography>
                        <Typography >３日間</Typography>
                        <Typography  variant="h5" >注意点</Typography>
                        <Typography >クラビット耐性のEcoliが増えてきた (全国平均31%)</Typography>
                        <Typography >緑膿菌への貴重な治療薬であるため</Typography>
                        <Typography >膀胱炎には、できるだけ使用しない 温存する！</Typography>
                        <Typography >無症候性細菌尿は、治療対象にならないが</Typography>
                        <Typography >妊婦、侵襲性の泌尿器処置、小児などの場合は、治療を検討する</Typography>
                        <Typography variant="" align="right">感染症プラチナマニュアル2018,  MEDSi</Typography>
                    </CardContent>
                </CardActionArea>
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
                        <DialogContentText style={{ fontWeight: 'bold'}}>内服薬</DialogContentText>
                        <DialogContentText >バクタ 2錠                     1日2回　3日間</DialogContentText>
                        <DialogContentText>ケフレックス 500mg   1日3回    7日間</DialogContentText>
                        <DialogContentText>オーグメンチン 1錠　 1日2回    3日間</DialogContentText>
                        <DialogContentText>ホスミシン 3g               1回経口投与</DialogContentText>
                        <DialogContentText>バクタは妊婦には使用を避ける</DialogContentText>
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
                width: '20%',
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
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image=""
                    title="Contemplative Reptile"
                    />
                    <CardContent>
                    <Typography  variant="h5" >注意点</Typography>
                        <Typography >1. 3日治療しても解熱しないとき</Typography>
                        <Typography >起因菌の感受性を確認するとともに、腎膿瘍の合併を考える</Typography>
                        <Typography >2. ESBL産生菌を疑うとき</Typography>
                        <Typography >軽症例では、セフメタゾール</Typography>
                        <Typography >重症例では、カルバペネム系で治療する</Typography>
                        <Typography variant="" align="right">感染症プラチナマニュアル2018,  MEDSi</Typography>
                    </CardContent>
                </CardActionArea>
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
                    <DialogContentText style={{ fontWeight: 'bold'}}>軽症、外来治療 </DialogContentText>
                        <DialogContentText >バクタ １回2錠　1日2回   14日間</DialogContentText>
                        <DialogContentText>ロセフィン 2g 外来で投与後に</DialogContentText>
                        <DialogContentText>オーグメンチン 375mg + サワシリン 250mg  1日3回  14日間</DialogContentText>
                        <DialogContentText style={{ fontWeight: 'bold' }}>中等症以上、入院治療</DialogContentText>
                        <DialogContentText>セフメタゾール 2g　12時間毎</DialogContentText>
                        <DialogContentText>ロセフィン 2g　　　24時間毎</DialogContentText>
                        <DialogContentText style={{ fontWeight: 'bold' }}>ショック</DialogContentText>
                        <DialogContentText>メロペン 1g  8時間毎</DialogContentText>
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
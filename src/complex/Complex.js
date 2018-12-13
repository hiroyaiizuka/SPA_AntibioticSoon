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

class Complex extends Component {
    state = {
        open: false,
        open2: false,
        open3: false,
        scroll: 'paper',
    }


  handleClickOpen = scroll => () => {
    this.setState({ open: true, scroll });
  };
  handleClickOpen2 = scroll => () => {
    this.setState({ open2: true, scroll });
  };
  handleClickOpen3 = scroll => () => {
    this.setState({ open3: true, scroll });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  handleClose2 = () => {
    this.setState({ open2: false });
  };
  handleClose3 = () => {
    this.setState({ open3: false });
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
            <Typography style = {{  fontSize: 15, color: "white", textAlign: "center", padding: 10}}>重症度が低い & 耐性菌リスク(-)</Typography>
            </div>

            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
  
                    title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography  variant="h5" >内服薬 (外来治療)</Typography>
                        <Typography >βラクタマーゼ阻害配合ペニシリン系 + マクロライド系{"\n"}レスピラトリーキノロン (結核をマスク！)</Typography>
                        <Typography variant="h5">注射薬</Typography>
                        <Typography >スルバクタム･アンピシリン{"\n"}セフトリアキソン (嫌気性菌感染疑いには、使用しない)</Typography>
                        <Typography variant="h5">非定型肺炎が疑われる場合</Typography>
                        <Typography >レボフロキサシン (結核をマスクする、注意！)</Typography>
                        <Typography variant="" align="right">成人市中肺炎診療ガイドライン2017</Typography>
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
                        <DialogContentText style={{ fontWeight: 'bold'}}>内服</DialogContentText>
                        <DialogContentText >オーグメンチン 375mg + サワシリン 250mg  1日3回{"\n"}(± ジスロマック 2000mg 1回)</DialogContentText>
                        <DialogContentText style={{ fontWeight: 'bold'}}>注射</DialogContentText>
                        <DialogContentText>ロセフィン 2g/日  or  ユナシン 1.5-3g  6時間毎 </DialogContentText>
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
            <Typography style = {{  fontSize: 15, color: "white", textAlign: "center", padding: 10}}> 重症  or　耐性菌リスク(+)</Typography>
            </div>

             <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image=""
                    title="Contemplative Reptile"
                    />
                    <CardContent>
                    <Typography  variant="h5" >注射薬(単剤投与)</Typography>
                        <Typography >第4世代セフェム系薬  or  ニューキノロン系薬{"\n"}(→ 嫌気性菌感染疑いには、使用しない)</Typography>
                        <Typography >タゾバクタム･ピペラシン</Typography>
                        <Typography >カルバペネム系 </Typography>
                        <Typography variant="" align="right">成人市中肺炎診療ガイドライン2017</Typography>
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
                    <DialogContentText style={{ fontWeight: 'bold'}}>注射</DialogContentText>
                        <DialogContentText >ゾシン 4.5g  6時間毎</DialogContentText>
                        <DialogContentText>マキシピーム 2g  6時間毎  (嫌気性菌感染には × )</DialogContentText>
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
            <Typography style = {{  fontSize: 15, color: "white", textAlign: "center", padding: 10}}>重症  &　耐性菌リスク(+)</Typography>
            </div>

             <Card className={classes.card} style = {{marginBottom: 40}}>
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image=""
                    title="Contemplative Reptile"
                    />
                    <CardContent>
                    <Typography  variant="h5" >注射薬 (2剤併用投与)</Typography>
                        <Typography >タゾバクタム･ピペラシン</Typography>
                        <Typography >カルバペネム系</Typography>
                        <Typography >第4世代セフェム系薬  (嫌気性菌感染疑いには、使用しない)</Typography>
                        <Typography >+ </Typography>
                        <Typography >アミノグリコシド系薬</Typography>
                        <Typography >ニューキノロン系薬</Typography>
                        <Typography  variant="h5" >MRSA感染を疑う場合</Typography>
                         <Typography >抗MRSA薬  (ダプトマイシン、アルべカシンは使用不可)</Typography>
                        <Typography variant="" align="right">成人市中肺炎診療ガイドライン2017</Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                <Button onClick={this.handleClickOpen3('paper')} color="primary" size = "small">Example</Button>
                </CardActions>
                <Dialog
                    open={this.state.open3}
                    onClose={this.handleClose3}
                    scroll={this.state.scroll}
                    aria-labelledby="scroll-dialog-title"
                    >
                    <DialogTitle id="scroll-dialog-title"></DialogTitle>
                    <DialogContent>
                        <DialogContentText style={{ fontWeight: 'bold'}}>注射</DialogContentText>
                        <DialogContentText >ゾシン 4.5g  6時間毎</DialogContentText>
                        <DialogContentText >+ クラビット 500mg/日   or   ゲンタシン 5mg/kg/日</DialogContentText>
                        <DialogContentText >(± バンコマイシン 1g  12時間毎)</DialogContentText>
                        <DialogContentText style={{ fontSize: 6, textAlign: 'right', position: 'relative', top: 1, right: 12 }}>感染症プラチナマニュアル2018,  MEDSi </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose3} color="primary">
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
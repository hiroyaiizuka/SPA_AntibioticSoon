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

class CapTreat extends Component {
    state = {
        open: false,
        scroll: 'paper',
        open2: false,
        open3: false
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
            <Typography style = {{  fontSize: 15, color: "white", textAlign: "center", padding: 10}}>軽症、外来患者群</Typography>
            </div>

            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image=""
                    title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography  variant="h5" >内服薬</Typography>
                        <Typography >βラクタマーゼ阻害配合ペニシリン系薬</Typography>
                        <Typography >マクロライド系薬</Typography>
                        <Typography >レスピラトリーキノロン</Typography>
                        <Typography variant="h5">注射薬</Typography>
                        <Typography >セフトリアキソン</Typography>
                        <Typography >アジスロマイシン</Typography>
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
                        <DialogContentText style={{ fontWeight: 'bold'}}>細菌性肺炎を疑う場合 </DialogContentText>
                        <DialogContentText >オーグメンチン 375mg + サワシリン 250mg  1日3回</DialogContentText>
                        <DialogContentText> ジスロマック2000mg 1回{"\n"}または、ビブラマイシン100mg を1日2回 </DialogContentText>
                        <DialogContentText style={{ fontWeight: 'bold' }}>非定型肺炎を疑う場合</DialogContentText>
                        <DialogContentText> ジスロマック2000mg 1回{"\n"}または、ビブラマイシン100mg を1日2回 </DialogContentText>
                        <DialogContentText style={{ fontWeight: 'bold' }}>免疫不全、基礎疾患あり</DialogContentText>
                        <DialogContentText> クラビット500mg 1日1回{"\n"}結核をマスクする！使用前に要検討！</DialogContentText>
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
            <Typography style = {{  fontSize: 15, color: "white", textAlign: "center", padding: 10}}>中等症、入院群</Typography>
            </div>

             <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image=""
                    title="Contemplative Reptile"
                    />
                    <CardContent>
                    <Typography  variant="h5" >注射薬</Typography>
                        <Typography >スルバクタム・アンピシン</Typography>
                        <Typography >セフトリアキソン</Typography>
                        <Typography >レボフロキサシン (結核をマスクする、注意！)</Typography>
                        <Typography variant="h5">非定型肺炎が疑われる場合</Typography>
                        <Typography >ミノサイクリン</Typography>
                        <Typography >アジスロマイシン</Typography>
                        <Typography >レボフロキサシン (結核をマスクする、注意！)</Typography>
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
                    <DialogContentText style={{ fontWeight: 'bold'}}>細菌性肺炎を疑う場合 </DialogContentText>
                        <DialogContentText >ロセフィン2g/日 (± ジスロマック500mg/日  or  ミノマイシン100mg1日2回)</DialogContentText>
                        <DialogContentText style={{ fontWeight: 'bold' }}>誤嚥性肺炎を疑う場合</DialogContentText>
                        <DialogContentText>ユナシン 1.5-3g  6時間毎 </DialogContentText>
                        <DialogContentText style={{ fontWeight: 'bold' }}>緑膿菌の関与が疑われる場合</DialogContentText>
                        <DialogContentText>ゾシン4.5g  6時間毎  or  マキシピーム2g  6時間毎</DialogContentText>
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
            <Typography style = {{  fontSize: 15, color: "white", textAlign: "center", padding: 10}}>重症、ICU群</Typography>
            </div>

             <Card className={classes.card} style = {{marginBottom: 40}}>
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image=""
                    title="Contemplative Reptile"
                    />
                    <CardContent>
                    <Typography  variant="h5" >注射薬</Typography>
                        <Typography >A 法:    カルバペネム系 or タゾバクタム･ピペラシン</Typography>
                        <Typography >B 法:    スルバクタムアンピシリン or セフトリアキソン</Typography>
                        <Typography >C 法:    A or B 法 + アジスロマイシン</Typography>
                        <Typography >D 法:    A or B 法 + レボフロキサシン</Typography>
                        <Typography >E 法:    A or B or C or D + 抗MRSA薬</Typography>
                        <Typography >※ B 法は、緑膿菌を考慮しない場合</Typography>
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
                        <DialogContentText style={{ fontWeight: 'bold'}}>通常投与量</DialogContentText>
                        <DialogContentText >ロセフィン2g/日  or  ユナシン1.5-3g  6時間毎</DialogContentText>
                        <DialogContentText >(± ジスロマック500mg/日  or  ミノマイシン100mg1日2回)</DialogContentText>
                        <DialogContentText style={{ fontWeight: 'bold' }}>緑膿菌感染を疑う場合</DialogContentText>
                        <DialogContentText>ゾシン4.5g  6時間毎   or   メロペン1g  8時間毎 (±  クラビット500mg/日)</DialogContentText>
                        <DialogContentText style={{ fontWeight: 'bold' }}>インフルエンザ後の肺炎</DialogContentText>
                        <DialogContentText>バンコマイシン1g  12時間毎    上記へ追加を検討する</DialogContentText>
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

CapTreat.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
   

  export default withStyles(styles)(CapTreat);
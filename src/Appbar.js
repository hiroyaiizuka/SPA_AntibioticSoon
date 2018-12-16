import React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import Ionicon from 'react-ionicons'
import {Link} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import SendIcon from '@material-ui/icons/Send';
import Sns from './Sns';

class SearchAppBar extends React.Component {

  state = {
    top: false,
    left: false,
    bottom: false,
    right: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render(){
    const { classes } = this.props;


    const sideList = (
      <div className={classes.list}>
        <List>
         <ListItemText style = {{marginLeft:55, marginTop:20 }}  primary="肺炎治療"/> 
          <ListItem>
          <Link to = "/captreat" style = {{textDecoration: "none"}}>  <ListItemText style = {{marginLeft:56}}  secondary="市中肺炎"/> </Link>
          </ListItem>
          <ListItem>
          <Link to = "/nhcaptreat" style = {{textDecoration: "none"}}> <ListItemText style = {{marginLeft:56}} secondary="医療介護関連肺炎"/> </Link>
          </ListItem>
          <ListItem>
          <Link to = "/haptreat" style = {{textDecoration: "none"}}> <ListItemText style = {{marginLeft:56}} secondary="院内肺炎"/> </Link>
          </ListItem>

          <ListItemText style = {{marginLeft:39, marginTop:30, fontWeight: 'bold'}} primary="尿路感染症治療"/> 
            <ListItem>
            <Link to = "/simple" style = {{textDecoration: "none"}}><ListItemText style = {{marginLeft:56,  marginTop:2}} secondary="単純性尿路感染症"/>  </Link>
            </ListItem>
            <ListItem>
             <Link to = "/complex" style = {{textDecoration: "none"}}>  <ListItemText style = {{marginLeft:56, marginBottom:10}} secondary="複雑性尿路感染症"/>  </Link>
            </ListItem>
        </List>
        <Divider />

        <List>
        <ListItem button onClick={this.handleClick} style = {{marginTop:10}}>
          <ListItemIcon>
              <Ionicon icon="ios-alert" style = {{marginLeft:10}}  fontSize="25px" color = "#757575"/>
            </ListItemIcon>
            <ListItemText style = {{marginLeft:-12}}  primary="利用規約"/> 
          </ListItem>

          <ListItem button onClick={this.handleClick}>
            <ListItemIcon>
              <Ionicon icon="md-lock" style = {{marginLeft:10}}  fontSize="25px" color = "#757575"/>
            </ListItemIcon>
            <ListItemText style = {{marginLeft:-12}} primary="プライバシーポリシー"/> 
          </ListItem>

          <ListItem button onClick={this.handleClick} style = {{marginBottom:10}}>
            <ListItemIcon>
              <Ionicon icon="md-mail" style = {{marginLeft:11}}  fontSize="25px" color = "#757575"/>
            </ListItemIcon>
            <ListItemText style = {{marginLeft:-13}} primary="コンタクト"/> 
          </ListItem>
       
        </List>
        <Divider />
        <ListItemText style = {{marginTop:30, marginBottom:20}} inset primary="アプリ版のダウンロードはこちら" />
        <a href='https://play.google.com/store/apps/details?id=com.antibiotic&hl=ja&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img alt='Google Play で手に入れよう' src='https://play.google.com/intl/en_us/badges/images/generic/ja_badge_web_generic.png' width="153" style = {{marginLeft: 52}} /></a> <br/>
        <a href='https://itunes.apple.com/jp/app/antibioticsoon/id1415509049?mt=8'><img src='https://linkmaker.itunes.apple.com/assets/shared/badges/ja-jp/appstore-lrg.svg' alt='AppStoreで入手' height='40' style = {{marginLeft: 62, marginBottom: 30}} /></a>
       
        <Divider />
        <div style = {{marginLeft:50, marginBottom: 10, marginTop: 10}} >
           <Sns />
        </div>
      </div>
    );

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer"  onClick={this.toggleDrawer('left', true)}>
              <MenuIcon />
            </IconButton>

          <SwipeableDrawer
          open={this.state.left}
          onClose={this.toggleDrawer('left', false)}
          onOpen={this.toggleDrawer('left', true)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </SwipeableDrawer>

        <Typography className={classes.title} component={Link} to="/" variant="button" color="inherit" style = {{textDecoration: "none"}} >
            AntibioticSoon
        </Typography>
        

         
      <div className={classes.grow} />
            <Tooltip title="ホーム"  placement="bottom-start">
               <Link to = "/"><Ionicon icon="ios-home" style = {{marginRight:30}}  fontSize="35px" color="rgb(220,220,220)" /></Link>
            </Tooltip>
            <Tooltip title="Ccr計算"  placement="bottom-start">
               <Link to = "/cr"><Ionicon icon="md-calculator" style = {{marginRight:30}}  fontSize="35px" color="rgb(220,220,220)" /></Link>
            </Tooltip>
            <Tooltip title="抗菌薬投与量"  placement="bottom-start">
               <Link to = "/dose"><Ionicon icon="ios-beaker"  style = {{marginRight:0}} fontSize="35px" color="rgb(220,220,220)"/></Link>
            </Tooltip>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}


const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    marginLeft: 10,
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
});


SearchAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(SearchAppBar);

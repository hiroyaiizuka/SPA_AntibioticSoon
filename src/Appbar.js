import React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import Ionicon from 'react-ionicons'
import {Link} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';


class SearchAppBar extends React.Component {

  render(){
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer">
              <MenuIcon />
            </IconButton>
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

import React from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { withStyles } from "@material-ui/core/styles";


class Home extends React.Component {
  state = {
    open: false,
    open2: false
  };

  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleToggle2 = () => {
    this.setState(state => ({ open2: !state.open2 }));
  };


  handleClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }
    this.setState({ open: false });
  };

  handleClose2 = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }
    this.setState({ open2: false });
  };

  render() {
    const { classes } = this.props;
    const { open, open2 } = this.state;

    return (
        <div className={classes.root}>
        <div style = {{ position: "relative", top: 0, left: 60}}>
          <Button
            buttonRef={node => {
              this.anchorEl = node;
            }}
            aria-owns={open ? "menu-list-grow" : undefined}
            aria-haspopup="true"
            onClick={this.handleToggle}
            background-color="blue"
            variant="outlined"
            size="large"
            color="primary"
          >
            肺炎
          </Button>
          <Popper open={open} anchorEl={this.anchorEl} transition disablePortal>
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                id="menu-list-grow"
                style={{
                  transformOrigin:
                    placement === "bottom" ? "center top" : "center bottom"
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={this.handleClose}>
                    <MenuList>
                      <MenuItem > <Link to = "/capseverity" style= {{ textDecoration: 'none'}}>市中肺炎 (CAP)</Link></MenuItem>
                      <MenuItem onClick={this.handleClose}>
                        医療介護施設関連肺炎 (NHCAP)
                      </MenuItem>
                      <MenuItem onClick={this.handleClose}>
                        院内肺炎 (HAP)
                      </MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
      

         <div style = {{ position: "relative", top: 300, right: 50}}>
          <Button
            buttonRef={node => {
              this.anchorEl2 = node;
            }}
            aria-owns={open ? "menu-list-grow2" : undefined}
            aria-haspopup="true"
            onClick={this.handleToggle2}
            background-color="blue"
            variant="outlined"
            size="large"
            color="primary"
          >
            尿路感染症
          </Button>
          <Popper open={open2} anchorEl={this.anchorEl2} transition disablePortal>
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                id="menu-list-grow2"
                style={{
                  transformOrigin:
                    placement === "bottom" ? "center top" : "center bottom"
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={this.handleClose2}>
                    <MenuList>
                      <MenuItem onClick={this.handleClose2}>単純性</MenuItem>
                      <MenuItem onClick={this.handleClose2}>複雑性</MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
      </div>
    );
  }
}

const styles = theme => ({
    root: {
      display: "flex",
      justifyContent: "center",
      marginTop: 80, 

    },
    paper: {
      marginRight: theme.spacing.unit * 2
    }
  });
  

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);

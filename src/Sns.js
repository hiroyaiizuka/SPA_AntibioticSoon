import {   FacebookIcon,FacebookShareButton, TwitterIcon,  TwitterShareButton,} from 'react-share';
import React from "react";
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';


function Sns (){

    return(
        <div>
        <div style = {{display: "inline-block"}}>

		    <FacebookShareButton  style = {{marginLeft : 30, marginTop:15}}>
                <FacebookIcon size={32} />
            </FacebookShareButton> 
        </div>
        <div style = {{display: "inline-block", marginLeft: 30}}>
            <TwitterShareButton via="@0317_hiroya">
            <TwitterIcon size={32} round />
            </TwitterShareButton>
        </div>                   
        </div>        
    )
}


export default Sns;


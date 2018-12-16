import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';



function Home(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      {images.map(image => (
        <ButtonBase
          focusRipple
          component = {Link}
          to = {image.path}
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: "30%", margin: "auto"
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="h6"
              color="inherit"
              className={classes.imageTitle}
            > 
                {image.title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      ))}

  {images2.map(image => (
        <ButtonBase
          focusRipple
          component = {Link}
          to = {image.path}
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: "40%", margin: "auto", marginTop: 80, marginBottom: 80
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="h6"
              color="inherit"
              className={classes.imageTitle}
            > 
                {image.title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      ))}

    </div>
  );
}


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
    marginTop: 100
  },
  image: {
    position: 'relative',
    height: 310,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme.spacing.unit + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 25,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
});

const images = [
  {
    url: '/cap.jpeg',
    title: '市中肺炎',
    path: '/capsevererity',
    width: '30%',
  },
  {
    url: '/nhcap.jpeg',
    title: '医療介護施設関連肺炎',
    path: '/nhcapsevererity',
    width: '40%',
  },
  {
    url: '/hap.jpeg',
    title: '院内肺炎',
    path: '/hapsevererity',
    width: '30%',
  },
];

const images2 = [
  {
    url: '/youngwoman.jpeg',
    title: '単純性尿路感染症',
    path: '/simple',
    width: '50%',
  },
  {
    url: '/complex.jpeg',
    title: '複雑性尿路感染',
    path: '/complex',
    width: '50%',
    height: 300
  },

];

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
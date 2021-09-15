import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(() => ({
    root: {
        boxSizing: 'border-box',
        width: '100%',
        height: '100%',
        flexGrow: 1,
        backgroundColor: '#eee',
        padding: '40px 20px',
    },
    top: {
        width: '100%',
        height: '100%',
        boxSizing: 'border-box',
    },
    bottom: {
        borderTop: '1px solid #aaa',
        width: '100%',
        boxSizing: 'border-box',
    },
    logoWrapper: {
        paddingBottom: '20px',
        float: 'left',
    },
    textGroupWrapper: {
        boxSizing: 'border-box',
        minHeight: '200px',
        float: 'left',
    },
    logo: {
        width: '186px',
        float: 'left'
    },
    menus: {
        width: '100%',
        minHeight: 130,
        float: 'left',
    },
    contact: {
        width: '100%',
        minHeight: 100,
        float: 'left',
    },
    social: {
        width: '100%',
        minHeight: 100,
        float: 'left',
    },
    copyright: {
        paddingTop: '10px',
        float: 'left'
    },
    link: {
        width: '100%',
        textDecoration: 'none',
        color: '#666',
        float: 'left',
        padding: '5px',
        textAlign: 'left',
    },
    titleCol: {
        width: '100%',
        float: 'left',
        padding: '5px',
        textAlign: 'left',
    },
    col: {
        width: '100%',
        color: '#666',
        float: 'left',
        padding: '5px',
        textAlign: 'left',
    }
}));

const Footer = () => {
    const classes = useStyles();
    return <Grid container className={classes.root}>
        <Grid item xs={12} sm={2}></Grid>
        <Grid item xs={12} sm={8}>
            <Grid item xs={12} sm={12} className={classes.top}>
                <Grid item xs={12} sm={4} className={classes.logoWrapper}>
                    <img className={classes.logo} src="logo5.png" />
                </Grid>
                <Grid item xs={12} sm={8} className={classes.textGroupWrapper}>
                    <Grid item xs={12} sm={3} className={classes.contact}>
                        <div className={classes.titleCol}>Head Office</div>
                        <div className={classes.col}>19 Hoodview Ct, Toronto, ON, Canada L3R0A6</div>
                        <div className={classes.col}>416-906-5468</div>
                    </Grid>
                    <Grid item xs={12} sm={3} className={classes.menus}>
                        <Link className={classes.link} to={{ pathname: '/home' }}>Home</Link>
                        <Link className={classes.link} to={{ pathname: '/work' }}>Work</Link>
                        <Link className={classes.link} to={{ pathname: '/about' }}>About</Link>
                        <Link className={classes.link} to={{ pathname: '/blog' }}>Blog</Link>
                    </Grid>
                    <Grid item xs={12} sm={6} className={classes.social}>
                        <div className={classes.titleCol}>Connnect with us</div>
                    </Grid>
                </Grid>
            </Grid>
            <Grid xs={12} sm={12} className={classes.bottom}>
                <div className={classes.copyright}>&copy;{new Date().getFullYear()} YoCompute Inc. All rights reserved.</div>
            </Grid>
        </Grid>
        <Grid item xs={12} sm={2}></Grid>
    </Grid>
}

export default Footer;
import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    root: {
        boxSizing: 'border-box',
        width: '100%',
        height: 320,
        backgroundColor: '#eee',
        padding: '80px 150px',
    },
    top: {
        width: '100%',
        minHeight: 200,
        boxSizing: 'border-box',
    },
    bottom: {
        borderTop: '1px solid #aaa',
        width: '100%',
        boxSizing: 'border-box',
    },
    topLeft: {
        // width: '360px',
        minHeight: '200px',
        float: 'left',
    },
    topRight: {
        boxSizing: 'border-box',
        // width: '800px',
        minHeight: '200px',
        float: 'left',
    },
    logo: {
        width: '186px',
        float: 'left'
    },
    menus: {
        // width: '33%',
        minHeight: 100,
        float: 'left',
    },
    contact: {
        // width: '33%',
        minHeight: 100,
        float: 'left',
    },
    social: {
        // width: '33%',
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
    return <div className={classes.root}>
        <div  xs={12} sm={12} className={classes.top}>
            <div xs={4} sm={4} className={classes.topLeft}>
                <img className={classes.logo} src="logo5.png" />
            </div>
            <div xs={8} sm={8} className={classes.topRight}>
                <div xs={3} sm={3} className={classes.menus}>
                    <Link className={classes.link} to={{ pathname: '/home' }}>Home</Link>
                    <Link className={classes.link} to={{ pathname: '/work' }}>Work</Link>
                    <Link className={classes.link} to={{ pathname: '/about' }}>About</Link>
                    <Link className={classes.link} to={{ pathname: '/blog' }}>Blog</Link>
                </div>
                <div xs={3} sm={3} className={classes.contact}>
                    <div className={classes.titleCol}>Head Office</div>
                    <div className={classes.col}>19 Hoodview Ct, Toronto, ON, Canada L3R0A6</div>
                    <div className={classes.col}>416-906-5468</div>
                </div>
                <div xs={6} sm={6} className={classes.social}>
                    <div>Connnect with us</div>
                </div>
            </div>
        </div>
        <div xs={12} sm={12} className={classes.bottom}>
            <div className={classes.copyright}>&copy;{new Date().getFullYear()} YoCompute Inc. All rights reserved.</div>
        </div>
    </div>
}

export default Footer;
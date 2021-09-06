import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Footer from './Footer';
import Header from './Header';
// import Routes from '../Routes';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        minHeight: '400px',
        boxSizing: 'border-box',
    },
    header: {
        boxSizing: 'border-box',
        width: '100%',
    },
    content: {
        boxSizing: 'border-box',
        width: '100%',
        minHeight: '400px',
    },
    footer: {
        boxSizing: 'border-box',
        position: 'absolute',
        width: '100%',
        height: '320px',
        bottom: 0,
    },
}));

const Layout = ({ children }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.header}>
                <Header />
            </div>
            <div className={classes.content}>
                {children}
            </div>
            <div xs={12} sm={12} className={classes.footer}>
                <Footer />
            </div>
        </div>
    )
}

const LayoutNone = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    );
}

export { Layout, LayoutNone };
import React from 'react';
// import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";
// import { Link } from 'react-router-dom';
import QuoteForm from '../components/QuoteForm';

const useStyles = makeStyles((theme) => ({
    root: {
      marginTop: "100px",
      boxSizing: 'border-box',
    },
    banner:{
        boxSizing: 'border-box',
        width: '900px',
        paddingLeft: 300,
        float: 'left'
    },
    quoteForm: {
        boxSizing: 'border-box',
        width: '600px',
        float: 'left'
    },
    h3: {
        ...theme.typography.h3,
        textAlign: 'left',
        width: '100%',
    },
    h5: {
        ...theme.typography.h5,
        // float: 'left',
        textAlign:'left',
        width: '100%',
    }
}));

const HomePage = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div xs={12} className={classes.banner}>
                <div className={classes.h3}>Web Design &amp; Developement</div>
                <div className={classes.h5}>20 years experiences.</div>
                <div className={classes.h5}>Get Free project proposal, time and cost estimation.</div>
            </div>
            <div xs={12} className={classes.quoteForm}>
                <QuoteForm />
            </div>
        </div>
    )
}

export default HomePage;
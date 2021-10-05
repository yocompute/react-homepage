import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import QuoteForm from '../components/QuoteForm';

const useStyles = makeStyles((theme) => ({
    root: {
      marginTop: "140px",
      boxSizing: 'border-box',
    },
    banner:{
        boxSizing: 'border-box',
        padding: '30px',
    },
    quoteForm: {
        boxSizing: 'border-box',
        padding: '30px',
    },
    h3: {
        ...theme.typography.h3,
        textAlign: 'left',
        width: '100%',
    },
    h5: {
        ...theme.typography.h5,
        textAlign:'left',
        width: '100%',
    }
}));

const HomePage = () => {
    const classes = useStyles();
    return (
        <Grid container className={classes.root}>
            <Grid item xs={12} sm={3}></Grid>
            <Grid item xs={12} sm={3} className={classes.banner}>
                <div className={classes.h3}>Web Design &amp; Developement</div>
                <div className={classes.h5}>20 years experiences.</div>
                <div className={classes.h5}>Get Free project proposal, time and cost estimation.</div>
            </Grid>
            <Grid item xs={12} sm={3} className={classes.quoteForm}>
                <QuoteForm />
            </Grid>
        </Grid>
    )
}

export default HomePage;
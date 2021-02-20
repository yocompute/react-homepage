import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
    root: {
      marginTop: "280px",
    },
}));

const HomePage = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Link to="/signup">
                <Button variant="contained" color="primary">Create my store</Button>
            </Link>
        </div>
    )
}

export default HomePage;
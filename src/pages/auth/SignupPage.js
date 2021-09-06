import PropTypes from "prop-types";
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container';


import EmailSignupForm from '../../components/auth/EmailSignupForm';

import { signupBrand } from '../../redux/auth/auth.actions'

const useStyles = makeStyles((theme) => ({
    paper: {
        // marginTop: theme.spacing(1),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    titleRow: {
        // marginTop: theme.spacing(6),
    }
}));

const SignupPage = ({isLoggedIn, signupBrand}) => {
    const classes = useStyles();
    const [type, setType] = useState("email");

    const handleChange = (event, v) => {
        setType(v);
    }

    const handleSignup = (data) => {
        signupBrand(data);// issue signup action
    }

    const handleSendCode = () => {

    }

    return (
        <Container component="main" maxWidth="xs">
            {
                isLoggedIn
                    ? <Redirect to="https://admin.yocompute.com" />
                    :
            <div className={classes.paper}>
                <Typography className={classes.titleRow} component="h1" variant="h5">
                    Start your free store
                </Typography>
                <EmailSignupForm btnText="Create my store" onSubmit={handleSignup} />
                
            </div>
        }
        </Container>
    )    
}

SignupPage.propTypes = {
  isLoggedIn: PropTypes.any,
  signup: PropTypes.func
}
const mapStateToProps = state => ({
    isLoggedIn: state.tokenId,
});

export default connect(
    mapStateToProps,
    {
        signupBrand
    }
)(SignupPage);
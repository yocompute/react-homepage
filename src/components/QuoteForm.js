
import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import { createQuote } from '../redux/quote/quote.actions';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        padding: '25px'
    },
    formCtrl: {
        width: '100%',
        marginBottom: '20px'
    },
    button:{
        float: 'left'
    }
}));

const QuoteForm = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [data, setData] = useState({});

    const handleSubmit = () => {
        if(data && data.email && data.description){
            dispatch(createQuote(data));
        }
    }

    const handleChangeUsername = (e) => {
        setData({...data, username: e.target.value});
    }

    const handleChangeCompany = (e) => {
        setData({...data, company: e.target.value});
    }
    const handleChangeEmail = (e) => {
        setData({...data, email: e.target.value});
    }
    const handleChangeDescription = (e) => {
        setData({...data, description: e.target.value});
    }

    return <form className={classes.root} noValidate autoComplete="off" onSubmit={() => null}>
        <div>
            <FormControl className={classes.formCtrl} >
                <TextField id="username" label="Your name*" variant="outlined" onChange={handleChangeUsername}/>
            </FormControl>

            <FormControl className={classes.formCtrl} >
                <TextField id="company" label="Company name*" variant="outlined" onChange={handleChangeCompany}/>
            </FormControl>

            <FormControl className={classes.formCtrl} >
                <TextField id="email" label="Your email*" variant="outlined" onChange={handleChangeEmail}/>
            </FormControl>

            <FormControl className={classes.formCtrl} >
                <TextField id="description" label="Tell us about the project*" variant="outlined" multiline rows={6} onChange={handleChangeDescription}/>
            </FormControl>
        </div>
        <Button className={classes.button} variant="outlined" size="large" onClick={handleSubmit}>Submit</Button>
    </form>
}

export default QuoteForm;
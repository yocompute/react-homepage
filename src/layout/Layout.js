import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import Footer from './Footer';
import Header from './Header';
import { clearNotification } from '../redux/notification/notification.actions';
import { selectNotification } from '../redux/notification/notification.selectors';
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
        minHeight: '1800px',
    },
    footer: {
        boxSizing: 'border-box',
        width: '100%',
        height: '100%',
        bottom: 0,
    },
}));

const Layout = ({ children }) => {
    const classes = useStyles();
    const notification = useSelector((state) => selectNotification(state));
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);

    const handleNotificationClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      dispatch(clearNotification());
      setOpen(false);
    };
  
    useEffect(() => {
      setOpen(notification ? notification.show: false);
    }, [notification]);

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
            <Snackbar
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
                }}
                open={open}
                autoHideDuration={3000}
                message={notification ? notification.message: ''}
                onClose={handleNotificationClose}
            />
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
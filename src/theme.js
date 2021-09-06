import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
    typography: {
        button: {
            textTransform: 'none'
        }
    },
    overrides: {
        MuiFormLabel: {
            asterisk: {
                color: '#db3131',
                '&$error': {
                    color: '#db3131'
                },
            }
        }
    }
});

export default theme;
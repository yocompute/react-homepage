// action types
export const SET_NOTIFICATION = 'notification/SET_NOTIFICATION';
export const CLEAR_NOTIFICATION = 'notification/CLEAR_NOTIFICATION';

// action creators
export const setNotification = (message, status) => ({
    type: SET_NOTIFICATION,
    notification: {
        message, // string
        status,
        show: true,
    }
})

export const clearNotification = () => ({
    type: CLEAR_NOTIFICATION,
    notification: {
        message: '',
        status: 200,
        show: false,
    }
})
// action types
export const FETCH_AUTH = 'auth/FETCH_AUTH';
export const FETCH_AUTH_SUCCESS = 'auth/FETCH_AUTH_SUCCESS';
export const FETCH_AUTH_FAIL = 'auth/FETCH_AUTH_FAIL';


export const LOGIN = 'auth/LOGIN';
export const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
export const LOGIN_FAIL = 'auth/LOGIN_FAIL';

export const SIGNUP_BRAND = 'auth/SIGNUP_BRAND';
export const SIGNUP_BRAND_SUCCESS = 'auth/SIGNUP_BRAND_SUCCESS';
export const SIGNUP_BRAND_FAIL = 'auth/SIGNUP_BRAND_FAIL';

export const LOGOUT = 'auth/LOGOUT';
export const LOGOUT_SUCCESS = 'auth/LOGOUT_SUCCESS';

// action creators
export const fetchAuth = () => ({
    type: FETCH_AUTH
})

export const fetchAuthSuccess = (tokenId) => ({
    type: FETCH_AUTH_SUCCESS,
    tokenId
})

export const fetchAuthFail = error => ({
    type: FETCH_AUTH_FAIL,
    error
})

export const logout = () => ({
    type: LOGOUT
})

export const logoutSuccess = () => ({
    type: LOGOUT_SUCCESS
})

export const login = (data) => ({
    type: LOGIN,
    data
})

export const loginSuccess = (tokenId) => ({
    type: LOGIN_SUCCESS,
    tokenId
})

export const loginFail = error => ({
    type: LOGIN_FAIL,
    error
})

export const signupBrand = (data) => ({
    type: SIGNUP_BRAND,
    data
})

export const signupBrandSuccess = (tokenId) => ({
    type: SIGNUP_BRAND_SUCCESS,
    tokenId
})

export const signupBrandFail = error => ({
    type: SIGNUP_BRAND_FAIL,
    error
})
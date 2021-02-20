import { put, call, takeLatest } from 'redux-saga/effects';
import Cookies from 'js-cookie';
import AuthApi from '../../services/AuthApi';
import { FETCH_AUTH, LOGIN, SIGNUP_BRAND, LOGOUT,
    fetchAuthSuccess, loginSuccess, signupBrandSuccess, logoutSuccess } from './auth.actions';
import { setUser } from '../user/user.actions';
import { setLoading } from '../page/page.actions';

// import { selectACL } from '../ACL/ACL.selectors'
import {JWT_COOKIE, JWT_EXPIRY} from '../../const';
import { setNotification } from '../notification/notification.actions';
import { httpSuccess } from '../notification/notification.sagas';

export function* fetchAuth() {
    try {
        const tokenId = Cookies.get(JWT_COOKIE);
        if(tokenId){
            const {data, error, status} = yield call(AuthApi.getUserByTokenId, tokenId);
            if(httpSuccess(status)){
                yield put(setUser(data && data._id ? data : null));
                yield put(fetchAuthSuccess(data? tokenId : null));
            }else{
                yield put(setNotification(error, status));
            }
        }else{
            yield put(setUser(null));
            yield put(fetchAuthSuccess(null));
        }
        yield put(setLoading(false));
    } catch (error) {
        // yield put(addError({
        //     ...error
        // }))
    }
}

export function* login(action) {
    try {
        const {data, error, status} = yield call(AuthApi.login, action.data);
        const tokenId = data;

        Cookies.set(JWT_COOKIE, tokenId, { expires: JWT_EXPIRY });
        yield put(loginSuccess(tokenId));
        if(tokenId){
            const {data, error, status} = yield call(AuthApi.getUserByTokenId, tokenId);
            const user = data;
            yield put(setUser(user && user._id ? user : null));
        }else{
            yield put(setUser(null));
            yield put(setNotification(error, status));
        }
    } catch (error) {
        // yield put(addError({
        //     ...error
        // }))
    }
}

export function* signupBrand(action) {
    try {
        const {data, error, status} = yield call(AuthApi.signupBrand, action.data);
        yield put(signupBrandSuccess(data));


        if(httpSuccess(status)){
            const {data, error, status} = yield call(AuthApi.getUserByTokenId, data);
            yield put(setUser(data && data._id ? data : null));
            if(httpSuccess(status)){
                yield put(fetchAuthSuccess(data));
            }else{
                yield put(fetchAuthSuccess(null));
            }
        }else{
            yield put(setUser(null));
            yield put(setNotification(error, status));
        }
    } catch (error) {
        yield put(fetchAuthSuccess(null));
    }
}

export function* logout(){
    Cookies.remove(JWT_COOKIE);
    yield put(logoutSuccess());
}

export function* watchAuth() {
    yield takeLatest(FETCH_AUTH, fetchAuth);
    yield takeLatest(LOGIN, login);
    yield takeLatest(SIGNUP_BRAND, signupBrand);
    yield takeLatest(LOGOUT, logout);
}
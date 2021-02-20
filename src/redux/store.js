import { combineReducers, createStore, applyMiddleware } from 'redux';

import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas';

import { authReducer } from './auth/auth.reducers';
import { usersReducer, userReducer } from './user/user.reducers';
import { brandsReducer, brandReducer } from './brand/brand.reducers';
import { pageReducer } from './page/page.reducers';
import { qrcodeReducer, qrcodesReducer } from './qrcode/qrcode.reducers';
import { notificationReducer } from './notification/notification.reducers';

const sagaMiddleware = createSagaMiddleware();

export const rootReducer = combineReducers({
  tokenId: authReducer,
  users: usersReducer,
  user: userReducer,
  brands: brandsReducer,
  brand: brandReducer,
  page: pageReducer,
  qrcodes: qrcodesReducer,
  qrcode: qrcodeReducer,
  notification: notificationReducer,
});

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;

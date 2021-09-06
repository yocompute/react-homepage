import { all } from 'redux-saga/effects';
import { watchAuth } from './auth/auth.sagas';
import { watchUser } from './user/user.sagas';
import { watchBrands } from './brand/brand.sagas';
import { watchQrcodes } from './qrcode/qrcode.sagas';
import { watchQuotes } from './quote/quote.sagas';

export default function* rootSaga() {
  // const [auth, users, products, brands, categories] = 
  yield all([
    watchAuth(),
    watchUser(),
    watchBrands(),
    watchQrcodes(),
    watchQuotes(),
  ]);
}

import { put, call, takeLatest } from "redux-saga/effects";

import {
  FETCH_QUOTES,
  CREATE_QUOTE,
  UPDATE_QUOTE,
  fetchQuotesSuccess,
  fetchQuotesFail,
  createQuoteSuccess,
  updateQuoteSuccess,
} from "./quote.actions";

import QuoteApi from "../../services/QuoteApi";
import { setNotification } from '../notification/notification.actions';
import { httpSuccess } from '../notification/notification.sagas';

export function* fetchQuotes(action) {
  try {
    const { data, error, status } =  yield call(QuoteApi.get, action.query);
    if (httpSuccess(status)) {
      yield put(fetchQuotesSuccess(data));
    } else {
      yield put(setNotification(error, status));
    }
  } catch (error) {
    yield put(fetchQuotesFail(error));
  }
}

export function* createQuote(action) {
  try {
    const { data, error, status } =  yield call(QuoteApi.create, action.data);
    yield put(createQuoteSuccess(data));
    if (httpSuccess(status)) {
      const { data, error, status } =  yield call(QuoteApi.get, null);
      yield put(fetchQuotesSuccess(data));
    } else {
      yield put(setNotification(error, status));
    }
  } catch (error) {
    // yield put(addError({
    //     ...error
    // }))
  }
}

export function* updateQuote(action) {
  try {
    const { data, error, status } =  yield call(QuoteApi.update, action.data, action.id);
    yield put(updateQuoteSuccess(data));
    if (httpSuccess(status)) {
      const { data, error, status } =  yield call(QuoteApi.get, null);
      yield put(fetchQuotesSuccess(data));
    } else {
      yield put(setNotification(error, status));
    }
  } catch (error) {
    // yield put(addError({
    //     ...error
    // }))
  }
}

export function* watchQuotes() {
  yield takeLatest(FETCH_QUOTES, fetchQuotes);
  yield takeLatest(CREATE_QUOTE, createQuote);
  yield takeLatest(UPDATE_QUOTE, updateQuote);
}

import {
  FETCH_QUOTES_SUCCESS,
  CREATE_QUOTE_SUCCESS,
  UPDATE_QUOTE_SUCCESS,
  SET_QUOTE,
} from "./quote.actions";

export const quotesReducer = (state = null, action) => {
  if (action && action.type === FETCH_QUOTES_SUCCESS) {
    return [...action.quotes];
  }
  return state;
};

export const initialQuote = {
  username: '',
  company: '',
  email: '',
  description: '',
}

export const quoteReducer = (state = initialQuote, action) => {
  if (action && action.type === SET_QUOTE) {
    return { ...action.quote };
  }

  if (action && action.type === CREATE_QUOTE_SUCCESS) {
    return { ...action.quote };
  }

  if (action && action.type === UPDATE_QUOTE_SUCCESS) {
    return { ...action.quote };
  }

  return state;
};

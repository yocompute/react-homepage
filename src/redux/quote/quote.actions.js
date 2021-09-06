// action types
export const FETCH_QUOTES = 'quote/FETCH_QUOTES';
export const FETCH_QUOTES_SUCCESS = 'quote/FETCH_QUOTES_SUCCESS';
export const FETCH_QUOTES_FAIL = 'quote/FETCH_QUOTES_FAIL';

export const CREATE_QUOTE = 'quote/CREATE_QUOTE';
export const CREATE_QUOTE_SUCCESS = 'quote/CREATE_QUOTE_SUCCESS';
export const CREATE_QUOTE_FAIL = 'quote/CREATE_QUOTE_FAIL';

export const UPDATE_QUOTE = 'quote/UPDATE_QUOTE';
export const UPDATE_QUOTE_SUCCESS = 'quote/UPDATE_QUOTE_SUCCESS';
export const UPDATE_QUOTE_FAIL = 'quote/UPDATE_QUOTE_FAIL';

export const SET_QUOTE = 'quote/SET_QUOTE';


// action creators
export const fetchQuotes = () => ({
    type: FETCH_QUOTES
})

export const fetchQuotesSuccess = (quotes = []) => ({
    type: FETCH_QUOTES_SUCCESS,
    quotes
})

export const fetchQuotesFail = (error) => ({
    type: FETCH_QUOTES_FAIL,
    error
})


export const createQuote = (data) => ({
    type: CREATE_QUOTE,
    data
})

export const createQuoteSuccess = (quote) => ({
    type: CREATE_QUOTE_SUCCESS,
    quote
})

export const createQuoteFail = error => ({
    type: CREATE_QUOTE_FAIL,
    error
})

export const updateQuote = (data, id) => ({
    type: UPDATE_QUOTE,
    data,
    id,
})

export const updateQuoteSuccess = (quote) => ({
    type: UPDATE_QUOTE_SUCCESS,
    quote
})

export const updateQuoteFail = error => ({
    type: UPDATE_QUOTE_FAIL,
    error
})

export const setQuote = (quote) => ({
    type: SET_QUOTE,
    quote
})
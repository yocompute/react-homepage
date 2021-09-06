import Api from "./Api";

const API_URL = process.env.REACT_APP_API_URL;

const QuoteApi = {
  async get(query) {
    const url =
      process.env.REACT_APP_MODE === "local"
        ? "/quotes.json"
        : Api.buildUrl(API_URL, "quotes", query);
    return await Api.get(url);
  },

  async create(entity) {
    const url =
      process.env.REACT_APP_MODE === "local"
        ? "/quotes.json"
        : Api.buildUrl(API_URL, "quotes");
    return await Api.post(url, entity);
  },

  async update(data, id) {
    const url =
      process.env.REACT_APP_MODE === "local"
        ? "/quotes.json"
        : Api.buildUrl(API_URL, `quotes/${id}`);
    return await Api.put(url, data);
  },
};

export default QuoteApi;
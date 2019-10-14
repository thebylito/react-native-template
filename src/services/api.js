import { create } from 'apisauce';

const apiUrl = {
  hml: 'https://myapi.com/',
  prod: 'https://myapi.com/',
};

const api = create({
  baseURL: __DEV__ ? apiUrl.hml : apiUrl.prod,
  headers: {
    Authorization: '',
  },
});

export default api;

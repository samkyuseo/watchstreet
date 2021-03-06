import axios, { AxiosError, AxiosResponse } from 'axios';

const apiClient = axios.create({
  baseURL: `https://watchvalue-7e477.uc.r.appspot.com/`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.response.use(
  function (res: AxiosResponse) {
    return res;
  },
  function (error: AxiosError<{ msg: string }>) {
    let res = error.response;
    if (res && res.data.msg) throw Error(res.data.msg);
    throw Error('Unknown error occured.');
  }
);

export { apiClient };

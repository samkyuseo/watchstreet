import axios, { AxiosError, AxiosResponse } from 'axios';

const apiClient = axios.create({
  baseURL: `http://localhost:8000`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.response.use(
  function (response: AxiosResponse): AxiosResponse {
    return response;
  },
  function (error: AxiosError) {
    let res = error.response;

    if (res && res.status == 401) {
      console.error(
        'Looks like there was a problem. Status Code: ',
        res.status
      );
    } else if (res && res.status == 404) {
      console.error(
        'Looks like there was a problem. Status Code: ',
        res.status
      );
    }
    return Promise.reject(error);
  }
);

export { apiClient };

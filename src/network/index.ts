import { AxiosInstance, AxiosError, AxiosResponse } from 'axios';
import { googleGenaiInstance } from './axios-instance';

export const post = async ({
  path = '/',
  data,
  instance = googleGenaiInstance,
  callback,
  errorHandler,
}: {
  path?: string;
  data?: object;
  instance?: AxiosInstance;
  callback?: (response: AxiosResponse) => void;
  errorHandler?: (error: AxiosError) => void;
}) => {
  return instance
    .post(path, data)
    .then((response) => {
      if (!callback) return;
      callback(response);
    })
    .catch((error) => {
      if (!errorHandler) return;
      errorHandler(error);
    });
};

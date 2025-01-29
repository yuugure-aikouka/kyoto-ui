import axios, { AxiosError, AxiosResponse } from 'axios';

export const post = async ({
  path,
  data,
  callback,
  errorHandler,
}: {
  path: string;
  data?: object;
  callback?: (response: AxiosResponse) => void;
  errorHandler?: (error: string) => void;
}) => {
  return axios
    .post(path, data)
    .then((response) => {
      if (callback) {
        callback(response);
      }
    })
    .catch((error: AxiosError) => {
      if (errorHandler) {
        errorHandler(
          `something went wrong, please try again later. cause: ${JSON.stringify(
            error.response?.data
          )}`
        );
      }
    });
};

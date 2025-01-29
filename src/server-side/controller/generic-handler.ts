import { HTTP_CODE_TO_STATUS } from '@/utils/http';
import { baseResponse } from '../model/base-response';

const genericHandler = async (
  serviceInvokation: () => Promise<unknown>
): Promise<Response> => {
  const { status, message, data }: baseResponse =
    await serviceInvokation()
      .then((result) => {
        return { status: 200, message: undefined, data: result };
      })
      .catch((error: Error) => {
        return {
          status: 400,
          message: error.message,
          data: undefined,
        };
      });

  const responseBody = {
    data,
    message,
    status: HTTP_CODE_TO_STATUS(status),
  };
  const generalResponseData = {
    status,
  };

  return Response.json(responseBody, generalResponseData);
};

export default genericHandler;

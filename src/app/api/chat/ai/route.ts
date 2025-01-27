import genericHandler from '@/server-side/controller/generic-handler';
import chatService from '@/server-side/service/chat-service';

export const POST = async (request: Request): Promise<Response> => {
  const requestBody = await request.json();

  return genericHandler(() => {
    return chatService.getAiResponse({
      message: requestBody?.message,
    });
  });
};

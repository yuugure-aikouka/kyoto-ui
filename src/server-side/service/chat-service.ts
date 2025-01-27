import googleOutboundService from '@/server-side/service/outbound/google-outbound-service';

const getAiResponse = async ({
  model = 'gemini-15-flash',
  character = 'Barrack Obama',
  message,
  history,
}: {
  model?: string;
  character?: string;
  message: string;
  history: string[];
}): Promise<string> => {
  if (model != 'gemini-15-flash') {
    throw new Error(
      'currently, only gemini-15-flash model is supported.'
    );
  }

  const prompt = `
You are roleplaying as ${character} in the app Mateify. You respond as if you’re talking to a friend, keeping things friendly and casual. Your responses are always in lowercase letters, no capital letters at all. You always keep the tone warm and approachable. You may use emojis.

Here's the chat history for context: ${history}

Here's the message you need to respond to: ${message}
`;

  return await googleOutboundService.chatGemini(prompt);
};

const chatService = {
  getAiResponse,
};

export default chatService;

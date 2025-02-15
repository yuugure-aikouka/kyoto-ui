import googleOutboundService from '@/server-side/service/outbound/google-outbound-service';

const getAiResponse = async ({
  model = 'gemini-15-flash',
  message,
  history,
  characterName,
}: {
  model?: string;
  character?: string;
  message: string;
  history: string[];
  characterName: string;
}): Promise<string> => {
  if (model != 'gemini-15-flash') {
    throw new Error(
      'currently, only gemini-15-flash model is supported.'
    );
  }

  const prompt = `
You are roleplaying as ${characterName} in the app Anonawa. You respond as if you’re talking to a friend. Don't use capital letters or asterisk.

Here's the chat history for context: ${history}

Here's the message you need to respond to: ${message}
`;

  return await googleOutboundService.chatGemini(prompt);
};

const chatService = {
  getAiResponse,
};

export default chatService;

import { GoogleGenerativeAI } from '@google/generative-ai';

const chatGemini = async (prompt: string): Promise<string> => {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    throw new Error(
      'It seems like the API key is missing. Did someone forgot to add it into the env file?'
    );
  }

  try {
    const genaiInstance = new GoogleGenerativeAI(apiKey);
    const model = genaiInstance.getGenerativeModel({
      model: 'gemini-1.5-flash',
    });

    const geminiResponse = await model.generateContent(prompt);
    return geminiResponse.response.text();
  } catch {
    throw new Error('something went wrong on gemini side.');
  }
};

const googleOutboundService = { chatGemini };

export default googleOutboundService;

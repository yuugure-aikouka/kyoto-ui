import axios from 'axios';
import properties from '@/server-side/properties';

export const googleGenaiInstance = axios.create({
  baseURL: properties.google_ai_base_url,
  timeout: properties.google_gemini_timeout,
});

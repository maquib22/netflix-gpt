import OpenAI from 'openai';
import { OPENAI_KEY } from './constants';

// const openai = new OpenAI({
// //   apiKey: process.env['OPENAI_API_KEY'], // This is the default and can be omitted
//     apiKey : OPENAI_KEY,  dangerouslyAllowBrowser: true 
// });


// Open Router config
const openai = new OpenAI({
  baseURL: 'https://openrouter.ai/api/v1',
  apiKey: OPENAI_KEY,  dangerouslyAllowBrowser: true ,
//   defaultHeaders: {
//     'HTTP-Referer': '<YOUR_SITE_URL>', // Optional. Site URL for rankings on openrouter.ai.
//     'X-OpenRouter-Title': '<YOUR_SITE_NAME>', // Optional. Site title for rankings on openrouter.ai.
//   },
});


export default openai

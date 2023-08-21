

const axios = require('axios');

const apiKey = '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';


async function sendMessageToChatGPT(message) {
        try {
            const response = await axios.post(
              'https://api.openai.com/v1/chat/completions',
              {
                model: 'gpt-3.5-turbo',
                messages: [
                  {
                    role: 'system',
                    content: 'You are a helpful assistant.',
                  },
                  {
                    role: 'user',
                    content: message,
                  },
                ],
              },
              {
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: `Bearer ${apiKey}`,
                },
              }
            );
            console.log("this is the responce result",response.data)
        
            return response.data.choices[0].message.content;
    }
    catch(error){
      const customError = new Error('An error occurred while processing the request.');
      customError.statusCode = 500; // Set the desired status code here
      throw customError;

    }
}

module.exports = {
    sendMessageToChatGPT,
  };
const axios = require('axios');

async function queryOpenAIResponse() {
  try {
    const response = await axios.post('http://localhost:4000/graphql', {
      query: `
        query GetOpenAIResponse {
          openAiResponse(prompt: "Tell me a joke")
        }
      `,
    }, {
      headers: {
        'Content-Type': 'application/json',
        Authorization:
                        "Bearer " + process.env.NEXT_PUBLIC_GPT_API,
      },
    });

    console.log(response.data);
  } catch (error) {
    console.error('Error querying GraphQL server:', error);
  }
}

queryOpenAIResponse();

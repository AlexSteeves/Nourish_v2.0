
import axios from 'axios'
import { useSelector } from 'react-redux';
import { gql, useQuery } from '@apollo/client';

export const handleGeneratePrompt = async (dietType, mealsPerDay, caloriesPerDay, allergys) => {


    const prompt = `Generate a detailed meal plan for a ${dietType} diet, adhering to a daily calorie intake of ${caloriesPerDay} calories. The plan should include ${mealsPerDay} meals per day. For days with only one meal, ensure the meal fulfills the entire calorie quota. Exclude the following allergenic foods: ${allergys}. Present the plan with each meal titled and its calorie content specified, followed by its ingredients enclosed in <p> tags, each with their own calorie estimate. Conclude with a comprehensive list of all ingredients used throughout the day, embedded in a separate <div>, without issuing health warnings or advising professional consultation. Ensure each ingredient within the meal descriptions and the cumulative daily list is accompanied by its calorie count. Do not add any warnings or advice to the plan. 

    Format the response as follows:
    
    For each meal, use a <div> to encapsulate the meal's title (including its total calories) and its ingredients. Each ingredient should be within a <p> tag, including its estimated calorie count.
    After detailing all meals, provide a <div> containing a cumulative list of ingredients for the entire day, each also within <p> tags, the amount and unit of each.`;

    
    try {
        
        const response = await axios.post(
            "https://api.openai.com/v1/chat/completions",
            {
                model: "gpt-3.5-turbo-16k",
                messages: [{ role: "user", content: prompt }],
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization:
                        "Bearer " + process.env.NEXT_PUBLIC_GPT_API,
                },
            }
        );
        
        return response.data.choices[0].message.content;
       

    } catch (error) {
        console.error("Error generating meal plan:", error);
        return "Problem Occured"
    } 

};


const GET_OPENAI_RESPONSE = gql`
  query GetOpenAiResponse($prompt: String!) {
    openAiResponse(prompt: $prompt)
  }
`;

export function MyComponent() {
  const { loading, error, data } = useQuery(GET_OPENAI_RESPONSE, {
    variables: { prompt: "Hello, world!" },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return <div>Response: {data.openAiResponse}</div>;
}



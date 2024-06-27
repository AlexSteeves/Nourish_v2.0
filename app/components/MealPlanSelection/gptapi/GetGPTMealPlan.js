
import axios from 'axios'

import { createClient } from '@utils/supabase/client'



export const handleGeneratePrompt = async (dietType, mealsPerDay, caloriesPerDay, allergys) => {


  const prompt = `Generate a detailed meal plan for a ${dietType} diet, adhering to a daily calorie intake of ${caloriesPerDay} calories. The plan should include ${mealsPerDay} meals per day. For days with only one meal, ensure the meal fulfills the entire calorie quota. Exclude the following allergenic foods: ${allergys}. Present the plan with each meal titled and its calorie content specified, followed by its ingredients, each with their own calorie estimate. Conclude with a comprehensive list of all ingredients used throughout the day. Never issue health warnings or advising professional consultation. Ensure each ingredient within the meal descriptions and the cumulative daily list is accompanied by its calorie count. Do not add any warnings or advice to the plan.

  Format the response as follows:
  
  For the meal plan, return in a JSON format. Here is an example format. Ensure that it is proper JSON format:
  {
    
    "Meal 1 - Hamburger - 500 Calories": {
      "Beef Patty": "100 grams - 250 calories",
      "Bun": "50 grams - 150 calories",
      "Cheese": "20 grams - 100 calories"
    },
    
  }`;
    
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

        let mealPlan = response.data.choices[0].message.content;

        AppendNewRow(mealPlan, dietType, caloriesPerDay, mealsPerDay);

        return mealPlan;
       

    } catch (error) {
        console.error("Error generating meal plan:", error);
        return "Problem Occured"
    } 

};





async function AppendNewRow(mealPlan, dietType, caloriesPerDay, mealsPerDay) {
  const supabase = createClient()
  const { data: session, error: sessionError } = await supabase.auth.getSession()

  
 


  if (sessionError || !session) {
    console.error('User not authenticated:', sessionError)
    return null
  }
  const { data, error } = await supabase
      .from('NourishMealPlans')
      .insert([
        {
          Meal_Plan: JSON.parse(mealPlan),
          Name: dietType, 
          Calories: caloriesPerDay,
          Meals_Per_Day: mealsPerDay,

        },
      ]);

  if (error) {
    console.error('Error fetching data:', error)
    return null
  }

  console.log('Data:', data)
  return data
}





"use client";

import DietType from "./SelectionComponents/DietType.jsx";
import MealsPerDay from "./SelectionComponents/MealPerDay.jsx";
import CalorieSelector from "./SelectionComponents/CalorieSelector.jsx";
import AllergySelector from "./SelectionComponents/AllergySelector.jsx";
import { useState } from "react";
import { setMenu } from "../../../lib/slices/menuSlice.js";


import { handleGeneratePrompt } from "./gptapi/GetGPTMealPlan.js";
import { useSelector, useDispatch } from "react-redux";
import ParseJSONMealPlan from "./gptapi/ParseJSONMealPlan.js";

export default function Page() {
  const dietType = useSelector((state) => state.dietType.dietType);
  const mealsPerDay = useSelector((state) => state.mealsPerDay.mealsPerDay);
  const caloriesPerDay = useSelector(
    (state) => state.caloriesPerDay.caloriesPerDay
  );
  const allergys = useSelector((state) => state.allergys.allergys);
  const menu = useSelector((state) => state.menu.menu);

  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const GetGPTMealPlan = async () => {
    
    setIsLoading(true);
    const mealPlan = await handleGeneratePrompt(
      dietType,
      mealsPerDay,
      caloriesPerDay,
      allergys
    );
    dispatch(setMenu(mealPlan));
    
    
    setIsLoading(false);
      
    
   
  };

  return (
    <main className="min-h-screen w-full flex flex-col md:flex-row p-12 gap-4 bg-[#32736a]">
      <div className="flex-1 flex items-center justify-center">
        
        <div className="bg-white p-8 rounded-xl flex flex-col gap-4">
            <div className = "w-full border-b-[1px] border-slate-700 flex justify-center mb-2">
                <span className=" tracking-tight font-normal text-xl uppercase ">Choose A Meal Plan</span>
            </div>
          <DietType />
          <MealsPerDay />
          <CalorieSelector />
          <AllergySelector />
          <button onClick={GetGPTMealPlan} className = "bg-slate-700 hover:bg-[#32736a] text-slate-200 transition-all duration-300 rounded-md drop-shadow-lg uppercase">Submit</button>
          <span>
            {isLoading === true && (
              <div
                className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
                role="status"
              >
                <span className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 clip-[rect(0,0,0,0)]">
                  Loading...
                </span>
              </div>
            )}
          </span>
        </div>
      </div>
      <div className="flex-1 bg-white h-[80vh] md:mt-12 rounded-xl drop-shadow-xl p-8 ">
        <div className = "w-[100%] border-b-[2px] border-slate-700">
          <span className = "uppercase font-normal tracking-tight" style = {{fontSize:"calc(16px + 0.2vh)"}}>Generated Meal Plan</span>

        </div>
        <div className = "overflow-auto h-full w-full">
            <ParseJSONMealPlan data={menu} />
        </div>
        
      </div>
    </main>
  );
}

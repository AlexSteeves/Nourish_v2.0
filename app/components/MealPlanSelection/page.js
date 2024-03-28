"use client";

import DietType from "./SelectionComponents/DietType.jsx";
import MealsPerDay from "./SelectionComponents/MealPerDay.jsx";
import CalorieSelector from "./SelectionComponents/CalorieSelector.jsx";
import AllergySelector from "./SelectionComponents/AllergySelector.jsx";
import { useState } from "react";
import { setMenu } from '../../../lib/slices/menuSlice.js'
import MealPlanParser from './MealPlanParser'
import { MyComponent } from "./gptapi/GetGPTMealPlan.js";


import Link from 'next/link'
import { handleGeneratePrompt } from "./gptapi/GetGPTMealPlan.js";
import { useSelector, useDispatch} from 'react-redux';

export default function Page() {
  const dietType = useSelector((state) => state.dietType.dietType);
  const mealsPerDay = useSelector((state) => state.mealsPerDay.mealsPerDay);
  const caloriesPerDay = useSelector((state) => state.caloriesPerDay.caloriesPerDay);
  const allergys = useSelector((state) => state.allergys.allergys);
 

  const [isLoading, setIsLoading] = useState('false');
  const dispatch = useDispatch();

  
  const GetGPTMealPlan = async () =>{
    setIsLoading('true');
    dispatch(setMenu(await handleGeneratePrompt(dietType, mealsPerDay, caloriesPerDay, allergys)));
    setIsLoading('false');
  }

  const graphMealPlan = async () => {
    
    setIsLoading('true');
    dispatch(setMenu(MyComponent()));
    setIsLoading('false');
  }
  return (

    <div className="min-h-screen w-full flex flex-col md:flex-row p-12 gap-4">
    <div className="flex-1 flex items-center justify-center">
        <div className="bg-white p-4 rounded-xl flex flex-col gap-4">
   
           
            <DietType />
            <MealsPerDay />
            <CalorieSelector />
            <AllergySelector />
            <button onClick={graphMealPlan}>Select</button>
            <span>{isLoading}</span>
        </div>
    </div>
    <div className="flex-1 bg-white overflow-auto h-[80vh] md:mt-12 rounded-xl drop-shadow-xl p-8 ">
       
        <MealPlanParser />
        <Link href="/components/Dashboard" className = "absolute bottom-0 right-0 p-10">Save</Link>
    </div>
</div>
 
  );
}

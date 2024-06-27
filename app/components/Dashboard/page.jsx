"use client";
import { useSelector } from "react-redux";
import { createClient } from "@utils/supabase/client";
import { useEffect, useState } from "react";
import ParseJSONMealPlan from "../MealPlanSelection/gptapi/ParseJSONMealPlan";

export default function Dashboard() {
  const [table, setTable] = useState([]);
  const [currentPlan, setCurrentPlan] = useState(null);

  async function fetchTestTable() {
    const supabase = createClient();
    const { data: session, error: sessionError } =
      await supabase.auth.getSession();

    if (sessionError || !session) {
      console.error("User not authenticated:", sessionError);
      return null;
    }

    const { data, error } = await supabase.from("NourishMealPlans").select("*");

    if (error) {
      console.error("Error fetching data:", error);
      return null;
    }

    return data;
  }

  function getTable() {
    fetchTestTable().then((data) => {
      const tab = data.map((item) => ({
        Name: item.Name,
        Calories: item.Calories,
        Meals_Per_Day: item.Meals_Per_Day,
        Date_Created: item.Date_Created,
        Meal_Plan: item.Meal_Plan,
      }));

      setTable(tab);
    });
  }

  const setPlan = (index) => {
    setCurrentPlan(table[index].Meal_Plan);
  };

  const menu = useSelector((state) => state.menu.menu);
  useEffect(() => {
    setCurrentPlan(menu);
    getTable();
  }, []);

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-[#32736a]">
      <div className="flex flex-col md:flex-row gap-8 w-[80%] h-[80%] drop-shadow-lg">
        <div className="bg-slate-200 w-[100%] p-8 rounded-md">
          <div className="w-[100%] border-b-[2px] border-slate-700 ">
            <span
              className="uppercase text-slate-700 font-normal tracking-tight"
              style={{ fontSize: "calc(16px + 0.2vw)" }}
            >
              Meal Plan
            </span>
          </div>
          <div className = " overflow-auto w-full h-full">
          <ParseJSONMealPlan data={currentPlan} />
          </div>
         
        </div>
        <div className="w-full overflow-auto">
          <SimpleTable data={table} setPlan={setPlan} />
        </div>
      </div>
    </div>
  );
}

const SimpleTable = ({ data, setPlan }) => {
  return (
    <div className="overflow-auto rounded-md drop-shadow-lg bg-slate-200 p-8">
      <table className="min-w-full">
        <thead className=" border-b-[2px] border-slate-700">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-base font-normal text-slate-700 uppercase tracking-tight"
            >
              Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-base font-normal text-slate-700 uppercase tracking-tight"
            >
              Date Created
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-base font-normal text-slate-700 uppercase tracking-tight"
            >
              Meals Per Day
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-base font-normal text-slate-700 uppercase tracking-tight"
            >
              Calories
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-600">
          {data.map((item, index) => (
            <tr
              key={index}
              onClick={() => setPlan(index)}
              className="hover:text-slate-200 hover:font-bold hover:bg-slate-600 duration-300 transition-all"
            >
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                {item.Name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                {item.Date_Created}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                {item.Meals_Per_Day}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                {item.Calories}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

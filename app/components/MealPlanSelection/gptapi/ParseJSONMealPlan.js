import React from "react";

const ParseJSONMealPlan = ({ data }) => {
  let parsedMenu = null;

  if (typeof data === "string") {
    try {
      parsedMenu = JSON.parse(data);
    } catch (error) {}
  } else {
    parsedMenu = data;
  }

  //Recursively go into the JSON file, if its an object, that means its an ingredient
  const renderData = (parsedMenu) => {
    if (typeof parsedMenu === "object" && parsedMenu !== null) {
       
        return (
            <ul className="">
            {Object.keys(parsedMenu).map((key, index) => (
                <li key={index} className="py-2">
                    <span className="text-xl font-semibold tracking-tight text-slate-800 border-b-[2px] border-slate-700">{key}</span>
                    
                    {typeof parsedMenu[key] === 'object' && parsedMenu[key] !== null ? (
                        <ul className="pl-4">
                            {Object.keys(parsedMenu[key]).map((subKey, subIndex) => (
                                <li key={subIndex} className="py-1">
                                    <span className="font-semibold text-slate-700">{subKey}: </span>
                                    <span className="text-slate-700 font-[400] text-base">{parsedMenu[key][subKey]}</span>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <span className="text-slate-700 font-normal text-base">{parsedMenu[key]}</span>
                    )}
                </li>
            ))}
        </ul>
        );
      
    } else {
      
      return (
        <span className="text-slate-700 font-normal text-base">
          {parsedMenu}
        </span>
      );
    }
  };

  return <div className="p-4">{renderData(parsedMenu)}</div>;
};

export default ParseJSONMealPlan;

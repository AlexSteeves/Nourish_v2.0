'use client'

import {useSelector} from 'react-redux'

export default function page() {
    const menu = useSelector((state) => state.menu.menu);
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="flex flex-col md:flex-row gap-8 w-[80%] h-[80%]">
        <div className="bg-white w-[100%] ">

        </div>
        <div className="bg-blue-300 w-[100%] "></div>
      </div>
    </div>
  );
}

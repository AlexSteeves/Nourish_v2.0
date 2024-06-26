'use client'

import {useSelector} from 'react-redux'
import supabase from '@utils/supabase/client.ts'
import { useEffect } from 'react'
export default function Dashboard() {





  
  useEffect(() => {
    const fetchData = async () => {
      
      let { data: TestTable, error } = await supabase
      .from('TestTable')
      .select('*')
        
      
      if (error) {
        console.error('Error fetching data:', error);
      } else {
        console.log(TestTable);
      }
    };

    fetchData();
  }, []);
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

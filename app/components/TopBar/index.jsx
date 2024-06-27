import Link from 'next/link'

export default function index(){


    return(
        <div className = "fixed w-full p-3 px-4 flex justify-between content-center border-b-[1px] border-white text-[#dce4e2]">

            <span className = "uppercase font-semibold md:text-lg lg:text-xl">
                <Link href="/">Nourish</Link>
            </span>

            <div className = " text-xl uppercase tracking-tighter">
                <Link className = "px-2 py-1 hover:bg-slate-700 hover:text-slate-200 transition-all duration-300 rounded-lg"  href="/components/Login">Login</Link>
                
                <Link className ="px-2 py-1 hover:bg-slate-700 hover:text-slate-200 transition-all duration-300 rounded-lg" href="/components/MealPlanSelection">Meal Plan</Link>
                <Link className ="px-2 py-1 hover:bg-slate-700 hover:text-slate-200 transition-all duration-300 rounded-lg" href="/components/Dashboard">Dashboard</Link>

            </div>
            
        </div>
    )
}
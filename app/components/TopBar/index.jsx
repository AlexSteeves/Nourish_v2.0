import Link from 'next/link'

export default function index(){


    return(
        <div className = "fixed w-full p-2 px-3 flex justify-between content-center">

            <span className = "uppercase text-base md:text-lg lg:text-xl text-text">
                Nourish
            </span>

            <div className = "">
                <Link className = "px-2 py-1 hover:bg-slate-800 hover:text-slate-200 transition-all duration-300 rounded-lg"  href="/components/Login">Login</Link>
                
                <Link className ="px-2 py-1 hover:bg-slate-800 hover:text-slate-200 transition-all duration-300 rounded-lg" href="/components/MealPlanSelection">Meal Plan</Link>
                <Link className ="px-2 py-1 hover:bg-slate-800 hover:text-slate-200 transition-all duration-300 rounded-lg" href="/components/Dashboard">Dashboard</Link>

            </div>
            
        </div>
    )
}
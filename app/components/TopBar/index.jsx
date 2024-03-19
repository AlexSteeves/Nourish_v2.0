import Link from 'next/link'

export default function index(){


    return(
        <div className = "fixed w-full p-8 flex items-center">
            <div className = "flex-1 text-base md:text-lg lg:text-xl text-text text-start">
                NOURISH
            </div>
            <div className = "flex-1 text-base md:text-lg lg:text-xl text-text text-end ">
                <Link className = "mr-4"  href="/components/Login">Login</Link>
                
                <Link className ="" href="/components/MealPlanSelection">Meal Plan</Link>
            </div>
        </div>
    )
}
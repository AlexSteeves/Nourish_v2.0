'use client'
import { login, signup } from "./actions";
import TextField from "@mui/material/TextField";
import { Unstable_Popup as Popup } from '@mui/base/Unstable_Popup';
import {useState} from 'react'
export default function LoginPage() {


  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  const handleLogin = async (event) =>{
    event.preventDefault;
    try{
      await login()
    }catch(error){
      setPopupMessage("Login Failed");
      setShowPopup(true);
    }
  };


  return (
    <div className="h-screen w-screen flex justify-center items-center bg-[#32736a]">
      {showPopup && (
        <Popup
          open={showPopup}
          onClose={() => setShowPopup(false)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          transformOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          className = "absolute w-fit right-0"
        >
          <div className="m-12 py-2 px-4 bg-slate-200 text-slate-800 rounded-xl drop-shadow-xl font-bold tracking-tighter uppercase">
            {popupMessage}
            <button onClick={() => setShowPopup(false)} className="ml-4  text-red-500 hover:bg-[#32736a] transition-all duration-300 px-2 rounded-md text-xl">✖</button>
          </div>
        </Popup>
      )}
      
        <form className="flex flex-col gap-2 p-10 rounded-xl drop-shadow-lg bg-white">
          <h1 className = "text-xl md:text-3xl lg:text-4xl font-bold uppercase text-slate-700 ">Welcome To Nourish</h1>
          <h3 className = "text-sm md:text-base lg:text-lg text-slate-700">Sign Up or Log In</h3>
        
          <TextField
            name = "email"
            required
            id="outlined-required"
            label="Required"
            placeholder="Enter your email"
          />
          <TextField
            name = "password"
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
          <button className = "hover:bg-[#32736a] duration-300 transition-all bg-slate-700 uppercase text-slate-200" formAction={handleLogin}>Log in</button>
          <button className = "hover:bg-[#32736a] duration-300 transition-all bg-slate-700 uppercase text-slate-200" formAction={signup}>Sign up</button>
        </form>
      
    </div>
  );
}

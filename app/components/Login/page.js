import { login, signup } from "./actions";
import TextField from "@mui/material/TextField";

export default function LoginPage() {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      
        <form className="flex flex-col gap-4 p-10 rounded-xl drop-shadow-lg bg-white">
          <h1 className = "text-lg md:text-xl lg:text-3xl font-bold ">Welcome to Nourish</h1>
          <h3 className = "text-md md:text-lg lg:text-xl ">Loging to your account or sign up if you don't have an account</h3>
        
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
          <button className = "bg-blue-200" formAction={login}>Log in</button>
          <button className = "bg-blue-200" formAction={signup}>Sign up</button>
        </form>
      
    </div>
  );
}

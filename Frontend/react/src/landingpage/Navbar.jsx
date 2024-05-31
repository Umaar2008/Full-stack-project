import React from "react";
import img from "../landingpage/logo.png";
import { useAuth0 } from "@auth0/auth0-react";
function Navbar() {
  return (
    <div className="w-full  flex h-24 shadow-xl  bg-zinc-800	">
      <div className=" items-center text-pink-400  flex w-72 h-24 p-2">
        <img className="w-24 h-20 " src={img} alt="Logo" />
        <h3 className="text-3xl ">BeFunky</h3>
        
      </div>
      <div className="flex gap-3 items-center justify-end w-full p-10"> 
     <button><a className="   bg-blue-600 border-2 border-transparent bg-transparent hover:rounded-md hover:text-white hover:bg-transparent  hover:border-blue-800 hover:border-2 transition duration-700 cursor-pointer ease-in-out text-md px-7 py-3 rounded-md" href="/createaccount">SignUp</a></button> 
     <button className=" text-lg  bg-blue-600  border-2 border-transparent bg-transparent hover:rounded-md hover:text-white hover:bg-transparent hover:border-blue-800 hover:border-2 transition duration-700 cursor-pointer ease-in-out text-md px-8 py-2.5 rounded-md"><a href="/login">Login</a></button>

      

      </div>
    </div>
    )};
  



export default Navbar;

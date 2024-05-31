import React from "react";
import "./style.css";
function Content() {
  return (
    
    <div className="flex">
      <div className="w-full  flex-col flex z-0 h-fit ">
        <div className="big-vid absolute top-31">
         <video src="./src/landingpage/vecteezy_big-group-of-happy-teenage-friends-each-one-looking-at-their_33064062.mp4"  loop autoPlay muted ></video>

        </div>
        <div className="writings ml-10 font-serif text-white h-96 mt-20 flex w-1/3 items-center text-3xl">
          <p className="text-4xl z-10">
            Connect with Everyone From this amazing World.
            <p className="what text-xl mt-10"> No matter who you are
            just get connected !!! . Join the place where every cool person
            lives.
             </p>
          </p>
      </div>
        <div className="flex gap-3 items-center ml-10 mt-5 justify-start z-40 p-10"> 
     <button><a className="  bg-blue-600 border-2 border-transparent bg-transparent hover:rounded-md hover:text-white hover:bg-transparent  hover:border-blue-800 hover:border-2 transition duration-700 cursor-pointer ease-in-out text-md px-7 py-3 rounded-md " href="/createaccount">Create Account</a></button> 
     <button className="   bg-blue-600 border-2 border-transparent bg-transparent hover:rounded-md hover:text-white hover:bg-transparent  hover:border-blue-800 hover:border-2 transition duration-700 cursor-pointer ease-in-out text-md px-7 py-3 rounded-md"><a href="/login">Login</a></button>


    

      </div>
        </div>
        

    </div>
  );
}

export default Content;

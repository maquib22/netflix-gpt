import { useRef, useState } from "react";
import { checkValidData } from "../utils/validate";

const Body = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null)
  const email = useRef(null);
  const password = useRef(null);
  const handleForm = () => {
    
    // Validate the form data
    // console.log(email.current.value);
    // console.log(password.current.value);
    // console.log(name.current.value);
    const message = checkValidData(email.current.value, password.current.value, name.current.value);
    // console.log(message);
    setErrorMessage(message);

    if(message) return;

    // sign up/ sign In
    if(!isSignInForm){
        // Sing Up Logic
        
    }else {
        // Sing In Logic

    }


  };
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <>
      <div className="absolute ">
        <img
          className="h-screen"
          src="https://occ-0-1174-300.1.nflxso.net/dnm/api/v6/iMyKkw5SVrkCXbCfSBEb_Pjar5Y/AAAAQBTxE26zgLJoqZnmxUCfZtVJ2HbJUsVonZ_9Uo-pn68zarPK.png"
          alt="bg-img"
        />
      </div>
      <form
        className="absolute p-4  top-1/2 left-1/2 -translate-1/2"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="text-white text-3xl mb-4">
          Enter your info to {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Enter Name"
            className="p-2 mb-2 border w-full text-gray-200 border-gray-300"
          />
        )}

        <input
          ref={email}
          type="email"
          placeholder="Email address"
          className="p-2  border w-full text-gray-200 border-gray-300"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 mt-2 border w-full text-gray-200 border-gray-300"
        />
        <p className="text-red-500">{errorMessage}</p>
        <button
          type="submit"
          className="bg-red-700 text-white mt-2 p-2 w-full"
          onClick={handleForm}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="text-white mt-2 cursor-pointer hover:text-red-700"
          onClick={toggleSignInForm}
        >
          {isSignInForm
            ? "New to NetFlix? Sign Up Now"
            : "Already registered? Sign In now"}
        </p>
      </form>
    </>
  );
};

export default Body;

import { useState } from "react";


const Body = () => {
    const [isSignInForm, setIsSignInForm] = useState(true)
    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm)
    }
  return (
    <>
      <div className="absolute ">
        <img
          className="h-screen"
          src="https://occ-0-1174-300.1.nflxso.net/dnm/api/v6/iMyKkw5SVrkCXbCfSBEb_Pjar5Y/AAAAQBTxE26zgLJoqZnmxUCfZtVJ2HbJUsVonZ_9Uo-pn68zarPK.png"
          alt="bg-img"
        />
      </div>
      <form className="absolute p-4  top-1/2 left-1/2 -translate-1/2">
        <h1 className="text-white text-3xl mb-4">
          Enter your info to {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Email Name"
            className="p-2 mb-2 border w-full text-gray-200 border-gray-300"
          />
        )}

        <input
          type="email"
          placeholder="Email address"
          className="p-2  border w-full text-gray-200 border-gray-300"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 mt-2 border w-full text-gray-200 border-gray-300"
        />
        <button type="submit" className="bg-red-700 text-white mt-2 p-2 w-full">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="text-white mt-2 cursor-pointer hover:text-red-700"
          onClick={toggleSignInForm}
        >
          {isSignInForm? "New to NetFlix? Sign Up Now" : "Already registered? Sign In now"}
        </p>
      </form>
    </>
  );
}

export default Body
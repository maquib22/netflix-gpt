import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firbase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {addUser, removeUser} from '../utils/userSlice'
import { LOGO, PROFILE } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        // navigate("/");
        // console.log(auth);
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
        
        navigate("/error");
      });
      console.log(user);
      
  };

    useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {

        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse")
        // ...
      } else {
        // User is signed out̉ 
        dispatch(removeUser());
        navigate("/")

        // ...
      }
    });

    // unsubscribe when component unmount
    return () => unsubscribe()
  }, []);

  return (
    <div className="p-4 h-16 absolute z-10 flex justify-between w-full">
      <div className="w-25">
        <img
          src={LOGO}
          alt="logo"
        />
      </div>
      {user && (
        <div className="flex justify-center items-center gap-2">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-cover bg-center">
            <img className="bg-cover bg-center" src={PROFILE} alt="user" />
          </div>
          <button
            onClick={handleSignOut}
            className="border bg-red-700 text-white px-4 py-2 rounded"
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;

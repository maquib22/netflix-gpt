import { signOut } from "firebase/auth";
import { auth } from "../utils/firbase";
import { useNavigate } from "react-router-dom";
import { useSelector, useStore } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
        // console.log(auth);
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
      console.log(user);
      
  };

  return (
    <div className="p-4 h-16 absolute z-10 flex justify-between w-full">
      <div className="w-25">
        <img
          src="https://occ.a.nflxso.net/dnmt/api/v6/iL4oJVDYZ8KLSrJ6eG2OwtghbfQ/AAAAAfwxusEeCteu-L_QQ56_G2cohyI1E4BIh2uyr5t9gDhH0CKWHw3NVhndjuF7yQ26z3cYq_lnzY5pP6OarHyiibuiy2jIIa5sIhSvgal1S6u9YDVAyVoX6osPniEKN-dYy77H_pLfOCD7.svg"
          alt="logo"
        />
      </div>
      {user && (
        <div>
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

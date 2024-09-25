import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { app } from "../firebase";
import {useDispatch} from 'react-redux';
import { signInSuccess } from "../redux/user/userSlice";
const OAuth = () => {
  const dispatch = useDispatch();
  const handleGoogleAuth = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);
      const res = await fetch("/api/auth/google", {
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: result.user.displayName,
            email: result.user.email,
            photo: result.user.photoURL
        })
      });
      const data = await res.json();
      console.log(data)
      dispatch(signInSuccess(data));
    } catch (error) {
      console.log("Google login failed", error); 
    }
  };
  return (
    <button
      type="button"
      onClick={handleGoogleAuth}
      className="bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-90"
    >
      Continue with google
    </button>
  );
};

export default OAuth;

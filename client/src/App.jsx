import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UserSignUp from "./pages/UserSignUp";
import UserSignIn from "./pages/UserSignIn";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Headers from "./components/Headers";

const App = () => {
  return (
    <BrowserRouter>
      <Headers />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user_signup" element={<UserSignUp />} />
        <Route path="/user_signin" element={<UserSignIn />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

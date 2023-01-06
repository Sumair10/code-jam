import SignUp from "./auth/SignUpScreen/SignUpScreen";

import { Routes, Route, Link } from "react-router-dom";
import SignIn from "./auth/SigninScreen/SignIn";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/landingPage" element={<LandingPage/>} />
      </Routes>
    </div>
  );
}

export default App;

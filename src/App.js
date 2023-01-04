import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import Profile from "./pages/profile/Profile";
import Login from "./components/login/Login";
import NotFound from "./components/404/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <Home /> */}
    </>
  );
}

export default App;

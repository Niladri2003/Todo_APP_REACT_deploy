import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="login" element={<Login />} />
        <Route path="login/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;

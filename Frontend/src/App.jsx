import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Workflow from "./components/Workflow";
import Dashboard from "./Pages/Dashboard";
import Contact from "./components/Contact";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Registration from "./components/Registration";
import ThankYou from "./components/ThankYou";

function App() {
  return (
    <BrowserRouter>
      <div style={{ background: "#020617", minHeight: "100vh" }}>
        <Navbar />
        <Routes>

          <Route
            path="/"
            element={
              <>
                <Hero />
                <Features />
                <Workflow />
                <Contact/>
              </>
            }
          />

          <Route path="/features" element={<Features />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route path="/registration" element={<Registration />} />
          <Route path="/thankyou" element={<ThankYou />} />

        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;

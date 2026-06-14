import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Workflow from "./components/Workflow";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import Registration from "./components/Registration";
import ThankYou from "./components/ThankYou";

function App() {
  return (
    <div style={{ background: "#020617", minHeight: "100vh" }}>
      <BrowserRouter>
        <Navbar />

        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Features />
                <Workflow />
                <Pricing />
                <Contact />
              </>
            }
          />

          {/* Other Pages */}
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /> </ProtectedRoute>
         }
        />
          
        {/* Registration */}
          <Route
            path="/registration"
            element={<Registration />}
          />

          {/* Thank You */}
          <Route
            path="/thankyou"
            element={<ThankYou />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
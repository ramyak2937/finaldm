import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (data.success) {
        localStorage.setItem("token", data.token);

        alert("Login Successful ✅");

        navigate("/dashboard");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
      alert("Server Error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#020617]">

      {/* BACK BUTTON */}
      <button
        onClick={() => navigate("/")}
        className="fixed top-28 left-6 text-white text-sm hover:text-[#ffbe2a] transition font-bold"
      >
        ← Back
      </button>

      {/* LOGIN CARD */}
      <div className="bg-[#0f172a] p-10 rounded-xl w-[320px] text-center shadow-lg">

        <h2 className="text-white text-2xl mb-5 font-bold">
          Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) =>
            setFormData({
              ...formData,
              email: e.target.value,
            })
          }
          className="w-full mb-3 p-3 rounded bg-[#020617] text-white border border-[#334155]"
        />

        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) =>
            setFormData({
              ...formData,
              password: e.target.value,
            })
          }
          className="w-full mb-4 p-3 rounded bg-[#020617] text-white border border-[#334155]"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-[#ffbe2a] text-black py-3 rounded font-bold hover:opacity-90"
        >
          Login
        </button>

        <p className="text-[#cbd5e1] mt-4 text-sm">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-[#ffbe2a] font-semibold"
          >
            Sign up
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Login;
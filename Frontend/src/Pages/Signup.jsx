import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSignup = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/signup",
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
        alert("Signup Successful ✅");
        navigate("/login");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
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

      <div className="bg-[#0f172a] p-[30px] rounded-[12px] w-[320px] text-center shadow-lg">

        <h2 className="text-white text-[22px] mb-[20px] font-bold">
          Create Account
        </h2>

        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) =>
            setFormData({
              ...formData,
              name: e.target.value,
            })
          }
          className="w-full mb-[10px] p-[10px] rounded bg-[#020617] text-white border border-[#334155]"
        />

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
          className="w-full mb-[10px] p-[10px] rounded bg-[#020617] text-white border border-[#334155]"
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
          className="w-full mb-[15px] p-[10px] rounded bg-[#020617] text-white border border-[#334155]"
        />

        <button
          onClick={handleSignup}
          className="w-full bg-[#ffbe2a] text-black py-[10px] rounded font-bold hover:opacity-90"
        >
          Sign Up
        </button>

        <p className="text-[#cbd5e1] mt-[15px] text-[14px]">
          Already have account?{" "}
          <Link
            to="/login"
            className="text-[#ffbe2a] font-semibold"
          >
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Signup;
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Registration() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    department: "",
    year: "",
    skills: "",
    course: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:5000/api/register",
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
        navigate("/thankyou");
      } else {
        alert("Registration Failed");
      }
    } catch (error) {
      console.error(error);
      alert("Server Error");
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-4xl bg-[#0f172a] p-8 rounded-2xl shadow-lg border border-gray-700">

        <h1 className="text-4xl font-bold text-white text-center mb-8">
          Registration
        </h1>

        <form
          onSubmit={handleSubmit}
          className="grid md:grid-cols-2 gap-5"
        >
          <input
            type="text"
          placeholder="Full Name"
          required
          value={formData.name}
          onChange={(e) =>
          setFormData({ ...formData, name: e.target.value })
          }
         className="p-4 bg-[#020617] text-white border border-gray-700 rounded-xl"
         />

          <input
            type="email"
            placeholder="Email Address"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="p-4 bg-[#020617] text-white border border-gray-700 rounded-xl"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            required
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className="p-4 bg-[#020617] text-white border border-gray-700 rounded-xl"
          />

          <input
            type="text"
            placeholder="College Name"
            required
            value={formData.college}
            onChange={(e) =>
              setFormData({ ...formData, college: e.target.value })
            }
            className="p-4 bg-[#020617] text-white border border-gray-700 rounded-xl"
          />

          <input
            type="text"
            placeholder="Department"
            required
            value={formData.department}
            onChange={(e) =>
              setFormData({ ...formData, department: e.target.value })
            }
            className="p-4 bg-[#020617] text-white border border-gray-700 rounded-xl"
          />

          <select
            value={formData.year}
            onChange={(e) =>
              setFormData({ ...formData, year: e.target.value })
            }
            className="p-4 bg-[#020617] text-white border border-gray-700 rounded-xl"
          >
            <option value="">Select Year</option>
            <option>I Year</option>
            <option>II Year</option>
            <option>III Year</option>
            <option>IV Year</option>
          </select>

          <input
            type="text"
            placeholder="Skills"
            required
            value={formData.skills}
            onChange={(e) =>
              setFormData({ ...formData, skills: e.target.value })
            }
            className="p-4 bg-[#020617] text-white border border-gray-700 rounded-xl"
          />

          <select
            value={formData.course}
            onChange={(e) =>
              setFormData({ ...formData, course: e.target.value })
            }
            className="p-4 bg-[#020617] text-white border border-gray-700 rounded-xl "
          >
            <option value="">Select Internship Course</option>
            <option>Web Development</option>
            <option>Frontend Development</option>
            <option>Backend Development</option>
            <option>Full Stack Development</option>
            <option>React JS</option>
            <option>Python</option>
            <option>AI & ML</option>
          </select>

          <button
            type="submit"
            className="md:col-span-2 bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 rounded-xl transition"
          >
            Apply
          </button>
        </form>

      </div>
    </div>
  );
}

export default Registration;
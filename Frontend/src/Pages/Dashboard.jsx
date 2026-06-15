import { useEffect, useState } from "react";

function Dashboard() {
const [students, setStudents] = useState([]);
const [selectedStudent, setSelectedStudent] = useState(null);
const [searchTerm, setSearchTerm] = useState("");


useEffect(() => {
fetch("http://localhost:5000/api/registrations")
.then((res) => res.json())
.then((data) => {
setStudents(data.data);
})
.catch((err) => console.log(err));
}, []);

const totalRegistrations = students.length;
const totalCourses = new Set(
  students.map((student) => student.course)
).size;
const filteredStudents = students.filter((student) =>
  student.name?.toLowerCase().includes(searchTerm.toLowerCase())
);
return ( <div className="min-h-screen bg-slate-900 text-white p-8">

<div className="flex justify-between items-center mb-8">
  <h1 className="text-4xl font-bold">
    Admin Dashboard
  </h1>

  <button
    onClick={() => {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }}
    className="bg-red-500 px-4 py-2 rounded-lg font-semibold hover:bg-red-600"
  >
    Logout
  </button>
</div>

  {/* Total Registrations Card */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

  <div className="bg-slate-800 p-6 rounded-xl">
    <h2 className="text-gray-400">Total Registrations</h2>
    <p className="text-4xl font-bold text-yellow-400">
      {totalRegistrations}
    </p>
  </div>

  <div className="bg-slate-800 p-6 rounded-xl">
    <h2 className="text-gray-400">Courses</h2>
    <p className="text-4xl font-bold text-green-400">
      {totalCourses}
    </p>
  </div>

  <div className="bg-slate-800 p-6 rounded-xl">
    <h2 className="text-gray-400">Active Leads</h2>
    <p className="text-4xl font-bold text-blue-400">
      {totalRegistrations}
    </p>
  </div>

</div>
  <div className="mb-6">
  <input
    type="text"
    placeholder="🔍 Search by Name..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className="w-full md:w-80 p-3 rounded-lg bg-slate-800 border border-gray-600 text-white"
  />
</div>

  {/* Table */}
  <div className="overflow-x-auto">
    <table className="w-full border border-gray-700 rounded-lg overflow-hidden">
      <thead>
        <tr className="bg-slate-800">
          <th className="p-4 text-center">Name</th>
          <th className="p-4 text-center">Email</th>
          <th className="p-4 text-center">Course</th>
          <th className="p-4 text-center">Action</th>
        </tr>
      </thead>

      <tbody>
        {filteredStudents.map((student) => (
          <tr
            key={student._id}
            className="border-b border-gray-700"
          >
            <td className="p-4 text-center">
              {student.name}
            </td>

            <td className="p-4 text-center">
              {student.email}
            </td>

            <td className="p-4 text-center">
              {student.course}
            </td>

            <td className="p-4">
              <div className="flex justify-center items-center">
                <button
                  onClick={() => setSelectedStudent(student)}
                  className="bg-yellow-400 text-black px-5 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition"
                >
                  View
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  {/* Popup */}
  {selectedStudent && (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center">
      <div className="bg-slate-800 p-6 rounded-lg w-[500px]">
        <h2 className="text-2xl font-bold mb-4">
          Student Details
        </h2>

        <p><b>Name:</b> {selectedStudent.name}</p>
        <p><b>Email:</b> {selectedStudent.email}</p>
        <p><b>Phone:</b> {selectedStudent.phone}</p>
        <p><b>College:</b> {selectedStudent.college}</p>
        <p><b>Department:</b> {selectedStudent.department}</p>
        <p><b>Year:</b> {selectedStudent.year}</p>
        <p><b>Skills:</b> {selectedStudent.skills}</p>
        <p><b>Course:</b> {selectedStudent.course}</p>

        <button
          onClick={() => setSelectedStudent(null)}
          className="mt-5 bg-red-500 px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  )}
</div>


);
}

export default Dashboard;

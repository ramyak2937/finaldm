import { useNavigate } from "react-router-dom";

function ThankYou() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center">
      <div className="bg-slate-900 border border-yellow-400 rounded-3xl p-10 text-center w-[500px]">

        <h1 className="text-4xl font-bold text-white mb-4">
          🎉 Registration Successful!
        </h1>

        <p className="text-gray-300 mb-8">
          Thank you for applying for the internship.
          Your application has been submitted successfully.
        </p>

        

      </div>
    </div>
  );
}

export default ThankYou;
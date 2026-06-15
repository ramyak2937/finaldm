import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-[#020617] px-[40px] py-[14px] flex justify-between items-center rounded-[12px] m-[10px] shadow-[0_0_20px_rgba(0,0,0,0.5)]">

      {/* LEFT LOGO */}
      <div className="flex items-center gap-[10px]">
        <h1 className="text-[#ffbe2a] text-[28px] font-bold m-0 leading-none">
          V
        </h1>

        <h2 className="m-0 text-white text-[18px] leading-none">
          AUTODM <span className="text-[#ffbe2a]">PRO</span>
        </h2>
      </div>

      {/* CENTER MENU */}
      <div className="flex gap-[30px] text-[#cbd5e1]">
        <Link to="/">Home</Link>
        <Link to="/features">Features</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/Registration">Register</Link>
        <Link to="/dashboard">Dashboard</Link>
        </div>

      {/* RIGHT BUTTONS */}
      <div className="flex gap-[15px]">

        <Link to="/login">
          <button className="px-[18px] py-[8px] bg-transparent text-white border border-[#334155] rounded-[8px]">
            Login
          </button>
        </Link>

        <Link to="/signup">
          <button className="px-[18px] py-[8px] bg-[#ffbe2a] text-black rounded-[8px] font-bold">
            Get Started →
          </button>
        </Link>

      </div>

    </div>
  );
}

export default Navbar;
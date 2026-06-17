import image from "../assets/logo.png";

export default function Hero() {
  return (
    <>
      {/* HERO SECTION */}
      <div className="mt-[10px] pt-[30px] flex justify-between items-start min-h-[10vh] bg-[#020617] px-[80px] pb-0 text-white">
        
        {/* LEFT SIDE */}
        <div>
          <h1 className="text-[75px] font-[900] leading-[1.1]">
            <span className="text-[#ffbe2a] [text-shadow:0px_4px_15px_rgba(0,0,0,0.8)] [webkit-text-stroke:1px_#ffbe2a]">
              SOCIAL MEDIA
            </span>
            <br />
            <span className="text-white">CTA AUTO</span>
            <br />
            <span className="text-[#ffbe2a]">DM MACHINE</span>
          </h1>

          <p className="text-gray-400 text-[18px] leading-[30px] max-w-[620px]">
            Paste a keyword CTA on Instagram or Facebook. Every comment
            auto-triggers a personalized DM, lands them on your capture page,
            and logs the lead — fully automated, 24 × 7.
          </p>

          

          {/* MINI STATS */}
          <div className="mt-[30px] flex gap-[30px]">
            <p><b className="text-[#ffbe2a]">14K+</b> DMs/day free</p>
            <p><b className="text-[#ffbe2a]">98%</b> capture rate</p>
            <p><b className="text-[#ffbe2a]">2s</b> avg response</p>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <img
          src={image}
          alt="social media preview"
          className="w-[500px] h-[500px] object-cover rounded-xl shadow-lg border border-[#ffbe2a]/20 hover:scale-105 transition duration-300"
        />
      </div>

      {/* BLUR GAP */}
      <div className="w-full h-[120px] bg-[linear-gradient(to_bottom,rgba(2,6,23,0)_0%,#020617_80%)] blur-[40px] mt-[-60px]"></div>

      
    </>
  );
}
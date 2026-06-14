import { useEffect, useRef } from "react";

export default function Workflow() {
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-10");
            entry.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.2 }
    );

    refs.current.forEach((el) => el && observer.observe(el));
  }, []);

  const steps = [
    { icon: "📱", title: "Social Media CTA", desc: "User comments on your post" },
    { icon: "🪝", title: "Webhook Trigger", desc: "n8n detects the comment event" },
    { icon: "✉️", title: "Auto DM Sent", desc: "Instant reply to user" },
    { icon: "🌐", title: "Landing Page", desc: "User fills form" },
    { icon: "💾", title: "Lead Stored", desc: "Saved to Sheets & CRM" },
    { icon: "🤖", title: "AI Follow-up", desc: "Smart messages triggered" },
    { icon: "🔁", title: "Conversion", desc: "Lead becomes customer" },
    { icon: "🔔", title: "Notifications", desc: "Slack & email alerts" },
  ];

  return (
    <div className="bg-[#020617] px-[60px] py-[100px]">

      {/* TITLE */}
      <h1 className="text-center text-[55px] font-bold text-white">
        FROM COMMENT TO CLOSED LEAD -{" "}
        <span className="text-[#ffbe2a]">8 STEPS</span>
      </h1>

      <p className="text-center text-[#64748b] mt-[15px] max-w-[600px] mx-auto text-[14px]">
        A fully automated pipeline that turns engagement into qualified leads automatically.
      </p>

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-[30px] mt-[60px]">

        {steps.map((step, i) => (
          <div
            key={i}
            ref={(el) => (refs.current[i] = el)}
            className="opacity-0 translate-y-10 transition-all duration-500"
            style={{ transitionDelay: `${i * 0.15}s` }}
          >

            {/* GLOW BORDER BOX */}
            <div className="relative group p-[2px] rounded-xl 
            bg-gradient-to-r from-[#ffbe2a]/30 via-[#ffbe2a] to-[#ffbe2a]/30 
            hover:from-[#ffbe2a] hover:to-[#ffbe2a] transition duration-300">

              {/* INNER BOX */}
              <div className="bg-[#020617] rounded-xl p-6 text-center h-full">

                {/* ICON */}
                <div className="w-[70px] h-[70px] mx-auto flex items-center justify-center rounded-full 
                border border-[#ffbe2a]/30 shadow-[0_0_20px_#ffbe2a33] text-[26px] relative mb-4">

                  {step.icon}

                  {/* NUMBER */}
                  <div className="absolute -top-2 -right-2 bg-[#ffbe2a] text-black rounded-full w-[22px] h-[22px] text-[12px] flex items-center justify-center">
                    {i + 1}
                  </div>

                </div>

                {/* TITLE */}
                <h3 className="text-white font-semibold mb-2 text-[14px]">
                  {step.title}
                </h3>

                {/* DESC */}
                <p className="text-gray-400 text-[12px]">
                  {step.desc}
                </p>

              </div>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
}
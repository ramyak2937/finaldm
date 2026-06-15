import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-white px-6 py-16">
      {/* ================= GET STARTED ================= */}
      <div className="flex flex-col items-center justify-center text-center py-24">

        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          START AUTOMATING YOUR <br />
          <span className="text-[#ffbe2a]">
            SOCIAL MEDIA LEADS TODAY
          </span>
        </h1>

        <p className="text-[#cbd5e1] mt-6 max-w-2xl">
          Join thousands of creators and businesses capturing leads on
          autopilot — free to start, no credit card needed.
        </p>

        <div className="mt-10 flex flex-col md:flex-row gap-4 items-center">

          <input
            type="email"
            placeholder="Enter your email address"
            className="px-6 py-3 w-[320px] rounded-lg bg-[#0f172a] border border-[#1e293b] text-white outline-none"
          />

          <button className="bg-[#ffbe2a] text-black px-6 py-3 rounded-lg font-semibold hover:opacity-90">
            ⚡ Launch AutoDM Pro →
          </button>

        </div>

        <p className="text-[#94a3b8] mt-6 text-sm">
          ✓ Free plan available • ✓ No credit card • ✓ Setup in 10 minutes
        </p>

      </div>

      {/* ================= TESTIMONIALS ================= */}
      <div className="max-w-6xl mx-auto mb-24">

        
        <h1 className="text-center text-4xl md:text-5xl font-bold mb-12">
          <span className="text-white">RESULTS THAT</span><br />
          <span className="text-[#ffbe2a]">SPEAK FOR THEMSELVES</span>
        </h1>

        <div className="grid md:grid-cols-3 gap-6">

          {/* CARD 1 */}
          <div className="bg-[#0f172a] p-6 rounded-xl border border-[#1e293b]">
            <p className="text-[#ffbe2a] mb-3">★★★★★</p>

            <p className="text-[#cbd5e1] text-sm leading-6">
              "AutoDM Pro tripled my course enrollments in 3 weeks.
              Every Reel comment now starts a conversation — without touching my phone."
            </p>

            <div className="flex items-center mt-6 gap-3">
              <div className="w-10 h-10 bg-[#14b8a6] rounded-full flex items-center justify-center text-black font-bold">
                PK
              </div>

              <div>
                <p className="text-white text-sm font-semibold">Priya Kapoor</p>
                <p className="text-xs text-[#94a3b8]">Online Educator</p>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="bg-[#0f172a] p-6 rounded-xl border border-[#1e293b]">
            <p className="text-[#ffbe2a] mb-3">★★★★★</p>

            <p className="text-[#cbd5e1] text-sm leading-6">
              "The n8n + Meta API integration is bulletproof.
              Our cost-per-lead dropped 60% in the first month."
            </p>

            <div className="flex items-center mt-6 gap-3">
              <div className="w-10 h-10 bg-[#f59e0b] rounded-full flex items-center justify-center text-black font-bold">
                RM
              </div>

              <div>
                <p className="text-white text-sm font-semibold">Rahul Mehta</p>
                <p className="text-xs text-[#94a3b8]">Growth Lead</p>
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="bg-[#0f172a] p-6 rounded-xl border border-[#1e293b]">
            <p className="text-[#ffbe2a] mb-3">★★★★★</p>

            <p className="text-[#cbd5e1] text-sm leading-6">
              "I manage 10 client accounts and AutoDM runs all their DMs.
              Saves me 4+ hours every week."
            </p>

            <div className="flex items-center mt-6 gap-3">
              <div className="w-10 h-10 bg-[#8b5cf6] rounded-full flex items-center justify-center text-white font-bold">
                JT
              </div>

              <div>
                <p className="text-white text-sm font-semibold">Jamie Torres</p>
                <p className="text-xs text-[#94a3b8]">Agency Owner</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      

      {/* ================= LOGO CENTER ================= */}
      <div className="flex justify-center items-center gap-3 mb-16">

        <h1 className="text-[#ffbe2a] text-[32px] font-bold m-0">
          V
        </h1>

        <h2 className="text-white text-[20px] m-0">
          AUTODM <span className="text-[#ffbe2a]">PRO</span>
        </h2>

      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-20">

        {/* Address */}
        <div>
          <h2 className="text-lg font-bold mb-4 text-[#ffbe2a]">
            Address
          </h2>
          <p className="text-sm text-[#cbd5e1] leading-6">
            Upstair, Kotak Mahindra Bank,<br />
            Lakshmi Complex, Anbunagar Extension<br />
            Vannarapettai, Tirunelveli.<br />
            Tamilnadu - 627002, India.
          </p>
        </div>

       {/* Contact */}
<div>
  <h2 className="text-lg font-bold mb-4 text-[#ffbe2a]">
    Contact Us
  </h2>

  <ul className="space-y-3 text-sm text-[#cbd5e1]">
    
    <li>
      <a
        href="tel:+919095422237"
        className="hover:text-[#ffbe2a] transition"
      >
        📞 +91 90954 22237
      </a>
    </li>

    <li>
      <a
        href="https://www.thevsoft.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-[#ffbe2a] transition"
      >
        🌐 www.thevsoft.com
      </a>
    </li>

    <li>
      <a
        href="mailto:info@thevsoft.com"
        className="hover:text-[#ffbe2a] transition"
      >
        📧 info@thevsoft.com
      </a>
    </li>

  </ul>
</div>
        {/* Social */}
        <div>
          <h2 className="text-lg font-bold mb-4 text-[#ffbe2a]">
            Social Medias
          </h2>

          <ul className="space-y-3 text-sm text-[#cbd5e1]">
            <li>📷 Instagram</li>
            <li>📘 Facebook</li>
            <li>💼 LinkedIn</li>
          </ul>
        </div>

      </div>

      {/* ================= FOOTER ================= */}
      <div className="text-center mt-16 pt-6 border-t border-[#1e293b] text-sm text-[#94a3b8]">
        © 2025 Vsoft Solutions. All rights reserved.
      </div>

    </div>
  );
};

export default Contact;
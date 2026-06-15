export default function Pricing() {
  return (
    <div className="bg-[#020617] text-[#ffffff] py-20 px-6">
      
      {/* Heading */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold">
          HONEST,{" "}
          <span className="text-[#ffbe2a]">TRANSPARENT PRICING</span>
        </h1>
        <p className="text-gray-400 mt-4">
          Start free, scale as your campaigns grow. No hidden fees, no lock-in.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        
        {/* Starter */}
        <div className="bg-[#0B1120] border border-[#ffbe2a]/20 rounded-2xl p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-[#ffbe2a] font-semibold mb-4">STARTER</h3>
            <h1 className="text-5xl font-bold mb-2">$0</h1>
            <p className="text-gray-400 mb-4">/ month – always free</p>
            <p className="text-gray-400 mb-6">
              Perfect for creators and students exploring DM automation.
            </p>

            <ul className="space-y-3 text-gray-300">
              <li>+ 500 DMs / month</li>
              <li>+ 1 connected account</li>
              <li>+ Basic landing page builder</li>
              <li>+ Google Sheets sync</li>
              <li>+ Email notifications</li>
            </ul>
          </div>

          <button className="mt-8 border border-[#ffbe2a] text-[#ffbe2a] py-3 rounded-lg hover:bg-[#ffbe2a] hover:text-black transition">
            Get Started Free
          </button>
        </div>

        {/* Professional */}
        <div className="relative bg-[#0B1120] border border-[#ffbe2a] rounded-2xl p-8 flex flex-col justify-between shadow-lg shadow-[#ffbe2a]/10">
          
          {/* Badge */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#ffbe2a] text-black px-4 py-1 text-sm rounded-full">
            MOST POPULAR
          </div>

          <div>
            <h3 className="text-[#ffbe2a] font-semibold mb-4">PROFESSIONAL</h3>
            <h1 className="text-5xl font-bold mb-2">$49</h1>
            <p className="text-gray-400 mb-4">/ month</p>
            <p className="text-gray-400 mb-6">
              For growing businesses serious about lead automation.
            </p>

            <ul className="space-y-3 text-gray-300">
              <li>+ Unlimited DMs</li>
              <li>+ 5 connected accounts</li>
              <li>+ AI follow-up sequences</li>
              <li>+ Lead scoring & analytics</li>
              <li>+ Slack + email alerts</li>
              <li>+ Custom landing pages</li>
              <li>+ Priority support</li>
            </ul>
          </div>

          <button className="mt-8 bg-[#ffbe2a] text-black py-3 rounded-lg font-semibold hover:opacity-90 transition">
            Start Free Trial →
          </button>
        </div>

        {/* Enterprise */}
        <div className="bg-[#0B1120] border border-[#ffbe2a]/20 rounded-2xl p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-[#ffbe2a] font-semibold mb-4">ENTERPRISE</h3>
            <h1 className="text-4xl font-bold mb-2">CUSTOM</h1>
            <p className="text-gray-400 mb-4">monthly retainer</p>
            <p className="text-gray-400 mb-6">
              For agencies managing multiple brands with advanced needs.
            </p>

            <ul className="space-y-3 text-gray-300">
              <li>+ Unlimited everything</li>
              <li>+ Unlimited accounts</li>
              <li>+ White-label option</li>
              <li>+ Dedicated AI model</li>
              <li>+ Custom integrations</li>
              <li>+ SLA + 24/7 support</li>
            </ul>
          </div>

          <button className="mt-8 border border-[#ffbe2a] text-[#ffbe2a] py-3 rounded-lg hover:bg-[#ffbe2a] hover:text-black transition">
            Talk to Sales
          </button>
        </div>

      </div>
    </div>
  );
}
  export default function Features() {
    return (
      <div className="bg-[#020617] pt-[24] pb-[10] px-[60px] py-[100px]">
        
        <h1 className="text-center text-[65px] font-bold text-white">
    Everything to run your <span className="text-[#ffbe2a]">CTA</span> lead machine
  </h1>

        {/* Paragraph */}
        <p className="text-center text-[#94a3b8] text-[16px] mt-[15px] max-w-[600px] hover:shadow-lg hover:shadow-[#ffbe2a] mx-auto">
          Eight production-grade modules-from Meta API triggers to AI follow-ups-all wired together with n8n automation.
        </p>

        {/* Cards Container */}
        <div className="flex flex-wrap justify-between gap-[20px]  mt-[40px]">

          {[
            ["🤖","Auto DM Replies","Keyword-triggered DMs fire instantly when someone comments your CTA. Works on Instagram posts, reels, and Facebook.","Meta Graph API"],
            ["⚡","CTA Lead Automation","Full pipeline: comment-webhook- DM -landing page-lead Store. zero manual steps, runs 24/7.","n8n Workflow"],
            ["🧱","Landing Page Builder","Drag and drop builder with CTA blocks, lead form and mobile responsive templates deploy in minute.","React+Vite"],
            ["📄","Google Sheet Sync","Every lead syncs to Google sheet in real time.Name,email,phone,source,and timestamp-organized automatically.","Sheets API"],
            ["🧠","AI Follow-up Messaging","Groq AI(LLaMA 3/Mixtral) writes personalized follow- up messages based on lead behaviour,intent signals and campaign context.","GroqAI"],
            ["📩","Slack & Email Alerts","Instant notification the moment a new lead is captured. get name,source, and campaign data straight to your slack channel.","Webhooks"],
            ["🔗","Meta Graph API","Official meta integration for real time comment monitoring and DM delivery on both Instagram and Facebook Messenger.","Instagram +FB"],
            ["📊","Real-time Analytics","Live dashboard tracking DMs send, leads captured, conversion rates, campaign performance, and AI follow up status.","Live Dashboard"],
          ].map((item, i) => (
            <div
              key={i}
              className="w-[22%] bg-[#0f172a] border border-[#1e293b] hover:shadow-lg hover:shadow-[#ffbe2a] rounded-[18px] p-[22px] text-white"
            >
              {/* Icon */}
              <div className="w-[50px] h-[50px] rounded-[12px] bg-[#1e293b] flex items-center justify-center mb-[16px] text-[20px]">
                {item[0]}
              </div>

              {/* Title */}
              <h3 className="font-bold text-[17px]">
                {item[1]}
              </h3>

              {/* Description */}
              <p className="text-[#94a3b8] text-[14px]">
                {item[2]}
              </p>

              {/* Tag */}
              <span className="inline-block mt-[12px] px-[10px] py-[5px] rounded-[999px] border border-[#334155] text-[12px] text-[#94a3b8] shadow-[0_0_10px_rgba(175,162,162,0.3)]">
                {item[3]}
              </span>
            </div>
          ))}

        </div>
      </div>
    );
  }
export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Health Tracking
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Track how sleep affects your{" "}
          <span className="text-[#58a6ff]">work performance</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Connect your sleep tracker and productivity tools. Discover your optimal sleep patterns and unlock peak performance — backed by your own data.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get Started — $11/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">
          Works with Fitbit, Oura, Apple Health, RescueTime &amp; Toggl
        </p>

        {/* Stats row */}
        <div className="mt-14 grid grid-cols-3 gap-6 border border-[#30363d] rounded-xl bg-[#161b22] p-6">
          <div>
            <div className="text-2xl font-bold text-[#58a6ff]">87%</div>
            <div className="text-xs text-[#8b949e] mt-1">of users improved focus within 30 days</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-[#58a6ff]">+2.4h</div>
            <div className="text-xs text-[#8b949e] mt-1">average deep work gained per week</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-[#58a6ff]">5 APIs</div>
            <div className="text-xs text-[#8b949e] mt-1">integrated sleep &amp; productivity sources</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-16">
        <div className="border border-[#30363d] rounded-2xl bg-[#161b22] p-8 text-center shadow-lg">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$11</div>
          <div className="text-[#8b949e] text-sm mb-6">per month, cancel anytime</div>
          <ul className="text-left space-y-3 mb-8 text-sm text-[#c9d1d9]">
            {[
              "Unlimited sleep + productivity syncs",
              "Correlation dashboard & trend charts",
              "Personalized sleep recommendations",
              "Fitbit, Oura, Apple Health integrations",
              "RescueTime & Toggl integrations",
              "Weekly performance digest email"
            ].map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">&#10003;</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-sm transition-colors"
          >
            Start Tracking Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "Which devices and apps are supported?",
              a: "We integrate with Fitbit, Oura Ring, Apple Health, RescueTime, and Toggl. More integrations are added regularly."
            },
            {
              q: "How does the correlation analysis work?",
              a: "We pull your nightly sleep metrics (duration, REM, deep sleep) and match them against your daily productivity scores to surface patterns and optimal sleep windows."
            },
            {
              q: "Can I cancel my subscription at any time?",
              a: "Yes. Cancel anytime from your account settings. You keep access until the end of your billing period with no questions asked."
            }
          ].map(({ q, a }) => (
            <div key={q} className="border border-[#30363d] rounded-xl bg-[#161b22] p-5">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-sm text-[#8b949e]">{a}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

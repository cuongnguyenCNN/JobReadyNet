"use client";
import { useEffect } from "react";

export default function SuccessPage() {
  useEffect(() => {
    if (window.gtag) {
      window.gtag("event", "purchase_success", {
        event_category: "funnel",
        event_label: "pdf_19",
      });
    }
  }, []);

  const handleUpsell = () => {
    window.location.href = "https://your-upsell-link.com";
  };

  const goHome = () => {
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center px-4">
      <div className="max-w-2xl w-full">
        {/* SUCCESS */}
        <div className="bg-white rounded-xl shadow p-6 text-center mb-6">
          <h1 className="text-3xl font-bold text-green-600">
            ✅ Payment Successful!
          </h1>
          <p className="mt-2 text-gray-600">
            You’re one step closer to passing your next interview 🚀
          </p>

          <a
            href="https://drive.google.com/uc?export=download&id=1wb6hTx5BstfWzZ7Z_4pYaG-rq0yho8ik"
            className="inline-block mt-4 bg-black text-white px-6 py-3 rounded-lg font-semibold"
          >
            Download Your Answers
          </a>

          {/* Back Home */}
          <div className="mt-4">
            <button
              onClick={goHome}
              className="text-sm text-gray-500 underline"
            >
              ← Back to homepage
            </button>
          </div>
        </div>

        {/* UPSELL */}
        <div className="bg-white border-2 border-black rounded-xl p-6 mb-6 text-center">
          <h2 className="text-2xl font-bold mb-2">🚀 Want to go further?</h2>

          <p className="text-gray-700 mb-4">
            You now have the answers — but most developers still fail because
            they don’t know how to apply them in real interviews.
          </p>

          <h3 className="text-xl font-semibold mb-4">
            Full .NET Interview Pack — $49
          </h3>

          <ul className="text-left mb-4 space-y-2">
            <li>✔ 50+ additional real-world answers</li>
            <li>✔ Behavioral interview questions (most people fail here)</li>
            <li>✔ System design basics explained simply</li>
            <li>✔ How senior developers actually think & answer</li>
          </ul>

          <button
            onClick={handleUpsell}
            className="cursor-pointer bg-black text-white px-6 py-3 rounded-lg text-lg font-semibold hover:scale-105 transition"
          >
            Upgrade Now — $49
          </button>

          {/* No thanks */}
          <div className="mt-3">
            <button
              onClick={goHome}
              className="text-sm text-gray-500 underline"
            >
              No thanks, I’ll stick with the basic version
            </button>
          </div>

          <p className="text-red-500 mt-3 text-sm">
            ⏳ One-time offer (not shown again)
          </p>
        </div>

        {/* BONUS */}
        <div className="bg-white rounded-xl p-6 shadow mb-6">
          <h3 className="font-semibold mb-2">🎁 Bonus included:</h3>
          <ul className="text-gray-700 space-y-1">
            <li>✔ Mock interview script</li>
            <li>✔ Answer templates you can reuse</li>
          </ul>
        </div>

        {/* SOCIAL PROOF */}
        <div className="text-center italic text-gray-600">
          <p>💬 “This helped me explain answers clearly”</p>
          <p>💬 “Finally understood what interviewers expect”</p>
        </div>
      </div>
    </div>
  );
}

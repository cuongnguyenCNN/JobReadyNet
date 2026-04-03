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

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center px-4">
      <div className="max-w-2xl w-full">
        {/* SUCCESS */}
        <div className="bg-white rounded-xl shadow p-6 text-center mb-6">
          <h1 className="text-3xl font-bold text-green-600">
            ✅ Payment Successful!
          </h1>
          <p className="mt-2 text-gray-600">
            You made a smart investment in your career 🚀
          </p>
          {/* https://drive.google.com/uc?export=download&id=1wb6hTx5BstfWzZ7Z_4pYaG-rq0yho8ik */}
          <a
            href="https://drive.google.com/uc?export=download&id=1wb6hTx5BstfWzZ7Z_4pYaG-rq0yho8ik"
            className="inline-block mt-4 bg-black text-white px-6 py-3 rounded-lg font-semibold"
          >
            Download Your PDF
          </a>
        </div>

        {/* UPSELL */}
        <div className="bg-white border-2 border-black rounded-xl p-6 mb-6 text-center">
          <h2 className="text-2xl font-bold mb-2">🚀 Want to go further?</h2>

          <p className="text-gray-700 mb-4">
            Most developers still fail even with answers. The difference is how
            you THINK and explain.
          </p>

          <h3 className="text-xl font-semibold mb-4">
            Advanced Interview Mastery Pack ($59)
          </h3>

          <ul className="text-left mb-4 space-y-2">
            <li>✔ Real interview scenarios</li>
            <li>✔ System design basics</li>
            <li>✔ Senior-level thinking</li>
          </ul>

          <button
            onClick={handleUpsell}
            className="bg-black text-white px-6 py-3 rounded-lg text-lg font-semibold hover:scale-105 transition"
          >
            Upgrade Now - $59
          </button>

          <p className="text-red-500 mt-3 font-semibold">
            ⏳ Only available on this page
          </p>
        </div>

        {/* BONUS */}
        <div className="bg-white rounded-xl p-6 shadow mb-6">
          <h3 className="font-semibold mb-2">🎁 Bonus included:</h3>
          <ul className="text-gray-700 space-y-1">
            <li>Mock interview script</li>
            <li>Answer templates</li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div className="text-center italic text-gray-600">
          <p>💬 “This got me hired”</p>
          <p>💬 “Best $29 I’ve spent”</p>
        </div>
      </div>
    </div>
  );
}

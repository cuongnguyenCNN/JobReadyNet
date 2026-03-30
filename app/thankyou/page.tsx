"use client";
import GeoPricing from "@/components/GeoPricingComponent";
import { Send } from "lucide-react";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export default function ThankYouPage() {
  useEffect(() => {
    if (window.gtag) {
      window.gtag("event", "thank_you_view", {
        event_category: "funnel",
        event_label: "after_optin",
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 min-h-screen bg-gradient-to-br from-white to-gray-100">
      <div className="max-w-2xl w-full">
        {/* HEADER */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Check your email 📩</h1>
          <p className="text-gray-600 mt-2">
            I’ve sent you the FREE .NET interview PDF
          </p>
        </div>

        {/* MESSAGE */}
        <div className="bg-white shadow-sm rounded-xl p-6 mb-6">
          <h2 className="text-xl font-semibold mb-2">Before you go...</h2>
          <p className="text-gray-700">
            Most developers still fail interviews even after reading questions.
          </p>
          <p className="font-semibold mt-2">
            👉 Because they don’t know how to explain answers clearly.
          </p>
        </div>

        {/* OFFER */}
        <div className="bg-white border-2 border-black rounded-xl p-6 mb-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Upgrade to PRO version</h2>

          <ul className="text-left mb-4 space-y-2">
            <li>✔ 150 questions + DEEP answers</li>
            <li>✔ Explain like a senior developer</li>
            <li>✔ Real interview scenarios</li>
          </ul>

          <GeoPricing />

          <p className="text-xs text-gray-500 mt-2">
            One-time payment. Instant access.
          </p>

          <p className="text-red-500 mt-3 font-semibold">
            🔥 Limited price today
          </p>
        </div>

        {/* BONUS */}
        <div className="bg-white rounded-xl p-6 mb-6 shadow-sm">
          <h3 className="font-semibold mb-2">🎁 Bonus included:</h3>
          <ul className="space-y-1 text-gray-700">
            <li>Common traps cheat sheet</li>
            <li>Answer frameworks</li>
            <li>Real examples</li>
          </ul>
        </div>

        {/* SOCIAL PROOF */}
        <div className="text-center italic text-gray-600 mb-6">
          <p>💬 “This helped me pass my interview”</p>
          <p>💬 “Worth way more than $19”</p>
        </div>

        {/* ALT */}
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="https://web.telegram.org/a/#-1003799786189"
            className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded-lg transition"
          >
            <Send className="w-4 h-4" />
            Join Software Devs & Jobs
          </a>

          <a
            href="https://github.com/cuongnguyenCNN"
            className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded-lg transition"
          >
            Follow GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

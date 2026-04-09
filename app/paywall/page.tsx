"use client";
import { useState } from "react";
import Countdown from "@/components/CountDown";

export default function Paywall() {
  const [plan, setPlan] = useState<"lifetime" | "monthly">("lifetime");

  const checkoutLinks = {
    lifetime:
      "https://noteflowai.lemonsqueezy.com/checkout/buy/98ea2ea8-1378-4bcc-900b-c0c3ea03e359",
    monthly:
      "https://noteflowai.lemonsqueezy.com/checkout/buy/4f3feb71-08f5-49d8-9193-bb533d1b1b68", // 👉 thay bằng link LemonSqueezy weekly
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-xl text-center">
        <h2 className="text-2xl font-semibold mb-3">
          👉 That’s why most developers get rejected.
        </h2>

        <p className="text-sm text-gray-500 mb-4">
          🚀 You will fail interviews even if you know the answers Because you
          explain like a junior.
        </p>
        {/* 
        <p className="text-sm text-gray-500 mb-6">
          But because they don’t understand how things actually work.
        </p> */}

        <p className="text-sm font-medium mb-6">👉 Don’t be one of them.</p>

        {/* Value */}
        <div className="text-left text-sm mb-6 space-y-2">
          {/* <p>✅ 150 real interview questions</p>
          <p>✅ Strong answers (not textbook)</p>
          <p>✅ Thinking framework</p>
          <p>✅ Lifetime access</p> */}
          <p>✅ See EXACT answers that pass real .NET interviews</p>
          <p>✅ Fix the mistakes that make 78% of devs fail</p>
          <p>✅ Learn how to explain like a senior (not guess like a junior)</p>
          <p>✅ Get AI feedback on your answers instantly</p>
          <p>✅ Practice like a real interview (not theory)</p>
        </div>

        {/* Pricing toggle */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setPlan("lifetime")}
            className={`flex-1 py-2 rounded-lg border ${
              plan === "lifetime" ? "bg-black text-white" : "text-gray-600"
            }`}
          >
            $29 Lifetime <br></br>
            <span className="text-xs text-green-500">Best value</span>
          </button>
          <button
            onClick={() => setPlan("monthly")}
            className={`flex-1 py-2 rounded-lg border ${
              plan === "monthly" ? "bg-black text-white" : "text-gray-600"
            }`}
          >
            $9 / month
          </button>
        </div>

        {/* Price display */}
        <div className="mb-6">
          <p className="text-3xl font-bold">
            {plan === "lifetime" ? "$29" : "$9"}
          </p>
          <p className="text-xs text-gray-400">
            {plan === "lifetime" ? "One-time payment" : "Billed monthly"}
          </p>
        </div>

        <Countdown />

        {/* CTA */}
        <button
          onClick={() => {
            if (window.gtag)
              window.gtag("event", "buy_click_on_paywall", {
                event_category: "engagement",
                event_label: plan,
              });

            window.open(checkoutLinks[plan], "_blank");
          }}
          className="cursor-pointer w-full bg-black text-white py-3 rounded-lg font-medium hover:opacity-90"
        >
          🔓 Unlock Full Access
        </button>

        <button
          onClick={() => (window.location.href = "/")}
          className="mt-4 text-xs text-gray-400"
        >
          Continue failing for free
        </button>

        <p className="text-xs text-gray-400 mt-4">
          🔥 1,278 developers already joined
        </p>
      </div>
    </div>
  );
}

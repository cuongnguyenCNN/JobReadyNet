// app/apply/page.tsx
"use client";

import { useRouter, redirect } from "next/navigation";
import { useState } from "react";

export default function Apply({ searchParams }: any) {
  const jobId = searchParams.jobId;
  const router = useRouter();

  const [email, setEmail] = useState("");

  const handleApply = async () => {
    await fetch("/api/apply", {
      method: "POST",
      body: JSON.stringify({ jobId, email }),
    });

    router.push("/success");
  };

  return (
    <div className="max-w-md mx-auto mt-16 bg-white border rounded-xl shadow-sm p-6">
      {/* Title */}
      <h2 className="text-2xl font-bold text-center">🚀 Apply in 1 click</h2>

      <p className="text-gray-500 text-center mt-2 text-sm">
        Enter your email to get instant access & apply for this job
      </p>

      {/* Input */}
      <input
        type="email"
        className="w-full border rounded-lg p-3 mt-6 focus:outline-none focus:ring-2 focus:ring-black"
        placeholder="you@example.com"
        onChange={(e) => setEmail(e.target.value)}
      />

      {/* CTA */}
      <button
        onClick={handleApply}
        className="w-full mt-4 bg-black text-white py-3 rounded-lg font-medium hover:opacity-90 transition"
      >
        ✨ Apply Now
      </button>

      {/* Trust signals */}
      <p className="text-xs text-gray-400 text-center mt-3">
        No spam. Instant access. Takes 10 seconds.
      </p>
      <button
        onClick={() => redirect("/")}
        className="cursor-pointer mt-4 text-grey py-3 rounded-lg font-medium hover:opacity-90 transition"
      >
        ✨ Maybe later
      </button>
    </div>
  );
}

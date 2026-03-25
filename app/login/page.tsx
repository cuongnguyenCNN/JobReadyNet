"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function EnterEmail() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  // Check nếu đã có email hợp lệ → auto vào dashboard
  useEffect(() => {
    const stored = localStorage.getItem("user_email");

    if (stored) {
      const parsed = JSON.parse(stored);

      const now = Date.now();
      const isExpired = now > parsed.expiry;

      if (!isExpired) {
        router.push("/dashboard");
      } else {
        localStorage.removeItem("user_email");
      }
    }
  }, [router]);

  const handleSubmit = () => {
    if (!email || !email.includes("@")) {
      alert("Enter valid email bro 😄");
      return;
    }

    // Set expiry = 3 days
    const expiry = Date.now() + 3 * 24 * 60 * 60 * 1000;

    const data = {
      email,
      expiry,
    };

    localStorage.setItem("user_email", JSON.stringify(data));

    // Redirect
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <p className="text-xs text-gray-400 mb-4">Step 1 of 2</p>

        <h1 className="text-2xl font-semibold mb-2">
          Start your interview prep 🚀
        </h1>

        <p className="text-sm text-gray-500 mb-6">
          Get instant access to real .NET interview questions
        </p>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border rounded-lg px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={handleSubmit}
          className="w-full bg-black text-white py-3 rounded-lg font-medium hover:opacity-90"
        >
          Continue →
        </button>

        <p className="text-xs text-gray-400 mt-4 text-center">
          🔥 Used by 1,200+ developers worldwide
        </p>
      </div>
    </div>
  );
}

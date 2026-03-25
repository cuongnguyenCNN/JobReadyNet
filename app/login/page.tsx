"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

type FormType = {
  name: string;
  phone: string;
  email: string;
  message: string;
  ip: string;
  country: string;
  countryCode: string;
  tier: string;
};

export default function EnterEmail() {
  const router = useRouter();

  const TIER1 = ["US", "UK", "CA", "AU", "DE", "NL"];

  const [form, setForm] = useState<FormType>({
    name: "",
    phone: "",
    email: "",
    message: "New Register .Net Interview",
    ip: "",
    country: "",
    countryCode: "",
    tier: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // 👉 Lấy location
  const getUserLocation = async () => {
    try {
      const res = await fetch("https://api.country.is/");
      const data = await res.json();

      return {
        ip: "unknown",
        country: data.country,
        countryCode: data.country,
      };
    } catch {
      return {
        ip: "unknown",
        country: "unknown",
        countryCode: "unknown",
      };
    }
  };

  const getTier = (countryCode: string) => {
    if (TIER1.includes(countryCode)) return "Tier1";
    return "Tier3";
  };

  // 👉 Validate
  const validate = () => {
    if (!form.email) return "Please enter your email.";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) return "Invalid email format.";

    return "";
  };

  // 👉 Handle input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 👉 Submit chính (đã fix đúng type)
  const handleSubmit = async () => {
    const err = validate();
    if (err) {
      setError(err);
      return;
    }

    setLoading(true);
    setError("");

    const location = await getUserLocation();

    const payload = {
      ...form,
      ip: location.ip,
      country: location.country,
      countryCode: location.countryCode,
      tier: getTier(location.countryCode),
    };

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbyKgvvcToXqcERe6gwVzsvZNBiCjniiN3Zqiz02mmVZYVUcrkyoylec9QNsf5I6X7pB/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        },
      );

      // 👉 Lưu localStorage (3 ngày)
      const expiry = Date.now() + 3 * 24 * 60 * 60 * 1000;

      localStorage.setItem(
        "user_email",
        JSON.stringify({
          email: form.email,
          expiry,
        }),
      );

      router.push("/dashboard");
    } catch {
      setError("Something went wrong. Try again.");
    }

    setLoading(false);
  };

  // 👉 Auto redirect nếu đã có email
  useEffect(() => {
    const stored = localStorage.getItem("user_email");

    if (stored) {
      const parsed = JSON.parse(stored);

      if (Date.now() < parsed.expiry) {
        router.push("/dashboard");
      } else {
        localStorage.removeItem("user_email");
      }
    }
  }, [router]);

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
          name="email"
          placeholder="Enter your email"
          value={form.email}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full bg-black text-white py-3 rounded-lg font-medium 
             hover:opacity-90 
             cursor-pointer 
             disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Loading..." : "Continue →"}
        </button>

        <p className="text-xs text-gray-400 mt-4 text-center">
          🔥 Used by 1,200+ developers worldwide
        </p>
      </div>
    </div>
  );
}

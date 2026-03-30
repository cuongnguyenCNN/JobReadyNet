"use client";
import LiveRegisterPDFFree from "@/components/LiveRegisterPDFFree";
import { useState, ChangeEvent, FormEvent } from "react";

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

type LocationType = {
  ip: string;
  country: string;
  countryCode: string;
};

export default function LandingPageFreePDF() {
  const TIER1: string[] = ["US", "UK", "CA", "AU", "DE", "NL"];

  const getUserLocation = async (): Promise<LocationType> => {
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

  const getTier = (countryCode: string): string => {
    if (TIER1.includes(countryCode)) return "Tier1";
    return "Tier3";
  };

  const [form, setForm] = useState<FormType>({
    name: "",
    phone: "",
    email: "",
    message: "Get PDF Interview C#",
    ip: "",
    country: "",
    countryCode: "",
    tier: "",
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<string>("");
  const [errors, setErrors] = useState<string>("");

  const validate = (): string => {
    if (!form.email) return "Please enter your email.";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) return "Invalid email format.";

    return "";
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const err = validate();
    if (err) {
      setErrors(err);
      return;
    }

    setLoading(true);
    setErrors("");
    setSuccess("");

    const location = await getUserLocation();

    const payload: FormType = {
      ...form,
      ip: location.ip,
      country: location.country,
      countryCode: location.countryCode,
      tier: getTier(location.countryCode),
    };

    debugger;

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbx5QE6Rl1jLoChaRdDxRuZCg0BxJKKr7E3lLSxpUOznog9GM3YofZIYIgP4-BtxIak6/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        },
      );

      setSuccess("Successfully! Check your email for the PDF!");
      window.location.href = "/thankyou";

      setForm({
        name: "",
        phone: "",
        email: "",
        message: "Get PDF Interview C#",
        ip: "",
        country: "",
        countryCode: "",
        tier: "",
      });
    } catch (error) {
      setErrors("Something went wrong. Try again.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* HERO */}
      <section className="max-w-5xl mx-auto px-6 pt-20 text-center">
        <h1 className="text-5xl font-bold text-gray-900 leading-tight">
          150 Real .NET Interview Questions
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          A practical guide covering ASP.NET Core, EF Core, and C# concepts that
          real companies ask in backend interviews.
        </p>

        <p className="mt-4 text-sm text-gray-500">
          Used by 2,000+ developers preparing for interviews
        </p>
      </section>

      {/* EMAIL FORM */}
      <section className="max-w-xl mx-auto mt-12 bg-white shadow-xl rounded-2xl p-8">
        <h2 className="text-xl font-semibold text-center">Get the Free PDF</h2>

        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={form.email}
            onChange={handleChange}
            required
          />

          {errors && (
            <p className="text-red-500 text-sm" style={{ color: "red" }}>
              {errors}
            </p>
          )}

          {success && <p className="mt-3 text-success">{success}</p>}

          <button className="bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            {loading ? "Sending..." : " Send me the PDF  "}
          </button>
        </form>

        <p className="text-xs text-gray-400 mt-4 text-center">
          No spam. Only useful developer resources.
        </p>
      </section>

      {/* BENEFITS */}
      <section className="max-w-5xl mx-auto mt-20 grid md:grid-cols-3 gap-6 px-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-bold text-lg">Real Interview Questions</h3>

          <p className="text-gray-600 mt-2 text-sm">
            Based on real backend engineering interviews.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-bold text-lg">Architecture Concepts</h3>

          <p className="text-gray-600 mt-2 text-sm">
            Middleware pipeline, dependency injection, configuration, and
            scaling.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-bold text-lg">Interview Confidence</h3>

          <p className="text-gray-600 mt-2 text-sm">
            Master .NET fundamentals and pass interviews.
          </p>
        </div>
      </section>

      {/* SAMPLE QUESTIONS */}
      <section className="max-w-3xl mx-auto mt-24 px-6">
        <h2 className="text-2xl font-bold text-center">Sample Questions</h2>

        <ul className="mt-6 space-y-3 text-gray-700">
          <li>• How does middleware ordering impact request processing?</li>
          <li>• When should you use IOptionsMonitor vs IOptionsSnapshot?</li>
          <li>• What problems occur when injecting Scoped into Singleton?</li>
          <li>• How does ASP.NET Core configuration override work?</li>
          <li>• DataAnnotations vs FluentValidation trade-offs?</li>
        </ul>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">What developers say</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 border rounded-xl">
              <p className="mb-4">⭐⭐⭐⭐⭐</p>
              <p className="text-gray-600">
                This PDF helped me pass my ASP.NET interview at a fintech
                company.
              </p>
              <p className="mt-4 text-sm text-gray-500">— Backend Developer</p>
            </div>

            <div className="p-6 border rounded-xl">
              <p className="mb-4">⭐⭐⭐⭐⭐</p>
              <p className="text-gray-600">
                Clear explanations and real questions. Much better than random
                interview lists.
              </p>
              <p className="mt-4 text-sm text-gray-500">— .NET Engineer</p>
            </div>
          </div>
        </div>
      </section>

      {/* PREMIUM VERSION */}
      <section className="max-w-4xl mx-auto mt-24 px-6">
        <div className="bg-white rounded-2xl shadow-xl p-10 text-center">
          <h2 className="text-2xl font-bold">Want the Full Interview Guide?</h2>

          <p className="text-gray-600 mt-4">
            Get the premium version with detailed answers, architecture
            explanations, and interview strategies.
          </p>

          <button className="mt-6 bg-green-600 text-white px-10 py-4 rounded-xl font-semibold hover:bg-green-700 transition">
            Get Full 150 questions and deep answers.
          </button>

          <p className="text-xs text-gray-400 mt-3">Instant download</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-24 text-center text-gray-500 text-sm pb-10">
        Built for developers preparing for .NET interviews by{" "}
        <a href="/">cuongnguyen author</a>
      </footer>

      <LiveRegisterPDFFree />
    </div>
  );
}

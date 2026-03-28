// app/page.tsx
import { supabase } from "@/lib/supabase";
import JobCard from "@/components/JobCard";
import { mockJobs } from "@/data/jobs";
import LiveViewers from "./components/LiveViewers";
import FakeNotification from "./components/fakenotifications";

const jobs = mockJobs;
export default async function Home() {
  //const { data: jobs } = await supabase.from("jobs").select("*").limit(8);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      {/* NAVBAR */}
      <nav className=" top-0 bg-white/80 backdrop-blur ">
        <div className="flex justify-between items-center px-6 py-4 max-w-6xl mx-auto">
          {/* Logo */}
          <h1 className="font-bold text-lg tracking-tight">InterviewSystem</h1>

          {/* Menu */}
          <div className="hidden md:flex items-center gap-6 text-sm text-gray-600">
            <a href="#jobs" className="hover:text-black transition">
              Jobs
            </a>
            <a href="/login" className="hover:text-black transition">
              Practice
            </a>
            <a href="/paywall" className="hover:text-black transition">
              Pricing
            </a>
          </div>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <a
              href="/login"
              className="text-sm text-gray-600 hover:text-black transition hidden md:block"
            >
              Login
            </a>

            <a
              href="/login"
              className="bg-blue-600 text-white px-6 py-3 rounded-xl text-sm font-semibold shadow-lg hover:scale-105 transition"
            >
              👉 Start Free (Questions)
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="flex flex-col justify-center items-center text-center px-6 py-20 px-6 mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl">
          Pass Your Next .NET Interview
          <br />
          <span className="text-blue-600">
            By Answering Like a Senior (Even If You’re Not One Yet)
          </span>
        </h1>
        <p className="mt-6 text-lg text-gray-600 max-w-2xl">
          Learn how to explain systems, think in trade-offs, and answer like a
          senior developer — even if you’re not one yet.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="/login"
            className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:scale-105 transition"
          >
            👉 Start Free (Questions)
          </a>

          <a
            href="/paywall"
            target="_blank"
            className="bg-black text-white px-6 py-3 rounded-xl shadow hover:scale-105 transition"
          >
            👉 Unlock Full System ($19)
          </a>
        </div>

        <p className="text-sm text-gray-500">
          🔥 1,278 developers are preparing interviews right now
        </p>
        {/* Social Proof + Urgency */}
        <div className="mt-6 space-y-3">
          {/* Testimonial */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm">
            <p className="italic text-gray-700">
              “This guide helped me finally explain .NET concepts clearly in
              interviews. Totally worth it.”
            </p>
            <p className="mt-2 font-semibold text-gray-900">
              — Michael T., Senior .NET Developer (USA 🇺🇸)
            </p>
          </div>

          {/* Trust signal */}
          <div className="text-sm text-green-600 font-medium">
            ✅ Trusted by 1000+ .NET developers worldwide
          </div>
          <div className="text-sm text-green-600 font-medium">
            ✅ One guy told me: I failed 3 interviews before reading this
          </div>
          {/* Urgency */}
          <div className="text-sm text-red-500 font-semibold">
            ⏳ Price will increase to $29 soon
          </div>
        </div>
      </section>
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          After This Guide, You Will:
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            "Senior Answer Framework (step-by-step)",
            "Real .NET interview questions with deep answers",
            "How to explain trade-offs (what interviewers actually want)",
            "Common mistakes that make you sound junior",
          ].map((item, i) => (
            <div key={i} className="p-6 border rounded-xl">
              ✔ {item}
            </div>
          ))}
        </div>
      </section>
      <section className="w-full py-20 bg-gradient-to-b from-black to-gray-900 text-white">
        <div className="max-w-6xl px-6 mx-auto">
          {/* Title */}
          <h2 className="mb-12 text-3xl font-bold text-center md:text-4xl">
            You have 2 choices:
          </h2>

          {/* 2 columns */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* LEFT - Pain */}
            <div className="p-8 border border-red-500/30 bg-red-500/10 rounded-2xl backdrop-blur">
              <h3 className="mb-6 text-xl font-semibold text-red-400">
                Stay stuck
              </h3>

              <ul className="space-y-4 text-gray-300">
                <li>❌ Memorizing answers like a junior</li>
                <li>❌ Failing interviews again and again</li>
                <li>❌ Watching less experienced devs get hired</li>
              </ul>
            </div>

            {/* RIGHT - Gain */}
            <div className="p-8 border border-green-500/30 bg-green-500/10 rounded-2xl backdrop-blur">
              <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-black bg-green-400 rounded-full">
                MOST CHOSEN
              </span>
              <h3 className="mb-6 text-xl font-semibold text-green-400">
                Level up
              </h3>

              <ul className="space-y-4 text-gray-200">
                <li>✅ Answer like a senior developer</li>
                <li>✅ Explain trade-offs with confidence</li>
                <li>✅ Walk into interviews knowing you’ll pass</li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            {/* <button
              onClick={handleBuyClick}
              className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:scale-105 transition"
            >
              🚀 Get the Guide – $19
            </button> */}
            <a
              href="/login"
              className="inline-block px-8 py-4 text-lg font-semibold text-black transition bg-white rounded-xl  hover:scale-105 hover:bg-gray-200"
            >
              👉 Start Free (Questions)
            </a>
          </div>
        </div>
      </section>
      <div className="bg-white p-6 rounded-xl shadow mt-10 max-w-2xl mx-auto">
        <p className="text-sm text-gray-500 mb-2">Real interview question</p>

        <h3 className="font-semibold mb-3">
          Why is injecting Scoped into Singleton dangerous?
        </h3>

        <div className="text-red-500 text-sm mb-2">❌ Weak answer:</div>
        <p className="text-sm text-gray-600 mb-3">
          "Because of lifetime issues"
        </p>

        <div className="text-green-600 text-sm mb-2">✅ Strong answer:</div>
        <p className="text-sm text-gray-600">
          Explains how DI container works, memory lifecycle, and why it can
          cause memory leaks...
        </p>
      </div>
      {/* FEATURE STRIP */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 max-w-5xl mx-auto pb-16">
        <div className="p-6 bg-white rounded-xl shadow-sm">
          <h3 className="font-semibold">Real Jobs</h3>
          <p className="text-sm text-gray-500 mt-2">
            Curated .NET jobs from real companies
          </p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow-sm">
          <h3 className="font-semibold">Interview Questions</h3>
          <p className="text-sm text-gray-500 mt-2">
            Practice real questions asked in interviews
          </p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow-sm">
          <h3 className="font-semibold">Get Hired Faster</h3>
          <p className="text-sm text-gray-500 mt-2">
            Increase your chances with targeted prep
          </p>
        </div>
      </section>

      {/* JOB LIST */}
      <section id="jobs" className="px-6 pb-20 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">🔥 Latest Jobs</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {jobs?.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </section>

      {/* CTA SELL */}
      <section className="px-6 pb-24 max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-10 rounded-2xl text-center shadow-lg">
          <h3 className="text-2xl font-bold">Don’t fail your next interview</h3>

          <p className="mt-4 text-blue-100">
            Get 150+ real .NET interview questions and answers
          </p>

          <a
            href="https://noteflowai.lemonsqueezy.com/checkout/buy/f9ba06c7-64db-42bf-92f1-970bc6193609"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold shadow hover:scale-105 transition"
          >
            Get Instant Access - $19
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-sm text-gray-400 pb-6">
        © 2026 JobReady. Built for developers.
      </footer>
      <LiveViewers></LiveViewers>
      <FakeNotification></FakeNotification>
    </div>
  );
}

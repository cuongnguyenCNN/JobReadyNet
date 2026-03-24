// app/page.tsx
import { supabase } from "@/lib/supabase";
import JobCard from "@/components/JobCard";
import { mockJobs } from "@/data/jobs";

const jobs = mockJobs;
export default async function Home() {
  //const { data: jobs } = await supabase.from("jobs").select("*").limit(8);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-6 py-4 max-w-6xl mx-auto">
        <h1 className="font-bold text-lg">JobReady</h1>
        <div className="flex gap-6 text-sm text-gray-600">
          <a href="#jobs">Jobs</a>
          <a href="#">Practice</a>
          <a href="#">Pricing</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="text-center py-20 px-6 max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold leading-tight tracking-tight">
          Get Hired Faster as a
          <br />
          <span className="text-blue-600">.NET Developer 🚀</span>
        </h1>

        <p className="mt-6 text-gray-600 text-lg">
          Real jobs + real interview questions.
          <br />
          Everything you need to pass interviews.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#jobs"
            className="bg-black text-white px-6 py-3 rounded-xl shadow hover:scale-105 transition"
          >
            Browse Jobs
          </a>

          <a
            href="#"
            className="border px-6 py-3 rounded-xl hover:bg-gray-100 transition"
          >
            View Questions
          </a>
        </div>

        <p className="mt-6 text-sm text-gray-400">
          Trusted by 1000+ developers
        </p>
      </section>

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
            href="YOUR_LEMONSQUEEZY_LINK"
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
    </div>
  );
}

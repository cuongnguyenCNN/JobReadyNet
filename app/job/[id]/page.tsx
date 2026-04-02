// app/job/[id]/page.tsx
import { supabase } from "@/lib/supabase";
import QuestionPreview from "@/components/QuestionPreview";
import { mockJobs } from "@/data/jobs";
import { redirect } from "next/navigation";
type Props = {
  params: { id: string };
};
const jobs = mockJobs;
export default async function JobDetail({ params }: any) {
  const { id } = await params;
  console.log("id:", id);
  //   const { data: job } = await supabase
  //     .from("jobs")
  //     .select("*")
  //     .eq("id", id)
  //     .single();

  //   const { data: questions } = await supabase
  //     .from("questions")
  //     .select("*")
  //     .eq("job_id", id);d
  debugger;

  const job = jobs.find((j) => j.id === id);
  return (
    <div className="max-w-3xl mx-auto p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold">{job?.title}</h1>
        <p className="text-gray-500 mt-2">
          {job?.company} • {job?.location}
        </p>
      </div>

      {/* Highlight box */}
      <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
        <p className="text-orange-600 font-medium">
          🔥 5 real interview questions inside
        </p>
        <p className="text-sm text-gray-600 mt-1">
          See exactly what this company asks candidates before you apply.
        </p>
      </div>

      {/* Description */}
      <div className="mb-8">
        <h2 className="font-semibold text-lg mb-2">Job Description</h2>
        <p className="text-sm text-gray-600 whitespace-pre-line leading-relaxed">
          {job?.description}
        </p>
      </div>

      {/* CTA section */}
      <div className="bg-black text-white rounded-lg p-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <p className="font-semibold text-lg">Ready to apply?</p>
          <p className="text-sm text-gray-300">
            Practice real questions before submitting your CV.
          </p>
        </div>

        <a
          href={`/apply?jobId=${id}`}
          className="bg-white text-black px-6 py-3 rounded font-medium hover:opacity-90"
        >
          🚀 Apply Now
        </a>
      </div>
      <a
        href={`/`}
        className="bg-white text-black px-6 py-3 rounded font-medium hover:opacity-90"
      >
        ✨ Maybe later
      </a>
    </div>
  );
}

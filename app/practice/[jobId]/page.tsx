import { mockJobs } from "@/data/jobs";
import { mockQuestions } from "@/data/question";

export default async function PracticePage({ params }: any) {
  const { jobId } = await params;
  const jobs = mockJobs;
  const questions = mockQuestions;
  const job = jobs.find((j) => j.id === jobId);
  const jobQuestions = questions.filter((q) => q.job_id === jobId);

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Practice for {job?.title}</h1>

      {jobQuestions.slice(0, 2).map((q, i) => (
        <div key={i} className="border p-4 rounded mb-4">
          <p className="font-medium">{q.question}</p>
        </div>
      ))}

      {/* LOCKED */}
      <div className="bg-gray-100 p-4 rounded text-center mt-6">
        <p className="text-gray-600">
          🔒 Unlock all {jobQuestions.length} questions
        </p>

        <a
          href={`/apply?jobId=${jobId}`}
          className="inline-block mt-3 bg-black text-white px-4 py-2 rounded"
        >
          Unlock Now
        </a>
      </div>
    </div>
  );
}

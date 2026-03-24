// components/JobCard.tsx
"use client";

import { useRouter } from "next/navigation";
import { Job } from "@/types/job";
type Props = {
  params: { id: string };
};
export default function JobCard({ job }: { job: Job }) {
  const router = useRouter();

  return (
    <div className="border p-4 rounded-lg hover:shadow h-full flex flex-col justify-between">
      <h2 className="font-bold text-lg">{job.title}</h2>

      <p className="text-gray-500">
        {job.company} • {job.location}
      </p>

      <p className="text-orange-500 text-sm mt-1">
        🔥 5 interview questions inside
      </p>

      <button
        onClick={() => router.push(`/job/${job.id}`)}
        className="mt-3 bg-black text-white px-4 py-2 rounded"
      >
        View Job
      </button>
    </div>
  );
}

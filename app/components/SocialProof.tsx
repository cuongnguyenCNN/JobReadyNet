const testimonials = [
  {
    name: "Michael T.",
    role: "Senior .NET Developer",
    context: "Failed 3 interviews → landed a US remote job",
    quote:
      "I knew the concepts, but couldn’t explain them. This changed everything.",
    avatar: "/avatar1.jpg",
  },
  {
    name: "David L.",
    role: ".NET Developer",
    context: "Got offer after 2 weeks of practice",
    quote:
      "The before/after answers are insanely helpful. Interviewers noticed immediately.",
    avatar: "/avatar2.jpg",
  },
];

export default function SocialProof() {
  return (
    <div className="space-y-4">
      {testimonials.map((t, i) => (
        <div
          key={i}
          className="bg-gray-50 border border-gray-200 rounded-xl p-5 text-sm max-w-xl"
        >
          <div className="flex items-start gap-3">
            <img
              src={t.avatar}
              alt={t.name}
              className="w-10 h-10 rounded-full object-cover"
            />

            <div>
              <p className="text-gray-500 text-xs mb-1">{t.context}</p>

              <p className="italic text-gray-700 leading-relaxed">
                “{t.quote}”
              </p>

              <p className="mt-2 font-semibold text-gray-900">
                {t.name} · {t.role}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

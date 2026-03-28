export default function Page() {
  const questions = [
    {
      title: "What is Dependency Injection?",
      bad: "It reduces coupling.",
      good: `Dependency Injection separates object creation from business logic.
Dependencies are injected (usually via constructor), making the system more testable and maintainable.`,
    },
    {
      title: "What is async/await in C#?",
      bad: "It makes code asynchronous.",
      good: `async/await enables non-blocking I/O operations.
It frees the thread while waiting, improving scalability.`,
    },
    {
      title: "Task vs Thread?",
      bad: "Task is lighter.",
      good: `Thread is OS-level. Task is managed by .NET and uses ThreadPool.
Tasks are more efficient for concurrency.`,
    },
    {
      title: "What is Middleware?",
      bad: "Handles requests.",
      good: `Middleware processes HTTP requests in a pipeline.
Each component can handle or pass to next.`,
    },
    {
      title: "What is CQRS?",
      bad: "Separate read/write.",
      good: `CQRS separates commands and queries into different models,
improving scalability and clarity.`,
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-6">
        .NET Interview Questions (Senior Answers)
      </h1>

      <p className="text-lg text-gray-600 mb-10">
        Most developers fail .NET interviews not because they lack knowledge…
        but because they can’t explain clearly.
      </p>

      <div className="space-y-10">
        {questions.map((q, i) => (
          <div key={i} className="border-b pb-8">
            <h2 className="text-2xl font-semibold mb-4">
              {i + 1}. {q.title}
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-50 p-4 rounded">
                <p className="font-semibold text-red-600 mb-2">❌ Bad answer</p>
                <p>{q.bad}</p>
              </div>

              <div className="bg-green-50 p-4 rounded">
                <p className="font-semibold text-green-600 mb-2">
                  ✅ Senior answer
                </p>
                <p>{q.good}</p>
              </div>
            </div>

            <div className="mt-4">
              <a
                href="/login"
                className="text-blue-600 font-semibold hover:underline"
              >
                Practice this question →
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Stop memorizing. Start thinking like a senior.
        </h2>
        <a
          href="/login"
          className="bg-black text-white px-6 py-3 rounded hover:opacity-90"
        >
          Practice Real Interviews
        </a>
      </div>
    </div>
  );
}

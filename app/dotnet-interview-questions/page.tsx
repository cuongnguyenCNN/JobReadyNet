export default function Page() {
  const questions = [
    {
      title: "What is Dependency Injection?",
      bad: "It reduces coupling.",
      good: `Dependency Injection separates object creation from business logic.
Dependencies are injected (usually via constructor), making the system more testable and maintainable.`,
      slug: "dependency-injection-csharp",
    },
    {
      title: "What is async/await in C#?",
      bad: "It makes code asynchronous.",
      good: `async/await enables non-blocking I/O operations.
It frees the thread while waiting, improving scalability.`,
      slug: "async-await-csharp",
    },
    {
      title: "Task vs Thread?",
      bad: "Task is lighter.",
      good: `Thread is OS-level. Task is managed by .NET and uses ThreadPool.
Tasks are more efficient for concurrency.`,
      slug: "task-vs-thread-csharp",
    },

    {
      title: "What is Middleware?",
      bad: "Handles requests.",
      good: `Middleware processes HTTP requests in a pipeline.
Each component can handle or pass to next.`,
      slug: "middleware-aspnet",
    },

    {
      title: "What is CQRS?",
      bad: "Separate read/write.",
      good: `CQRS separates commands and queries into different models,
improving scalability and clarity.`,
      slug: "cqrs-pattern-csharp",
    },
    {
      title: "What is Garbage Collection in .NET?",
      bad: "It frees memory.",
      good: `Garbage Collection (GC) automatically reclaims memory from objects 
that are no longer referenced. It uses a generational model (Gen 0, 1, 2) 
to optimize performance and reduce overhead.`,
      slug: "garbage-collection-csharp", // ✅ đúng
    },
  ];

  return (
    <>
      <nav className=" top-0 bg-white/80 backdrop-blur ">
        <div className="flex justify-between items-center px-6 py-4 max-w-6xl mx-auto">
          {/* Logo */}
          <h1 className="font-bold text-lg tracking-tight">PassDotnet</h1>

          {/* Menu */}
          <div className="hidden md:flex items-center gap-6 text-sm text-gray-600">
            <a href="/login" className="hover:text-black transition">
              Practice
            </a>
            <a
              href="/dotnet-interview-questions"
              className="hover:text-black transition"
            >
              Blog
            </a>
            {/* <a href="/paywall" className="hover:text-black transition">
              Pricing
            </a> */}
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
                  <p className="font-semibold text-red-600 mb-2">
                    ❌ Bad answer
                  </p>
                  <p>{q.bad}</p>
                </div>

                <div className="bg-green-50 p-4 rounded">
                  <p className="font-semibold text-green-600 mb-2">
                    ✅ Senior answer
                  </p>
                  <p>{q.good}</p>
                </div>
              </div>

              <div className="mt-4 flex flex-col gap-2">
                <a
                  href="/login"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Practice this question →
                </a>

                {q.slug && (
                  <a
                    href={`/blog/${q.slug}`}
                    className="text-sm text-gray-500 hover:underline"
                  >
                    Read full explanation →
                  </a>
                )}
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
    </>
  );
}

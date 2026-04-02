export default function Page() {
  //   const questions = [
  //     {
  //       title: "What is Dependency Injection?",
  //       bad: "It reduces coupling.",
  //       good: `Dependency Injection separates object creation from business logic.
  // Dependencies are injected (usually via constructor), making the system more testable and maintainable.`,
  //       slug: "dependency-injection-csharp",
  //     },
  //     {
  //       title: "What is async/await in C#?",
  //       bad: "It makes code asynchronous.",
  //       good: `async/await enables non-blocking I/O operations.
  // It frees the thread while waiting, improving scalability.`,
  //       slug: "async-await-csharp",
  //     },
  //     {
  //       title: "Task vs Thread?",
  //       bad: "Task is lighter.",
  //       good: `Thread is OS-level. Task is managed by .NET and uses ThreadPool.
  // Tasks are more efficient for concurrency.`,
  //       slug: "task-vs-thread-csharp",
  //     },

  //     {
  //       title: "What is Middleware?",
  //       bad: "Handles requests.",
  //       good: `Middleware processes HTTP requests in a pipeline.
  // Each component can handle or pass to next.`,
  //       slug: "middleware-aspnet",
  //     },

  //     {
  //       title: "What is CQRS?",
  //       bad: "Separate read/write.",
  //       good: `CQRS separates commands and queries into different models,
  // improving scalability and clarity.`,
  //       slug: "cqrs-pattern-csharp",
  //     },
  //     {
  //       title: "What is Garbage Collection in .NET?",
  //       bad: "It frees memory.",
  //       good: `Garbage Collection (GC) automatically reclaims memory from objects
  // that are no longer referenced. It uses a generational model (Gen 0, 1, 2)
  // to optimize performance and reduce overhead.`,
  //       slug: "garbage-collection-csharp", // ✅ đúng
  //     },
  //     {
  //       title: "What is LINQ in C#?",
  //       bad: "It is used to query data.",
  //       good: `LINQ (Language Integrated Query) provides a declarative way to query data
  // from collections, databases, and other sources using a unified syntax.
  // It can execute in memory (IEnumerable) or be translated into SQL (IQueryable),
  // depending on the data source.`,
  //       slug: "linq-csharp",
  //     },
  //     {
  //       title: "What is a Deadlock?",
  //       bad: "When threads block each other.",
  //       good: `A deadlock occurs when two or more threads are waiting on each other
  // to release resources, causing all of them to be stuck indefinitely.
  // It often happens due to improper locking or blocking async code (e.g., using .Result or .Wait()).`,
  //       slug: "deadlock-csharp",
  //     },
  //     {
  //       title: "What is Span<T> in C#?",
  //       bad: "It is a faster array.",
  //       good: `Span<T> is a lightweight structure that provides a safe way to work with contiguous memory
  // without allocations.

  // It can point to stack memory, arrays, or unmanaged memory.

  // Span helps reduce allocations and improve performance in high-throughput scenarios,
  // but it must stay on the stack and cannot be stored on the heap.`,
  //       slug: "span-csharp",
  //     },
  //     {
  //       title: "What is boxing and unboxing in C#?",
  //       bad: "It converts value types to reference types.",
  //       good: `Boxing is the process of converting a value type into an object (reference type),
  // which causes heap allocation.

  // Unboxing extracts the value type back from the object.

  // Excessive boxing/unboxing can hurt performance due to allocations and casting,
  // especially in loops or high-frequency operations.`,
  //       slug: "boxing-unboxing-csharp",
  //     },
  //   ];
  const questions = [
    {
      title: "What is Dependency Injection?",
      bad: "It reduces coupling.",
      good: `Dependency Injection separates object creation from business logic.
Dependencies are injected (usually via constructor), making the system more testable and maintainable.`,
      slug: "dependency-injection-csharp",
      element: "di",
    },
    {
      title: "What is async/await in C#?",
      bad: "It makes code asynchronous.",
      good: `async/await enables non-blocking I/O operations.
It frees the thread while waiting, improving scalability.`,
      slug: "async-await-csharp",
      element: "async",
    },
    {
      title: "Task vs Thread?",
      bad: "Task is lighter.",
      good: `Thread is OS-level. Task is managed by .NET and uses ThreadPool.
Tasks are more efficient for concurrency.`,
      slug: "task-vs-thread-csharp",
      element: "task",
    },
    {
      title: "What is Middleware?",
      bad: "Handles requests.",
      good: `Middleware processes HTTP requests in a pipeline.
Each component can handle or pass to next.`,
      slug: "middleware-aspnet",
      element: "middleware",
    },
    {
      title: "What is CQRS?",
      bad: "Separate read/write.",
      good: `CQRS separates commands and queries into different models,
improving scalability and clarity.`,
      slug: "cqrs-pattern-csharp",
      element: "cqrs",
    },
    {
      title: "What is Garbage Collection in .NET?",
      bad: "It frees memory.",
      good: `Garbage Collection (GC) automatically reclaims memory from objects 
that are no longer referenced. It uses a generational model (Gen 0, 1, 2) 
to optimize performance and reduce overhead.`,
      slug: "garbage-collection-csharp",
      element: "gc",
    },
    {
      title: "What is LINQ in C#?",
      bad: "It is used to query data.",
      good: `LINQ (Language Integrated Query) provides a declarative way to query data 
from collections, databases, and other sources using a unified syntax. 
It can execute in memory (IEnumerable) or be translated into SQL (IQueryable), 
depending on the data source.`,
      slug: "linq-csharp",
      element: "linq",
    },
    {
      title: "What is a Deadlock?",
      bad: "When threads block each other.",
      good: `A deadlock occurs when two or more threads are waiting on each other 
to release resources, causing all of them to be stuck indefinitely. 
It often happens due to improper locking or blocking async code (e.g., using .Result or .Wait()).`,
      slug: "deadlock-csharp",
      element: "deadlock",
    },
    {
      title: "What is Span<T> in C#?",
      bad: "It is a faster array.",
      good: `Span<T> is a lightweight structure that provides a safe way to work with contiguous memory 
without allocations.

It can point to stack memory, arrays, or unmanaged memory.

Span helps reduce allocations and improve performance in high-throughput scenarios,
but it must stay on the stack and cannot be stored on the heap.`,
      slug: "span-csharp",
      element: "span",
    },
    {
      title: "What is boxing and unboxing in C#?",
      bad: "It converts value types to reference types.",
      good: `Boxing is the process of converting a value type into an object (reference type), 
which causes heap allocation.

Unboxing extracts the value type back from the object.

Excessive boxing/unboxing can hurt performance due to allocations and casting,
especially in loops or high-frequency operations.`,
      slug: "boxing-unboxing-csharp",
      element: "boxing",
    },
  ];
  return (
    // <>
    //   <nav className=" top-0 bg-white/80 backdrop-blur ">
    //     <div className="flex justify-between items-center px-6 py-4 max-w-6xl mx-auto">
    //       {/* Logo */}
    //       <h1 className="font-bold text-lg tracking-tight">PassDotnet</h1>

    //       {/* Menu */}
    //       <div className="hidden md:flex items-center gap-6 text-sm text-gray-600">
    //         <a href="/login" className="hover:text-black transition">
    //           Practice
    //         </a>
    //         <a
    //           href="/dotnet-interview-questions"
    //           className="hover:text-black transition"
    //         >
    //           Blog
    //         </a>
    //         {/* <a href="/paywall" className="hover:text-black transition">
    //           Pricing
    //         </a> */}
    //       </div>

    //       {/* CTA */}
    //       <div className="flex items-center gap-3">
    //         <a
    //           href="/login"
    //           className="text-sm text-gray-600 hover:text-black transition hidden md:block"
    //         >
    //           Login
    //         </a>

    //         <a
    //           href="/login"
    //           className="bg-blue-600 text-white px-6 py-3 rounded-xl text-sm font-semibold shadow-lg hover:scale-105 transition"
    //         >
    //           👉 Start Free (Questions)
    //         </a>
    //       </div>
    //     </div>
    //   </nav>
    //   <div className="max-w-5xl mx-auto px-6 py-12">
    //     <h1 className="text-4xl font-bold mb-6">
    //       Pass .NET Interviews Faster (Real Answers That Get You Hired)
    //     </h1>

    //     {/* <p className="text-lg text-gray-600 mb-10">
    //       Most developers fail .NET interviews not because they lack knowledge…
    //       but because they can’t explain clearly.
    //     </p> */}
    //     <p className="text-lg text-gray-600 mb-10">
    //       I failed 20+ interviews before I figured this out. Most developers
    //       don’t fail because they lack knowledge… They fail because they answer
    //       like a textbook.
    //     </p>
    //     <div className="space-y-10">
    //       {questions.map((q, i) => (
    //         <div key={i} className="border-b pb-8">
    //           <h2 className="text-2xl font-semibold mb-4">
    //             {i + 1}. {q.title}
    //           </h2>

    //           <div className="grid md:grid-cols-2 gap-6">
    //             <div className="bg-red-50 p-4 rounded">
    //               <p className="font-semibold text-red-600 mb-2">
    //                 ❌ Bad answer
    //               </p>
    //               <p>{q.bad}</p>
    //             </div>

    //             <div className="bg-green-50 p-4 rounded">
    //               <p className="font-semibold text-green-600 mb-2">
    //                 ✅ Senior answer
    //               </p>
    //               <p>{q.good}</p>
    //             </div>
    //           </div>

    //           <div className="mt-4 flex flex-col gap-2">
    //             <a
    //               href="/login"
    //               className="text-blue-600 font-semibold hover:underline"
    //             >
    //               Practice this question →
    //             </a>

    //             {q.slug && (
    //               <a
    //                 href={`/blog/${q.slug}`}
    //                 className="text-sm text-gray-500 hover:underline"
    //               >
    //                 Read full explanation →
    //               </a>
    //             )}
    //           </div>
    //         </div>
    //       ))}
    //     </div>

    //     <div className="mt-16 text-center">
    //       <h2 className="text-2xl font-bold mb-4">
    //         Stop memorizing. Start thinking like a senior.
    //       </h2>
    //       <a
    //         href="/login"
    //         className="bg-black text-white px-6 py-3 rounded hover:opacity-90"
    //       >
    //         Practice Real Interviews
    //       </a>
    //     </div>
    //   </div>
    // </>
    <>
      {/* NAV */}
      <nav className="top-0 bg-white/80 backdrop-blur ">
        <div className="flex justify-between items-center px-6 py-4 max-w-6xl mx-auto">
          <h1 className="font-bold text-lg tracking-tight">PassDotnet</h1>

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
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/login"
              className="text-sm text-gray-600 hover:text-black transition hidden md:block"
            >
              Login
            </a>

            <a
              href="/login"
              className="bg-blue-600 text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow hover:scale-105 transition"
            >
              👉 Start Free
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <div className="max-w-5xl mx-auto px-6 py-14">
        <h1 className="text-4xl font-bold mb-4 leading-tight">
          Pass .NET Interviews Faster
          <br />
          <span className="text-blue-600">
            (Real Answers That Actually Get You Hired)
          </span>
        </h1>

        <p className="text-lg text-gray-600 mb-6 max-w-2xl">
          I failed 20+ interviews before I figured this out.
          <br />
          Most developers don’t fail because they lack knowledge…
          <br />
          <strong>They fail because they answer like a textbook.</strong>
        </p>

        <div className="flex gap-4">
          <a
            href="/login"
            className="bg-black text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90"
          >
            Get Real Answers →
          </a>

          <a
            href="/dotnet-interview-questions"
            className="text-gray-600 px-6 py-3 rounded-xl border hover:bg-gray-50"
          >
            View Free Questions
          </a>
        </div>
      </div>

      {/* QUESTIONS */}
      <div className="max-w-5xl mx-auto px-6 pb-10 space-y-12">
        {questions.map((q, i) => (
          <div key={i} className="border-b pb-10">
            <h2 className="text-2xl font-semibold mb-4">
              {i + 1}. {q.title}
            </h2>

            {/* SOCIAL PROOF */}
            <p className="text-sm text-gray-500 mb-4">
              💡 Common in real backend interviews
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* BAD */}
              <div className="bg-red-50 p-4 rounded">
                <p className="font-semibold text-red-600 mb-2">❌ Bad answer</p>
                <p>{q.bad}</p>
              </div>

              {/* GOOD (TEASE VERSION) */}
              <div className="bg-green-50 p-4 rounded relative">
                <p className="font-semibold text-green-600 mb-2">
                  ✅ Senior answer
                </p>

                {/* Dòng đầu (visible) */}
                <p className="mb-2">{q.good.split(".")[0]}.</p>

                {/* Phần còn lại (blur) */}
                <p className="blur-sm select-none">
                  {q.good.split(".").slice(1).join(".")}
                </p>

                {/* Overlay */}
                <div className="absolute inset-0 flex items-end justify-center pb-4 bg-gradient-to-t from-white/90 to-transparent rounded">
                  <a
                    href={`/real-answers/${q.element}`}
                    className="bg-black text-white px-4 py-2 rounded-lg text-sm font-semibold"
                  >
                    Unlock full answer →
                  </a>
                </div>
              </div>
            </div>

            {/* CTA */}
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

      {/* FINAL CTA */}
      <div className="max-w-3xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Stop memorizing answers.
          <br />
          Start thinking like a senior engineer.
        </h2>

        <p className="text-gray-600 mb-6">
          If you're tired of failing interviews even when you "know the answer"…
        </p>

        <a
          href="/login"
          className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow hover:scale-105 transition"
        >
          👉 Start Practicing Now
        </a>
      </div>
    </>
  );
}

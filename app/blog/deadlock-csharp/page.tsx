export const metadata = {
  title: "Deadlock in C# Explained (Interview Guide + Fixes)",
  description:
    "Learn what deadlock is in C#, why it happens, and how to avoid it. Includes real examples and interview-ready answers.",
};

export default function Page() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-6">
        Deadlock in C# (Interview Guide)
      </h1>

      <p className="text-gray-600 mb-8">
        Most developers say:
        <br />
        <b>“Deadlock is when threads block each other.”</b>
        <br />
        That’s correct — but not enough to pass a real interview.
      </p>

      {/* Question */}
      <h2 className="text-2xl font-semibold mb-4">What is a Deadlock?</h2>

      {/* Bad vs Good */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div className="bg-red-50 p-4 rounded">
          <p className="text-red-600 font-semibold mb-2">❌ Bad answer</p>
          <p>When threads block each other.</p>
        </div>

        <div className="bg-green-50 p-4 rounded">
          <p className="text-green-600 font-semibold mb-2">✅ Senior answer</p>
          <p>
            A deadlock occurs when two or more threads are waiting for each
            other to release resources, causing all of them to be blocked
            indefinitely. It typically happens due to improper locking or
            blocking async code.
          </p>
        </div>
      </div>

      {/* Conditions */}
      <h2 className="text-2xl font-semibold mb-4">
        4 Conditions for Deadlock (important)
      </h2>

      <ul className="list-disc pl-6 mb-10 space-y-2">
        <li>Mutual exclusion</li>
        <li>Hold and wait</li>
        <li>No preemption</li>
        <li>Circular wait</li>
      </ul>

      <p className="mb-10 text-gray-700">
        👉 All 4 must happen for a deadlock to occur.
      </p>

      {/* Example */}
      <h2 className="text-2xl font-semibold mb-4">
        Example (classic deadlock)
      </h2>

      <pre className="bg-gray-900 text-white p-4 rounded mb-10 overflow-x-auto">
        {`object lock1 = new object();
object lock2 = new object();

Task.Run(() => {
    lock (lock1) {
        Thread.Sleep(100);
        lock (lock2) { }
    }
});

Task.Run(() => {
    lock (lock2) {
        Thread.Sleep(100);
        lock (lock1) { }
    }
});`}
      </pre>

      {/* Async deadlock */}
      <h2 className="text-2xl font-semibold mb-4">
        Deadlock with async/await (very common)
      </h2>

      <pre className="bg-gray-900 text-white p-4 rounded mb-10">
        {`// ❌ Dangerous
var result = SomeAsync().Result;`}
      </pre>

      <p className="mb-10 text-gray-700">
        👉 Blocking async code like this can cause deadlocks in ASP.NET.
      </p>

      {/* How to avoid */}
      <h2 className="text-2xl font-semibold mb-4">How to avoid deadlocks</h2>

      <ul className="list-disc pl-6 mb-10 space-y-2">
        <li>Always lock resources in the same order</li>
        <li>Avoid blocking async code (.Result / .Wait())</li>
        <li>Use async/await properly</li>
        <li>Minimize locking where possible</li>
      </ul>

      {/* CTA */}
      <div className="bg-gray-100 p-6 rounded mb-10 text-center">
        <p className="font-semibold mb-3">
          Want to practice explaining this like a senior?
        </p>
        <a
          href="/login"
          className="bg-black text-white px-5 py-2 rounded hover:opacity-90"
        >
          Practice Now
        </a>
      </div>

      {/* Navigation row */}
      <div className="border-t pt-6 flex justify-between items-start gap-6">
        {/* Left */}
        <a
          href="/dotnet-interview-questions"
          className="text-black font-semibold hover:underline whitespace-nowrap"
        >
          ← See all .NET interview questions
        </a>

        {/* Right */}
        <div className="flex flex-col items-end text-right">
          <p className="text-xs text-gray-500 mb-1">Related articles</p>

          <a
            href="/blog/task-vs-thread-csharp"
            className="text-blue-600 hover:underline"
          >
            Task vs Thread →
          </a>

          <a
            href="/blog/async-await-csharp"
            className="text-blue-600 hover:underline"
          >
            Async/Await →
          </a>
        </div>
      </div>
    </div>
  );
}

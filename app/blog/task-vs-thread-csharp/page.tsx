export const metadata = {
  title: "Task vs Thread in C# (Interview Guide)",
  description:
    "Understand the difference between Task and Thread in C#. Learn how to answer this interview question like a senior developer.",
};

export default function Page() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-6">
        Task vs Thread in C# (Interview Guide)
      </h1>

      <p className="text-gray-600 mb-8">
        Most developers give a weak answer to this question:
        <br />
        <b>“Task is lighter than Thread.”</b>
        <br />
        That’s not wrong — but it’s not enough to pass a real interview.
      </p>

      {/* Question */}
      <h2 className="text-2xl font-semibold mb-4">
        What is the difference between Task and Thread?
      </h2>

      {/* Bad vs Good */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div className="bg-red-50 p-4 rounded">
          <p className="font-semibold text-red-600 mb-2">❌ Bad answer</p>
          <p>Task is lighter than Thread.</p>
        </div>

        <div className="bg-green-50 p-4 rounded">
          <p className="font-semibold text-green-600 mb-2">✅ Senior answer</p>
          <p>
            A Thread is a low-level OS construct, while a Task is a higher-level
            abstraction provided by .NET.
            <br />
            Tasks are managed by the runtime and use the ThreadPool, making them
            more efficient and easier to work with for asynchronous and
            concurrent programming.
          </p>
        </div>
      </div>

      {/* Deep explanation */}
      <h2 className="text-2xl font-semibold mb-4">Key differences</h2>

      <ul className="list-disc pl-6 mb-10 space-y-2">
        <li>
          <b>Thread:</b> Low-level, managed by OS
        </li>
        <li>
          <b>Task:</b> High-level abstraction managed by .NET runtime
        </li>
        <li>
          <b>Thread:</b> Expensive to create
        </li>
        <li>
          <b>Task:</b> Uses ThreadPool → more efficient
        </li>
        <li>
          <b>Thread:</b> Manual management
        </li>
        <li>
          <b>Task:</b> Supports async/await → easier code
        </li>
      </ul>

      {/* Example */}
      <h2 className="text-2xl font-semibold mb-4">Example</h2>

      <pre className="bg-gray-900 text-white p-4 rounded mb-10 overflow-x-auto">
        {`// Using Thread
new Thread(() => {
    Console.WriteLine("Running on Thread");
}).Start();

// Using Task
Task.Run(() => {
    Console.WriteLine("Running on Task");
});`}
      </pre>

      {/* When to use */}
      <h2 className="text-2xl font-semibold mb-4">
        When to use Task vs Thread?
      </h2>

      <div className="space-y-4 mb-10">
        <p>
          👉 Use <b>Task</b> in most cases:
        </p>
        <ul className="list-disc pl-6">
          <li>Async operations</li>
          <li>Web applications</li>
          <li>Parallel processing</li>
        </ul>

        <p className="mt-4">
          👉 Use <b>Thread</b> only when:
        </p>
        <ul className="list-disc pl-6">
          <li>You need full control over thread lifecycle</li>
          <li>Low-level system programming</li>
        </ul>
      </div>

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

      {/* Internal link */}
      <div className="mt-10">
        <a
          href="/dotnet-interview-questions"
          className="text-blue-600 underline"
        >
          ← See more .NET interview questions
        </a>
      </div>
    </div>
  );
}

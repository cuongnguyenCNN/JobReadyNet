export const metadata = {
  title: "Garbage Collection in .NET (Interview Guide)",
  description:
    "Understand Garbage Collection in .NET like a senior developer. Learn how GC works, generations, and common interview mistakes.",
};

export default function Page() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-6">
        Garbage Collection in .NET (Interview Guide)
      </h1>

      <p className="text-gray-600 mb-8">
        Most developers say:
        <br />
        <b>“GC frees memory.”</b>
        <br />
        That’s correct… but way too shallow to pass a real interview.
      </p>

      {/* Question */}
      <h2 className="text-2xl font-semibold mb-4">
        What is Garbage Collection in .NET?
      </h2>

      {/* Bad vs Good */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div className="bg-red-50 p-4 rounded">
          <p className="font-semibold text-red-600 mb-2">❌ Bad answer</p>
          <p>It automatically frees unused memory.</p>
        </div>

        <div className="bg-green-50 p-4 rounded">
          <p className="font-semibold text-green-600 mb-2">✅ Senior answer</p>
          <p>
            Garbage Collection (GC) is an automatic memory management system
            that reclaims memory occupied by objects that are no longer
            referenced by the application.
            <br />
            It optimizes performance using a generational model and runs
            periodically to balance memory usage and CPU cost.
          </p>
        </div>
      </div>

      {/* Deep explanation */}
      <h2 className="text-2xl font-semibold mb-4">
        How Garbage Collection works
      </h2>

      <ul className="list-disc pl-6 mb-10 space-y-2">
        <li>Objects are allocated on the managed heap</li>
        <li>GC tracks references to determine if objects are still in use</li>
        <li>Unreferenced objects are marked and removed</li>
        <li>Memory is compacted to reduce fragmentation</li>
      </ul>

      {/* Generations */}
      <h2 className="text-2xl font-semibold mb-4">
        Generational model (very important)
      </h2>

      <ul className="list-disc pl-6 mb-10 space-y-2">
        <li>
          <b>Gen 0:</b> Short-lived objects (collected frequently)
        </li>
        <li>
          <b>Gen 1:</b> Medium-lived objects
        </li>
        <li>
          <b>Gen 2:</b> Long-lived objects (collected less often)
        </li>
      </ul>

      <p className="mb-10 text-gray-700">
        👉 Most objects die young → this is why GC is optimized this way.
      </p>

      {/* Example */}
      <h2 className="text-2xl font-semibold mb-4">Example</h2>

      <pre className="bg-gray-900 text-white p-4 rounded mb-10 overflow-x-auto">
        {`void CreateObjects()
{
    for (int i = 0; i < 1000; i++)
    {
        var obj = new object(); // allocated in Gen 0
    }
}`}
      </pre>

      {/* Common mistakes */}
      <h2 className="text-2xl font-semibold mb-4">Common mistakes</h2>

      <div className="space-y-6 mb-10">
        <div>
          <p className="font-semibold mb-2">❌ Forcing GC manually</p>
          <pre className="bg-gray-900 text-white p-4 rounded">
            {`GC.Collect();`}
          </pre>
          <p className="text-sm text-gray-600 mt-2">
            This can hurt performance. Let the runtime decide.
          </p>
        </div>

        <div>
          <p className="font-semibold mb-2">❌ Memory leak misconception</p>
          <p className="text-sm text-gray-600">
            GC does not prevent memory leaks if references are still held.
          </p>
        </div>
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

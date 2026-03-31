export const metadata = {
  title: "Span<T> in C# Explained (Zero Allocation + Performance Guide)",
  description:
    "Learn Span<T> in C# with examples, memory optimization, and how to answer interview questions like a senior developer.",
};

export default function Page() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-6">
        Span&lt;T&gt; in C# (Interview Guide)
      </h1>

      <p className="text-gray-600 mb-8">
        Most developers say:
        <br />
        <b>“It is a faster array.”</b>
        <br />
        That’s wrong — and will fail a senior interview.
      </p>

      {/* Question */}
      <h2 className="text-2xl font-semibold mb-4">What is Span&lt;T&gt;?</h2>

      {/* Bad vs Good */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div className="bg-red-50 p-4 rounded">
          <p className="text-red-600 font-semibold mb-2">❌ Bad answer</p>
          <p>It is a faster array.</p>
        </div>

        <div className="bg-green-50 p-4 rounded">
          <p className="text-green-600 font-semibold mb-2">✅ Senior answer</p>
          <p>
            Span&lt;T&gt; is a lightweight struct that provides safe access to
            contiguous memory without allocations. It can point to stack memory,
            arrays, or unmanaged memory, helping reduce allocations and improve
            performance.
          </p>
        </div>
      </div>

      {/* How it works */}
      <h2 className="text-2xl font-semibold mb-4">How Span works</h2>

      <ul className="list-disc pl-6 mb-10 space-y-2">
        <li>Represents a slice of memory</li>
        <li>Does not allocate new memory</li>
        <li>Must stay on the stack (cannot escape to heap)</li>
      </ul>

      {/* Example */}
      <h2 className="text-2xl font-semibold mb-4">Example</h2>

      <pre className="bg-gray-900 text-white p-4 rounded mb-10 overflow-x-auto">
        {`int[] arr = {1, 2, 3, 4};

Span<int> slice = arr.AsSpan(1, 2);
// slice = {2, 3}`}
      </pre>

      {/* Why important */}
      <h2 className="text-2xl font-semibold mb-4">
        Why it matters (Performance)
      </h2>

      <p className="mb-10 text-gray-700">
        Span avoids allocations → less GC → better performance in
        high-throughput systems like APIs and real-time processing.
      </p>

      {/* Common mistakes */}
      <h2 className="text-2xl font-semibold mb-4">Common mistakes</h2>

      <div className="space-y-6 mb-10">
        <div>
          <p className="font-semibold mb-2">
            ❌ Trying to store Span in class fields
          </p>
          <p className="text-sm text-gray-600">
            Span must stay on the stack → cannot be stored in heap objects.
          </p>
        </div>

        <div>
          <p className="font-semibold mb-2">❌ Overusing Span</p>
          <p className="text-sm text-gray-600">
            Adds complexity when not needed.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gray-100 p-6 rounded mb-10 text-center">
        <p className="font-semibold mb-3">
          Want to master .NET performance like a senior?
        </p>
        <a
          href="/login"
          className="bg-black text-white px-5 py-2 rounded hover:opacity-90"
        >
          Practice Now
        </a>
      </div>

      {/* Navigation */}
      <div className="border-t pt-6 flex justify-between items-start gap-6">
        <a
          href="/dotnet-interview-questions"
          className="font-semibold hover:underline"
        >
          ← See all .NET interview questions
        </a>

        <div className="text-right">
          <p className="text-xs text-gray-500 mb-1">Related articles</p>

          <a
            href="/blog/boxing-unboxing-csharp"
            className="text-blue-600 hover:underline"
          >
            Boxing / Unboxing →
          </a>

          <br />

          <a
            href="/blog/deadlock-csharp"
            className="text-blue-600 hover:underline"
          >
            Deadlock →
          </a>
        </div>
      </div>
    </div>
  );
}

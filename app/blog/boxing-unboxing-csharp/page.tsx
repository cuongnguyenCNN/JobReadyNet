export const metadata = {
  title: "Boxing and Unboxing in C# Explained (Performance + Interview)",
  description:
    "Learn boxing and unboxing in C# with examples, performance impact, and how to answer in interviews like a senior developer.",
};

export default function Page() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-6">
        Boxing and Unboxing in C# (Interview Guide)
      </h1>

      <p className="text-gray-600 mb-8">
        Most developers say:
        <br />
        <b>“It converts value types to reference types.”</b>
        <br />
        That’s correct — but misses the performance impact.
      </p>

      {/* Question */}
      <h2 className="text-2xl font-semibold mb-4">
        What is boxing and unboxing?
      </h2>

      {/* Bad vs Good */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div className="bg-red-50 p-4 rounded">
          <p className="text-red-600 font-semibold mb-2">❌ Bad answer</p>
          <p>It converts value types to reference types.</p>
        </div>

        <div className="bg-green-50 p-4 rounded">
          <p className="text-green-600 font-semibold mb-2">✅ Senior answer</p>
          <p>
            Boxing converts a value type into an object, causing heap
            allocation. Unboxing extracts the value type back. Excessive
            boxing/unboxing can hurt performance due to allocations and casting,
            especially in high-frequency operations.
          </p>
        </div>
      </div>

      {/* How it works */}
      <h2 className="text-2xl font-semibold mb-4">How it works</h2>

      <ul className="list-disc pl-6 mb-10 space-y-2">
        <li>Value type → boxed into object (heap allocation)</li>
        <li>Object → unboxed back to value type</li>
        <li>Requires casting during unboxing</li>
      </ul>

      {/* Example */}
      <h2 className="text-2xl font-semibold mb-4">Example</h2>

      <pre className="bg-gray-900 text-white p-4 rounded mb-10 overflow-x-auto">
        {`int x = 10;
object obj = x;      // Boxing

int y = (int)obj;    // Unboxing`}
      </pre>

      {/* Performance */}
      <h2 className="text-2xl font-semibold mb-4">
        Why it matters (Performance)
      </h2>

      <p className="mb-10 text-gray-700">
        Boxing creates heap allocations → more GC pressure → slower performance
        in loops or high-load systems.
      </p>

      {/* Common mistakes */}
      <h2 className="text-2xl font-semibold mb-4">Common mistakes</h2>

      <div className="space-y-6 mb-10">
        <div>
          <p className="font-semibold mb-2">❌ Using object unnecessarily</p>
          <p className="text-sm text-gray-600">
            Causes implicit boxing without realizing.
          </p>
        </div>

        <div>
          <p className="font-semibold mb-2">❌ Boxing in loops</p>
          <p className="text-sm text-gray-600">
            Repeated allocations can destroy performance.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gray-100 p-6 rounded mb-10 text-center">
        <p className="font-semibold mb-3">
          Want to understand real .NET performance traps?
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

          <a href="/blog/span-csharp" className="text-blue-600 hover:underline">
            Span&lt;T&gt; →
          </a>

          <br />

          <a
            href="/blog/garbage-collection-csharp"
            className="text-blue-600 hover:underline"
          >
            Garbage Collection →
          </a>
        </div>
      </div>
    </div>
  );
}

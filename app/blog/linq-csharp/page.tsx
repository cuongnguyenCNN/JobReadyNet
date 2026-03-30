export const metadata = {
  title: "LINQ in C# Explained (Interview Guide + Examples)",
  description:
    "Learn LINQ in C# with real examples, performance tips, and how to answer interview questions like a senior developer.",
};

export default function Page() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-6">LINQ in C# (Interview Guide)</h1>

      <p className="text-gray-600 mb-8">
        Most developers say:
        <br />
        <b>“LINQ is used to query data.”</b>
        <br />
        That’s correct — but too shallow to pass a real interview.
      </p>

      {/* Question */}
      <h2 className="text-2xl font-semibold mb-4">What is LINQ?</h2>

      {/* Bad vs Good */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div className="bg-red-50 p-4 rounded">
          <p className="text-red-600 font-semibold mb-2">❌ Bad answer</p>
          <p>It is used to query data.</p>
        </div>

        <div className="bg-green-50 p-4 rounded">
          <p className="text-green-600 font-semibold mb-2">✅ Senior answer</p>
          <p>
            LINQ (Language Integrated Query) provides a declarative way to query
            data from collections, databases, and other sources using a unified
            syntax. It can be translated into in-memory operations or SQL,
            depending on the provider.
          </p>
        </div>
      </div>

      {/* How it works */}
      <h2 className="text-2xl font-semibold mb-4">How LINQ works</h2>

      <ul className="list-disc pl-6 mb-10 space-y-2">
        <li>Uses extension methods (Where, Select, etc.)</li>
        <li>Builds expression trees (for IQueryable)</li>
        <li>Executes in memory or translates to SQL</li>
      </ul>

      {/* Example */}
      <h2 className="text-2xl font-semibold mb-4">Example</h2>

      <pre className="bg-gray-900 text-white p-4 rounded mb-10 overflow-x-auto">
        {`var users = new List<User>();

var result = users
    .Where(u => u.Age > 18)
    .Select(u => u.Name)
    .ToList();`}
      </pre>

      {/* IEnumerable vs IQueryable */}
      <h2 className="text-2xl font-semibold mb-4">
        IEnumerable vs IQueryable (Important)
      </h2>

      <ul className="list-disc pl-6 mb-10 space-y-2">
        <li>
          <b>IEnumerable:</b> executes query in memory
        </li>
        <li>
          <b>IQueryable:</b> builds expression tree → executes in database
        </li>
      </ul>

      <p className="mb-10 text-gray-700">
        👉 Using the wrong one can cause performance issues.
      </p>

      {/* Common mistakes */}
      <h2 className="text-2xl font-semibold mb-4">Common mistakes</h2>

      <div className="space-y-6 mb-10">
        <div>
          <p className="font-semibold mb-2">❌ Executing too early</p>
          <p className="text-sm text-gray-600">
            Calling ToList() too soon → loads all data into memory.
          </p>
        </div>

        <div>
          <p className="font-semibold mb-2">❌ Ignoring performance</p>
          <p className="text-sm text-gray-600">
            Complex queries can generate inefficient SQL.
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
            href="/blog/garbage-collection-csharp"
            className="text-blue-600 hover:underline"
          >
            Garbage Collection →
          </a>

          <a
            href="/blog/task-vs-thread-csharp"
            className="text-blue-600 hover:underline"
          >
            Task vs Thread →
          </a>
        </div>
      </div>
    </div>
  );
}

export const metadata = {
  title: "Async/Await in C# (Interview Guide)",
  description:
    "Learn how to explain async/await in C# like a senior developer. Avoid common mistakes and pass your next .NET interview.",
};

export default function Page() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-6">
        Async/Await in C# (Interview Guide)
      </h1>

      <p className="text-gray-600 mb-8">
        Most developers fail this question — not because they don’t know
        async/await, but because they explain it poorly.
      </p>

      {/* Question */}
      <h2 className="text-2xl font-semibold mb-4">
        What is async/await in C#?
      </h2>

      {/* Bad vs Good */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div className="bg-red-50 p-4 rounded">
          <p className="font-semibold text-red-600 mb-2">❌ Bad answer</p>
          <p>It makes code asynchronous.</p>
        </div>

        <div className="bg-green-50 p-4 rounded">
          <p className="font-semibold text-green-600 mb-2">✅ Senior answer</p>
          <p>
            Async/await allows you to write asynchronous code in a non-blocking
            way. When awaiting an operation, the thread is freed to handle other
            work instead of being blocked.
          </p>
        </div>
      </div>

      {/* Explanation */}
      <h2 className="text-2xl font-semibold mb-4">
        How it works under the hood
      </h2>

      <ul className="list-disc pl-6 mb-10 space-y-2">
        <li>Uses Task-based Asynchronous Pattern (TAP)</li>
        <li>Compiler transforms code into a state machine</li>
        <li>Execution resumes when the awaited task completes</li>
      </ul>

      {/* Mistakes */}
      <h2 className="text-2xl font-semibold mb-4">Common mistakes</h2>

      <div className="space-y-6 mb-10">
        <div>
          <p className="font-semibold mb-2">❌ Blocking async code</p>
          <pre className="bg-gray-900 text-white p-4 rounded overflow-x-auto">
            {`var result = GetDataAsync().Result;`}
          </pre>

          <p className="mt-2 text-sm text-gray-600">
            This can cause deadlocks.
          </p>
        </div>

        <div>
          <p className="font-semibold mb-2">✅ Correct usage</p>
          <pre className="bg-gray-900 text-white p-4 rounded overflow-x-auto">
            {`var result = await GetDataAsync();`}
          </pre>
        </div>

        <div>
          <p className="font-semibold mb-2">⚠️ ConfigureAwait(false)</p>
          <pre className="bg-gray-900 text-white p-4 rounded overflow-x-auto">
            {`await SomeAsync().ConfigureAwait(false);`}
          </pre>

          <p className="mt-2 text-sm text-gray-600">
            Avoids capturing synchronization context in library code.
          </p>
        </div>
      </div>

      {/* Example */}
      <h2 className="text-2xl font-semibold mb-4">Example</h2>

      <pre className="bg-gray-900 text-white p-4 rounded mb-10 overflow-x-auto">
        {`public async Task<string> GetDataAsync()
{
    var response = await httpClient.GetAsync("https://api.com");
    return await response.Content.ReadAsStringAsync();
}`}
      </pre>

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

      {/* Internal Link */}
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

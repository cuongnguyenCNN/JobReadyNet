export const metadata = {
  title: "CQRS Pattern in C# (Interview Guide)",
  description:
    "Learn CQRS (Command Query Responsibility Segregation) in C# with real interview answers, examples, and common mistakes.",
};

export default function Page() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-6">
        CQRS Pattern in C# (Interview Guide)
      </h1>

      <p className="text-gray-600 mb-8">
        Most developers answer this question like this:
        <br />
        <b>“CQRS separates read and write.”</b>
        <br />
        That’s correct — but far from enough to impress an interviewer.
      </p>

      {/* Question */}
      <h2 className="text-2xl font-semibold mb-4">What is CQRS?</h2>

      {/* Bad vs Good */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div className="bg-red-50 p-4 rounded">
          <p className="font-semibold text-red-600 mb-2">❌ Bad answer</p>
          <p>It separates read and write operations.</p>
        </div>

        <div className="bg-green-50 p-4 rounded">
          <p className="font-semibold text-green-600 mb-2">✅ Senior answer</p>
          <p>
            CQRS (Command Query Responsibility Segregation) separates read
            operations (queries) and write operations (commands) into different
            models.
            <br />
            This allows optimizing each side independently for performance,
            scalability, and maintainability.
          </p>
        </div>
      </div>

      {/* Deep explanation */}
      <h2 className="text-2xl font-semibold mb-4">Why use CQRS?</h2>

      <ul className="list-disc pl-6 mb-10 space-y-2">
        <li>Optimize read and write operations separately</li>
        <li>Improve scalability in high-load systems</li>
        <li>Clear separation of concerns</li>
        <li>Flexible data models for different use cases</li>
      </ul>

      {/* Example */}
      <h2 className="text-2xl font-semibold mb-4">Example</h2>

      <pre className="bg-gray-900 text-white p-4 rounded mb-10 overflow-x-auto">
        {`// Command
public class CreateOrderCommand {
    public string Product { get; set; }
}

// Query
public class GetOrderQuery {
    public int OrderId { get; set; }
}`}
      </pre>

      {/* When to use */}
      <h2 className="text-2xl font-semibold mb-4">When should you use CQRS?</h2>

      <div className="space-y-4 mb-10">
        <p>👉 Use CQRS when:</p>
        <ul className="list-disc pl-6">
          <li>System has complex business logic</li>
          <li>Read and write workloads are very different</li>
          <li>Need to scale reads and writes independently</li>
        </ul>

        <p className="mt-4">⚠️ Avoid CQRS when:</p>
        <ul className="list-disc pl-6">
          <li>Simple CRUD application</li>
          <li>Overengineering is not needed</li>
        </ul>
      </div>

      {/* Common mistakes */}
      <h2 className="text-2xl font-semibold mb-4">Common mistakes</h2>

      <div className="space-y-4 mb-10">
        <p>❌ Using CQRS everywhere (overengineering)</p>
        <p>❌ Not understanding trade-offs (complexity ↑)</p>
        <p>❌ Mixing command and query logic again</p>
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

export const metadata = {
  title: "What is Middleware in ASP.NET Core? (Interview Guide + Examples)",
  description:
    "Learn how ASP.NET Core middleware works, pipeline order, and how to answer this interview question like a senior developer.",
};

export default function Page() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-6">
        Middleware in ASP.NET Core (Interview Guide)
      </h1>

      <p className="text-gray-600 mb-8">
        Most developers say: “Middleware handles requests.”
        <br />
        That’s not enough.
      </p>

      <h2 className="text-2xl font-semibold mb-4">What is Middleware?</h2>

      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div className="bg-red-50 p-4 rounded">
          <p className="text-red-600 font-semibold">❌ Bad answer</p>
          <p>It processes requests.</p>
        </div>

        <div className="bg-green-50 p-4 rounded">
          <p className="text-green-600 font-semibold">✅ Senior answer</p>
          <p>
            Middleware is a component in the ASP.NET Core pipeline that handles
            HTTP requests and responses. Each middleware can process the request
            and either pass it to the next component or stop the pipeline.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Pipeline order matters</h2>

      <pre className="bg-gray-900 text-white p-4 rounded mb-10">
        {`app.UseAuthentication();
app.UseAuthorization();
app.MapControllers();`}
      </pre>

      <p className="mb-10 text-gray-700">
        👉 Order defines behavior. Wrong order = bugs.
      </p>

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
      <div className="border-t pt-6 flex justify-between items-start gap-6">
        <a
          href="/dotnet-interview-questions"
          className="text-black font-semibold hover:underline whitespace-nowrap"
        >
          ← See all .NET interview questions
        </a>

        <div className="flex flex-col items-end text-right">
          <p className="text-xs text-gray-500 mb-1">Related articles</p>

          <a
            href="/blog/async-await-csharp"
            className="text-blue-600 hover:underline"
          >
            Async/Await Guide →
          </a>

          <a
            href="/blog/cqrs-pattern-csharp"
            className="text-blue-600 hover:underline"
          >
            CQRS Pattern Guide →
          </a>
        </div>
      </div>
    </div>
  );
}

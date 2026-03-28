export const metadata = {
  title: "Dependency Injection in C# (Interview Guide)",
  description:
    "Learn how to explain Dependency Injection in C# like a senior developer. Includes real interview answers and examples.",
};

export default function Page() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-6">
        Dependency Injection in C# (Interview Guide)
      </h1>

      <p className="text-gray-600 mb-8">
        Most developers fail this question — not because they don’t know it, but
        because they explain it poorly.
      </p>

      {/* Question */}
      <h2 className="text-2xl font-semibold mb-4">
        What is Dependency Injection?
      </h2>

      {/* Bad vs Good */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div className="bg-red-50 p-4 rounded">
          <p className="font-semibold text-red-600 mb-2">❌ Bad answer</p>
          <p>It reduces coupling.</p>
        </div>

        <div className="bg-green-50 p-4 rounded">
          <p className="font-semibold text-green-600 mb-2">✅ Senior answer</p>
          <p>
            Dependency Injection is a design pattern that separates object
            creation from business logic. Instead of creating dependencies
            inside a class, they are injected from the outside (usually via
            constructor).
          </p>
        </div>
      </div>

      {/* Explanation */}
      <h2 className="text-2xl font-semibold mb-4">Why does it matter?</h2>

      <ul className="list-disc pl-6 mb-10 space-y-2">
        <li>Easier to test (mock dependencies)</li>
        <li>Easier to maintain (swap implementations)</li>
        <li>Better separation of concerns</li>
      </ul>

      {/* Code Example */}
      <h2 className="text-2xl font-semibold mb-4">
        Example (Without vs With DI)
      </h2>

      <pre className="bg-gray-900 text-white p-4 rounded mb-6 overflow-x-auto">
        {`// ❌ Without DI
public class OrderService {
  private EmailService _email = new EmailService();
}

// ✅ With DI
public class OrderService {
  private readonly IEmailService _email;
  public OrderService(IEmailService email) {
    _email = email;
  }
}`}
      </pre>

      {/* CTA */}
      <div className="bg-gray-100 p-6 rounded mb-10 text-center">
        <p className="font-semibold mb-3">
          Want to practice explaining this like a senior?
        </p>
        <a href="/login" className="bg-black text-white px-5 py-2 rounded">
          Practice Now
        </a>
      </div>

      {/* Internal Link về pillar */}
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

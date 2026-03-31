export const metadata = {
  title: "Dependency Injection in C# (Interview Guide)",
  description:
    "Learn how to explain Dependency Injection in C# like a senior developer. Includes real interview answers and examples.",
};

export default function Page() {
  return (
    //     <div className="max-w-3xl mx-auto px-6 py-12">
    //       <h1 className="text-4xl font-bold mb-6">
    //         Dependency Injection in C# (Interview Guide)
    //       </h1>

    //       <p className="text-gray-600 mb-8">
    //         Most developers fail this question — not because they don’t know it, but
    //         because they explain it poorly.
    //       </p>

    //       <h2 className="text-2xl font-semibold mb-4">
    //         What is Dependency Injection?
    //       </h2>

    //       <div className="grid md:grid-cols-2 gap-6 mb-10">
    //         <div className="bg-red-50 p-4 rounded">
    //           <p className="font-semibold text-red-600 mb-2">❌ Bad answer</p>
    //           <p>It reduces coupling.</p>
    //         </div>

    //         <div className="bg-green-50 p-4 rounded">
    //           <p className="font-semibold text-green-600 mb-2">✅ Senior answer</p>
    //           <p>
    //             Dependency Injection is a design pattern that separates object
    //             creation from business logic. Instead of creating dependencies
    //             inside a class, they are injected from the outside (usually via
    //             constructor).
    //           </p>
    //         </div>
    //       </div>

    //       <h2 className="text-2xl font-semibold mb-4">Why does it matter?</h2>

    //       <ul className="list-disc pl-6 mb-10 space-y-2">
    //         <li>Easier to test (mock dependencies)</li>
    //         <li>Easier to maintain (swap implementations)</li>
    //         <li>Better separation of concerns</li>
    //       </ul>

    //       <h2 className="text-2xl font-semibold mb-4">
    //         Example (Without vs With DI)
    //       </h2>

    //       <pre className="bg-gray-900 text-white p-4 rounded mb-6 overflow-x-auto">
    //         {`// ❌ Without DI
    // public class OrderService {
    //   private EmailService _email = new EmailService();
    // }

    // // ✅ With DI
    // public class OrderService {
    //   private readonly IEmailService _email;
    //   public OrderService(IEmailService email) {
    //     _email = email;
    //   }
    // }`}
    //       </pre>

    //       <div className="bg-gray-100 p-6 rounded mb-10 text-center">
    //         <p className="font-semibold mb-3">
    //           Want to practice explaining this like a senior?
    //         </p>
    //         <a href="/login" className="bg-black text-white px-5 py-2 rounded">
    //           Practice Now
    //         </a>
    //       </div>

    //       <div className="mt-10">
    //         <a
    //           href="/dotnet-interview-questions"
    //           className="text-blue-600 underline"
    //         >
    //           ← See more .NET interview questions
    //         </a>
    //       </div>
    //     </div>
    <div className="max-w-3xl mx-auto px-6 py-12">
      {/* HERO */}
      <h1 className="text-4xl font-bold mb-4 leading-tight">
        Dependency Injection in C#
        <br />
        <span className="text-blue-600">(The Answer That Gets You Hired)</span>
      </h1>

      <p className="text-gray-600 mb-6">
        I failed this question in multiple interviews.
        <br />
        Not because I didn’t know it…
        <br />
        <strong>But because I explained it like a textbook.</strong>
      </p>

      {/* QUESTION */}
      <h2 className="text-2xl font-semibold mb-4">
        What is Dependency Injection?
      </h2>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* BAD */}
        <div className="bg-red-50 p-4 rounded">
          <p className="font-semibold text-red-600 mb-2">❌ Bad answer</p>
          <p>It reduces coupling.</p>

          <p className="text-sm text-gray-500 mt-2">
            ⚠️ This is why most candidates fail this question.
          </p>
        </div>

        {/* GOOD (TEASE) */}
        <div className="bg-green-50 p-4 rounded relative">
          <p className="font-semibold text-green-600 mb-2">✅ Senior answer</p>

          {/* dòng đầu visible */}
          <p className="mb-2">
            Dependency Injection separates object creation from business logic.
          </p>

          {/* phần còn lại blur */}
          <p className="blur-sm select-none">
            Instead of creating dependencies inside a class, they are injected
            from the outside (usually via constructor), making the system more
            testable and maintainable.
          </p>

          {/* overlay */}
          <div className="absolute inset-0 flex items-end justify-center pb-4 bg-gradient-to-t from-white/90 to-transparent rounded">
            <a
              href="/login"
              className="bg-black text-white px-4 py-2 rounded-lg text-sm font-semibold"
            >
              Unlock full answer + examples →
            </a>
          </div>
        </div>
      </div>

      {/* INSIGHT */}
      <div className="bg-yellow-50 p-4 rounded mb-10">
        <p className="font-semibold mb-1">
          💡 What interviewers actually expect:
        </p>
        <p className="text-sm text-gray-600">
          They don’t care about “reduce coupling”.
          <br />
          They want to see if you understand separation of concerns and how it
          improves testability in real systems.
        </p>
      </div>

      {/* WHY IT MATTERS */}
      <h2 className="text-2xl font-semibold mb-4">
        Why does it matter in real interviews?
      </h2>

      <ul className="list-disc pl-6 mb-10 space-y-2 text-gray-700">
        <li>Shows you understand real-world architecture</li>
        <li>Helps you explain trade-offs clearly</li>
        <li>Separates junior answers from senior thinking</li>
      </ul>

      {/* CODE (TEASE) */}
      <h2 className="text-2xl font-semibold mb-4">
        Example (What most candidates miss)
      </h2>

      <pre className="bg-gray-900 text-white p-4 rounded mb-4 overflow-x-auto blur-sm">
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

      <div className="mb-10">
        <a
          href="/login"
          className="text-blue-600 font-semibold hover:underline"
        >
          View full explanation + real interview breakdown →
        </a>
      </div>

      {/* MID CTA */}
      <div className="bg-gray-100 p-6 rounded mb-10 text-center">
        <p className="font-semibold mb-3">
          I failed 20+ interviews before I learned how to answer this properly.
        </p>

        <a
          href="/login"
          className="bg-black text-white px-6 py-3 rounded font-semibold"
        >
          Get Real Interview Answers →
        </a>
      </div>

      {/* FINAL CTA */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Stop failing interviews even when you know the answer.
        </h2>

        <p className="text-gray-600 mb-6">
          Learn how to explain like a senior — not like a textbook.
        </p>

        <a
          href="/login"
          className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow hover:scale-105 transition"
        >
          👉 Start Practicing Now
        </a>
      </div>

      {/* INTERNAL LINK */}
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

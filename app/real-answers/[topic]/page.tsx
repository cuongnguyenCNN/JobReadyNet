import Link from "next/link";
import { redirect } from "next/navigation";

const topicData = {
  di: {
    title: "Dependency Injection",
    bad: "“It reduces coupling.”",
    good: "“Dependency Injection separates object creation from business logic, improving testability and maintainability.”",
    exampleTitle: "Real example (Dependency Injection)",
    exampleBad: "“It reduces coupling.”",
    exampleGood:
      "“It allows you to swap implementations and test components independently.”",
  },

  async: {
    title: "Async/Await",
    bad: "“It makes code asynchronous.”",
    good: "“Async/await enables non-blocking I/O, freeing threads to handle more requests.”",
    exampleTitle: "Real example (async/await)",
    exampleBad: "“It makes code asynchronous.”",
    exampleGood:
      "“It improves scalability by avoiding thread blocking during I/O operations.”",
  },

  cqrs: {
    title: "CQRS",
    bad: "“Separate read/write.”",
    good: "“CQRS separates commands and queries into different models to optimize performance and scalability.”",
    exampleTitle: "Real example (CQRS)",
    exampleBad: "“Separate read/write.”",
    exampleGood:
      "“It allows independent scaling and optimization of read and write operations.”",
  },
};
type TopicKey = keyof typeof topicData;
type Props = {
  params: {
    topic: string;
  };
};
export default async function RealAnswersPage({
  params,
}: {
  params: Promise<{ topic: string }>;
}) {
  const { topic } = await params;
  if (!(topic in topicData)) {
    redirect("/dotnet-interview-questions");
  }
  const data = topicData[topic as TopicKey];
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      {/* HERO */}
      <Link
        href="/dotnet-interview-questions"
        className="text-sm text-blue-600 mb-6 inline-block"
      >
        ← Back to all questions
      </Link>
      <h1 className="text-4xl font-bold mb-4 leading-tight">
        Stop failing {data.title} interview questions
        <br />
        <span className="text-blue-600">even when you know the answer</span>
      </h1>

      <p className="text-gray-600 mb-8 max-w-2xl">
        Most developers don’t fail because they lack knowledge…
        <br />
        <strong>They fail because they answer like a textbook.</strong>
      </p>

      {/* BEFORE vs AFTER */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-red-50 p-5 rounded">
          <p className="font-semibold text-red-600 mb-2">
            ❌ What most candidates say
          </p>
          <p>{data.bad}</p>
        </div>

        <div className="bg-green-50 p-5 rounded">
          <p className="font-semibold text-green-600 mb-2">
            ✅ What gets you hired
          </p>
          <p>{data.good}</p>
        </div>
      </div>

      {/* VALUE */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">What you’ll get</h2>

        <ul className="space-y-3 text-gray-700">
          <li>✔ 50+ real .NET interview answers</li>
          <li>✔ Topic-specific explanations</li>
          <li>✔ What NOT to say</li>
          <li>✔ Real-world thinking</li>
        </ul>
      </div>

      {/* SAMPLE */}
      <div className="bg-gray-100 p-6 rounded mb-12">
        <p className="font-semibold mb-2">{data.exampleTitle}</p>

        <p className="text-gray-700 mb-2">Most candidates say:</p>
        <p className="italic mb-3">{data.exampleBad}</p>

        <p className="text-gray-700 mb-2">Better answer:</p>
        <p>{data.exampleGood}</p>
      </div>

      {/* CTA */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2">
          Get full {data.title} answers
        </h2>

        <p className="text-gray-600 mb-4">One-time payment. Lifetime access.</p>

        <p className="text-4xl font-bold mb-6">$9</p>

        <a
          href={`/paywall?topic=${topic}`}
          className="bg-black text-white px-8 py-4 rounded-xl text-lg font-semibold"
        >
          👉 Unlock all answers →
        </a>
      </div>
    </div>
  );
}

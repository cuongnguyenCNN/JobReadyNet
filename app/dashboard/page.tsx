"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import FakeNotification from "@/components/fakenotifications";
import LiveViewers from "@/components/LiveViewers";
import FakeHeatmap from "@/components/FakeHeatMap";
import Countdown from "@/components/CountDown";

type Question = {
  id: string;
  title: string;
  weak_answer: string;
  strong_answer: string;
  insight: string;
};

const mockQuestions: Question[] = [
  {
    id: "1",
    title: "What is Dependency Injection?",
    weak_answer: "Inject dependency to reduce coupling",
    strong_answer:
      "Dependency Injection is a design pattern that allows dependencies to be provided externally, improving testability and modularity.",
    insight: "Interviewers expect real-world impact, not just definition.",
  },
  {
    id: "2",
    title: "Why is DI important in large systems?",
    weak_answer: "Because it's scalable",
    strong_answer:
      "DI helps manage complexity, improves maintainability, and allows easier testing and swapping implementations.",
    insight: "Talk about maintainability, not just scalability.",
  },
  {
    id: "3",
    title: "Why is injecting Scoped into Singleton dangerous?",
    weak_answer: "Because of lifetime issue",
    strong_answer:
      "A singleton holding a scoped dependency can lead to stale data or memory leaks because the scoped lifecycle is not respected.",
    insight: "Explain lifecycle mismatch clearly.",
  },
  {
    id: "4",
    title: "Why is async/await not always faster?",
    weak_answer: "Because async is slower",
    strong_answer:
      "Async improves scalability, not speed. It frees threads but may add overhead depending on context.",
    insight: "This is where many candidates fail.",
  },
];

const FREE_LIMIT = 3;

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);
  const [showPaywall, setShowPaywall] = useState(false);
  const router = useRouter();

  // 🔐 Check user
  useEffect(() => {
    const stored = localStorage.getItem("user_email");

    if (!stored) {
      router.push("/");
      return;
    }

    const parsed = JSON.parse(stored);

    if (Date.now() > parsed.expiry) {
      localStorage.removeItem("user_email");
      router.push("/");
      return;
    }

    setUser(parsed);
  }, [router]);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const triggerPoint = 300; // chỉnh tùy UI

      if (scrollY > triggerPoint && !showPaywall) {
        setShowPaywall(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [showPaywall]);
  if (!user) return null;

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r p-5 hidden md:block">
        <h2 className="font-semibold mb-4">Topics</h2>
        <ul className="space-y-2 text-sm text-gray-600">
          <li>Dependency Injection</li>
          <li>Entity Framework</li>
          <li>Microservices</li>
          <li>Async/Await</li>
        </ul>
      </div>
      {/* Main */}
      <div className="flex-1 p-6">
        {/* Top bar */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-sm text-gray-500">
            Progress: {FREE_LIMIT} / 150 questions
          </p>

          <button
            onClick={() => setShowPaywall(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm"
          >
            🔓 Upgrade
          </button>
        </div>

        {/* Questions */}
        <div className="space-y-4">
          {mockQuestions.map((q, index) => {
            const isLocked = index >= FREE_LIMIT;

            return (
              <div key={q.id} className="bg-white p-5 rounded-xl shadow-sm">
                <h3 className="font-semibold mb-2">{q.title}</h3>

                {!isLocked ? (
                  <>
                    <p className="text-sm text-red-500">❌ Weak answer:</p>
                    <p className="text-sm text-gray-600 mb-3">
                      {q.weak_answer}
                    </p>

                    <p className="text-sm text-green-600">✅ Strong answer:</p>
                    <p className="text-sm text-gray-700 mb-2">
                      {q.strong_answer}
                    </p>

                    <p className="text-xs text-blue-500">💡 {q.insight}</p>
                  </>
                ) : (
                  <div className="bg-gray-100 p-4 rounded-lg text-center mt-4">
                    <p className="text-sm mb-2">
                      🔒 This is where most developers fail interviews
                    </p>

                    <button
                      onClick={() => setShowPaywall(true)}
                      className="bg-black text-white px-4 py-2 rounded-lg text-sm shake"
                    >
                      Unlock to see answer
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      {/* 💰 PAYWALL */}
      {showPaywall && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-xl text-center">
            <h2 className="text-2xl font-semibold mb-3">
              Most developers fail THIS question.
            </h2>

            <p className="text-sm text-gray-500 mb-4">
              Not because they can't code.
            </p>

            <p className="text-sm text-gray-500 mb-6">
              But because they don’t understand how things actually work.
            </p>

            <p className="text-sm font-medium mb-6">👉 Don’t be one of them.</p>

            <div className="text-left text-sm mb-6 space-y-2">
              <p>✅ 150 real interview questions</p>
              <p>✅ Strong answers</p>
              <p>✅ Thinking framework</p>
              <p>✅ Lifetime access</p>
            </div>

            <p className="text-3xl font-bold mb-2">$19</p>
            <p className="text-xs text-gray-400 mb-6">One-time payment</p>
            <div>
              <Countdown />
            </div>
            <button
              onClick={() =>
                (window.location.href =
                  "https://noteflowai.lemonsqueezy.com/checkout/buy/98ea2ea8-1378-4bcc-900b-c0c3ea03e359")
              }
              className="w-full bg-black text-white py-3 rounded-lg font-medium"
            >
              🔓 Unlock Full Access
            </button>

            <button
              onClick={() => setShowPaywall(false)}
              className="mt-4 text-xs text-gray-400"
            >
              Maybe later
            </button>
          </div>
        </div>
      )}
      {/* Floating CTA */}
      <div
        onClick={() => setShowPaywall(true)}
        className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-black text-white px-6 py-3 rounded-xl shadow-lg text-sm"
      >
        🔓 Unlock 150 questions – $19
      </div>{" "}
      <>
        <LiveViewers />
        <FakeHeatmap />

        {/* Paywall */}

        {/* phần còn lại */}
      </>
      <>
        <FakeNotification />
        {/* phần dashboard của mày */}
      </>
    </div>
  );
}

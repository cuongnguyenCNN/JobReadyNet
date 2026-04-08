type Question = {
  id: string;
  title: string;
  strong_answer: string;
  weak_answer: string;
  insight: string;
  trap: string;
};

type LeftPanelProps = {
  view: "practice" | "failed" | "progress";
  activeQ: Question | null;
  mockQuestions: Question[];
  attemptsLeft: number;
  isLastAttempt: boolean;
  handleStart: (q: Question, index: number) => void;
  setShowPaywall: (v: boolean) => void;
};
export default function LeftPanel({
  view,
  activeQ,
  mockQuestions,
  attemptsLeft,
  isLastAttempt,
  handleStart,
  setShowPaywall,
}: LeftPanelProps) {
  if (view !== "practice") return null;

  return (
    <div className="space-y-4 relative">
      {/* Header */}
      <div className="flex justify-between">
        <p className="text-sm text-gray-500">
          🔥 78% devs fail these questions
        </p>

        <button
          onClick={() => setShowPaywall(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm"
        >
          Pass Interview Faster
        </button>
      </div>

      <p className="text-sm text-gray-500">Showing 10/159 questions</p>

      <p
        className={`text-sm ${
          attemptsLeft <= 3 ? "text-red-600 font-semibold" : "text-gray-500"
        }`}
      >
        🚨 Only {attemptsLeft} answers left before lock (Most users fail before
        finishing)
      </p>
      {attemptsLeft <= 0 && (
        <div className="bg-black text-white p-5 rounded-xl text-center">
          <p className="text-lg font-semibold">
            You've used all free attempts.
          </p>

          <p className="text-sm text-gray-300 mt-2">
            Most developers fail because they stop here.
          </p>

          <button
            onClick={() => setShowPaywall(true)}
            className="mt-4 bg-white text-black px-4 py-2 rounded-lg"
          >
            🔓 Continue Practicing
          </button>
        </div>
      )}

      {/* Questions */}
      {mockQuestions.map((q, index) => {
        const isLocked = index >= 10;

        return (
          <div
            key={q.id}
            className={`bg-white p-5 rounded-xl shadow-sm ${
              isLocked ? "opacity-40 pointer-events-none" : ""
            }`}
          >
            <h3 className="font-semibold mb-3">{q.title}</h3>

            <button
              onClick={() =>
                isLocked ? setShowPaywall(true) : handleStart(q, index)
              }
              className="bg-black text-white px-4 py-2 rounded-lg text-sm"
            >
              {isLocked ? "🔒 Locked" : "🎯 Start Answering"}
            </button>
          </div>
        );
      })}
    </div>
  );
}

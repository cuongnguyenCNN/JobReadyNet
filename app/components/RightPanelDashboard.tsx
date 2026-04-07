import { useState } from "react";
import EmptyState from "./EmptyStateRight";

type RightPanelProps = {
  activeQ: any; // hoặc define type chuẩn sau
  submitted: boolean;
  answer: string;
  setAnswer: (v: string) => void;
  handleSubmit: () => void;
  score: number | null;
  feedback: string;
  rank: number | null;
  setActiveQ: (q: any) => void;
  setShowPaywall: (v: boolean) => void;
  isAnalyzing: boolean;
};
export default function RightPanel({
  activeQ,
  submitted,
  answer,
  setAnswer,
  handleSubmit,
  score,
  feedback,
  rank,
  setActiveQ,
  setShowPaywall,
  isAnalyzing,
}: RightPanelProps) {
  if (!activeQ) return <EmptyState />;

  if (!submitted) {
    return (
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="font-semibold mb-4">{activeQ.title}</h2>
        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          className="w-full border p-3 rounded-lg mb-4"
          rows={5}
          placeholder="Type your answer..."
        />

        <button
          onClick={handleSubmit}
          disabled={isAnalyzing}
          className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-white ${
            isAnalyzing ? "bg-gray-400" : "bg-black"
          }`}
        >
          {isAnalyzing && (
            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
          )}
          {isAnalyzing ? "AI analyzing..." : "Analyze Answer"}
        </button>
      </div>
    );
  }

  // STATE 3: result
  return (
    <div className="space-y-4 bg-white p-4 rounded-lg">
      <h2 className="font-semibold mb-4">{activeQ.title}</h2>
      <div className="bg-white p-4 rounded-lg">
        <p className="font-semibold text-lg text-red-600">
          {Math.round((score || 0) * 10)}/10
        </p>
        <p className="whitespace-pre-line text-sm">{feedback}</p>
      </div>

      {/* Weak */}
      <div className="bg-red-50 p-4 rounded-lg">
        <p className="text-red-600 font-medium">❌ Weak Answer</p>
        <p className="text-sm">{activeQ.weak_answer}</p>
      </div>

      {/* Trap */}
      {score !== null && score < 0.3 && (
        <div className="bg-orange-50 p-4 rounded-lg">
          <p className="text-orange-600 font-semibold">
            ⚠️ Why you sound junior
          </p>
          <p className="text-sm">{activeQ.trap}</p>
        </div>
      )}

      {/* Strong Answer */}
      <div className="bg-green-50 p-4 rounded-lg relative">
        <p className="text-green-600 font-medium">🔒 Strong Answer</p>

        <p className="text-sm">{activeQ.strong_answer.slice(0, 80)}</p>

        <div className="blur-sm">{activeQ.strong_answer.slice(80)}</div>

        <button
          onClick={() => setShowPaywall(true)}
          className="mt-3 bg-black text-white px-4 py-2 rounded-lg w-full"
        >
          Unlock Full Answer
        </button>
      </div>

      {/* Ego */}
      {rank && (
        <div className="bg-black text-white p-4 rounded-lg text-center">
          <p className="font-semibold">
            Worse than {Math.round(rank)}% of devs
          </p>

          <button
            onClick={() => setShowPaywall(true)}
            className="mt-3 bg-white text-black px-4 py-2 rounded-lg"
          >
            Fix My Answer
          </button>
        </div>
      )}
    </div>
  );
}

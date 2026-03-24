// components/QuestionPreview.tsx
export default function QuestionPreview({ questions }: any) {
  return (
    <div className="mt-6">
      <h3 className="font-bold">🔥 Interview Questions</h3>

      {questions.slice(0, 2).map((q: any) => (
        <p key={q.id}>• {q.content}</p>
      ))}

      <div className="mt-4 p-4 bg-yellow-50 border">
        👉 Unlock full 150+ questions - $19
      </div>
    </div>
  );
}

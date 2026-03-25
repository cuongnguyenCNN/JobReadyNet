export default function Paywall() {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-xl text-center">
        {/* Title */}
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

        {/* Value bullets */}
        <div className="text-left text-sm mb-6 space-y-2">
          <p>✅ 150 real interview questions</p>
          <p>✅ Strong answers (not textbook)</p>
          <p>✅ Thinking framework (what interviewers expect)</p>
          <p>✅ Lifetime access</p>
        </div>

        {/* Price */}
        <div className="mb-6">
          <p className="text-3xl font-bold">$19</p>
          <p className="text-xs text-gray-400">One-time payment</p>
        </div>

        {/* CTA */}
        <button className="w-full bg-black text-white py-3 rounded-lg font-medium hover:opacity-90">
          🔓 Unlock Full Access
        </button>

        {/* Trust */}
        <p className="text-xs text-gray-400 mt-4">
          🔥 1,278 developers already joined
        </p>
      </div>
    </div>
  );
}

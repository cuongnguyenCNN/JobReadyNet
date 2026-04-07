export default function EmptyState() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="text-center max-w-sm">
        {/* Icon */}
        <div className="text-4xl mb-4">👋</div>

        {/* Title */}
        <h2 className="text-xl font-semibold">Start practicing</h2>

        {/* Description */}
        <p className="text-gray-500 mt-2">Select a question to begin.</p>

        {/* Benefits */}
        <div className="mt-6 text-left space-y-2">
          <p>✔ Instant feedback</p>
          <p>✔ Weak vs strong answers</p>
          <p>✔ Real interview insights</p>
        </div>

        {/* CTA */}
        <button className="mt-6 w-full bg-black text-white py-2 rounded-lg font-semibold hover:bg-gray-800 transition">
          👉 Pick a question on the left
        </button>
      </div>
    </div>
  );
}

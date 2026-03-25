export default function EnterEmail() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        {/* Progress */}
        <p className="text-xs text-gray-400 mb-4">Step 1 of 2</p>

        {/* Title */}
        <h1 className="text-2xl font-semibold mb-2">
          Start your interview prep 🚀
        </h1>

        <p className="text-sm text-gray-500 mb-6">
          Get instant access to real .NET interview questions
        </p>

        {/* Input */}
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full border rounded-lg px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* CTA */}
        <button className="w-full bg-black text-white py-3 rounded-lg font-medium hover:opacity-90">
          Continue →
        </button>

        {/* Trust */}
        <p className="text-xs text-gray-400 mt-4 text-center">
          🔥 Used by 1,200+ developers worldwide
        </p>
      </div>
    </div>
  );
}

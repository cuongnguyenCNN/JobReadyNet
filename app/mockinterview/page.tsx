"use client";

export default function MockInterviewPage() {
  const handleBooking = () => {
    window.location.href = "https://your-calendly-link.com";
  };

  const goHome = () => {
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center px-4 py-10">
      <div className="max-w-3xl w-full">
        {/* HERO */}
        <div className="bg-white rounded-xl shadow p-8 text-center mb-6">
          <h1 className="text-3xl font-bold mb-3">
            Don’t risk failing your next .NET interview
          </h1>

          <p className="text-gray-600 mb-6">
            You already have the answers. Now let’s make sure you can actually
            explain them under pressure.
          </p>

          <button
            onClick={handleBooking}
            className="bg-black text-white px-8 py-4 rounded-lg text-lg font-semibold hover:scale-105 transition"
          >
            Book My Mock Interview — $149
          </button>

          <p className="text-sm text-gray-500 mt-3">
            ⏳ Limited slots available this week
          </p>
        </div>

        {/* PAIN */}
        <div className="bg-white rounded-xl p-6 shadow mb-6">
          <h2 className="text-xl font-semibold mb-4">
            Why most developers still fail
          </h2>

          <ul className="space-y-2 text-gray-700">
            <li>❌ You know the concept, but explain it poorly</li>
            <li>❌ You panic under pressure</li>
            <li>❌ Your answers sound too generic</li>
          </ul>
        </div>

        {/* SOLUTION */}
        <div className="bg-white rounded-xl p-6 shadow mb-6">
          <h2 className="text-xl font-semibold mb-4">What you’ll get</h2>

          <ul className="space-y-2 text-gray-700">
            <li>✔ Real interview simulation (30–45 min)</li>
            <li>✔ Questions asked in US companies</li>
            <li>✔ Direct feedback on your answers</li>
            <li>✔ Fix how you structure and explain</li>
          </ul>
        </div>

        {/* HOW IT WORKS */}
        <div className="bg-white rounded-xl p-6 shadow mb-6">
          <h2 className="text-xl font-semibold mb-4">How it works</h2>

          <ol className="space-y-2 text-gray-700 list-decimal list-inside">
            <li>Book a time slot</li>
            <li>Join a live mock interview</li>
            <li>Get direct feedback</li>
            <li>Improve immediately</li>
          </ol>
        </div>

        {/* CTA AGAIN */}
        <div className="bg-black text-white rounded-xl p-8 text-center mb-6">
          <h2 className="text-2xl font-bold mb-4">
            Be fully prepared before your real interview
          </h2>

          <button
            onClick={handleBooking}
            className="bg-white text-black px-8 py-4 rounded-lg text-lg font-semibold hover:scale-105 transition"
          >
            Book My Mock Interview — $149
          </button>

          <p className="mt-3 text-sm">
            Or go in unprepared and risk failing again
          </p>
        </div>

        {/* EXIT */}
        <div className="text-center">
          <button onClick={goHome} className="text-sm text-gray-500 underline">
            No thanks, I’ll try on my own
          </button>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(600); // 10 phút

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    // ⏳ Price increases in {minutes}:{seconds.toString().padStart(2, "0")}
    <div className="bg-red-100 text-red-600 px-4 py-2 rounded-lg text-sm mb-4 text-center">
      <p>
        ⏳ Launch price: $19 (soon $49) <br></br>
      </p>
    </div>
  );
}

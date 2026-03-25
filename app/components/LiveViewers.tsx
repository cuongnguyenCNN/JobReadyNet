"use client";

import { useEffect, useState } from "react";

export default function LiveViewers() {
  const [count, setCount] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      // random từ 3–12 người
      const random = Math.floor(Math.random() * 10) + 3;
      setCount(random);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 bg-white border shadow-lg px-4 py-2 rounded-xl text-sm">
      👀 {count} people are viewing this right now
    </div>
  );
}

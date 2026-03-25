"use client";

import { useEffect, useState } from "react";

export default function FakeHeatmap() {
  const [dots, setDots] = useState<any[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newDot = {
        id: Date.now(),
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      };

      setDots((prev) => [...prev, newDot]);

      // remove sau 2s
      setTimeout(() => {
        setDots((prev) => prev.filter((d) => d.id !== newDot.id));
      }, 2000);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {dots.map((dot) => (
        <span
          key={dot.id}
          className="fixed w-3 h-3 bg-red-500 rounded-full opacity-70 animate-ping pointer-events-none"
          style={{
            left: dot.x,
            top: dot.y,
          }}
        />
      ))}
    </>
  );
}

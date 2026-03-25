"use client";

import { useEffect, useState } from "react";

const fakeNames = [
  "Alex",
  "John",
  "Minh",
  "David",
  "Ankit",
  "Rahul",
  "Huy",
  "Sarah",
];

export default function FakeNotification() {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const name = fakeNames[Math.floor(Math.random() * fakeNames.length)];

      setMessage(`${name} just unlocked the full system 🔥`);
      setVisible(true);

      // ẩn sau 3s
      setTimeout(() => {
        setVisible(false);
      }, 3000);
    }, 8000); // mỗi 8s hiện 1 lần

    return () => clearInterval(interval);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-5 left-5 bg-white shadow-lg border px-4 py-3 rounded-xl text-sm animate-fade-in">
      {message}
    </div>
  );
}

"use client";
import { useMemo } from "react";

const variants = [
  {
    id: "pain",
    line1: "Stop Failing .NET Interviews",
    line2: "Even When You Know the Answers",
  },
  {
    id: "outcome",
    line1: "Pass Your Next .NET Interview",
    line2: "By Answering Like a Senior,",
  },
  {
    id: "insight",
    line1: "You Don’t Fail .NET Interviews",
    line2: "You Fail at Explaining Your Answers",
  },
  {
    id: "hybrid",
    line1: "Stop Failing .NET Interviews",
    line2: "Learn to Answer Like a Senior.",
  },
];

export default function HeroHeadline() {
  const variant = useMemo(() => {
    return variants[Math.floor(Math.random() * variants.length)];
  }, []);

  return (
    <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl">
      {variant.line1}
      <br />
      <span className="text-blue-600">{variant.line2}</span>
    </h1>
  );
}

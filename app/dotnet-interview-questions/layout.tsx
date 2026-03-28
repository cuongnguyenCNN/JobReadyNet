import { ReactNode } from "react";

export const metadata = {
  title: ".NET Interview Questions (Senior Answers)",
  description:
    "Real .NET interview questions with senior-level answers. Learn how to explain like a senior developer and pass interviews.",
};

export default function Layout({ children }: { children: ReactNode }) {
  return <section>{children}</section>;
}

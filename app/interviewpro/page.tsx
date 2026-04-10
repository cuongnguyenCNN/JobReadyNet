"use client";
import FakeHeatmap from "@/components/FakeHeatMap";
import GeoPricing from "@/components/GeoPricingComponent";
import LivePurchasePopup from "@/components/LivePurchasePopup";
import LiveViewers from "@/components/LiveViewers";
import HeroHeadline from "@/components/TestHeadLine";
import React from "react";

export default function LandingPageProNet() {
  const handleBuyClick = () => {
    // Track event
    if (window.gtag)
      window.gtag("event", "buy_click", {
        event_category: "engagement",
        event_label: "guide_19",
      });
    window.open(
      "https://noteflowai.lemonsqueezy.com/checkout/buy/f9ba06c7-64db-42bf-92f1-970bc6193609",
      "_blank",
      "noopener,noreferrer",
    );

    // Redirect sang checkout
    // window.location.href =
    //   "https://noteflowai.lemonsqueezy.com/checkout/buy/f9ba06c7-64db-42bf-92f1-970bc6193609";
  };

  return (
    <div className="bg-white text-gray-900 font-sans">
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-blue-50 to-white">
        <HeroHeadline></HeroHeadline>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {["You freeze on system design", "You give textbook answers"].map(
            (item, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-lg px-3 py-2 text-sm bg-gray-50"
              >
                ❌ {item}
              </div>
            ),
          )}
        </div>
        <p className="mt-6 text-lg text-gray-600 max-w-2xl">
          Learn how to explain systems, think in trade-offs, and answer like a
          senior developer — even if you’re not one yet.
        </p>

        <div className="mt-6 space-y-3">
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 text-sm max-w-xl">
            <div className="flex items-start gap-3">
              <img
                src="/pass.webp"
                alt="Michael T avatar"
                className="w-15 h-15 rounded-full object-cover"
              />

              <div>
                <p className="text-gray-500 text-xs mb-1">
                  Failed 3 interviews → landed a US remote job
                </p>

                <p className="italic text-gray-700 leading-relaxed">
                  “I knew the concepts, but I couldn’t explain them well. This
                  completely changed how I answer — especially system and
                  trade-offs.”
                </p>

                <p className="mt-2 font-semibold text-gray-900">
                  Michael T. · Senior .NET Developer @ Fintech Company
                </p>
              </div>
            </div>
          </div>

          {/* Trust signal */}
          {/* <div className="text-sm text-green-600 font-medium">
            ✅ Trusted by 1000+ .NET developers worldwide
          </div> */}
          <div className="text-sm text-green-600 font-medium">
            ✅ One guy told me: I failed 3 interviews even though I knew
            everything. This showed me WHY I was failing.
          </div>
          <div className="max-w-xl mx-auto mt-6 p-5 border border-gray-200 rounded-xl bg-gray-50 text-center">
            <h3 className="text-lg font-semibold mb-2">💸 The Hidden Cost</h3>

            <p className="font-medium mb-2">
              Every failed interview = a missed opportunity
            </p>
            <ul className="flex gap-4 text-gray-600 mb-3 justify-center">
              <li>Another rejection</li>
              <li>Another month stuck</li>
              <li>Another chance gone</li>
            </ul>

            {/* <p className="text-base mb-2">
              👉 One missed US remote job ={" "}
              <span className="font-semibold text-gray-900">
                $50,000+ in lost income
              </span>
            </p> */}

            <p className="text-sm text-gray-500 mb-3">
              Most developers don’t realize this. <br />
              They keep studying more… instead of fixing how they communicate.
            </p>

            <p className="text-sm">
              Suddenly,{" "}
              <span className="font-semibold">$19 is not expensive. </span>
              <span className="font-semibold">Staying stuck is.</span>
            </p>
          </div>
          <div className="text-sm text-red-500 font-semibold">
            ⏳ Price will increase to $29 soon
          </div>
        </div>

        <div className="mt-8 flex gap-4">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://noteflowai.lemonsqueezy.com/checkout/buy/f9ba06c7-64db-42bf-92f1-970bc6193609"
            className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:scale-105 transition"
          >
            🎁 Get Instant Access - $19
          </a>

          <a
            href="#example"
            className="px-8 py-4 rounded-xl text-lg border border-gray-300 hover:bg-gray-100 transition"
          >
            See Example
          </a>
        </div>

        <section className="py-20 px-6 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            After This Guide, You Will:
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Senior Answer Framework (step-by-step)",
              "Real .NET interview questions with deep answers",
              "How to explain trade-offs (what interviewers actually want)",
              "Common mistakes that make you sound junior",
            ].map((item, i) => (
              <div key={i} className="p-6 border rounded-xl">
                ✔ {item}
              </div>
            ))}
          </div>
        </section>
      </section>
      <section className="w-full py-20 ">
        <div className="max-w-6xl px-6 mx-auto">
          {/* Title */}
          <h2 className="mb-12 text-3xl font-bold text-center md:text-4xl">
            You have 2 choices:
          </h2>

          {/* 2 columns */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* LEFT - Pain */}
            <div className="p-8 border border-red-500/30 bg-red-500/10 rounded-2xl backdrop-blur">
              <h3 className="mb-6 text-xl font-semibold text-red-400">
                Stay stuck
              </h3>

              <ul className="space-y-4 text-gray">
                <li>❌ Memorizing answers like a junior</li>
                <li>❌ Failing interviews again and again</li>
                <li>❌ Watching less experienced devs get hired</li>
              </ul>
            </div>

            {/* RIGHT - Gain */}
            <div className="p-8 border border-green-500/30 bg-green-500/10 rounded-2xl backdrop-blur">
              <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-black bg-green-400 rounded-full">
                MOST CHOSEN
              </span>
              <h3 className="mb-6 text-xl font-semibold text-green-400">
                Level up
              </h3>

              <ul className="space-y-4 text-gray">
                <li>✅ Answer like a senior developer</li>
                <li>✅ Explain trade-offs with confidence</li>
                <li>✅ Walk into interviews knowing you’ll pass</li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <button
              onClick={handleBuyClick}
              className="cursor-pointer inline-block px-8 py-4 text-lg font-semibold bg-blue-600 text-white transition rounded-xl  hover:scale-105 hover:bg-gray-200"
            >
              👉 Get Instant Access
            </button>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50 text-center px-6">
        <h2 className="text-3xl font-bold">
          Already Trusted by 1000+ Developers
        </h2>

        <p className="mt-6 text-gray-600">
          This guide was downloaded by hundreds of .NET developers.
          <br />
          Some already used it to improve how they answer interviews.
        </p>
      </section>
      <section className="py-16 text-center">
        <h2 className="text-2xl font-bold">
          One Interview = Thousands of Dollars
        </h2>

        <p className="mt-4 text-gray-600">
          If this helps you pass just one interview, it’s worth far more than
          expected.
        </p>
      </section>
      {/* PROBLEM */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">This Might Sound Familiar</h2>

        <div className="grid md:grid-cols-3 gap-6 text-left">
          {[
            "You explained Scoped vs Singleton… but couldn’t explain a real production bug",
            "You know the theory… but freeze when asked 'why does this break?'",
            "You give correct answers… but still sound like a junior",
          ].map((item, i) => (
            <div key={i} className="bg-gray-50 p-6 rounded-xl shadow-sm">
              ❌ {item}
            </div>
          ))}
        </div>
      </section>

      {/* TRUTH */}
      <section className="py-20 bg-red-50 text-center px-6">
        <h2 className="text-3xl font-bold">The Truth Nobody Tells You</h2>

        <p className="mt-6 text-gray-700 max-w-2xl mx-auto text-lg">
          Interviews are not about knowledge.
          <br />
          They are about how you think under pressure.
        </p>
      </section>

      {/* SOLUTION */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold">
          This Guide Gives You a Thinking System
        </h2>

        <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
          Not another list of answers.
          <br />A repeatable way to handle ANY .NET interview question.
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[
            "Break down the problem clearly",
            "Explain the system behind it",
            "Talk about trade-offs like a senior",
          ].map((item, i) => (
            <div key={i} className="p-6 border rounded-xl">
              ✔ {item}
            </div>
          ))}
        </div>
      </section>

      {/* EXAMPLE (KILLER SECTION) */}
      <section id="example" className="py-20 bg-gray-50 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            Example Inside The Guide
          </h2>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <p className="font-semibold mb-4">Question:</p>
            <p className="mb-6">
              Why is injecting Scoped into Singleton dangerous?
            </p>

            <p className="font-semibold text-red-500">Junior Answer:</p>
            <p className="mb-6">"Because lifetime is different"</p>

            <p className="font-semibold text-green-600">Senior Answer:</p>
            <p>
              Scoped service is tied to a request lifecycle. Injecting it into
              Singleton creates a captured dependency that lives longer than
              intended → causing stale data, race conditions, or memory leaks in
              real systems.
            </p>
          </div>
        </div>
      </section>

      {/* ROI */}
      <section className="py-20 bg-blue-50 text-center px-6">
        <h2 className="text-3xl font-bold">
          One Interview Can Change Your Salary
        </h2>

        <p className="mt-6 text-gray-700 text-lg">
          Passing one interview can increase your income by hundreds of dollars
          per month.
          <br />
          This guide costs less than a few coffees.
        </p>
      </section>

      {/* OFFER */}
      <section className="py-20 text-center px-6">
        <div className="max-w-xl mx-auto border rounded-2xl p-10 shadow-lg">
          {/* <h2 className="text-4xl font-bold">$19</h2> */}

          <p className="mt-4 text-gray-600">
            One-time payment. Lifetime access.
          </p>
          {/* <GeoPricing></GeoPricing> */}
          <button
            onClick={handleBuyClick}
            className="cursor-pointer mt-8 inline-block bg-blue-600 text-white px-10 py-5 rounded-xl text-xl font-semibold hover:scale-105 transition"
          >
            Get Instant Access
          </button>
          <p className="mt-4 text-sm text-red-500">
            ⚠ Price will increase after adding more examples
          </p>
          <p className="mt-2 text-gray-500 text-sm">
            💡 7-day money-back guarantee — no questions asked
          </p>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center px-6">
        <h2 className="text-3xl font-bold">
          Next Interview — You Either Repeat The Same Mistakes
          <br />
          Or You Think Like a Senior
        </h2>

        <button
          onClick={handleBuyClick}
          className="cursor-pointer mt-6 inline-block bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:scale-105 transition"
        >
          Get the Guide Now
        </button>
        {/* <GeoPricing></GeoPricing> */}
      </section>
      <footer className="mt-24 text-center text-gray-500 text-sm pb-10">
        Built for developers preparing for .NET interviews by{" "}
        <a href="/">cuongnguyen author</a>
      </footer>
      <LiveViewers></LiveViewers>
      <LivePurchasePopup></LivePurchasePopup>
      <FakeHeatmap />
    </div>
  );
}

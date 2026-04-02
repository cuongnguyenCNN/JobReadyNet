import { useEffect, useState } from "react";
const COUNTRY_CONFIG = {
  US: { tier: "Tier1", price: 29 },
  UK: { tier: "Tier1", price: 29 },
  CA: { tier: "Tier1", price: 29 },
  AU: { tier: "Tier1", price: 29 },
  NZ: { tier: "Tier1", price: 29 },
  IE: { tier: "Tier1", price: 29 },
  SG: { tier: "Tier1", price: 29 },
  HK: { tier: "Tier1", price: 29 },
  JP: { tier: "Tier1", price: 29 },
  KR: { tier: "Tier1", price: 29 },

  DE: { tier: "Tier2", price: 19 },
  FR: { tier: "Tier2", price: 19 },
  NL: { tier: "Tier2", price: 19 },
  BE: { tier: "Tier2", price: 19 },
  AT: { tier: "Tier2", price: 19 },
  CH: { tier: "Tier2", price: 19 },
  SE: { tier: "Tier2", price: 19 },
  NO: { tier: "Tier2", price: 19 },
  FI: { tier: "Tier2", price: 19 },
  DK: { tier: "Tier2", price: 19 },
  IT: { tier: "Tier2", price: 19 },
  ES: { tier: "Tier2", price: 19 },
  PT: { tier: "Tier2", price: 19 },
  PL: { tier: "Tier2", price: 9 },
  CZ: { tier: "Tier2", price: 9 },
  RO: { tier: "Tier2", price: 9 },
  HU: { tier: "Tier2", price: 9 },
  GR: { tier: "Tier2", price: 9 },
  TR: { tier: "Tier2", price: 9 },
  RU: { tier: "Tier2", price: 9 },
  UA: { tier: "Tier2", price: 9 },
  RS: { tier: "Tier2", price: 9 },
  BG: { tier: "Tier2", price: 9 },
  HR: { tier: "Tier2", price: 9 },
  SK: { tier: "Tier2", price: 9 },
  SI: { tier: "Tier2", price: 9 },

  VN: { tier: "Tier2", price: 9 },
  TH: { tier: "Tier2", price: 9 },
  MY: { tier: "Tier2", price: 9 },
  ID: { tier: "Tier3", price: 5 },
  PH: { tier: "Tier3", price: 5 },

  BR: { tier: "Tier2", price: 9 },
  MX: { tier: "Tier2", price: 9 },
  AR: { tier: "Tier2", price: 9 },
  CL: { tier: "Tier2", price: 9 },
  CO: { tier: "Tier2", price: 9 },
  PE: { tier: "Tier3", price: 5 },

  IN: { tier: "Tier3", price: 5 },
  PK: { tier: "Tier3", price: 5 },
  BD: { tier: "Tier3", price: 5 },
  EG: { tier: "Tier3", price: 5 },
  NG: { tier: "Tier3", price: 5 },
  KE: { tier: "Tier3", price: 5 },
  ZA: { tier: "Tier3", price: 5 },
  GH: { tier: "Tier3", price: 5 },
  DZ: { tier: "Tier3", price: 5 },
  MA: { tier: "Tier3", price: 5 },
  TN: { tier: "Tier3", price: 5 },
  ET: { tier: "Tier3", price: 5 },

  AE: { tier: "Tier2", price: 19 },
  SA: { tier: "Tier2", price: 9 },
  QA: { tier: "Tier2", price: 19 },
  KW: { tier: "Tier2", price: 19 },

  IL: { tier: "Tier2", price: 19 },

  CN: { tier: "Tier2", price: 9 },
  TW: { tier: "Tier2", price: 19 },
};

const DEFAULT = { tier: "Tier3", price: 5 };

export default function GeoPricing() {
  const [geo, setGeo] = useState({ country: "", tier: "", price: 0 });
  const handleBuy = (url: string) => {
    if (window.gtag) {
      window.gtag("event", "buy_click", {
        event_category: "engagement",
        event_label: "pdf_pro_19",
      });
    }

    window.open(url, "_blank", "noopener,noreferrer");
  };
  const getUserLocation = async () => {
    const cached = localStorage.getItem("geoPricing");
    if (cached) return JSON.parse(cached);
    debugger;
    try {
      const res = await fetch("https://api.country.is/");
      const data: { country?: string } = await res.json();
      const countryCode = data.country ?? "unknown";
      debugger;
      const result = {
        country: data.country,
        ...(COUNTRY_CONFIG[countryCode as keyof typeof COUNTRY_CONFIG] ||
          DEFAULT),
      };

      if (data.country) {
        localStorage.setItem("geoPricing", JSON.stringify(result));
      }
      return result;
    } catch {
      return { country: "unknown", ...DEFAULT };
    }
  };

  useEffect(() => {
    getUserLocation().then(setGeo);
  }, []);

  if (!geo.country) return <p>Loading...</p>;

  return (
    <div style={{ textAlign: "center" }}>
      {geo.tier === "Tier1" && (
        <>
          <h2>$19 - Full Interview Pack</h2>
          <button
            onClick={() =>
              handleBuy(
                "https://noteflowai.lemonsqueezy.com/checkout/buy/f9ba06c7-64db-42bf-92f1-970bc6193609",
              )
            }
            className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-md"
          >
            🎁 Get Instant Access - $19
          </button>
        </>
      )}

      {geo.tier === "Tier2" && (
        <>
          <h2>$9,99 - Special Price</h2>
          <button
            onClick={() =>
              handleBuy(
                "https://noteflowai.lemonsqueezy.com/checkout/buy/eafef897-b5a8-4fe8-9efb-76d65bac0cc8",
              )
            }
            className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-md"
          >
            🎁 Get Instant Access - $9,99
          </button>
        </>
      )}

      {geo.tier === "Tier3" && (
        <>
          <h2>🎁 Special Regional Price: $5,99</h2>
          <p>Affordable access for your region</p>

          <button
            onClick={() =>
              handleBuy(
                "https://noteflowai.lemonsqueezy.com/checkout/buy/052b0e2a-3b9d-4370-b23f-480593c02cdc",
              )
            }
            className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-md"
          >
            🎁 Get Instant Access - $5,99
          </button>
        </>
      )}
    </div>
  );
}

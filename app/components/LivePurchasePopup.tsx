import { useEffect, useState } from "react";

const fakeNames: string[] = ["John", "Michael", "David", "Chris", "Alex"];
const countries: string[] = ["US 🇺🇸", "UK 🇬🇧", "CA 🇨🇦", "AU 🇦🇺"];

type DataType = {
  name: string;
  country: string;
};

function getRandomItem<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export default function LivePurchasePopup() {
  const [visible, setVisible] = useState<boolean>(false);
  const [data, setData] = useState<DataType | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const newData: DataType = {
        name: getRandomItem(fakeNames),
        country: getRandomItem(countries),
      };

      setData(newData);
      setVisible(true);

      const timeout = setTimeout(() => {
        setVisible(false);
      }, 4000);

      return () => clearTimeout(timeout);
    }, 15000); // mỗi 15s hiện 1 lần (đừng spam)

    return () => clearInterval(interval);
  }, []);

  if (!visible || !data) return null;

  return (
    <div className="fixed bottom-5 left-5 bg-white shadow-xl border border-gray-200 rounded-xl px-4 py-3 text-sm animate-fade-in">
      <p className="text-gray-800">
        <span className="font-semibold">{data.name}</span> from{" "}
        <span>{data.country}</span> just bought this 🔥
      </p>
    </div>
  );
}

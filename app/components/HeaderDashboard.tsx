type HeaderProps = {
  onOpenMenu: () => void;
};
export default function Header({ onOpenMenu }: HeaderProps) {
  return (
    <div className="flex items-center justify-between p-4 bg-white border-b">
      <button
        onClick={onOpenMenu}
        className="md:hidden bg-black text-white px-3 py-1 rounded"
      >
        ☰
      </button>

      <h1 className="font-semibold text-gray-800 text-lg">Dashboard</h1>

      <div>👤</div>
    </div>
  );
}

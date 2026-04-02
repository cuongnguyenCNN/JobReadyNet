// app/success/page.tsx
export default function Success() {
  return (
    <div className="p-6 text-center">
      <h2>✅ Application sent!</h2>

      <p className="mt-4">Want to pass this interview?</p>

      <a
        href="/login"
        className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded"
      >
        Get 150+ Questions - $19
      </a>
    </div>
  );
}

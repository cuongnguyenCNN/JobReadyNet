import { relatedPosts } from "@/lib/relatePosts";

export function Related({ slug }: { slug: string }) {
  const links = relatedPosts[slug] || [];

  return (
    <div className="mt-10 border-t pt-6">
      <h3 className="font-semibold mb-3">Related articles</h3>
      {links.map((l) => (
        <a
          key={l}
          href={`/blog/${l}`}
          className="block text-blue-600 underline"
        >
          → {l}
        </a>
      ))}
    </div>
  );
}

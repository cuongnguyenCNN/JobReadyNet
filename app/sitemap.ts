import { MetadataRoute } from "next";

async function getPosts() {
  // sau này fetch từ DB / CMS
  return [
    { slug: "dependency-injection-csharp" },
    { slug: "async-await-csharp" },
    { slug: "task-vs-thread-csharp" },
    { slug: "middleware-aspnet" },
    { slug: "garbage-collection-csharp" },
    { slug: "cqrs-pattern-csharp" },
    { slug: "linq-csharp" },
    { slug: "deadlock-csharp" },
    { slug: "boxing-unboxing-csharp" },
    { slug: "span-csharp" },
  ];
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://passdotnet.netlify.app";
  const posts = await getPosts();

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/dotnet-interview-questions`,
      lastModified: new Date(),
    },
    ...posts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(),
    })),
  ];
}

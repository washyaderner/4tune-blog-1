import Link from 'next/link';
import { getAllPosts } from '@/lib/mdx';

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent">
        Blog Posts
      </h1>
      <div className="grid gap-8">
        {posts.map((post) => (
          <article key={post.slug} className="group">
            <Link href={`/blog/${post.slug}`}>
              <div className="p-6 rounded-lg bg-black/50 border border-neutral-800 hover:border-teal-500/50 transition-all hover:bg-black/70">
                <h2 className="text-2xl font-bold mb-2 group-hover:text-teal-400 transition-colors">
                  {post.frontmatter.title}
                </h2>
                <p className="text-neutral-400 mb-4">
                  {post.frontmatter.description}
                </p>
                <div className="flex items-center gap-4">
                  <time className="text-sm text-neutral-500">
                    {new Date(post.frontmatter.date).toLocaleDateString()}
                  </time>
                  <div className="flex gap-2">
                    {post.frontmatter.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-teal-500/10 text-teal-400 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
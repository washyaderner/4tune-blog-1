import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPostSlugs } from '@/lib/mdx';
import { MDXContent } from '@/components/mdx/MDXComponents';

interface PostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = getAllPostSlugs();
  return posts;
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="prose prose-neutral dark:prose-invert mx-auto">
      <div className="mb-8">
        <h1 className="mb-2">{post.frontmatter.title}</h1>
        <div className="text-sm text-neutral-600 dark:text-neutral-400">
          <time>{new Date(post.frontmatter.date).toLocaleDateString()}</time>
          <div className="flex gap-2 mt-2">
            {post.frontmatter.tags.map((tag: string) => (
              <span
                key={tag}
                className="px-2 py-1 bg-teal-500/10 text-teal-500 rounded-full text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      <MDXContent content={post.content} />
    </article>
  );
}
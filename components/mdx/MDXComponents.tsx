"use client";

import Image from 'next/image';
import Link from 'next/link';

const components = {
  Image: (props: any) => <Image {...props} />,
  a: ({ href = '', ...props }) => {
    if (href.startsWith('http')) {
      return <a href={href} target="_blank" rel="noopener noreferrer" {...props} />;
    }
    return <Link href={href} {...props} />;
  },
  pre: ({ children, ...props }: { children: React.ReactNode }) => (
    <pre className="relative rounded-lg p-4 bg-neutral-900 overflow-x-auto" {...props}>
      {children}
    </pre>
  ),
  code: ({ children, ...props }: { children: React.ReactNode }) => (
    <code className="relative rounded bg-neutral-800 px-[0.3rem] py-[0.2rem] font-mono text-sm" {...props}>
      {children}
    </code>
  ),
};

interface MDXContentProps {
  content: string;
}

export function MDXContent({ content }: MDXContentProps) {
  return <div className="mdx-content">{content}</div>;
}
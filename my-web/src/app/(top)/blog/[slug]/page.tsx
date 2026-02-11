import Mdx from '@/components/mdx-component';
import { buttonVariants } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { allPosts } from 'contentlayer/generated';
import { format } from 'date-fns';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// slugからpostの詳細情報を取得してくる関数
async function getPostFromSlug(slug: string) {
  const post = allPosts.find((post) => post.slugAsParams === slug);

  return post;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const page = await getPostFromSlug(params.slug);

  if (!page) {
    return {};
  }

  return {
    title: page.title,
    description: page.description,
    openGraph: {
      type: 'article',
      locale: 'ja',
      url: siteConfig.url,
      title: siteConfig.name,
      description: siteConfig.description,
      siteName: siteConfig.name,
      // images: [`${siteConfig.url}/og.jpg`],
    },
    twitter: {
      card: 'summary_large_image',
      title: siteConfig.name,
      description: siteConfig.description,
      // images: [`${siteConfig.url}/og.jpg`],
      creator: 'kinn / naokikaneko',
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;
  const post = await getPostFromSlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="container max-w-3xl py-6 lg:py-10">
      <div>
        {post.date && (
          <time>Published on {format(post.date, 'yyyy/MM/dd')}</time>
        )}
        <h1 className="text-4xl lg:text-5xl font-extrabold mt-2 leading-tight">
          {post.title}
        </h1>
      </div>

      {post.image && (
        <Image
          src={post.image}
          alt={post.title}
          width={720}
          height={405}
          className="my-8 border rounded-md bg-muted"
        />
      )}
      {/* <div>{post.body.html}</div> */}
      <Mdx code={post.body.code} />

      <hr className="mt-12" />

      <div className="text-center py-8 lg:py-10">
        <Link
          href={'/blog'}
          className={cn(buttonVariants({ variant: 'secondary' }))}
        >
          全ての記事を見る
        </Link>
      </div>
    </article>
  );
}

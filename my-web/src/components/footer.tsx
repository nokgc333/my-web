import { siteConfig } from '@/config/site';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="container py-10 md:py-10 md:h-20">
        <p className="text-sm text-center md:text-left">
          Built by {''}
          <Link
            href={siteConfig.links.x}
            className="font-medium underline underline-offset-4"
            target="_blank"
            rel="noreferrer"
          >
            kinn / naokikaneko
          </Link>
          . Hosted on {''}
          <Link
            href={'fjldfjalfdjla'}
            className="font-medium underline underline-offset-4"
            target="_blank"
            rel="noreferrer"
          >
            Vercel
          </Link>
        </p>
      </div>
    </footer>
  );
}

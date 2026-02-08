import Link from 'next/link';

export default function MainNav() {
  return (
    <div className="flex items-center md:gap-10">
      <Link href={'/'} className="hidden md:flex items-center space-x-2">
        <span className='hidden font-bold sm:inline-block'>naokikaneko.com</span>
      </Link>
      <nav className="hidden md:flex gap-6">
        <Link
          href={'/blog'}
          className="text-lg sm:text-sm font-medium hover:text-foreground/50"
        >
          ブログ
        </Link>
        <Link
          href={'/feature'}
          className="text-lg sm:text-sm font-medium hover:text-foreground/50"
        >
          ブログ
        </Link>
      </nav>
    </div>
  );
}

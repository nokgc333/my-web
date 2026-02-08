import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { NavItem } from '@/types';

interface MobileNavProps {
  items: NavItem[];
}

export default function MobileNav({ items }: MobileNavProps) {
  return (
    <div className="fixed md:hidden top-16 inset-0 p-5 z-60 shadow-md animate-in slide-in-from-bottom-80">
      <div className="grid gap-6 p-4 text-popover-foreground bg-popover shadow-md">
        <Link href={'/'} className="font-bold">
          {siteConfig.name}
        </Link>
        <nav className="flex gap-4 text-sm">
          {items.map((item, index) => (
            <Link key={index} href={item.href}>
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}

import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import MainNav from '@/components/ui/main-nav';
import { topConfig } from '@/config/top';
import SiteFooter from '@/components/ui/site-footer';

export default function TopLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {/* headerコンポーネントでも良い */}
      <header className="container z-40 bg-background">
        <div className="flex items-center justify-between h-20 py-6">
          <MainNav items={topConfig.mainNav} />
          <nav>
            <Link
              href={'/login'}
              className={cn(
                buttonVariants({ variant: 'secondary', size: 'sm' }),
                'px-4'
              )}
            >
              ログイン
            </Link>
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <SiteFooter />
    </div>
  );
}

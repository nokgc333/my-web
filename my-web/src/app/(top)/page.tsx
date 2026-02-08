import Link from 'next/link';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { siteConfig } from '@/config/site';

export default function TopPage() {
  return (
    <>
      <main>
        <section className="pt-6 md:pt-10 pb-6 md:pb-10 lg:py-32">
          <div className="container text-center flex flex-col items-center gap-4 max-w-[64rem]">
            <Link
              href={siteConfig.links.x}
              className="bg-muted px-4 py-1.5 rounded-2xl text-sm font-medium"
            >
              Hello X
            </Link>

            <h1 className="font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
              naokikaneko.com
            </h1>

            <p>this is the "naokikaneko.com".</p>
            <p className="text-muted-foreground sm:text-xl leading-normal max-w-[42rem]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
              ipsum molestias saepe voluptas, libero tempora nobis, consequuntur
              ex quos voluptatem sunt quaerat suscipit totam aut numquam,
              eligendi iure aliquid. Fugit.
            </p>

            <div className="space-x-4">
              <Link
                href={'/login'}
                className={cn(buttonVariants({ size: 'lg' }))}
                target="_blank"
                rel="noreferrer"
              >
                login
              </Link>
              <Link
                href={siteConfig.links.github}
                className={cn(
                  buttonVariants({ size: 'lg', variant: 'secondary' })
                )}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </Link>
            </div>
          </div>
        </section>

        <section
          id="features"
          className="container py-8 md:py-12 lg:py-24 bg-slate-50"
        >
          <div className="text-center max-w-[58rem] mx-auto space-y-6">
            <h2 className="text-3xl md:text-6xl font-extrabold">about</h2>
            <p className="sm:text-lg sm:leading-7 text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
              provident architecto dolor iusto, odit perferendis odio laboriosam
              dolorem molestiae nulla reprehenderit doloribus repellat rem
              labore quaerat ipsum? Dolore, molestiae animi!
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

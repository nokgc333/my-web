import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function TopPage() {
  return (
    <>
      <main>
        <section className="pt-6 md:pt-10 pb-6 md:pb-10 lg:py-32">
          <div className="container text-center flex flex-col items-center gap-4 max-w-[64rem]">
            <Link
              href={'/'}
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
              >
                login
              </Link>
              <Link
                href={'/'}
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
      </main>
    </>
  );
}

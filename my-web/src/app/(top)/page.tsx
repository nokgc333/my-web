import Link from 'next/link';

export default function TopPage() {
  return (
    <>
      <main>
        <section className="pt-6 md:pt-10 pb-6 md:pb-10 lg:py-32">
          <div className="container text-center flex flex-col items-center gap-4 max-w-[64rem]">
            <Link href={'/'}>X</Link>

            <h1>naokikaneko.com</h1>
            <p>this is the "naokikaneko.com".</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio ipsum molestias saepe voluptas, libero tempora nobis, consequuntur ex quos voluptatem sunt quaerat suscipit totam aut numquam, eligendi iure aliquid. Fugit.</p>
          </div>
        </section>
      </main>
    </>
  );
}

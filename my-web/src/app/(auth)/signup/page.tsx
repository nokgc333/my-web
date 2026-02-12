import { buttonVariants } from '@/components/ui/button';
import AuthForm from '@/components/auth/auth-form';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function Signup() {
  return (
    <div className="container grid flex-col lg:grid-cols-2 items-center justify-center h-screen w-screen lg:px-0 lg:max-w-none">
      <Link
        href={'/login'}
        className={cn(
          buttonVariants({ variant: 'secondary' }),
          'absolute left-8 top-8'
        )}
      >
        ログイン
      </Link>
      <div className="hidden lg:block h-full bg-muted" />
      <div className="flex flex-col justify-center space-y-6 w-full sm:w-[350px] mx-auto">
        <div className="text-center space-y-3">
          <h1 className="text-2xl font-semibold tracking-tight">
            Create Account
          </h1>
          <p className="text-sm text-muted-foreground">You can create new account</p>
        </div>

        <AuthForm />

        <p className="text-sm tracking-wide px-5 text-center text-muted-foreground">
          <Link href={'/terms'} className="underline underline-offset-4">
            利用規約
          </Link>
          と
          <Link href={'/privacy'} className="underline underline-offset-4">
            プライバシーポリシー
          </Link>
          に同意します
        </p>
      </div>
    </div>
  );
}

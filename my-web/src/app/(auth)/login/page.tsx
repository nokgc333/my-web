import AuthForm from '@/components/auth/auth-form';
import Link from 'next/link';

export default function Login() {
  return (
    <div className="container flex flex-col items-center justify-center  space-y-6 h-screen w-screen">
      <div className="flex flex-col justify-center gap-4 w-full sm:w-[350px] mx-auto">
        <div className="text-center space-y-3">
          <h1 className="text-2xl font-semibold tracking-tight">
            Welcome Back
          </h1>
          <p className="text-sm text-muted-foreground">メールアドレスを入力</p>
        </div>

        <AuthForm />

        <p className="text-sm px-8 text-center text-muted-foreground">
          <Link href={'/signup'} className="underline underline-offset-4">
            アカウントを持っていませんか？
          </Link>
        </p>
      </div>
    </div>
  );
}

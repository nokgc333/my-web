'use client';

import { cn } from '@/lib/utils';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { buttonVariants } from '../ui/button';
import { Icon } from '../icon';
import { signIn } from 'next-auth/react';

export default function AuthForm() {
  return (
    <div className="grid gap-6">
      <form>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label htmlFor="email">メールアドレス</Label>
            <Input id="email" placeholder="name@example.com" type="email" />
          </div>
          <button className={cn(buttonVariants())}>
            メールアドレスでログイン
          </button>
        </div>
      </form>

      <div className="relative">
        <div className="absolute flex items-center inset-0">
          <span className="w-full border-t"></span>
        </div>
        <div className="relative flex justify-center text-xs">
          <span className="text-muted-foreground px-2 bg-background">
            または
          </span>
        </div>
      </div>

      <button
        className={cn(buttonVariants({ variant: 'outline' }))}
        onClick={() => signIn('github')}
      >
        <Icon.github />
        GitHub
      </button>
    </div>
  );
}

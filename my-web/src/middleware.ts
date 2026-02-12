import { getToken } from 'next-auth/jwt';
import withAuth from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
  async function middleware(req) {
    // トークンを取得したいとき
    const token = await getToken({ req });

    // 真偽値(“!!”で強制的に真偽値“true or false”に変換できる)
    const isAuth = !!token;

    // '/login'と'/register'ページに訪れたときのみリダイレクト
    const isAuthPage =
      req.nextUrl.pathname.startsWith('/login') ||
      req.nextUrl.pathname.startsWith('/register');

    if (isAuthPage) {
      // 「req.url」を付けることで、絶対パスのURLが第2引数に含まれる
      if (isAuth) {
        return NextResponse.redirect(new URL('/dashboard', req.url));
      }

      // 認証状態でなければnullを返す
      return null;
    }

    // dashboardページに訪れたとき、認証していないとき(ユーザーがtokenを持っていないとき)、'/login'ページへリダイレクト
    if (!isAuth) {
      return NextResponse.redirect(new URL('/login', req.url));
    }
  },
  {
    callbacks: {
      async authorized() {
        return true;
      },
    },
  }
);

export const config = {
  matcher: ['/dashboard/:path*', '/editor/:path', '/login', '/register'],
};

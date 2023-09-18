import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { getServerSession } from 'next-auth';

import SessionProvider from '@/providers/session-provider';
import ApolloClientProvider from '@/providers/apollo-provider';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import './globals.css';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nerdflix',
  description: 'An application built by nerds',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body>
        <SessionProvider session={session}>
          <ApolloClientProvider>{children}</ApolloClientProvider>
        </SessionProvider>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS}`}
        />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', '${process.env.GOOGLE_ANALYTICS}');
        `}
        </Script>
      </body>
    </html>
  );
}

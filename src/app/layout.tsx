import type { Metadata } from 'next';
import { Noto_Serif } from 'next/font/google';
import localFont from 'next/font/local';

import Header from '@/components/layout/header/Header';

import '../styles/globals.scss';

const NotoSerif = Noto_Serif({
  subsets: ['latin'],
});

const GillSansNovaFont = localFont({
  src: [
    {
      path: '../../public/fonts/gill-sans-nova/gillsansnova_book.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-gill-sans-nova',
});

export const metadata: Metadata = {
  title: 'Witcher Fan Site',
  description: 'Witcher 3 fan site made by Teodor Stanoev',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${NotoSerif.className} ${GillSansNovaFont.variable}`}
    >
      <body>
        <Header id="app-header" />
        {children}
      </body>
    </html>
  );
}

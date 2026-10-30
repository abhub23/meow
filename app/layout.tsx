import type { Metadata } from 'next';
import { Bricolage } from '@/utils/fonts';
import { ThemeProvider } from 'next-themes';
import { QueryProvider } from '@/lib/QueryProvider';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://meoww.abdullahtech.dev'),
  title: 'Meoww - Cat catalogue',
  icons: {
    icon: '/cat.webp',
  },
  description: 'A playful cat catalogue for browsing breeds and adorable cat portraits.',

  keywords: [
    'Cats',
    'Cat catalogue',
    'Cat breeds',
    'Meoww App',
    'Meoww Website',
    'Cat Father',
    'Cat Parent',
    'Cat website',
    'All about cat',
    'cute cats',
    'cat gallery',
    'feline breeds',
    'cats are adorable',
    'cat collection',
  ],
  authors: {
    url: 'https://github.com/abhub23',
    name: 'Abdullah Mukri',
  },
  publisher: 'Abdullah Mukri',

  twitter: {
    card: 'summary_large_image',
    site: '@abdullah_twt23',
    creator: '@abdullah_twt23',
    title: 'abdullah_twt23',
    description: 'Cat catalogue for browsing breeds and portraits',
    images: {
      url: 'https://abdullahtech.dev/og-image.png',
      type: 'image/png',
    },
  },

  appLinks: {
    web: {
      url: new URL('https://meoww.abdullahtech.dev'),
    },
  },

  category: 'Animal Audios',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${Bricolage}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <QueryProvider>{children}</QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

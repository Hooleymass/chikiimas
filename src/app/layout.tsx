import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import './index.scss'
import { Providers } from "./providers";
import AppWrapper from "./AppWrapper";
import Header from "@/components/header/Header";
import SideBar from "@/components/SideBar";
import ScrollToTop from "@/components/ScrollToTop";
import HeroBanner from "./home/heroBanner/HeroBanner";
import SocialBar from "@/components/Ads/Social";
import DirectLink from "../components/Ads/DirectLink";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/next';
import SocialBarMe from "@/components/Ads.me/Social.me";
import DirectLinkMe from "@/components/Ads.me/DirectLink";
import Template from "@/components/Ads/Template";

export const dynamic = 'force-static';
export const revalidate = 600;

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: 'Chikiimass',
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL ? new URL(process.env.NEXT_PUBLIC_SITE_URL) : undefined,
  description: 'Enjoy the videos and music you love, and share it all with friends, family, and the world on ChikiiMass.',
  generator: 'Chikiimass',
  applicationName: 'Chikiimass',
  referrer: 'origin-when-cross-origin',
  keywords: ['Chikiimass', 'tv', 'live tv', 'video', 'sharing', 'camera phone', 'video phone', 'free', 'upload'],
  authors: [{ name: 'chikii' }, { name: 'mass', url: 'https://hooleymass.dev' }],
  creator: 'ChikiiMass',
  publisher: 'Chikiimass',
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  twitter: {
    card: 'app',
    title: 'Chikiimass',
    description: 'Enjoy the videos and music you love, and share it all with friends, family, and the world on ChikiiMass.',
    siteId: '',
    creator: '@chikiimass',
    creatorId: '',
    images: {
      url: 'https://pub-2af5a0856a4a42c3b267a44f15493caf.r2.dev/chikiimass/media/chikiimass-removebg-preview(1).png',
      alt: 'chikiimass Logo'
    },
    app: {
      name: 'twitter_app',
      id: {
        iphone: 'twitter_app://iphone',
        ipad: 'twitter_app://ipad',
        googleplay: 'twitter_app://googleplay'
      },
      url: {
        iphone: 'https://iphone_url',
        ipad: 'https://ipad_url'
      }
    }
  },
  appLinks: {
    ios: {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/apps`,
      app_store_id: 'app_store_id'
    },
    android: {
      package: 'com.example.android.package',
      app_name: 'Chikiimass'
    },
    web: {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
      should_fallback: true
    }
  },
  category: 'entertainment',
  verification: {
    google: process.env.GOOGLE_VERIFICATION || 'google',
    yahoo: process.env.YAHOO_VERIFICATION || 'yahoo',
    yandex: process.env.YANDEX_VERIFICATION || 'yandex',
    other: {
      me: ['chikiimass@gmail.com', `${process.env.NEXT_PUBLIC_SITE_URL}`]
    }
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || '/',
    media: {
      'only screen and (max-width: 600px)': process.env.NEXT_PUBLIC_SITE_URL ? `${process.env.NEXT_PUBLIC_SITE_URL}/mobile` : '/'
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <AppWrapper>
            <Template>
              <SideBar />
              <Analytics />
              <SocialBar />
              <SocialBarMe />
              { /* <DirectLinkMe /> */}
              <Header />
              <ScrollToTop>
                {children}
                <SpeedInsights />
              </ScrollToTop>
              <HeroBanner />
            </Template>
          </AppWrapper>
        </Providers>
      </body>
    </html>
  );
}

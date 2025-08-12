import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Script from "next/script";

const inter = Inter({
    subsets: ["latin"],
    display: "swap", // рекомендовано для предотвращения FOUT
});

export const metadata: Metadata = {
    title: "Simple Hidden AI - Ace Interviews with Invisible AI Assistant",
    description: "Use powerful AI tools during interviews or screen sharing sessions — completely invisible to others. Your secret edge to perform with confidence.",
    keywords: ["AI assistant", "interview help", "hidden AI", "screen sharing", "technical interview"],
    authors: [{ name: "Simple Hidden AI" }],
    creator: "Simple Hidden AI",
    publisher: "Simple Hidden AI",
    icons: {
        icon: '/favicon.ico',
    },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <head>
            {/* Google Tag Manager */}
            <Script id="gtm" strategy="afterInteractive" type="text/plain" data-cookieconsent="statistics">
              {`
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-TPWRNL5M');
              `}
            </Script>

            <link rel="preload" href="/logo.webp" as="image" type="image/webp" />
            <link rel="preload" href="/app-ui.webp" as="image" type="image/webp" />
            <link rel="dns-prefetch" href="//fonts.googleapis.com" />
            <link rel="icon" href="/favicon.ico" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
            <meta name="theme-color" content="#7D58D9" />
            <meta name="color-scheme" content="light dark" />
            <script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="16a9ac60-a151-41aa-9f0b-7e90d7855310" type="text/javascript" async></script>

            {/* Google tag (gtag.js) loader in head without gating to allow detection */}
            <Script
              src="https://www.googletagmanager.com/gtag/js?id=AW-17468243127"
              strategy="afterInteractive"
            />
            {/* Consent Mode default (denied) and init */}
            <Script id="gtag-consent-default" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);} 
                gtag('consent', 'default', {
                  'ad_storage': 'denied',
                  'analytics_storage': 'denied',
                  'functionality_storage': 'denied',
                  'personalization_storage': 'denied',
                  'security_storage': 'granted'
                });
                gtag('js', new Date());
              `}
            </Script>
            {/* Update consent based on Cookiebot categories when ready */}
            <Script id="gtag-consent-update" strategy="afterInteractive">
              {`
                window.addEventListener('CookiebotOnConsentReady', function() {
                  try {
                    var stats = window.Cookiebot && window.Cookiebot.consent && window.Cookiebot.consent.statistics;
                    var marketing = window.Cookiebot && window.Cookiebot.consent && window.Cookiebot.consent.marketing;
                    gtag('consent', 'update', {
                      'analytics_storage': stats ? 'granted' : 'denied',
                      'ad_storage': marketing ? 'granted' : 'denied'
                    });
                  } catch (e) {}
                });
              `}
            </Script>
            {/* GA4 config */}
            <Script id="gtag-ga4-config" strategy="afterInteractive">
              {`
                gtag('config', 'G-CQCY7ZYPNL');
              `}
            </Script>
            {/* Google Ads (AW) config */}
            <Script id="gtag-ads-config" strategy="afterInteractive">
              {`
                gtag('config', 'AW-17468243127');
              `}
            </Script>
        </head>
        <body className={inter.className}>
            {/* Google Tag Manager (noscript) */}
            <noscript>
              <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TPWRNL5M" height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe>
            </noscript>

            <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50">
                Skip to main content
            </a>
            {children}
        </body>
    </html>
  );
}

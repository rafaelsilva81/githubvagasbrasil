import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />

        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <meta name="author" content="@rafaelsilva81" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        {/* OG Tags */}
        <meta
          property="og:url"
          content="https://githubvagasbrasil.vercel.app/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Github Vagas Brasil" />
        <meta
          property="og:description"
          content="Divulgação de vagas para desenvolvedores brasileiros através do Github"
        />
        <meta
          property="og:image"
          content="https://githubvagasbrasil.vercel.app/og-image.png"
        />
        {/* Twitter tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:domain"
          content="githubvagasbrasil.vercel.app"
        />
        <meta
          property="twitter:url"
          content="https://githubvagasbrasil.vercel.app/"
        />
        <meta name="twitter:title" content="Github Vagas Brasil" />
        <meta
          name="twitter:description"
          content="Divulgação de vagas para desenvolvedores brasileiros através do Github"
        />
        <meta
          name="twitter:image"
          content="https://githubvagasbrasil.vercel.app/og-image.png"
        />
      </Head>
      <body className="text-primary bg-background">
        <Main />
        <NextScript />

        {/* Analytics */}
        <Script
          async
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-1QYEWHEEZP"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-1QYEWHEEZP');
          `,
          }}
        />
      </body>
    </Html>
  );
}

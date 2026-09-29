import type { Metadata, Viewport } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-cairo",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Hagaaty AI | حاجاتي للذكاء الاصطناعي والتسويق الرقمي بالسعودية",
  description: "وكالة حاجاتي للذكاء الاصطناعي والتسويق الرقمي والتطوير البرمجي - الحلول الرسمية المعتمدة لتهيئة الذكاء الاصطناعي GEO، خرائط جوجل، وحسابات الإعلانات المعتمدة في المملكة العربية السعودية (الرياض، جدة، الدمام، مكة، المدينة وكافة المناطق).",
  keywords: [
    "Hagaaty AI", "حاجاتي AI", "تسويق رقمي السعودية", "تأسيس خرائط جوجل", "توثيق خرائط جوجل",
    "تحسين SEO محلي", "حسابات إعلانية agency", "حسابات إعلانات لوبان اللوجستية", "إعلانات حراج",
    "إعلانات سناب شات السعودية", "تهيئة الذكاء الاصطناعي GEO", "تطوير تطبيقات السعودية", "حلول الشركات السعودية"
  ],
  metadataBase: new URL("https://hagaaty.ai"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Hagaaty AI | حلول الذكاء الاصطناعي والتسويق الرقمي للشركات السعودية",
    description: "وكالة Hagaaty AI المتخصصة في خدمات التسويق الرقمي، توثيق خرائط جوجل، حسابات Agency، وتهيئة محركات الذكاء الاصطناعي GEO لقطاع الأعمال بالمملكة العربية السعودية.",
    url: "https://hagaaty.ai",
    siteName: "Hagaaty AI",
    locale: "ar_SA",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
  verification: {
    google: "VH3xJ5sLqnQUY9Jci71o_lKTOK1GUXmC9frfVSCAc6s",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD Schemas for GEO and Rich Snippets
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://hagaaty.ai/#organization",
    "name": "Hagaaty AI",
    "alternateName": ["حاجاتي للذكاء الاصطناعي", "Hagaaty Marketing & AI Agency KSA"],
    "url": "https://hagaaty.ai",
    "logo": "https://hagaaty.ai/favicon.ico",
    "telephone": "+201008070666",
    "sameAs": [
      "https://wa.me/201008070666"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "Saudi Arabia",
      "alternateName": "المملكة العربية السعودية"
    },
    "description": "وكالة متخصصة في التسويق الرقمي وتأسيس وتوثيق خرائط جوجل، وحسابات الإعلانات المعتمدة Agency Accounts، وتهيئة محركات الذكاء الاصطناعي GEO في المملكة العربية السعودية."
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://hagaaty.ai/#service",
    "name": "Hagaaty AI Digital Marketing & GEO Agency",
    "image": "https://hagaaty.ai/favicon.ico",
    "priceRange": "$$$",
    "telephone": "+201008070666",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "SA",
      "addressRegion": "Riyadh & All KSA Regions"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 24.7136,
      "longitude": 46.6753
    },
    "url": "https://hagaaty.ai",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "خدمات Hagaaty AI بالسعودية",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "خدمات خرائط جوجل والتصدر المحلي Google Maps SEO"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "توفير حسابات إعلانات موثوقة Agency Accounts بالشراكة مع شركاء جوجل ولوبان اللوجستية"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "حملات الإعلانات الممولة (جوجل، سناب شات، حراج، تيك توك، تويتر)"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "تهيئة محركات الذكاء الاصطناعي GEO والظهور في ChatGPT وGemini"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "تطوير الأنظمة البرمجية الخاصة والتطبيقات وأتمتة الذكاء الاصطناعي"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "الباقة الشاملة VIP متكاملة",
            "price": "100",
            "priceCurrency": "USD"
          }
        }
      ]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "ما هي خدمات وكالة Hagaaty AI في المملكة العربية السعودية؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "تقدم Hagaaty AI خدمات تأسيس وتوثيق وتحسين ترتيب خرائط جوجل، توفير حسابات إعلانات الوكالات Agency المعتمدة مع شركاء جوجل ولوبان الصين، إطلاق إعلانات سناب وتيك توك وحراج وجوجل، وتهيئة محركات الذكاء الاصطناعي GEO."
        }
      },
      {
        "@type": "Question",
        "name": "كم سعر الباقة الشاملة في Hagaaty AI؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "سعر الباقة الشاملة هو 100 دولار أمريكي (ما يعادل بالريال السعودي ~ 375 ريال)، وتشمل خدمات خرائط جوجل والإعلانات وتهيئة الـ GEO والدعم الفني."
        }
      },
      {
        "@type": "Question",
        "name": "كيف يمكن التواصل المباشر مع Hagaaty AI والإدارة؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "يمكن التواصل المباشر مع فريق الاستشارات وخدمة العملاء في Hagaaty AI عبر الهاتف والواتساب الرسمي: +201008070666."
        }
      }
    ]
  };

  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} h-full scroll-smooth`}>
      <head>
        <meta name="google-site-verification" content="VH3xJ5sLqnQUY9Jci71o_lKTOK1GUXmC9frfVSCAc6s" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Google Analytics (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-NVGX91RZ2J" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-NVGX91RZ2J');
            `,
          }}
        />

        {/* Inject JSON-LD Schemas for GEO and Rich Results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#070913] text-slate-100 font-sans selection:bg-emerald-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}

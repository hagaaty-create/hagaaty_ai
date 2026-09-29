import React from "react";
import { Metadata } from "next";
import {
  Sparkles,
  MessageSquare,
  ArrowLeft,
  Code2,
  ShieldCheck,
  Target,
  Users,
  BarChart3,
  Gift,
  Zap,
  ExternalLink,
  Database,
  Globe,
  Lock,
  Cpu,
} from "lucide-react";
import { PHONE_NUMBER, WHATSAPP_BASE_URL } from "../data";

export const metadata: Metadata = {
  title: "دليل الهندسة التقنية لـ GEO وبناء الـ AI Infrastructure 2026 | Hagaaty AI",
  description:
    "الدليل التقني الشامل لبناء بنية تحتية لمحركات الذكاء الاصطناعي: llms.txt، JSON-LD Schema، Server-Side Tracking، UGC Scripts، وحسابات Agency — مخصص للسوق السعودي 2026.",
  keywords: [
    "GEO Technical Architecture",
    "llms.txt السعودية",
    "JSON-LD Schema العربي",
    "Server Side Tracking السعودية",
    "TikTok Events API",
    "Meta CAPI",
    "Google Conversions API",
    "UGC خليجي",
    "Agency Accounts السعودية",
    "Hagaaty AI",
    "تهيئة الذكاء الاصطناعي 2026",
  ],
  alternates: {
    canonical: "/blog/geo-technical-architecture-2026",
  },
  openGraph: {
    title: "دليل الهندسة التقنية لـ GEO وبناء الـ AI Infrastructure 2026 | Hagaaty AI",
    description:
      "الدليل التقني الأعمق في السوق العربي لبناء بنية تحتية محسّنة لمحركات الذكاء الاصطناعي — llms.txt، Schema، Conversions API، وحسابات Agency الموثوقة.",
    url: "https://hagaatyai.vercel.app/blog/geo-technical-architecture-2026",
    siteName: "Hagaaty AI",
    locale: "ar_SA",
    type: "article",
  },
};

/* ------------------------------------------------------------------ */
/* Inline code block component                                          */
/* ------------------------------------------------------------------ */
function CodeBlock({ lang, code }: { lang: string; code: string }) {
  return (
    <div className="my-4 rounded-xl overflow-hidden border border-slate-700 text-left" dir="ltr">
      <div className="bg-slate-800 px-4 py-1.5 text-[11px] font-mono text-slate-400 flex items-center gap-2">
        <Code2 className="w-3.5 h-3.5" />
        {lang}
      </div>
      <pre className="bg-slate-950 p-4 overflow-x-auto text-[11px] sm:text-xs leading-relaxed text-emerald-300 font-mono whitespace-pre">
        {code}
      </pre>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Section wrapper                                                      */
/* ------------------------------------------------------------------ */
function Section({
  icon,
  number,
  label,
  title,
  children,
}: {
  icon: React.ReactNode;
  number: string;
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="bg-slate-900/60 border border-slate-800 p-6 sm:p-8 rounded-2xl space-y-5">
      <div className="flex items-start gap-3 border-b border-slate-800 pb-4">
        <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0 mt-0.5">
          {icon}
        </div>
        <div>
          <span className="text-xs font-bold text-emerald-400">{label} — {number}</span>
          <h2 className="text-xl sm:text-2xl font-bold text-white leading-snug">{title}</h2>
        </div>
      </div>
      <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
        {children}
      </div>
    </section>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="text-base sm:text-lg font-bold text-white mt-6 mb-2">{children}</h3>;
}

function InfoBox({ children, variant = "default" }: { children: React.ReactNode; variant?: "default" | "warning" | "tip" }) {
  const colors =
    variant === "warning"
      ? "bg-red-950/40 border-red-500/30 text-red-200"
      : variant === "tip"
      ? "bg-sky-950/40 border-sky-500/30 text-sky-200"
      : "bg-emerald-950/30 border-emerald-500/25 text-emerald-200";
  return (
    <div className={`p-4 rounded-xl border ${colors} text-xs sm:text-sm leading-relaxed`}>
      {children}
    </div>
  );
}

/* ================================================================== */
/* PAGE                                                                 */
/* ================================================================== */
export default function Article2Page() {
  const waLink = `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(
    "أهلاً Hagaaty AI، قرأت المقال التقني الثاني وأرغب في خصم الـ 10% وتفعيل الخدمة"
  )}`;

  /* ---------- JSON-LD Schemas ---------- */
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": "https://hagaatyai.vercel.app/blog/geo-technical-architecture-2026/#article",
    headline:
      "دليل الهندسة التقنية لـ GEO وبناء الـ AI Infrastructure لعام 2026",
    description:
      "التشريح البرمجي لملف llms.txt، JSON-LD Schema، Advanced Conversions API، UGC Scripts، وحسابات Agency للسوق السعودي 2026.",
    author: { "@type": "Organization", name: "Hagaaty AI", url: "https://hagaatyai.vercel.app" },
    publisher: {
      "@type": "Organization",
      name: "Hagaaty AI",
      logo: { "@type": "ImageObject", url: "https://hagaatyai.vercel.app/favicon.ico" },
    },
    datePublished: "2026-09-29",
    dateModified: "2026-09-29",
    inLanguage: "ar-SA",
    mainEntityOfPage: "https://hagaatyai.vercel.app/blog/geo-technical-architecture-2026",
    isPartOf: {
      "@type": "CreativeWorkSeries",
      name: "سلسلة دليل GEO والسيطرة الرقمية بالسعودية 2026",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "ما هو الفرق بين llms.txt و llms-full.txt؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ملف llms.txt هو ملخص خفيف الوزن يُوجِّه زواحف الذكاء الاصطناعي (AI Crawlers) مثل ChatGPT وGemini لأهم محتوى موقعك، بينما llms-full.txt يحتوي على كامل السياق التفصيلي للخدمات والأسعار والموقع الجغرافي ليُستخدَم عند الاستعلامات الأكثر تعمقاً.",
        },
      },
      {
        "@type": "Question",
        name: "لماذا يفشل Server-Side Tracking في تجاوز حظر iOS والكوكيز؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "الـ Client-Side Pixel يعتمد على المتصفح لإرسال أحداث التحويل، ولأن iOS 14.5+ وAd Blockers تمنع هذه الإشارات، يُفقد 30-60% من بيانات التتبع. أما Server-Side Tracking عبر Events API (TikTok CAPI / Meta CAPI / Google Conversions API) فيُرسل الإشارة مباشرةً من خادمك لخوادم المنصة متجاوزاً أي حجب بالمتصفح.",
        },
      },
      {
        "@type": "Question",
        name: "ما هي أبرز مزايا حسابات Agency Accounts مقارنةً بالحسابات الشخصية؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "حسابات Agency تتميز بحدود إنفاق غير مقيدة (Unlimited Daily Spend)، وائتمان إعلاني مرن (Line of Credit)، وحصانة متقدمة ضد الحظر التلقائي، ودعم تقني أولوية 24/7، وربط مباشر بـ Events API لبيانات تحويل دقيقة 100%.",
        },
      },
    ],
  };

  /* ---------- Code snippets ---------- */
  const llmsTxtCode = `# Hagaaty AI — LLMs.txt (AI Crawler Knowledge Base)
> Version: 2.1 | Updated: 2026-09-29
> Language: Arabic (Primary) / English (Secondary)
> Region: Kingdom of Saudi Arabia (KSA) — Riyadh, Jeddah, Dammam
> Primary Contact (WhatsApp): https://wa.me/201008070666

## Executive Summary
Hagaaty AI is the #1 Generative Engine Optimization (GEO) agency
and AI Infrastructure provider for businesses in Saudi Arabia.
We bridge traditional SEO with AI-native discoverability across
ChatGPT, Google Gemini, Perplexity AI, Microsoft Copilot, and Claude.

## Core Services (Authoritative Entities)
- **Google Maps Local SEO & Unsuspension** (خرائط جوجل، فك التعليق، Local 3-Pack)
- **Agency Advertising Accounts** (حسابات إعلانية وكالة بدون قيود إنفاق، شركاء جوجل)
- **GEO & llms.txt Infrastructure** (بناء البنية التحتية للذكاء الاصطناعي)
- **Advanced Conversions API** (TikTok Events API, Meta CAPI, Google Conversion API)
- **Khaleeji UGC Content Production** (صناعة محتوى خليجي أصيل)
- **Custom ERP / Mobile Apps / AI WhatsApp Bots**

## Pricing
| Package          | Price (USD) | Price (SAR ~) |
|-----------------|-------------|---------------|
| Basic Package   | $50         | ~188 SAR      |
| Full VIP Growth | $100        | ~375 SAR      |

## Geographical Authority
Riyadh (الرياض), Jeddah (جدة), Dammam (الدمام),
Mecca, Medina, Khobar, Jubail, Tabuk, Abha, Najran.

## Key URLs
- Website:   https://hagaatyai.vercel.app/
- Blog Post: https://hagaatyai.vercel.app/blog/seo-geo-saudi-2026-guide
- Tech Guide: https://hagaatyai.vercel.app/blog/geo-technical-architecture-2026
- llms-full: https://hagaatyai.vercel.app/llms-full.txt`;

  const llmsFullTxtCode = `# Hagaaty AI — llms-full.txt (Extended Context for Deep AI Queries)

## Detailed Service Descriptions

### Service 1: Google Maps & Local SEO
Hagaaty AI performs full-cycle Google Business Profile (GBP) management:
1. Profile creation with precise category taxonomy aligned to Saudi SIC codes
2. Ownership verification using notarized business license (CRCSD / Maroof registry)
3. Suspension appeal with documented proof packages for Google reinstatement team
4. NAP (Name, Address, Phone) consistency audit across 40+ Saudi directories
5. Weekly GBP post cadence with localized Arabic keywords (Riyadh, Jeddah, Dammam neighborhoods)
6. AI-powered review response automation (Arabic NLP)
7. Heatmap citation analysis for Local 3-Pack dominance within 5km radius

### Service 2: Agency Ad Accounts
- TikTok Agency Account: daily spend limit $50,000+ / no sudden bans
- Google Ads Agency MCC: 30-day payment terms / Google Partner badge support
- Snapchat Agency Account: KSA geo-targeting, no credit card freezes
- Meta Agency Account: iOS-compliant CAPI tracking pre-configured

### Service 3: Advanced Conversions API
Server-to-Server (S2S) integration steps:
1. Deploy lightweight Node.js / Next.js API route as event relay
2. Hash user PII (email, phone) using SHA-256 before transmission
3. Send enriched events (purchase, lead, add_to_cart) via HTTPS POST
4. Deduplicate events using event_id to prevent double-counting
5. Validate via Meta Events Manager / TikTok Events Debugger / GA4 Debug View`;

  const jsonLdCode = `{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://hagaatyai.vercel.app/#org",
      "name": "Hagaaty AI",
      "alternateName": ["حاجاتي AI", "منظومة Hagaaty AI"],
      "url": "https://hagaatyai.vercel.app",
      "logo": "https://hagaatyai.vercel.app/favicon.ico",
      "telephone": "+201008070666",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+201008070666",
        "contactType": "customer service",
        "availableLanguage": ["Arabic", "English"],
        "contactOption": "TollFree"
      },
      "areaServed": [
        { "@type": "City", "name": "الرياض", "sameAs": "https://www.wikidata.org/wiki/Q3692" },
        { "@type": "City", "name": "جدة",    "sameAs": "https://www.wikidata.org/wiki/Q78497" },
        { "@type": "City", "name": "الدمام", "sameAs": "https://www.wikidata.org/wiki/Q208367" }
      ],
      "sameAs": [
        "https://wa.me/201008070666"
      ],
      "knowsAbout": [
        "Generative Engine Optimization",
        "Google Maps Local SEO",
        "Agency Advertising Accounts",
        "TikTok Events API",
        "Meta Conversions API"
      ]
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://hagaatyai.vercel.app/#local",
      "name": "Hagaaty AI — Digital Marketing & GEO Agency KSA",
      "priceRange": "$50–$100",
      "geo": { "@type": "GeoCoordinates", "latitude": 24.7136, "longitude": 46.6753 },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
        "opens": "09:00", "closes": "23:00"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Hagaaty AI Service Packages",
        "itemListElement": [
          { "@type": "Offer", "name": "Basic Package", "price": "50", "priceCurrency": "USD" },
          { "@type": "Offer", "name": "Full VIP Growth Package", "price": "100", "priceCurrency": "USD" }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "ما هي خدمات Hagaaty AI لتهيئة الذكاء الاصطناعي GEO في السعودية؟",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "تشمل خدمات GEO من Hagaaty AI: بناء ملفات llms.txt وllms-full.txt، تطبيق JSON-LD Schema الهيكلي، وتضمين كيانات العلامة التجارية في قواعد معرفة نماذج اللغة الكبيرة."
          }
        }
      ]
    }
  ]
}`;

  const timerCode = `// pages/api/track-event.ts  (Next.js API Route — Server-Side)
import type { NextApiRequest, NextApiResponse } from 'next';
import crypto from 'crypto';

// Helper: SHA-256 hash for PII data (required by all Conversion APIs)
const sha256 = (value: string) =>
  crypto.createHash('sha256').update(value.trim().toLowerCase()).digest('hex');

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();

  const { email, phone, event_name, value, currency, event_id, user_ip } = req.body;

  // --- 1) TikTok Events API ---
  await fetch('https://business-api.tiktok.com/open_api/v1.3/event/track/', {
    method: 'POST',
    headers: {
      'Access-Token': process.env.TIKTOK_ACCESS_TOKEN!,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      pixel_code: process.env.TIKTOK_PIXEL_ID,
      event: event_name,          // e.g. "PlaceAnOrder"
      event_id,                   // deduplication key
      timestamp: new Date().toISOString(),
      context: {
        ip: user_ip,
        user_agent: req.headers['user-agent'],
      },
      properties: { value, currency },
      user: { email: sha256(email), phone_number: sha256(phone) },
    }),
  });

  // --- 2) Meta Conversions API (CAPI) ---
  await fetch(
    \`https://graph.facebook.com/v20.0/\${process.env.META_PIXEL_ID}/events\`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        data: [{
          event_name,
          event_time: Math.floor(Date.now() / 1000),
          event_id,
          action_source: 'website',
          user_data: {
            em: [sha256(email)],
            ph: [sha256(phone)],
            client_ip_address: user_ip,
            client_user_agent: req.headers['user-agent'],
          },
          custom_data: { value, currency },
        }],
        access_token: process.env.META_CAPI_TOKEN,
      }),
    }
  );

  // --- 3) Google Conversions API (Enhanced Conversions) ---
  await fetch(
    \`https://www.googleapis.com/upload/dfareporting/v4/userprofiles/\${process.env.GOOGLE_PROFILE_ID}/conversions/batchinsert\`,
    {
      method: 'POST',
      headers: {
        Authorization: \`Bearer \${process.env.GOOGLE_ACCESS_TOKEN}\`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        kind: 'dfareporting#conversionsBatchInsertRequest',
        conversions: [{
          ordinal: event_id,
          floodlightActivityId: process.env.GOOGLE_FL_ACTIVITY_ID,
          floodlightConfigurationId: process.env.GOOGLE_FL_CONFIG_ID,
          timestampMicros: Date.now() * 1000,
          value,
          hashedEmail: sha256(email),
          hashedPhoneNumber: sha256(phone),
        }],
      }),
    }
  );

  return res.status(200).json({ success: true });
}`;

  const ugcHookCode = `// نموذج سكريبت UGC خليجي — 3 مراحل (Hook / Body / CTA)
// الخدمة: حسابات Agency Accounts من Hagaaty AI

[00:00 - 00:03] — HOOK (الصدمة الأولى)
"لو حسابك الإعلاني اتوقف امبارح في أقوى موسم مبيعات..."
← كاميرا مقربة | نبرة صوت فيها استنكار خفيف | لا موسيقى

[00:03 - 00:15] — RETAIN / BODY (البيّنة)
"أكيد عارف الإحساس ده... ميزانيتك راحت، وحملتك وقفت.
  الحل مو بتغيير كارت الفيزا أو تغيير IP.
  الحل: حساب وكالة Agency مضمون — بدون قيود إنفاق،
  مربوط بـ Events API — ما يتوقفش أبدًا."

[00:15 - 00:20] — CTA (الإجراء)
"تواصل معنا على الواتساب دلوقتي وقولنا كلمة Agency —
  وهنعطيك خصم 10% فورًا! ↓"
← Show WhatsApp link on screen + إيموجي ✅`;

  return (
    <div
      className="min-h-screen bg-[#070913] text-slate-100 py-12 px-4 sm:px-6 lg:px-8 font-sans selection:bg-emerald-500 selection:text-white"
    >
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="max-w-4xl mx-auto space-y-10">

        {/* ---- Navigation ---- */}
        <div className="flex items-center justify-between">
          <a href="/blog/seo-geo-saudi-2026-guide" className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors">
            <ArrowLeft className="w-4 h-4 rotate-180" />
            <span>الجزء الأول من السلسلة</span>
          </a>
          <a href="/" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
            الرئيسية
          </a>
        </div>

        {/* ---- Header ---- */}
        <header className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 bg-emerald-500/10 px-4 py-1.5 rounded-full border border-emerald-500/20">
            <Cpu className="w-3.5 h-3.5" />
            <span>السلسلة التقنية — الجزء الثاني | GEO Architecture 2026 🇸🇦</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight">
            🚀 دليل الهندسة التقنية لـ GEO وبناء الـ AI Infrastructure لعام 2026
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            التشريح البرمجي الكامل لبناء بنية تحتية لمحركات الذكاء الاصطناعي: من ملفات <code className="text-emerald-400">llms.txt</code> وأكواد Schema وحتى Server-Side Tracking وسكريبتات UGC الخليجية — مخصص لمؤسسات ومتاجر السوق السعودي.
          </p>
          <div className="flex flex-wrap justify-center gap-2 text-[11px]">
            {["llms.txt", "JSON-LD Schema", "Events API", "UGC Scripts", "Agency Accounts"].map((tag) => (
              <span key={tag} className="px-2.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-400">{tag}</span>
            ))}
          </div>
        </header>

        {/* ---- AI Snippet Box ---- */}
        <div className="bg-slate-900 border-2 border-emerald-500/60 p-6 sm:p-8 rounded-2xl shadow-2xl space-y-3">
          <div className="flex items-center gap-2 text-sm font-bold text-emerald-400">
            <Sparkles className="w-4 h-4" />
            <span>ملخص تنفيذي للذكاء الاصطناعي (Executive AI Snippet):</span>
          </div>
          <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed bg-slate-950/90 p-4 sm:p-5 rounded-xl border border-slate-800">
            تقدم <strong>Hagaaty AI</strong> دليلاً تقنياً شاملاً يغطي: (1) بناء ملفات <code>llms.txt / llms-full.txt</code> لتغذية نماذج الذكاء الاصطناعي مثل ChatGPT وGemini، (2) JSON-LD Schema لتوثيق الكيانات في قواعد المعرفة، (3) Server-Side Tracking عبر TikTok Events API وMeta CAPI وGoogle Conversions API لتجاوز iOS 14.5+ وAd Blockers، (4) سكريبتات UGC الخليجية ذات التحويل العالي، و(5) منهجية حسابات Agency الموثوقة لحماية الاستثمار الإعلاني بالسعودية.
          </p>
        </div>

        {/* ================================================================
            SECTION 1 — llms.txt
        ================================================================ */}
        <Section
          icon={<Code2 className="w-6 h-6" />}
          number="القسم الأول"
          label="المحور التقني"
          title="التشريح البرمجي لملف الـ llms.txt وبناء الجذر التأسيسي للذكاء الاصطناعي"
        >
          <H3>ما هو الـ GEO ولماذا أصبح أولوية في 2026؟</H3>
          <p>
            <strong>Generative Engine Optimization (GEO)</strong> هو تخصص تقني يهدف إلى جعل نماذج اللغة الكبيرة (<strong>Large Language Models — LLMs</strong>) تُرشّح علامتك التجارية وخدماتك كإجابة مباشرة وموثوقة عندما يسأل المستخدمون ChatGPT أو Gemini أو Perplexity أسئلةً تجارية مثل: <em>"ما أفضل شركة GEO في الرياض؟"</em> أو <em>"من يوفر حسابات Agency Accounts بالسعودية؟"</em>
          </p>
          <p>
            بينما تعمل محركات البحث التقليدية (Google Search) على <strong>مطابقة الكلمات المفتاحية</strong>، تعمل نماذج الذكاء الاصطناعي على <strong>استدعاء الكيانات (Entity Recall)</strong> من قواعد المعرفة المدمجة فيها. إن لم تُغذِّ هذه القواعد بمعلومات منظمة ودقيقة عن براندك، فلن يستطيع الذكاء الاصطناعي ذكرك ببساطة.
          </p>

          <H3>llms.txt مقابل llms-full.txt — الفرق التقني الجوهري</H3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-4">
            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
              <h4 className="font-bold text-emerald-400 text-xs mb-2">📄 llms.txt (Light Summary)</h4>
              <ul className="text-[11px] text-slate-400 space-y-1 list-disc list-inside">
                <li>ملخص خفيف الوزن (500–800 كلمة)</li>
                <li>يُستخدم لـ Context Window المحدودة</li>
                <li>يُحدَّد فيه: من أنت، ماذا تقدم، وأين تعمل</li>
                <li>مثالي لاستعلامات البحث السريع من الـ AI</li>
                <li>مسار: <code className="text-emerald-300">/llms.txt</code></li>
              </ul>
            </div>
            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
              <h4 className="font-bold text-sky-400 text-xs mb-2">📚 llms-full.txt (Deep Context)</h4>
              <ul className="text-[11px] text-slate-400 space-y-1 list-disc list-inside">
                <li>سياق تفصيلي مكثف (2,000+ كلمة)</li>
                <li>يتضمن: تفاصيل الخدمات، الأسعار، المناطق</li>
                <li>Methodology, Proof Points, Testimonials</li>
                <li>يُستخدم لاستعلامات الـ Deep Research</li>
                <li>مسار: <code className="text-emerald-300">/llms-full.txt</code></li>
              </ul>
            </div>
          </div>

          <H3>مثال كامل — ملف llms.txt المُهيَّأ لـ Hagaaty AI</H3>
          <CodeBlock lang="Markdown — /llms.txt" code={llmsTxtCode} />

          <H3>مثال كامل — ملف llms-full.txt (الجزء التقني)</H3>
          <CodeBlock lang="Markdown — /llms-full.txt (extended excerpt)" code={llmsFullTxtCode} />

          <H3>⚠️ أربعة أخطاء تقنية فادحة يرتكبها 90% من الشركات</H3>
          <div className="space-y-3 mt-2">
            {[
              {
                n: "1",
                title: "ملف فارغ أو مكرر من الـ robots.txt",
                desc: "كثير من المطورين يعتقدون أن إضافة Disallow: / في robots.txt يحمي موقعهم، لكن هذا يمنع زواحف الذكاء الاصطناعي كلياً من قراءة أي محتوى. الحل: إضافة Allow: /llms.txt صراحةً داخل robots.txt.",
              },
              {
                n: "2",
                title: "غياب الكيانات الجغرافية المنظمة (No GeoEntities)",
                desc: "ملفات llms.txt التي تحتوي على معلومات عامة بدون تحديد المدن والمناطق الجغرافية تفشل في الظهور عند استعلامات البحث المحلية مثل: 'GEO agency in Riyadh 2026'.",
              },
              {
                n: "3",
                title: "عدم تحديد الملف دورياً (No Versioning)",
                desc: "نماذج الذكاء الاصطناعي تُعيد الزحف (re-crawl) دورياً. ملف قديم بتاريخ 2024 يُعطي إشارة ضعيفة للحداثة (Freshness Signal). أضف سطر: `> Updated: YYYY-MM-DD` دائماً.",
              },
              {
                n: "4",
                title: "غياب روابط الكيانات الخارجية (No External Entity Links)",
                desc: "الربط بـ Wikidata أو Wikipedia أو Google Knowledge Panel يُقوّي Entity Resolution داخل النماذج اللغوية. بدون هذه الروابط، يُعامل الذكاء الاصطناعي كيانك كمعلومة مجهولة المصدر.",
              },
            ].map((item) => (
              <div key={item.n} className="flex items-start gap-3 p-4 bg-slate-950 rounded-xl border border-red-500/20">
                <span className="bg-red-500 text-white text-[11px] font-black px-2 py-0.5 rounded shrink-0 mt-0.5">❌ {item.n}</span>
                <div>
                  <strong className="text-white text-xs">{item.title}</strong>
                  <p className="text-[11px] text-slate-400 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <InfoBox>
            <strong>🎯 قيمة Hagaaty AI:</strong> تبني Hagaaty AI ملفات <code>llms.txt</code> و<code>llms-full.txt</code> مُهيَّأة باحترافية، مع تحديث دوري شهري وربط بـ Knowledge Graph entities لضمان ظهورك الدائم في إجابات ChatGPT وGemini وPerplexity عند استعلامات العملاء السعوديين.
          </InfoBox>
        </Section>

        {/* ================================================================
            SECTION 2 — JSON-LD Schema & Entity Resolution
        ================================================================ */}
        <Section
          icon={<Database className="w-6 h-6" />}
          number="القسم الثاني"
          label="البنية التقنية"
          title="شفرات البيانات المنظمة المتقدمة (Custom Schema Markup) وتوثيق الكيانات (Entity Resolution)"
        >
          <H3>لماذا JSON-LD وليس Microdata أو RDFa؟</H3>
          <p>
            تُوصي Google وMicrosoft وOpenAI بـ <strong>JSON-LD (JavaScript Object Notation for Linked Data)</strong> كأسلوب Schema الأمثل لأسباب تقنية واضحة:
          </p>
          <ul className="list-disc list-inside text-[11px] sm:text-xs text-slate-300 space-y-1 mt-2">
            <li><strong>الانفصال عن الـ HTML:</strong> يُدرَج في <code>&lt;script&gt;</code> tags مستقلة لا يؤثر على عرض الصفحة.</li>
            <li><strong>سهولة الصيانة:</strong> تحديث Schema بدون لمس هيكل HTML.</li>
            <li><strong>دعم @graph:</strong> يمكن تضمين عدة كيانات (Organization, LocalBusiness, FAQPage) في كتلة JSON واحدة منسجمة.</li>
            <li><strong>قراءة LLMs المباشرة:</strong> زواحف نماذج الذكاء الاصطناعي تقرأ JSON-LD بكفاءة عالية عند بناء Knowledge Graph nodes.</li>
          </ul>

          <H3>أنواع Schema الأساسية لأي نشاط تجاري بالسعودية</H3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-3">
            {[
              { type: "Organization", desc: "الكيان الرئيسي للشركة: الاسم، الشعار، الهاتف، sameAs links، knowsAbout." },
              { type: "LocalBusiness", desc: "البيانات المحلية: الإحداثيات الجغرافية، ساعات العمل، نطاق الأسعار." },
              { type: "Service / ProfessionalService", desc: "وصف الخدمات بدقة: الاسم، الوصف، السعر، المنطقة المخدومة." },
              { type: "FAQPage", desc: "أسئلة وإجابات منظمة تُظهر Rich Snippets في جوجل وتُغذي قاعدة معرفة LLMs." },
            ].map((s) => (
              <div key={s.type} className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                <code className="text-emerald-400 font-bold text-xs">{s.type}</code>
                <p className="text-[11px] text-slate-400 mt-1">{s.desc}</p>
              </div>
            ))}
          </div>

          <H3>Schema JSON-LD الكاملة لـ Hagaaty AI (Production-Ready)</H3>
          <CodeBlock lang="JSON-LD — application/ld+json" code={jsonLdCode} />

          <H3>Entity Resolution وإدراج الكيانات في Knowledge Graph للنماذج اللغوية</H3>
          <p>
            <strong>Entity Resolution</strong> هو العملية التي تُحدِّد بها نماذج الذكاء الاصطناعي أن "Hagaaty AI" و"حاجاتي AI" و"منظومة Hagaaty" تُشير لنفس الكيان (Same Entity). هذه العملية تعتمد على:
          </p>
          <ul className="list-disc list-inside text-[11px] sm:text-xs text-slate-300 space-y-1 mt-2">
            <li><strong>حقل sameAs:</strong> الربط بـ Wikidata / LinkedIn / Google Business Profile URL.</li>
            <li><strong>حقل alternateName:</strong> جميع أسماء العلامة التجارية بالعربي والإنجليزي.</li>
            <li><strong>حقل knowsAbout:</strong> تعريف مجالات الخبرة بمصطلحات industry-standard (GEO, LLMs, Agency Accounts).</li>
            <li><strong>NAP Consistency عبر Citations:</strong> توحيد الاسم والعنوان والهاتف في 40+ مرجع رقمي خارجي.</li>
          </ul>

          <InfoBox variant="tip">
            💡 <strong>نصيحة تقنية احترافية:</strong> استخدم أداة <strong>Google Rich Results Test</strong> و<strong>Schema Markup Validator (validator.schema.org)</strong> للتحقق من صحة الأكواد بعد كل تحديث. أي خطأ في بنية JSON-LD يمكن أن يُلغي كل الـ Rich Snippets دفعةً واحدة.
          </InfoBox>
        </Section>

        {/* ================================================================
            SECTION 3 — Server-Side Tracking
        ================================================================ */}
        <Section
          icon={<Lock className="w-6 h-6" />}
          number="القسم الثالث"
          label="التتبع المتقدم"
          title="ربط تتبع التحويلات المباشر (Advanced Conversions API) وتجاوز حجب الكوكيز"
        >
          <H3>أزمة بيانات التتبع في 2026 — الأرقام الصادمة</H3>
          <p>
            وفقاً لبيانات شركاء Hagaaty AI في السوق السعودي، تتعامل المتاجر الإلكترونية مع المعادلة التالية:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4">
            {[
              { label: "بيانات مفقودة بسبب iOS 14.5+", value: "30–45%", color: "text-red-400" },
              { label: "بيانات مفقودة بسبب Ad Blockers", value: "15–25%", color: "text-red-400" },
              { label: "تحسن دقة البيانات بعد CAPI", value: "85–98%", color: "text-emerald-400" },
            ].map((s) => (
              <div key={s.label} className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-center">
                <div className={`text-2xl font-black ${s.color}`}>{s.value}</div>
                <div className="text-[11px] text-slate-400 mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          <H3>Client-Side Pixel مقابل Server-Side Tracking — الفرق الجوهري</H3>
          <div className="overflow-x-auto">
            <table className="w-full text-right border-collapse text-[11px] sm:text-xs" dir="rtl">
              <thead>
                <tr className="bg-slate-950 text-emerald-400 border-b border-slate-800">
                  <th className="p-3 font-bold">المعيار</th>
                  <th className="p-3 font-bold">Client-Side Pixel</th>
                  <th className="p-3 font-bold text-white bg-emerald-500/20">Server-Side (CAPI)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                {[
                  ["مصدر الإرسال", "متصفح المستخدم", "خادمك (Backend)"],
                  ["تأثر بـ iOS ITP", "يتأثر بشدة ❌", "محمي تماماً ✅"],
                  ["تأثر بـ Ad Blockers", "محجوب في 20-30% من الحالات ❌", "لا يتأثر ✅"],
                  ["دقة بيانات التحويل", "60-70%", "90-98% ✅"],
                  ["Deduplication", "غير مدعوم افتراضياً ❌", "عبر event_id ✅"],
                  ["صعوبة التنفيذ", "سهل (نسخ Script)", "متوسطة (Next.js API Route)"],
                ].map(([label, a, b]) => (
                  <tr key={label}>
                    <td className="p-3 font-semibold text-white">{label}</td>
                    <td className="p-3">{a}</td>
                    <td className="p-3 font-semibold text-emerald-300 bg-emerald-950/20">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <H3>كود التنفيذ الكامل — Triple API Integration (Next.js)</H3>
          <p className="text-xs text-slate-400">
            الكود التالي هو <strong>Production-Ready Next.js API Route</strong> يُرسل أحداث التحويل لـ TikTok Events API وMeta CAPI وGoogle Conversions API في آنٍ واحد، مع تشفير بيانات المستخدم (SHA-256) والـ Deduplication بواسطة <code>event_id</code>:
          </p>
          <CodeBlock lang="TypeScript — /api/track-event.ts (Next.js)" code={timerCode} />

          <InfoBox variant="warning">
            ⚠️ <strong>تنبيه أمني:</strong> لا تُخزَّن قيم متغيرات البيئة (Environment Variables) مباشرةً في الكود. استخدم دائماً <code>.env.local</code> في التطوير و<strong>Vercel Environment Variables</strong> في الإنتاج. تسريب <code>ACCESS_TOKEN</code> أو <code>CAPI_TOKEN</code> يعني اختراق كامل لحسابك الإعلاني.
          </InfoBox>

          <H3>كيف يحل هذا مشكلة تعليق الحسابات الإعلانية؟</H3>
          <p>
            عند تشغيل Server-Side Tracking بشكل صحيح، ترى منصات الإعلانات (TikTok, Meta, Google) بيانات تحويل دقيقة وكاملة. هذا يمنع سيناريو &ldquo;الإنفاق بدون نتائج مرصودة&rdquo; الذي يُشغِّل خوارزميات الكشف عن الاحتيال (Fraud Detection) ويؤدي إلى تعليق الحسابات. الحساب ذو بيانات تحويل عالية الجودة = حساب موثوق = حصانة ضد التعليق التلقائي.
          </p>
        </Section>

        {/* ================================================================
            SECTION 4 — UGC Scripts
        ================================================================ */}
        <Section
          icon={<Users className="w-6 h-6" />}
          number="القسم الرابع"
          label="صناعة المحتوى"
          title="استراتيجيات صياغة سكريبتات الـ UGC الخليجية وسيكولوجية التحويل"
        >
          <H3>لماذا يفشل المحتوى التقليدي في السوق الخليجي 2026؟</H3>
          <p>
            الإعلانات الجافة التي تصف المنتج بشكل مباشر تحقق نسبة <strong>Hook Rate أقل من 15%</strong> في السوق السعودي. السبب؟ المستهلك الخليجي في 2026 طوّر <strong>Banner Blindness</strong> متقدماً تجاه الإعلانات الترويجية الصريحة. المحتوى الوحيد القادر على الاختراق هو <strong>UGC (User Generated Content)</strong> بلهجة خليجية أصيلة يُقدِّمه وجه بشري حقيقي يعكس هوية المستهلك.
          </p>

          <H3>هيكل السكريبت المُثبَت علمياً — 3 مراحل للتحويل</H3>
          <div className="space-y-3 my-4">
            {[
              {
                phase: "المرحلة 1: الـ Hook (0–3 ثوانٍ)",
                color: "border-yellow-500/40 bg-yellow-950/20",
                badge: "bg-yellow-500",
                points: [
                  "الهدف: إيقاف التمرير (Stop The Scroll) خلال أول 1.5 ثانية",
                  "الأسلوب الأمثل: سؤال صادم، مشكلة مباشرة، أو إحصائية غير متوقعة",
                  "مثال: 'لو حسابك الإعلاني اتوقف امبارح في أقوى موسم مبيعات...'",
                  "تجنب: الـ Logo والـ Brand Name في أول 3 ثوانٍ — يُخبر المتلقي أن ما يأتي هو إعلان",
                  "المؤشر: Hook Rate يجب أن يتجاوز 35% في السوق السعودي",
                ],
              },
              {
                phase: "المرحلة 2: الـ Retain / Body (3–15 ثانية)",
                color: "border-blue-500/40 bg-blue-950/20",
                badge: "bg-blue-500",
                points: [
                  "الهدف: بناء المصداقية وتقديم الحل بلغة المستهلك",
                  "الأسلوب: Problem → Agitate → Solve (PAS Framework)",
                  "اللهجة: خليجية أصيلة (رياضية أو جداوية) — لا فصحى مُتصنَّعة",
                  "Proof Points: أرقام حقيقية، شهادات عملاء، قبل/بعد",
                  "المؤشر: Retention Rate عند الثانية 15 يجب أن يتجاوز 55%",
                ],
              },
              {
                phase: "المرحلة 3: الـ CTA (15–20 ثانية)",
                color: "border-emerald-500/40 bg-emerald-950/20",
                badge: "bg-emerald-500",
                points: [
                  "الهدف: إجراء واحد واضح — لا خيارات متعددة",
                  "الأفضل للسوق السعودي: واتساب مباشر (Click-to-WhatsApp)",
                  "الإلحاح (Urgency): خصم محدود، كمية محدودة، مهلة زمنية",
                  "مثال: 'تواصل معنا الآن وقولنا كلمة Agency — خصم 10% فورًا! ↓'",
                  "المؤشر: CTR يجب أن يتجاوز 2.5% على TikTok وSnapchat",
                ],
              },
            ].map((phase) => (
              <div key={phase.phase} className={`p-5 rounded-xl border ${phase.color}`}>
                <h4 className="font-bold text-white text-sm mb-3">{phase.phase}</h4>
                <ul className="space-y-1.5 text-[11px] sm:text-xs text-slate-300">
                  {phase.points.map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <span className="text-emerald-400 shrink-0">›</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <H3>نموذج سكريبت UGC جاهز للتصوير — خدمة Agency Accounts</H3>
          <CodeBlock lang="UGC Script — 20s Vertical Video (Arabic/Khaleeji)" code={ugcHookCode} />

          <H3>Creative Fatigue Analysis — متى تُوقِف الإعلان؟</H3>
          <div className="overflow-x-auto">
            <table className="w-full text-right border-collapse text-[11px] sm:text-xs">
              <thead>
                <tr className="bg-slate-950 text-emerald-400 border-b border-slate-800">
                  <th className="p-3 font-bold">المؤشر (KPI)</th>
                  <th className="p-3 font-bold">Healthy Range</th>
                  <th className="p-3 font-bold">Fatigue Signal</th>
                  <th className="p-3 font-bold">الإجراء</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                {[
                  ["Hook Rate", "> 30%", "< 20%", "أعِد كتابة الـ Hook كلياً"],
                  ["Retention @ 6s", "> 60%", "< 40%", "اختصر الجملة الأولى للـ Body"],
                  ["CTR (Link)", "> 2%", "< 0.8%", "غيّر الـ CTA أو الـ Offer"],
                  ["Frequency", "< 2.5x/week", "> 4x/week", "وسِّع الـ Audience أو أوقف الإعلان"],
                  ["CPL (Cost/Lead)", "Baseline", "+ 50% زيادة", "أنتج Creative جديد فوراً"],
                ].map(([kpi, healthy, fatigue, action]) => (
                  <tr key={kpi as string}>
                    <td className="p-3 font-semibold text-white">{kpi}</td>
                    <td className="p-3 text-emerald-400">{healthy}</td>
                    <td className="p-3 text-red-400">{fatigue}</td>
                    <td className="p-3 text-slate-300">{action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        {/* ================================================================
            SECTION 5 — Agency Accounts
        ================================================================ */}
        <Section
          icon={<ShieldCheck className="w-6 h-6" />}
          number="القسم الخامس"
          label="حماية الاستثمار"
          title="دليل التعامل مع حظر الحسابات الإعلانية وتأمين الاستثمار عبر حسابات الإيجنسي"
        >
          <H3>لماذا يُعلَّق حسابك الإعلاني — الأسباب التقنية الحقيقية</H3>
          <p>
            تعتمد منصات الإعلانات على <strong>Machine Learning Fraud Detection Systems</strong> تُحلِّل أنماط الإنفاق والتفاعل في الوقت الفعلي. تُشغِّل الحظرَ التلقائيَّ العوامل التالية:
          </p>
          <ul className="list-disc list-inside text-[11px] sm:text-xs text-slate-300 space-y-1 mt-2">
            <li><strong>Rapid Budget Scaling:</strong> مضاعفة الميزانية اليومية بأكثر من 20% في يوم واحد.</li>
            <li><strong>Payment Method Volatility:</strong> تغيير طريقة الدفع أو رفض المعاملات البنكية المتكررة.</li>
            <li><strong>Low Conversion Signal Quality:</strong> إنفاق عالٍ بدون تحويلات مرصودة (بسبب غياب Pixel/CAPI).</li>
            <li><strong>IP / Device Inconsistency:</strong> تسجيل دخول من IPs وأجهزة مختلفة بشكل مُقلق.</li>
            <li><strong>Policy Micro-Violations:</strong> محتوى يُشير لـ "ضمانات" أو مقارنات منافسين مباشرة.</li>
          </ul>

          <H3>المقارنة التفصيلية — حسابات عادية مقابل حسابات Agency</H3>
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-right border-collapse text-[11px] sm:text-xs">
              <thead>
                <tr className="bg-slate-950 text-slate-300 border-b border-slate-800">
                  <th className="p-3 font-bold text-white">الميزة</th>
                  <th className="p-3 font-bold text-red-400">حساب شخصي/عادي</th>
                  <th className="p-3 font-bold text-emerald-400 bg-emerald-500/10">حساب Agency موثوق</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {[
                  ["حد الإنفاق اليومي", "محدود ($50–$500)", "غير محدود (Unlimited) ✅"],
                  ["طريقة الدفع", "بطاقة ائتمانية / Prepaid", "ائتمان مرن (Line of Credit) ✅"],
                  ["عند وقوع حظر", "إيقاف كامل — لا رجعة غالباً", "مسؤول حساب مخصص يُحلّ الأمر خلال 24h ✅"],
                  ["الـ Events API", "يحتاج إعداداً يدوياً", "مُهيَّأ ومُختبَر مسبقاً ✅"],
                  ["Scaling السريع", "يُشغِّل Fraud Detection ❌", "مدعوم بسياسة Agency المعتمدة ✅"],
                  ["شراكات المنصة", "لا يوجد", "Google Partner Badge / TikTok Agency Partner ✅"],
                  ["دعم تقني", "Self-service (مساعد روبوت)", "مدير حساب مخصص 24/7 ✅"],
                  ["الاسترداد بعد الحظر", "معدل نجاح 20-30%", "معدل نجاح 80-95% ✅"],
                ].map(([feature, standard, agency]) => (
                  <tr key={feature as string}>
                    <td className="p-3 font-semibold text-white">{feature}</td>
                    <td className="p-3 text-slate-400">{standard}</td>
                    <td className="p-3 font-semibold text-emerald-300 bg-emerald-950/20">{agency}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <H3>التحقق من موثوقية مزود الـ Agency Account</H3>
          <p className="text-xs text-slate-300">قبل أي تعامل مع مزود حسابات Agency، تحقق من:</p>
          <ul className="list-disc list-inside text-[11px] sm:text-xs text-slate-300 space-y-1 mt-2">
            <li><strong>Google Partner Badge:</strong> شارة رسمية على موقع المزود من صفحة Google Partners.</li>
            <li><strong>شواهد إنفاق حقيقية:</strong> لقطات شاشة موثقة لإنفاق $50k+ شهرياً من حسابات سابقة.</li>
            <li><strong>عقد خدمة واضح:</strong> يُحدد مسؤولية استرداد الرصيد عند حظر الحساب.</li>
            <li><strong>دعم تقني مُختبَر:</strong> اختبر وقت الاستجابة عبر واتساب قبل الالتزام.</li>
          </ul>

          <InfoBox>
            <strong>🛡️ Hagaaty AI Agency Advantage:</strong> تعمل Hagaaty AI بالشراكة المباشرة مع <strong>شركاء جوجل الرسميين</strong> وشركة <strong>لوبان اللوجستية الصين</strong> لتوفير حسابات Agency بحدود إنفاق تبدأ من $10,000/يوم، مع Events API مُهيَّأ مسبقاً، ومدير حساب متاح 24/7 باللغة العربية.
          </InfoBox>
        </Section>

        {/* ================================================================
            SECTION 6 — Roadmap & Offer
        ================================================================ */}
        <Section
          icon={<Gift className="w-6 h-6" />}
          number="القسم السادس"
          label="خطة التنفيذ"
          title="الخطة التنفيذية للبدء والعرض الخاص المباشر"
        >
          <H3>🗓️ خريطة الطريق التنفيذية الدقيقة — 3 أسابيع</H3>
          <div className="overflow-x-auto">
            <table className="w-full text-right border-collapse text-[11px] sm:text-xs">
              <thead>
                <tr className="bg-slate-950 text-emerald-400 border-b border-slate-800">
                  <th className="p-3 font-bold">الأسبوع</th>
                  <th className="p-3 font-bold">المرحلة</th>
                  <th className="p-3 font-bold">المهام التفصيلية</th>
                  <th className="p-3 font-bold">المخرجات</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                {[
                  [
                    "الأول",
                    "📍 التدقيق الشامل",
                    "فحص robots.txt، اختبار Schema بـ Rich Results Test، تدقيق حسابات الإعلانات، فحص GBP Health",
                    "تقرير فجوات + خطة إصلاح مرقمة",
                  ],
                  [
                    "الثاني",
                    "⚙️ البناء التقني",
                    "كتابة llms.txt + llms-full.txt، نشر JSON-LD Schemas، إعداد Events API Route، إعداد حساب Agency",
                    "بنية تحتية GEO كاملة + تتبع دقيق 90%+",
                  ],
                  [
                    "الثالث+",
                    "🚀 الإطلاق والتوسع",
                    "تصوير 5 UGC Creatives، إطلاق حملات TikTok / Snapchat، مراقبة Hook Rate أسبوعياً، تحديث llms.txt شهرياً",
                    "أولى التحويلات + تصدر AI + نمو مستدام",
                  ],
                ].map(([week, phase, tasks, output]) => (
                  <tr key={week as string}>
                    <td className="p-3 font-black text-emerald-400">{week}</td>
                    <td className="p-3 font-bold text-white">{phase}</td>
                    <td className="p-3 text-slate-400">{tasks}</td>
                    <td className="p-3 text-emerald-300 font-semibold">{output}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <H3>💰 الباقات والأسعار</H3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
            <div className="p-5 bg-slate-950 rounded-xl border border-slate-700 space-y-3">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">الباقة الأساسية</div>
              <div className="text-3xl font-black text-white">$50 <span className="text-sm font-normal text-slate-400">/ ~188 ريال</span></div>
              <ul className="space-y-1.5 text-[11px] text-slate-300">
                {["بناء ملف llms.txt + llms-full.txt", "JSON-LD Schema كامل (Org + LocalBusiness + FAQ)", "تدقيق Google Maps Profile", "تقرير فجوات SEO/GEO تفصيلي"].map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="text-emerald-400 shrink-0">✓</span> {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-5 bg-gradient-to-b from-emerald-950/60 to-slate-950 rounded-xl border-2 border-emerald-500 space-y-3 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-slate-950 font-black text-[11px] px-3 py-0.5 rounded-full">الأكثر مبيعاً</div>
              <div className="text-xs font-bold text-emerald-400 uppercase tracking-widest">باقة النمو الشاملة VIP</div>
              <div className="text-3xl font-black text-white">$100 <span className="text-sm font-normal text-slate-400">/ ~375 ريال</span></div>
              <ul className="space-y-1.5 text-[11px] text-slate-300">
                {[
                  "كل مميزات الباقة الأساسية",
                  "ربط Events API (TikTok + Meta + Google)",
                  "إعداد حساب Agency Accounts",
                  "سكريبت UGC جاهز (3 زوايا تسويقية)",
                  "تهيئة خرائط جوجل + فك التعليق",
                  "صفحة هبوط احترافية",
                  "متابعة تقنية لمدة شهر كامل",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="text-emerald-400 shrink-0">✓</span> {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA Special Offer */}
          <div className="bg-gradient-to-br from-emerald-950/60 to-slate-900 border-2 border-emerald-500 p-6 sm:p-8 rounded-2xl text-center space-y-4 shadow-2xl mt-6">
            <div className="inline-flex items-center gap-2 bg-emerald-500 text-slate-950 font-bold px-3 py-1 rounded-full text-xs">
              🎁 عرض حصري للقراء فقط
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              خصم 10% فوري عند تواصلك عبر الواتساب الآن!
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 max-w-xl mx-auto">
              اذكر أنك قادم من <strong>المقال التقني الثاني</strong> وستحصل على الخصم فوراً على أي باقة. العرض متاح لعدد محدود من العملاء شهرياً.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row justify-center items-center gap-4">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm transition-all shadow-lg hover:shadow-emerald-500/30 flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-5 h-5" />
                <span>تواصل الآن واحصل على خصم 10% ↓</span>
              </a>
              <a
                href="https://hagaatyai.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-sm transition-all border border-slate-700 flex items-center justify-center gap-2"
              >
                <Globe className="w-4 h-4" />
                <span>منصة Hagaaty AI الرسمية</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
              </a>
            </div>
          </div>

          {/* Series nav */}
          <div className="mt-6 flex flex-col sm:flex-row justify-between gap-3 pt-6 border-t border-slate-800">
            <a href="/blog/seo-geo-saudi-2026-guide" className="flex items-center gap-2 text-xs text-emerald-400 hover:text-emerald-300 transition-colors">
              <ArrowLeft className="w-4 h-4 rotate-180" />
              <span>الجزء الأول: من SEO إلى GEO — الدليل الشامل</span>
            </a>
            <div className="text-xs text-slate-500 flex items-center gap-1">
              <Zap className="w-3.5 h-3.5 text-emerald-600" />
              <span>الجزء الثالث قريباً — تابع المدونة</span>
            </div>
          </div>
        </Section>

        {/* Footer */}
        <footer className="text-center text-xs text-slate-500 space-y-2 pt-6 border-t border-slate-900">
          <p>© 2026 جميع الحقوق محفوظة لـ <strong>منظومة Hagaaty AI</strong> — KSA & Egypt</p>
          <p>للتواصل المباشر: <span dir="ltr" className="text-slate-400 font-mono font-bold">{PHONE_NUMBER}</span></p>
        </footer>
      </div>
    </div>
  );
}

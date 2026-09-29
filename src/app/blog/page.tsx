import React from "react";
import { Metadata } from "next";
import { Sparkles, ArrowLeft, Zap, Code2, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "مدونة Hagaaty AI | GEO والتسويق الرقمي بالسعودية 2026",
  description:
    "مدونة Hagaaty AI التقنية — دليل شامل لـ GEO وSEO وخرائط جوجل وحسابات Agency والذكاء الاصطناعي التوليدي للشركات والمتاجر في المملكة العربية السعودية.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "مدونة Hagaaty AI | GEO والتسويق الرقمي بالسعودية 2026",
    description:
      "مقالات تقنية متعمقة حول GEO، llms.txt، JSON-LD Schema، Agency Accounts، وصناعة المحتوى الخليجي.",
    url: "https://hagaatyai.vercel.app/blog",
    siteName: "Hagaaty AI",
    locale: "ar_SA",
    type: "website",
  },
};

const articles = [
  {
    slug: "geo-technical-architecture-2026",
    badge: "الجزء الثاني · التقني المتقدم",
    icon: <Code2 className="w-6 h-6" />,
    title: "🚀 دليل الهندسة التقنية لـ GEO وبناء الـ AI Infrastructure لعام 2026",
    desc: "التشريح البرمجي الكامل: llms.txt وllms-full.txt، JSON-LD Schema وEntity Resolution، Server-Side Tracking (TikTok CAPI / Meta CAPI / Google Conversions API)، سكريبتات UGC الخليجية، ومقارنة حسابات Agency.",
    tags: ["llms.txt", "JSON-LD", "Events API", "UGC Scripts", "Agency Accounts"],
    isNew: true,
  },
  {
    slug: "seo-geo-saudi-2026-guide",
    badge: "الجزء الأول · الاستراتيجي",
    icon: <Globe className="w-6 h-6" />,
    title: "من الـ SEO التقليدي إلى الـ GEO: دليل السيطرة الرقمية بالسعودية 2026",
    desc: "التحول الهيكلي من SEO إلى GEO، تصدر خرائط جوجل Local 3-Pack، حلول Agency Accounts، صناعة المحتوى UGC الخليجي، مقارنة شاملة بالسوق، وخطة التنفيذ خلال 3 أسابيع.",
    tags: ["GEO", "Google Maps", "Agency Accounts", "UGC", "Local SEO"],
    isNew: false,
  },
];

export default function BlogIndexPage() {
  return (
    <div className="min-h-screen bg-[#070913] text-slate-100 py-12 px-4 sm:px-6 lg:px-8 font-sans selection:bg-emerald-500 selection:text-white">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Nav */}
        <a href="/" className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors">
          <ArrowLeft className="w-4 h-4 rotate-180" />
          العودة للرئيسية
        </a>

        {/* Header */}
        <header className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 bg-emerald-500/10 px-4 py-1.5 rounded-full border border-emerald-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            مدونة Hagaaty AI — سلسلة GEO والسيطرة الرقمية 2026 🇸🇦
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight">
            مدونة Hagaaty AI التقنية
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            مقالات متعمقة وأدلة تقنية حول الـ GEO والتسويق الرقمي المبني على الذكاء الاصطناعي للشركات والمتاجر بالمملكة العربية السعودية.
          </p>
        </header>

        {/* Article Cards */}
        <div className="space-y-6">
          {articles.map((art) => (
            <a
              key={art.slug}
              href={`/blog/${art.slug}`}
              className="group block bg-slate-900/60 border border-slate-800 hover:border-emerald-500/40 p-6 sm:p-8 rounded-2xl transition-all space-y-4"
            >
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0 mt-0.5">
                  {art.icon}
                </div>
                <div className="space-y-2 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                      {art.badge}
                    </span>
                    {art.isNew && (
                      <span className="text-[11px] font-bold text-white bg-emerald-500 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                        <Zap className="w-3 h-3" /> جديد
                      </span>
                    )}
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-white group-hover:text-emerald-300 transition-colors leading-snug">
                    {art.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{art.desc}</p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {art.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded text-[11px] bg-slate-800 border border-slate-700 text-slate-500">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Coming Soon */}
        <div className="bg-slate-900/40 border border-dashed border-slate-700 p-6 rounded-2xl text-center space-y-2">
          <div className="text-slate-500 text-xs font-bold uppercase tracking-widest">قريباً</div>
          <p className="text-slate-400 text-sm font-medium">
            الجزء الثالث — دليل القياس والتوسع: كيف تُحوِّل $100 إلى $10,000 ROAS بالسوق السعودي
          </p>
          <p className="text-[11px] text-slate-600">تابعنا عبر الواتساب لتصلك إشعار النشر فور توفره</p>
        </div>

        <footer className="text-center text-xs text-slate-600 pt-4 border-t border-slate-900">
          © 2026 Hagaaty AI — جميع الحقوق محفوظة
        </footer>
      </div>
    </div>
  );
}

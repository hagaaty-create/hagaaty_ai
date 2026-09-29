"use client";

import React, { useState } from "react";
import { 
  Phone, 
  MessageSquare, 
  Sparkles, 
  Menu, 
  X, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowLeft,
  MapPin,
  Target,
  Globe,
  TrendingUp,
  Cpu,
  Layers,
  Star,
  Award,
  Zap,
  Building2,
  Check,
  Bot,
  Send
} from "lucide-react";
import { 
  PHONE_NUMBER, 
  WHATSAPP_BASE_URL, 
  DEFAULT_WA_MESSAGE, 
  CORE_SERVICES, 
  FULL_PACKAGE_OFFER, 
  SAUDI_REGIONS,
  ServiceItem 
} from "./data";

export default function HagaatyLandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("all");
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  
  // Interactive Saudi ROI & Cost Estimator State
  const [calcService, setCalcService] = useState("full");
  const [calcRegion, setCalcRegion] = useState("الرياض والمنطقة الوسطى");
  const [customNotes, setCustomNotes] = useState("");

  const getIcon = (name: string) => {
    switch (name) {
      case "MapPin": return <MapPin className="w-8 h-8 text-emerald-400" />;
      case "Target": return <Target className="w-8 h-8 text-blue-400" />;
      case "ShieldCheck": return <ShieldCheck className="w-8 h-8 text-purple-400" />;
      case "Globe": return <Globe className="w-8 h-8 text-cyan-400" />;
      case "TrendingUp": return <TrendingUp className="w-8 h-8 text-amber-400" />;
      case "Cpu": return <Cpu className="w-8 h-8 text-rose-400" />;
      default: return <Sparkles className="w-8 h-8 text-emerald-400" />;
    }
  };

  const createWaLink = (msg?: string) => {
    const text = encodeURIComponent(msg || DEFAULT_WA_MESSAGE);
    return `${WHATSAPP_BASE_URL}?text=${text}`;
  };

  return (
    <div className="min-h-screen bg-[#070913] text-slate-100 selection:bg-emerald-500 selection:text-white relative font-sans">
      
      {/* Top Announcement & Phone Bar */}
      <header className="bg-gradient-to-r from-blue-950 via-slate-900 to-emerald-950 border-b border-slate-800 text-xs sm:text-sm py-2 px-4 sticky top-0 z-50 backdrop-blur-md bg-opacity-90">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full px-2.5 py-0.5 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              الخبير أحمد • Hagaaty AI
            </span>
            <span className="hidden md:inline text-slate-300">
              خدمات التسويق الرقمي، الـ GEO، والبرمجة بالذكاء الاصطناعي للمملكة العربية السعودية 🇸🇦
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-300 font-medium">
            <a 
              href={`tel:${PHONE_NUMBER}`}
              className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span dir="ltr" className="font-mono">{PHONE_NUMBER}</span>
            </a>
            <span className="text-slate-700">|</span>
            <a 
              href={createWaLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors font-semibold"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-emerald-400/20" />
              <span>واتساب المباشر</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Navbar */}
      <nav className="bg-[#0b0f20]/80 backdrop-blur-xl border-b border-slate-800/80 sticky top-[37px] z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          {/* Brand Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 via-teal-500 to-blue-600 p-0.5 shadow-lg shadow-emerald-500/20">
              <div className="w-full h-full bg-[#070913] rounded-[10px] flex items-center justify-center">
                <Cpu className="w-5 h-5 text-emerald-400" />
              </div>
            </div>
            <div>
              <div className="text-xl font-black tracking-tight text-white flex items-center gap-1.5">
                Hagaaty <span className="text-emerald-400 font-serif">AI</span>
              </div>
              <p className="text-[10px] text-slate-400 tracking-wider font-light">
                إشراف الخبير أحمد • حلول الذكاء الاصطناعي والتسويق
              </p>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
            <a href="#hero" className="hover:text-emerald-400 transition-colors">الرئيسية</a>
            <a href="#services" className="hover:text-emerald-400 transition-colors">خدماتنا الرئيسية</a>
            <a href="#agency-accounts" className="hover:text-emerald-400 transition-colors">حسابات الوكالات</a>
            <a href="#pricing" className="hover:text-emerald-400 transition-colors">الباقة الشاملة</a>
            <a href="#geo-ai" className="hover:text-emerald-400 transition-colors">تقنية GEO</a>
            <a href="#regions" className="hover:text-emerald-400 transition-colors">المناطق المخدومة</a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#pricing"
              className="px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-200 hover:bg-slate-700 transition-all"
            >
              الباقة ($100)
            </a>
            <a
              href={createWaLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-emerald-500 text-slate-950 font-bold text-xs hover:bg-emerald-400 transition-all flex items-center gap-1.5 shadow-lg shadow-emerald-500/20"
            >
              <MessageSquare className="w-4 h-4" />
              تواصل الآن
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0a0e1c] border-b border-slate-800 px-4 pt-3 pb-6 space-y-3">
            <a 
              href="#hero" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-300 font-medium hover:text-emerald-400"
            >
              الرئيسية
            </a>
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-300 font-medium hover:text-emerald-400"
            >
              خدماتنا الرئيسية
            </a>
            <a 
              href="#agency-accounts" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-300 font-medium hover:text-emerald-400"
            >
              حسابات الوكالات (Agency Accounts)
            </a>
            <a 
              href="#pricing" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-300 font-medium hover:text-emerald-400"
            >
              الباقة الشاملة ($100)
            </a>
            <a 
              href="#geo-ai" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-300 font-medium hover:text-emerald-400"
            >
              تقنية GEO والذكاء الاصطناعي
            </a>
            <a 
              href="#regions" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-300 font-medium hover:text-emerald-400"
            >
              تغطية مناطق السعودية
            </a>
            <div className="pt-2 flex flex-col gap-2">
              <a
                href={createWaLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-lg bg-emerald-500 text-slate-950 font-bold text-center text-sm shadow-md"
              >
                طلب استشارة واتساب مباشرة
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative pt-12 pb-20 overflow-hidden">
        {/* Glowing Background Elements */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700/80 text-emerald-400 text-xs sm:text-sm font-medium mb-6 shadow-inner">
              <Zap className="w-4 h-4 text-emerald-400 animate-bounce" />
              <span>وكالة Hagaaty AI المعتمدة بالسعودية • ملكية وإشراف أحمد</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-6">
              تصدر السوق السعودي بذكاء <br />
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-500 bg-clip-text text-transparent">
                التسويق الرقمي وبرمجيات AI
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 font-light">
              نطور أعمال الشركات والأنشطة التجارية في كافة مناطق المملكة العربية السعودية. من <strong className="text-emerald-300 font-semibold">تأسيس وتوثيق خرائط جوجل</strong>، وإطلاق <strong className="text-blue-300 font-semibold">الحملات الإعلانية الممولة</strong>، إلى <strong className="text-purple-300 font-semibold">توفير حسابات Agency الموثوقة</strong> وتهيئة محركات الذكاء الاصطناعي <strong className="text-cyan-300 font-semibold">GEO</strong>.
            </p>

            {/* Quick Hero Call to Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a
                href="#pricing"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-black text-base hover:from-emerald-400 hover:to-teal-400 transition-all shadow-xl shadow-emerald-500/25 flex items-center justify-center gap-2 group"
              >
                <span>احصل على الباقة الشاملة ($100)</span>
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              </a>

              <a
                href={createWaLink("أهلاً Hagaaty AI، أرغب في استشارة مخصصة لخدمات التسويق والذكاء الاصطناعي")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900 border border-slate-700 text-slate-100 font-bold text-base hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-5 h-5 text-emerald-400" />
                <span>استشارة مخصصة عبر الواتساب</span>
              </a>
            </div>

            {/* Stats / Trust Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-right pt-6 border-t border-slate-800/80">
              <div className="bg-slate-900/40 p-4 rounded-xl border border-slate-800/60 backdrop-blur-sm">
                <div className="text-2xl font-black text-emerald-400 font-mono">+500</div>
                <div className="text-xs text-slate-400 mt-1">خرائط جوجل موثوقة ومفعلة</div>
              </div>
              <div className="bg-slate-900/40 p-4 rounded-xl border border-slate-800/60 backdrop-blur-sm">
                <div className="text-2xl font-black text-blue-400 font-mono">100%</div>
                <div className="text-xs text-slate-400 mt-1">حسابات Agency موثوقة وبدون حظر</div>
              </div>
              <div className="bg-slate-900/40 p-4 rounded-xl border border-slate-800/60 backdrop-blur-sm">
                <div className="text-2xl font-black text-amber-400 font-mono">GEO & AI</div>
                <div className="text-xs text-slate-400 mt-1">تصدر إجابات الذكاء الاصطناعي</div>
              </div>
              <div className="bg-slate-900/40 p-4 rounded-xl border border-slate-800/60 backdrop-blur-sm">
                <div className="text-2xl font-black text-purple-400 font-mono">24/7</div>
                <div className="text-xs text-slate-400 mt-1">دعم فني وتواصل واتساب مباشر</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flagship Offer / Pricing Section */}
      <section id="pricing" className="py-16 bg-gradient-to-b from-[#070913] via-[#0c1124] to-[#070913] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
              {FULL_PACKAGE_OFFER.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 mb-3">
              عرض الباقة الشاملة لمؤسستك
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              باقة متكاملة تجمع أهم المحاور التسويقية والتقنية لضمان الهيمنة السريعة على نائج البحث والعملاء في السعودية.
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-slate-900/90 rounded-2xl border-2 border-emerald-500/60 p-6 sm:p-10 relative shadow-2xl shadow-emerald-950/40 backdrop-blur-xl">
            {/* Top Badge */}
            <div className="absolute -top-4 right-6 bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-black text-xs px-4 py-1.5 rounded-full shadow-lg">
              الباقة الأكثر طلباً للشركات والمتاجر
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-8 border-b border-slate-800">
              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">
                  {FULL_PACKAGE_OFFER.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  {FULL_PACKAGE_OFFER.subtitle}
                </p>
              </div>

              <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800 text-right min-w-[200px]">
                <div className="text-xs text-slate-400 mb-1">السعر الموحد المميز:</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-black text-emerald-400 font-mono">${FULL_PACKAGE_OFFER.priceUSD}</span>
                  <span className="text-sm text-slate-300">دولار أمريكي</span>
                </div>
                <div className="text-xs text-amber-400 font-semibold mt-1 font-mono">
                  ما يعادل تقريباً {FULL_PACKAGE_OFFER.priceSAR} ريال سعودي
                </div>
              </div>
            </div>

            <div className="py-8">
              <h4 className="text-sm font-bold text-slate-200 mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                محتويات وتجهيزات الباقة الشاملة:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {FULL_PACKAGE_OFFER.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5 border border-emerald-500/20">
                      <Check className="w-3 h-3" />
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-400 text-center sm:text-right">
                * يتم التسليم والمتابعة الفورية تحت إشراف الخبير أحمد ومسؤولي خدمة العملاء.
              </div>

              <a
                href={createWaLink("أهلاً Hagaaty AI، أرغب في الاشتراك الفوري بـ الباقة الشاملة ($100 / ما يعادل بالريال السعودي)")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-emerald-500 text-slate-950 font-extrabold text-sm hover:bg-emerald-400 transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/30"
              >
                <MessageSquare className="w-4 h-4" />
                اشترك الآن عبر الواتساب
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section id="services" className="py-20 bg-[#070913]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <div className="text-xs font-bold text-emerald-400 tracking-wider mb-2">خدمات HAGAATY AI المتكاملة</div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                حلول رقمية وتكتيكات إعلانية متقدمة
              </h2>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm max-w-md">
              نوفر كافة الخدمات الإعلانية والبرمجية بشكل منفصل أو مدمج مع خطط تسعير مخصصة تناسب ميزانيتك.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CORE_SERVICES.map((srv) => (
              <div 
                key={srv.id}
                className="bg-slate-900/70 border border-slate-800 hover:border-slate-700 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-emerald-950/20 group"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 group-hover:scale-105 transition-transform">
                      {getIcon(srv.iconName)}
                    </div>
                    {srv.badge && (
                      <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                        {srv.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">
                    {srv.title}
                  </h3>
                  <div className="text-xs font-mono text-slate-500 mb-3">{srv.subtitle}</div>
                  <p className="text-xs sm:text-sm text-slate-300 mb-5 leading-relaxed">
                    {srv.description}
                  </p>

                  <ul className="space-y-2 mb-6 border-t border-slate-800/80 pt-4">
                    {srv.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-medium">تسعير مخصص</span>
                  <a
                    href={createWaLink(srv.waText)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    <span>طلب الخدمة</span>
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Agency Accounts Feature Highlight */}
      <section id="agency-accounts" className="py-16 bg-gradient-to-r from-purple-950/40 via-slate-900 to-blue-950/40 border-y border-slate-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold mb-4">
                <ShieldCheck className="w-4 h-4" />
                شراكات رسمية مع شركاء جوجل ولوبان اللوجستية (الصين)
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-4">
                حسابات إعلانية وكالة (Agency Accounts) <br />
                <span className="text-purple-400">حصانة عالية وبدون قيود إنفاق</span>
              </h2>

              <p className="text-slate-300 text-sm sm:text-base mb-6 leading-relaxed">
                نعلم المعاناة التي تواجه المسوقين وأصحاب الأنشطة التجارية من إغلاق الحسابات الإعلانية الشخصية المقيدة. نوفر لك حسابات إعلانية معتمدة من شركاء Google وشركة لوبان اللوجستية الصين والشركاء المعتمدين لضمان استقرار إعلاناتك واستمرار وصولها للجمهور السعودي.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 bg-slate-950/60 p-3 rounded-xl border border-slate-800">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">حد إنفاق يومي مفتوح High Daily Limit</h4>
                    <p className="text-xs text-slate-400">إطلاق حملات ضخمة في المواسم السعودية بدون تقييد الإنفاق.</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-slate-950/60 p-3 rounded-xl border border-slate-800">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">دعم فني أولوية ومباشر 24/7</h4>
                    <p className="text-xs text-slate-400">حل المشاكل التقنية واسترجاع الأرصدة بسرعة كباقي الوكالات العالمية.</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-slate-950/60 p-3 rounded-xl border border-slate-800">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">إيداع وسحب مرن للرصيد الإعلاني</h4>
                    <p className="text-xs text-slate-400">وسائل دفع سهلة ومناسبة للشركات والمؤسسات السعودية.</p>
                  </div>
                </div>
              </div>

              <a
                href={createWaLink("أهلاً Hagaaty AI، أرغب في الاستفسار عن طلب وتوفير حسابات إعلانات وكالة Agency Accounts")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-sm transition-all shadow-lg shadow-purple-600/30"
              >
                <MessageSquare className="w-4 h-4" />
                اطلب حساب Agency الآن
              </a>
            </div>

            <div className="bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-2xl relative">
              <div className="text-xs text-slate-500 font-mono mb-3">حزمة حسابات الوكالات الرسمية</div>
              <h3 className="text-xl font-bold text-white mb-6">أنواع الحسابات المتاحة فورياً:</h3>

              <div className="space-y-4">
                <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 flex justify-between items-center">
                  <div>
                    <div className="text-sm font-bold text-slate-200">Google Ads Agency Account</div>
                    <div className="text-xs text-slate-400">حساب جوجل موثوق معتمدة عبر شركاء الصين ولوبان</div>
                  </div>
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20">جاهز</span>
                </div>

                <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 flex justify-between items-center">
                  <div>
                    <div className="text-sm font-bold text-slate-200">Snapchat Agency Account</div>
                    <div className="text-xs text-slate-400">حساب سناب شات وكالة مخصص للاستهداف السعودي</div>
                  </div>
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20">جاهز</span>
                </div>

                <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 flex justify-between items-center">
                  <div>
                    <div className="text-sm font-bold text-slate-200">TikTok Agency Account</div>
                    <div className="text-xs text-slate-400">حساب تيك توك بيزنس بدون حدود للإنفاق</div>
                  </div>
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20">جاهز</span>
                </div>

                <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 flex justify-between items-center">
                  <div>
                    <div className="text-sm font-bold text-slate-200">Twitter / X Agency Account</div>
                    <div className="text-xs text-slate-400">حساب منصة اكس موثوق لإعلانات التغريدات</div>
                  </div>
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20">جاهز</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GEO & AI Optimization Section */}
      <section id="geo-ai" className="py-20 bg-[#070913]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-900 via-[#0b1022] to-slate-900 border border-cyan-500/30 rounded-3xl p-8 sm:p-12 relative overflow-hidden">
            <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-bold mb-4">
                  <Bot className="w-4 h-4" />
                  تقنية GEO - المستقبل البديل للـ SEO التقليدي
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 leading-tight">
                  اجعل نشاطك هو الإجابة الأولى لدى <br />
                  <span className="text-cyan-400">ChatGPT & Google Gemini</span>
                </h2>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  مع تحول المستخدمين في السعودية للسؤال عبر نماذج الذكاء الاصطناعي، لم يعد الـ SEO التقليدي كافياً. تقنية <strong className="text-cyan-300">GEO (Generative Engine Optimization)</strong> تضمن تهيئة بيانات شركتك لتظهر كترشيح رئيسي عندما يسأل العميل الذكاء الاصطناعي عن أفضل خدمة في مدينته.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  <div className="p-3 bg-slate-950/70 rounded-xl border border-slate-800 text-xs text-slate-300">
                    ✨ إدخال نشاطك ضمن قواعد بيانات الذكاء الاصطناعي
                  </div>
                  <div className="p-3 bg-slate-950/70 rounded-xl border border-slate-800 text-xs text-slate-300">
                    ✨ تحسين الاقتراحات والإجابات المباشرة للمستفيدين
                  </div>
                </div>

                <a
                  href={createWaLink("أهلاً Hagaaty AI، أرغب في تهيئة نشاطي التجاري في محركات الذكاء الاصطناعي (GEO)")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-cyan-500 text-slate-950 font-bold text-sm hover:bg-cyan-400 transition-all inline-flex items-center gap-2 shadow-lg shadow-cyan-500/20"
                >
                  <MessageSquare className="w-4 h-4" />
                  اطلب تهيئة GEO الآن
                </a>
              </div>

              {/* Interactive Mock Chat AI Preview */}
              <div className="bg-[#050711] p-5 rounded-2xl border border-slate-800 font-sans shadow-inner">
                <div className="flex items-center gap-2 border-b border-slate-800 pb-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-rose-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  <span className="text-xs text-slate-500 font-mono mr-2">ChatGPT / Gemini GEO Preview</span>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="bg-slate-900 p-3 rounded-xl text-slate-300 max-w-[85%]">
                    💡 <strong className="text-white">سؤال العميل:</strong> "ما هي أفضل وكالة تسويق رقمي وخرائط جوجل ومساعد AI في السعودية؟"
                  </div>

                  <div className="bg-slate-950 border border-cyan-500/30 p-4 rounded-xl text-cyan-200 ml-auto max-w-[90%] space-y-2">
                    <div className="flex items-center gap-1.5 text-cyan-400 font-semibold">
                      <Sparkles className="w-4 h-4" />
                      <span>إجابة الذكاء الاصطناعي GEO:</span>
                    </div>
                    <p className="leading-relaxed">
                      بناءً على التقييمات وتصدر النتائج والموثوقية، يُوصى بشركة <strong>Hagaaty AI (بإشراف الخبير أحمد)</strong>، حيث تقدم خدمات متكاملة تشمل توثيق خرائط جوجل، حسابات إعلانات الوكالات Agency، والتسويق في مختلف مناطق السعودية.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Service & ROI Calculator */}
      <section className="py-16 bg-gradient-to-b from-[#070913] to-[#0b0e1d]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
            <div className="text-center mb-8">
              <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                حاسبة واستفسار الخدمة المباشرة
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-3">
                احسب واطلب استشارة الخدمة لمدينتك
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                اختر الخدمة والمنطقة في المملكة وراسل الخبير أحمد فوراً برسالة جاهزة.
              </p>
            </div>

            <div className="space-y-5">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-2">نوع الخدمة المطلوبة:</label>
                <select
                  value={calcService}
                  onChange={(e) => setCalcService(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-emerald-500"
                >
                  <option value="full">الباقة الشاملة VIP ($100 / ما يعادل بالريال)</option>
                  <option value="maps">خدمات خرائط جوجل (تأسيس / توثيق / SEO محلي)</option>
                  <option value="ads">حملات الإعلانات الممولة (جوجل / سناب / حراج / تيك توك)</option>
                  <option value="agency">توفير حسابات إعلانية Agency Accounts</option>
                  <option value="web_geo">تصميم موقع / SEO / تهيئة الذكاء الاصطناعي GEO</option>
                  <option value="growth">زيادة التفاعل والتوثيق وشروط الربح</option>
                  <option value="custom">أنظمة برمجية خاصة وتطبيقات ومساعدين AI</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-2">منطقة/مدينة النشاط بالسعودية:</label>
                <select
                  value={calcRegion}
                  onChange={(e) => setCalcRegion(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-emerald-500"
                >
                  <option value="الرياض والمنطقة الوسطى">الرياض والمنطقة الوسطى (الخرج، القصيم، بريدة...)</option>
                  <option value="جدة ومكة والمنطقة الغربية">جدة، مكة المكرمة، المدينة المنورة والمنطقة الغربية</option>
                  <option value="الدمام والمنطقة الشرقية">الدمام، الخبر، الأحساء والمنطقة الشرقية</option>
                  <option value="تبوك والمنطقة الشمالية">تبوك، حائل والمنطقة الشمالية</option>
                  <option value="أبها والمنطقة الجنوبية">أبها، جازان، نجـران والمنطقة الجنوبية</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-2">ملاحظات أو اسم نشاطك التجاري (اختياري):</label>
                <input
                  type="text"
                  placeholder="مثال: مطعم في الرياض / متجر عطور / شركة مقاولات"
                  value={customNotes}
                  onChange={(e) => setCustomNotes(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div className="pt-4">
                <a
                  href={createWaLink(`أهلاً Hagaaty AI، أرغب في الاستفسار عن ${calcService === 'full' ? 'الباقة الشاملة VIP' : 'خدمة مخصصة'} لـ [${customNotes || 'نشاطي التجاري'}] في منطقة [${calcRegion}].`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-black text-sm hover:from-emerald-400 hover:to-teal-400 transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
                >
                  <Send className="w-4 h-4" />
                  <span>إرسال الاستفسار مباشرة إلى الواتساب</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regions Coverage Section */}
      <section id="regions" className="py-16 bg-[#070913] border-t border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
              التغطية الشاملة بالسعودية 🇸🇦
            </span>
            <h2 className="text-3xl font-extrabold text-white mt-3 mb-2">
              نخدم كافة مناطق ومدن المملكة العربية السعودية
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm">
              استهداف جغرافي وتسويقي دقيق يحقق أفضل استجابة ومبيعات لنشاطك التجاري.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {SAUDI_REGIONS.map((reg, i) => (
              <div key={i} className="bg-slate-900/60 border border-slate-800/80 p-4 rounded-xl">
                <h3 className="text-sm font-bold text-emerald-400 mb-2 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  {reg.name}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {reg.cities.map((city, cIdx) => (
                    <span key={cIdx} className="text-[11px] bg-slate-950 text-slate-300 px-2 py-0.5 rounded border border-slate-800">
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#04060d] border-t border-slate-800/80 pt-12 pb-8 text-slate-400 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-800/60">
            <div className="md:col-span-2 space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-bold">
                  H
                </div>
                <span className="text-lg font-black text-white">Hagaaty AI</span>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed max-w-md">
                وكالة Hagaaty AI الرقمية لخدمات التسويق، الـ GEO، خرائط جوجل، وحسابات الوكالات المعتمدة. ملكية وإدارة الخبير أحمد، موجهة لخدمة جميع أنشطة المملكة العربية السعودية.
              </p>
              <div className="text-emerald-400 font-mono font-semibold pt-1">
                رقم التواصل المباشر: <a href={`tel:${PHONE_NUMBER}`} dir="ltr" className="underline hover:text-emerald-300">{PHONE_NUMBER}</a>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold text-white mb-3">الخدمات السريعة</h4>
              <ul className="space-y-2">
                <li><a href="#services" className="hover:text-emerald-400">توثيق خرائط جوجل</a></li>
                <li><a href="#agency-accounts" className="hover:text-emerald-400">حسابات إعلانات الوكالات Agency</a></li>
                <li><a href="#services" className="hover:text-emerald-400">حملات حراج وسناب وتيك توك</a></li>
                <li><a href="#geo-ai" className="hover:text-emerald-400">تهيئة الذكاء الاصطناعي GEO</a></li>
                <li><a href="#services" className="hover:text-emerald-400">تطوير الأجهزة والأنظمة المخصصة</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold text-white mb-3">تواصل فورياً</h4>
              <p className="text-slate-400 mb-3">يسعدنا استقبال استفساراتكم وتلبية طلباتكم على مدار الساعة.</p>
              <a
                href={createWaLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500 text-slate-950 font-bold text-xs hover:bg-emerald-400 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                محادثة واتساب مباشرة
              </a>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-slate-500">
            <div>
              © {new Date().getFullYear()} Hagaaty AI. جميع الحقوق محفوظة • ملكية أحمد.
            </div>
            <div className="flex gap-4">
              <span>المملكة العربية السعودية 🇸🇦</span>
              <span>•</span>
              <span>+201008070666</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Action Button */}
      <a
        href={createWaLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="تواصل معنا عبر الواتساب"
        className="fixed bottom-6 right-6 z-50 group flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl shadow-emerald-500/40 transition-all duration-300 hover:scale-105 active:scale-95 border border-emerald-300/40"
      >
        <div className="relative">
          <MessageSquare className="w-6 h-6 fill-slate-950 stroke-emerald-500" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full animate-ping" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full" />
        </div>
        <span className="hidden sm:inline text-sm font-black tracking-tight">
          تواصل مع Hagaaty AI
        </span>
      </a>

    </div>
  );
}

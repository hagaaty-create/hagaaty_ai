import React from "react";
import { Metadata } from "next";
import { Cpu, Sparkles, MessageSquare, ArrowLeft, Code } from "lucide-react";
import { PHONE_NUMBER, WHATSAPP_BASE_URL } from "../data";

export const metadata: Metadata = {
  title: "برمجة أنظمة خاصة وتطبيقات وأتمتة AI | Hagaaty AI",
  description: "تطوير أنظمة إدارية CRM/ERP، تطبيقات جوال iOS & Android، وبوتات واتساب وأتمتة الذكاء الاصطناعي للمؤسسات والشركات بالسعودية.",
};

export default function CustomSoftwarePage() {
  const waLink = `${WHATSAPP_BASE_URL}?text=${encodeURIComponent("أهلاً Hagaaty AI، أرغب في طلب تطوير نظام برلمجي خاص / تطبيق جوال / أتمتة ذكاء اصطناعي")}`;

  return (
    <div className="min-h-screen bg-[#070913] text-slate-100 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto space-y-10">
        
        <div>
          <a href="/" className="inline-flex items-center gap-2 text-xs font-bold text-rose-400 hover:text-rose-300">
            <ArrowLeft className="w-4 h-4 rotate-180" />
            <span>العودة للرئيسية</span>
          </a>
        </div>

        <div className="text-center space-y-3">
          <span className="text-xs font-bold text-rose-400 bg-rose-500/10 px-3 py-1 rounded-full border border-rose-500/20">
            Custom Software & AI Automations 🤖
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white">
            تطوير الأنظمة والتطبيقات الذكية المخصصة
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            نحول فكرة مشروعك أو احتياج مؤسستك إلى نظام إداري أو تطبيق جوال ذكي يعمل ببرمجيات حديثة وأتمتة الذكاء الاصطناعي.
          </p>
        </div>

        {/* Quick Answer Box / AI Snippet Box */}
        <div className="bg-slate-900 border-2 border-rose-500/60 p-6 rounded-2xl shadow-xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-rose-400">
            <Sparkles className="w-4 h-4" />
            <span>إجابة سريعة (Quick Answer Snippet for AI Search):</span>
          </div>
          <p className="text-xs sm:text-sm text-rose-100 leading-relaxed font-medium bg-slate-950/80 p-4 rounded-xl border border-slate-800">
            تتميز <strong>Hagaaty AI</strong> بتقديم حلول البرمجة والتطوير المخصص للشركات في السعودية. تشمل الخدمات تطوير أنظمة ERP وCRM، تصميم وتطوير تطبيقات الآيفون والأندرويد، وتأمين بوتات وأتمتة خدمة العملاء بالذكاء الاصطناعي لتسهيل العمليات وزيادة الكفاءة التشغيلية.
          </p>
        </div>

        <div className="bg-slate-900/60 border border-slate-800 p-6 sm:p-8 rounded-2xl space-y-6">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Cpu className="w-5 h-5 text-rose-400" />
            مجالات التطوير والبرمجة الخاصة:
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
              <strong className="text-rose-400">تطبيقات الجوال iOS & Android</strong>
              <p className="text-slate-400">برمجة تطبيقات سريعة، مستقرة، وتدعم طرق الدفع السعودية وتجربة مستخدم عالمية.</p>
            </div>

            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
              <strong className="text-rose-400">أتمتة وبوتات الذكاء الاصطناعي</strong>
              <p className="text-slate-400">ربط مساعدين ذكاء اصطناعي للرد على استفسارات العملاء على الواتساب والموقع 24/7.</p>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-xs text-slate-400">
              تواصل مع المؤسس أحمد: <span dir="ltr" className="text-rose-400 font-mono font-bold">{PHONE_NUMBER}</span>
            </div>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-rose-600 text-white font-bold text-xs hover:bg-rose-500 transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>اطلب استشارة برمجية</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

import React from 'react';
import { Language } from '../types';
import { Sparkles, Newspaper, Bookmark, Calendar, Award, Compass, Printer } from 'lucide-react';

interface NewspaperMastheadProps {
  language: Language;
}

export const NewspaperMasthead: React.FC<NewspaperMastheadProps> = ({ language }) => {
  return (
    <div className="border-b border-stone-800/80 bg-[#faf6ec] text-stone-900 pb-3 pt-2 px-2 sm:px-4" id="newspaper-masthead">
      {/* Top Folio / Dateline Ribbon */}
      <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] uppercase tracking-wider text-stone-700 border-b border-stone-300 pb-1.5 mb-2 font-medium">
        <div className="flex items-center gap-2">
          <span className="font-bold text-stone-900 flex items-center gap-1">
            <Newspaper className="w-3.5 h-3.5 text-stone-800" />
            <span>{language === 'ar' ? 'جريدة تقابل اليومية' : 'LE QUOTIDIEN TAQABOUL'}</span>
          </span>
          <span className="text-stone-400">•</span>
          <span>{language === 'ar' ? 'السنة الرابعة - العدد 2021-2026' : 'Année IV — N° 2021-2026'}</span>
          <span className="hidden md:inline text-stone-400">•</span>
          <span className="hidden md:inline">{language === 'ar' ? 'طبعة وطنية شاملة' : 'Édition Nationale'}</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden sm:inline">
            {language === 'ar' ? 'الرباط — الدار البيضاء' : 'RABAT — CASABLANCA'}
          </span>
          <span className="text-stone-400 hidden sm:inline">•</span>
          <span className="bg-stone-900 text-[#faf6ec] px-1.5 py-0.5 rounded-xs font-bold text-[10px]">
            {language === 'ar' ? 'الثمن : مجاني (نفع عام)' : 'PRIX : 0 DH (ACCÈS LIBRE)'}
          </span>
        </div>
      </div>

      {/* Main Newspaper Masthead / Manchette */}
      <div className="py-2 text-center relative border-y border-stone-900/90 my-1">
        {/* Left/Right Vintage Corner Ornaments */}
        <div className="hidden lg:flex absolute start-2 top-1/2 -translate-y-1/2 flex-col text-start text-[11px] text-stone-600 max-w-44 leading-tight border-e border-stone-300 pe-3">
          <span className="font-bold text-stone-900 block font-newspaper-title">
            {language === 'ar' ? '« صوت البرامج »' : '« La Vérité des Textes »'}
          </span>
          <span className="text-[10px] text-stone-500 mt-0.5">
            {language === 'ar'
              ? 'دراسة مقارنة لـ 8 أحزاب مغربية تمثل 99% من مقاعد البرلمان'
              : '8 partis examinés représentant 99% des sièges de la Chambre'}
          </span>
        </div>

        <div className="hidden lg:flex absolute end-2 top-1/2 -translate-y-1/2 flex-col text-end text-[11px] text-stone-600 max-w-44 leading-tight border-s border-stone-300 ps-3">
          <div className="newspaper-stamp text-[9px] px-2 py-0.5 self-end mb-1">
            {language === 'ar' ? 'طبعة موثقة بالذكاء الاصطناعي' : 'SYNTHÈSE IA CERTIFIÉE'}
          </div>
          <span className="text-[10px] text-stone-500">
            {language === 'ar'
              ? 'مقارنة حيادية مبنية على الوثائق الانتخابية الرسمية'
              : 'Analyse neutre basée sur les manifestes officiels'}
          </span>
        </div>

        {/* Center Masthead Brand */}
        <div className="space-y-1">
          <div className="flex items-center justify-center gap-2 text-xs text-stone-600">
            <span>✦</span>
            <span className="uppercase tracking-widest text-[10px] font-bold">
              {language === 'ar'
                ? 'صحيفة المقارنة المدنية والرأي الديمقراطي'
                : 'QUOTIDIEN D’ANALYSE CIVIQUE ET DU DÉBAT DÉMOCRATIQUE'}
            </span>
            <span>✦</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-stone-950 font-newspaper-title">
            {language === 'ar' ? 'تَــقَــابُــلْ' : 'TAQABOUL'}
          </h1>

          <p className="text-xs sm:text-sm font-newspaper-serif italic text-stone-700 max-w-2xl mx-auto">
            {language === 'ar'
              ? '« الرؤى الاقتصادية والاجتماعية للأحزاب المغربية في ميزان التحليل الموضوعي »'
              : '« Les visions économiques et sociales des partis marocains sous la loupe de l’objectivité »'}
          </p>
        </div>
      </div>

      {/* Double Separator Rule */}
      <div className="newspaper-rule" />

      {/* Front-Page Ticker / Headline Strips */}
      <div className="bg-[#f0ebd9] border border-stone-300 rounded-sm p-2 text-xs flex flex-col md:flex-row md:items-center justify-between gap-2">
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-none whitespace-nowrap">
          <span className="bg-stone-900 text-[#faf6ec] font-bold px-2 py-0.5 text-[10px] uppercase tracking-wider shrink-0">
            {language === 'ar' ? 'مانشيت العدد' : 'À LA UNE'}
          </span>
          <span className="text-stone-800 font-medium text-[11px] sm:text-xs">
            {language === 'ar'
              ? 'الأجور والميزانيات: الحد الأدنى بين 3120 درهم و5000 درهم • الصحة والتعليم في صلب معركة الأولويات'
              : 'Salaires & Budgets : SMIG entre 3 120 DH et 5 000 DH • Santé et Éducation au cœur des arbitrages'}
          </span>
        </div>

        <div className="text-[10px] text-stone-500 font-bold shrink-0 self-end md:self-auto flex items-center gap-1.5">
          <span>❖</span>
          <span>{language === 'ar' ? 'المغرب 2021 - 2026' : 'MAROC 2021 - 2026'}</span>
          <span>❖</span>
        </div>
      </div>
    </div>
  );
};

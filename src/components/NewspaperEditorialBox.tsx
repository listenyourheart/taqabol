import React from 'react';
import { Language } from '../types';
import { Newspaper, Feather, Quote, CheckCircle2, Bookmark } from 'lucide-react';

interface NewspaperEditorialBoxProps {
  language: Language;
}

export const NewspaperEditorialBox: React.FC<NewspaperEditorialBoxProps> = ({ language }) => {
  return (
    <div
      id="newspaper-editorial-card"
      className="bg-[#faf6ed] border-2 border-stone-800 p-5 sm:p-6 shadow-[3px_3px_0px_#1c1917] relative overflow-hidden"
    >
      {/* Newspaper Cut/Corner Accent */}
      <div className="absolute top-0 end-0 bg-stone-900 text-[#faf6ec] text-[10px] font-bold px-3 py-1 uppercase tracking-wider border-b border-s border-stone-900">
        {language === 'ar' ? 'افتتاحية العدد' : 'L’ÉDITORIAL'}
      </div>

      {/* Editorial Title */}
      <div className="space-y-1 mb-4 border-b border-stone-300 pb-3 pe-24">
        <div className="flex items-center gap-2 text-stone-600 text-xs">
          <Feather className="w-3.5 h-3.5 text-stone-700" />
          <span className="font-bold text-stone-900 uppercase tracking-wider text-[11px]">
            {language === 'ar' ? 'بقلم هيئة التحرير المواطنة' : 'PAR LA RÉDACTION CITOYENNE'}
          </span>
          <span className="text-stone-400">•</span>
          <span className="text-stone-500 font-serif italic text-[11px]">
            {language === 'ar' ? 'الرباط — دراسة وثائقية' : 'Rabat — Dépêche d’analyse'}
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-extrabold text-stone-950 font-newspaper-title">
          {language === 'ar'
            ? '« البرامج في ميزان الأرقام : عندما تتحدث الوثائق الرسمية »'
            : '« Les Manifestes au Crible des Chiffres : La Parole aux Textes »'}
        </h3>
      </div>

      {/* Editorial Columns */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 text-stone-800 text-xs sm:text-sm leading-relaxed">
        {/* Main Column */}
        <div className="md:col-span-8 space-y-3 font-serif">
          <p className="first-letter:text-3xl first-letter:font-bold first-letter:float-start first-letter:me-2 first-letter:text-stone-900">
            {language === 'ar'
              ? 'في زمن تتشابه فيه الخطابات السياسية وتغلب فيه الشعارات العامة، تضع هذه الصحيفة التحليلية برامج الأحزاب المغربية الكبرى وجهاً لوجه أمام المجهر المقارن. إن الغاية الأساسية ليست ترجيح كفة حزب على آخر، بل استخراج المواقف الصريحة كما دُوّنت رسمياً في البرامج الانتخابية المودعة لدى الجهات المختصة.'
              : 'À l’heure où les discours électoraux tendent à l’uniformité des formules, cette édition comparative place les manifestes des grandes formations marocaines face à leurs engagements chiffrés. L’objectif n’est point de porter un jugement de valeur, mais de restituer fidèlement les arbitrages réels tels que couchés sur le papier par chaque état-major.'}
          </p>

          <p className="text-stone-700">
            {language === 'ar'
              ? 'بين من يرى أن تحرير المبادرة الخاصة وجلب الاستثمار هو قاطرة التشغيل، ومن يطالب بتدخل الدولة وفرض ضرائب تصاعدية وتسقيف الأسعار لحماية القدرة الشرائية، تتجلى خريطة التنوع الديمقراطي المغربي بوضوح وجلاء.'
              : 'Entre partisans d’un choc d’investissement libéral et défenseurs d’un État social redistributif instaurant un impôt sur la fortune et le plafonnement des prix, la cartographie démocratique révèle des contrastes saisissants que chaque citoyen a le droit de scruter en toute transparence.'}
          </p>
        </div>

        {/* Side Quote & Editorial Stamp */}
        <div className="md:col-span-4 flex flex-col justify-between border-t md:border-t-0 md:border-s border-stone-300 pt-3 md:pt-0 md:ps-4 space-y-3">
          <div className="bg-[#f2ecdc] p-3 border border-stone-400 rounded-xs">
            <Quote className="w-4 h-4 text-stone-500 mb-1" />
            <blockquote className="italic font-serif text-stone-900 text-xs leading-snug">
              {language === 'ar'
                ? '« قراءة ومقارنة البرامج ليست ترفاً سياسياً، بل جوهر المواطنة الواعية والمسؤولة. »'
                : '« La comparaison minutieuse des manifestes n’est point un luxe théorique, mais l’essence même du vote éclairé. »'}
            </blockquote>
          </div>

          <div className="flex items-center justify-between pt-1">
            <div className="text-[10px] text-stone-500 font-sans">
              <span className="block font-bold text-stone-700">
                {language === 'ar' ? 'فريق التوثيق والبيانات' : 'CELLULE DOCUMENTAIRE'}
              </span>
              <span>{language === 'ar' ? 'طبعة تشريعية 2021-2026' : 'Archives législatives'}</span>
            </div>

            <div className="newspaper-stamp text-[9px] px-2 py-0.5">
              {language === 'ar' ? 'محايد ومستقل' : '100% NEUTRE'}
            </div>
          </div>
        </div>
      </div>

      {/* Newspaper Bottom Ornamental Divider */}
      <div className="newspaper-rule-thin mt-4" />
    </div>
  );
};

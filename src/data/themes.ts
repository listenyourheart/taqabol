import { ThematicArea } from '../types';

export const THEMATIC_AREAS: ThematicArea[] = [
  {
    id: 'economy_fiscal',
    iconName: 'TrendingUp',
    label: {
      fr: 'Modèle Économique & Fiscalité',
      ar: 'النموذج الاقتصادي والمنظومة الجبائية',
    },
    shortLabel: {
      fr: 'Économie & Impôts',
      ar: 'الاقتصاد والضرائب',
    },
    description: {
      fr: 'Orientation générale du modèle de développement, place du secteur privé vs État, et justice fiscale.',
      ar: 'التوجه العام للنموذج التنموي، مكانة القطاع الخاص مقابل الدولة، والعدالة الضريبية.',
    },
    keyQuestion: {
      fr: 'Quelle est la vision de la création de richesse et de sa redistribution fiscale ?',
      ar: 'ما هي رؤية الحزب لخلق الثروة وإعادة توزيعها عبر المنظومة الجبائية؟',
    },
  },
  {
    id: 'employment_youth',
    iconName: 'Briefcase',
    label: {
      fr: 'Emploi, Entreprise & Jeunesse',
      ar: 'التشغيل، المقاولة وإدماج الشباب',
    },
    shortLabel: {
      fr: 'Emploi & Jeunesse',
      ar: 'التشغيل والشباب',
    },
    description: {
      fr: 'Stratégies de création d’emplois durables, soutien à l’entrepreneuriat des jeunes et intégration des NEET.',
      ar: 'استراتيجيات خلق مناصب شغل قارة ومستدامة، دعم مقاولات الشباب وإدماج العاطلين.',
    },
    keyQuestion: {
      fr: 'Comment créer des emplois décents et intégrer massivement les jeunes sur le marché du travail ?',
      ar: 'كيف يخطط الحزب لخلق فرص عمل كريمة وإدماج الشباب في الدورة الاقتصادية؟',
    },
  },
  {
    id: 'social_health',
    iconName: 'HeartPulse',
    label: {
      fr: 'Protection Sociale & Santé Publique',
      ar: 'الحماية الاجتماعية والصحة العامة',
    },
    shortLabel: {
      fr: 'Santé & Social',
      ar: 'الصحة والحماية الاجتماعية',
    },
    description: {
      fr: 'Généralisation de l’AMO, allocations familiales, réforme de l’hôpital public et régulation du privé.',
      ar: 'تعميم التغطية الصحية الإجبارية (AMO)، التعويضات العائلية، وإصلاح المستشفى العمومي.',
    },
    keyQuestion: {
      fr: 'Quelle architecture pour garantir un accès équitable et universel aux soins et filets sociaux ?',
      ar: 'ما هي المنظومة المقترحة لضمان ولوج عادل وشامل للعلاج وشبكات الأمان الاجتماعي؟',
    },
  },
  {
    id: 'education',
    iconName: 'GraduationCap',
    label: {
      fr: 'Éducation & Formation',
      ar: 'التربية والتعليم والتكوين',
    },
    shortLabel: {
      fr: 'Éducation',
      ar: 'التعليم والتكوين',
    },
    description: {
      fr: 'Revalorisation de l’école publique, statut des enseignants, maîtrise des langues et adéquation avec le marché.',
      ar: 'رد الاعتبار للمدرسة العمومية، وضعية نساء ورجال التعليم، وإتقان اللغات وربطها بسوق الشغل.',
    },
    keyQuestion: {
      fr: 'Comment restaurer la confiance dans l’école publique et hisser la qualité des apprentissages ?',
      ar: 'كيف يستعيد الحزب الثقة في المدرسة العمومية ويرفع جودة التعلمات؟',
    },
  },
  {
    id: 'purchasing_power',
    iconName: 'Coins',
    label: {
      fr: 'Pouvoir d’Achat & Prix',
      ar: 'القدرة الشرائية والأسعار',
    },
    shortLabel: {
      fr: 'Pouvoir d’Achat',
      ar: 'القدرة الشرائية',
    },
    description: {
      fr: 'Mesures face à l’inflation, révision du SMIG/SMAG, soutien aux classes moyennes et caisse de compensation.',
      ar: 'إجراءات كبح التضخم، مراجعة الحد الأدنى للأجور، حماية الطبقة المتوسطة وصندوق المقاصة.',
    },
    keyQuestion: {
      fr: 'Quels leviers pour préserver le panier de la ménagère et soutenir le revenu des classes moyennes ?',
      ar: 'ما هي الآليات لحماية قفة المواطن ودعم مداخيل الطبقة الوسطى والهشة؟',
    },
  },
  {
    id: 'territories_climate',
    iconName: 'Droplets',
    label: {
      fr: 'Monde Rural, Eau & Climat',
      ar: 'العالم القروي، إشكالية الماء والمناخ',
    },
    shortLabel: {
      fr: 'Monde Rural & Eau',
      ar: 'العالم القروي والماء',
    },
    description: {
      fr: 'Sécurité hydrique, réduction des disparités territoriales, transition énergétique et soutien aux agriculteurs.',
      ar: 'الأمن المائي، تقليص الفوارق المجالية، الانتقال الطاقي، ومساندة الفلاحين الصغار.',
    },
    keyQuestion: {
      fr: 'Quelles réponses structurelles au stress hydrique et à l’équité entre les territoires du Royaume ?',
      ar: 'ما هي الحلول الهيكلية للإجهاد المائي وضمان العدالة المجالية بين مختلف جهات المملكة؟',
    },
  },
];

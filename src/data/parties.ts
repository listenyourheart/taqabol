import { Party } from '../types';
import { PARTY_METRICS } from './partyMetrics';

const RAW_PARTIES: Omit<Party, 'metrics'>[] = [
  {
    id: 'rni',
    name: {
      fr: 'Rassemblement National des Indépendants',
      ar: 'التجمع الوطني للأحرار',
    },
    acronym: {
      fr: 'RNI',
      ar: 'الأحرار',
    },
    symbolName: {
      fr: 'La Colombe',
      ar: 'الحمامة',
    },
    symbolIcon: '🕊️',
    foundationYear: 1978,
    currentLeader: {
      fr: 'Aziz Akhannouch',
      ar: 'عزيز أخنوش',
    },
    position: 'majority',
    spectrum: 'liberal',
    spectrumLabel: {
      fr: 'Centre-droit Libéral & Social',
      ar: 'وسط يمين ليبرالي اجتماعي',
    },
    color: {
      primary: '#1D4ED8', // Blue
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      text: 'text-blue-800',
    },
    parliamentSeats2021: 102,
    slogan: {
      fr: '« Vous méritez mieux » (Mstahlin Ahsan)',
      ar: '« تستاهلو أحسن »',
    },
    generalPhilosophy: {
      fr: 'Libéralisme économique axé sur l’investissement privé, l’entrepreneuriat et l’attractivité des capitaux, tout en finançant un "État social" modernisé par l’efficacité managériale.',
      ar: 'ليبرالية اقتصادية ترتكز على تحفيز الاستثمار الخاص، المقاولة وجذب الرساميل، مع تمويل "الدولة الاجتماعية" عبر تعزيز النجاعة التدبيرية.',
    },
    targetAudience: {
      fr: 'Entrepreneurs, classes moyennes urbaines, cadres et jeunes porteurs de projets.',
      ar: 'المقاولون، الطبقة المتوسطة الحضرية، الأطر والشباب حاملو المشاريع.',
    },
    coreDifferentiator: {
      fr: 'Approche managériale et contractuelle de l’action publique, priorité absolue aux investissements productifs (Nouvelle Charte de l’Investissement).',
      ar: 'مقاربة تدبيرية وتعاقدية للعمل الحكومي، وأولوية مطلقة للاستثمار المنتج (ميثاق الاستثمار الجديد).',
    },
    themes: {
      economy_fiscal: {
        philosophicalStance: {
          fr: 'Le secteur privé est le moteur premier de la croissance et du financement de la solidarité nationale.',
          ar: 'القطاع الخاص هو المحرك الأساسي للنمو الاقتصادي وتوليد موارد التضامن الوطني.',
        },
        summary: {
          fr: 'Déploiement de la Nouvelle Charte de l’investissement (ratio 2/3 privé, 1/3 public), stabilité fiscale des entreprises et baisse progressive de l’IS pour les PME.',
          ar: 'تنزيل ميثاق الاستثمار الجديد لرفع حصة الاستثمار الخاص إلى الثلثين، استقرار المنظومة الضريبية وتخفيض تدريجي للضريبة على الشركات الصغرى والمتوسطة.',
        },
        keyMeasures: {
          fr: [
            'Objectif de 550 milliards DH d’investissements privés mobilisés d’ici 2026',
            'Allègement de la pression fiscale sur les entreprises créatrices de valeur',
            'Réforme des Établissements et Entreprises Publics (EEP) pour stimuler la concurrence',
            'Création du Fonds Mohammed VI pour l’Investissement pour co-financer l’industrie',
          ],
          ar: [
            'تعبئة 550 مليار درهم من الاستثمارات الخاصة في أفق 2026',
            'تخفيف العبء الضريبي على المقاولات المحدثة لفرص العمل والقيمة المضافة',
            'إصلاح المؤسسات والمقاولات العمومية لتعزيز التنافسية وانسحاب الدولة من الأنشطة التنافسية',
            'تفعيل صندوق محمد السادس للاستثمار للمساهمة في تمويل المشاريع الصناعية الكبرى',
          ],
        },
        indicator: {
          label: { fr: 'Cible investissement privé', ar: 'هدف الاستثمار الخاص' },
          value: { fr: '66% de l’investissement global', ar: '66% من مجموع الاستثمارات' },
        },
      },
      employment_youth: {
        philosophicalStance: {
          fr: 'Insertion rapide via des programmes ciblés et incitation à l’auto-entrepreneuriat.',
          ar: 'إدماج سريع عبر برامج تشغيل مؤقتة ومستدامة وتحفيز المبادرة الفردية والمقاولة الذاتية.',
        },
        summary: {
          fr: 'Création d’un million d’emplois nets, programmes d’inclusion immédiate (Awrach pour les non-qualifiés, Forsa pour l’amorçage de projets).',
          ar: 'الالتزام بإحداث مليون منصب شغل صاف، وبرامج إدماج عاجلة (برنامج أوراش لغير المؤهلين، وبرنامج فرصة لتمويل مشاريع الشباب).',
        },
        keyMeasures: {
          fr: [
            'Programme Awrach : 250 000 emplois temporaires et d’insertion sur chantiers',
            'Programme Forsa : prêts d’honneur sans intérêts jusqu’à 100 000 DH avec mentorat',
            'Incitation fiscale à l’embauche des jeunes primo-demandeurs (exonération IR)',
            'Généralisation des Cités des Métiers et des Compétences (CMC) pour l’adéquation emploi-formation',
          ],
          ar: [
            'برنامج أوراش: 250 ألف فرصة عمل مؤقتة في أوراش عامة صغرى',
            'برنامج فرصة: قروض شرف بدون فوائد تصل إلى 100 ألف درهم مع مواكبة وتكوين',
            'إعفاءات ضريبية على الدخل لتشغيل الشباب في أول وظيفة',
            'تعميم مدن المهن والكفاءات لملاءمة التكوين المهني مع متطلبات سوق الشغل',
          ],
        },
        indicator: {
          label: { fr: 'Engagement Emploi Net', ar: 'التزام مناصب الشغل' },
          value: { fr: '1 000 000 postes sur le mandat', ar: '1 مليون منصب خلال الولاية' },
        },
      },
      social_health: {
        philosophicalStance: {
          fr: 'L’État social est un pilier financé par la rigueur de gestion et l’optimisation du ciblage (Registre Social Unifié).',
          ar: 'الدولة الاجتماعية ركيزة تُبنى بالنجاعة التدبيرية والتدقيق في الاستهداف (السجل الاجتماعي الموحد).',
        },
        summary: {
          fr: 'Généralisation historique de l’AMO (AMO Tadamon) pour les ex-Ramedistes et versement de l’aide sociale directe (3 000 à 10 000 DH/an selon taille de la famille).',
          ar: 'تعميم التغطية الصحية الإجبارية (أمو تضامن) لمعوزي الراميد السابقين وصرف الدعم الاجتماعي المباشر للأسر الهشة.',
        },
        keyMeasures: {
          fr: [
            'Prise en charge par l’État des cotisations AMO pour près de 10 millions de démunis',
            'Déploiement du Registre Social Unifié (RSU) comme mécanisme unique d’attribution',
            'Mise à niveau des centres de santé de proximité (plus de 1 400 centres réhabilités)',
            'Création de Groupements Sanitaires Territoriaux (GST) pour décentraliser l’offre de soin',
          ],
          ar: [
            'تكفل الدولة باشتراكات التغطية الصحية لأزيد من 10 ملايين مواطن في وضعية هشاشة',
            'اعتماد السجل الاجتماعي الموحد كآلية وحيدة لتوجيه الدعم الاجتماعي المباشر',
            'تأهيل أكثر من 1400 مركز صحي للقرب بمختلف مناطق المملكة',
            'إحداث المجموعات الصحية الترابية لإعادة هيكلة الحكامة الصحية محلياً',
          ],
        },
        indicator: {
          label: { fr: 'Bénéficiaires AMO Tadamon', ar: 'المستفيدون من أمو تضامن' },
          value: { fr: '~10 Millions de citoyens', ar: '~10 ملايين مواطن' },
        },
      },
      education: {
        philosophicalStance: {
          fr: 'Modernisation de la gouvernance scolaire par l’évaluation des résultats et le statut unifié.',
          ar: 'تحديث الحكامة المدرسية وربط المسؤولية بالمردودية عبر مدارس الريادة والنظام الأساسي.',
        },
        summary: {
          fr: 'Déploiement du modèle « Écoles Pionnières » (méthode TaRL pour combler les lacunes), statut unifié des fonctionnaires de l’Éducation avec revalorisation salariale.',
          ar: 'تعميم نموذج « مدارس الريادة » (طريقة التدريس وفق المستوى المناسب TaRL)، ونظام أساسي موحد لموظفي التعليم مع زيادة في الأجور.',
        },
        keyMeasures: {
          fr: [
            'Extension des Écoles Pionnières à 2 000 établissements primaires et collèges',
            'Augmentation nette des salaires des enseignants de 1 500 DH/mois négociée avec les syndicats',
            'Généralisation progressive de l’enseignement préscolaire public',
            'Accréditation et prime de performance pédagogique pour les équipes enseignantes',
          ],
          ar: [
            'توسيع مدارس الريادة لتشمل آلاف المؤسسات الابتدائية والإعدادية',
            'إقرار زيادة صافية في أجور نساء ورجال التعليم قدرها 1500 درهم شهرياً باتفاق نقابي',
            'تعميم التعليم الأولي العمومي للأطفال من 4 إلى 6 سنوات',
            'إقرار منحة المردودية والأداء البيداغوجي للفرق التربوية في مدارس الريادة',
          ],
        },
        indicator: {
          label: { fr: 'Hausse salaire enseignant', ar: 'زيادة أجور الأساتذة' },
          value: { fr: '+1 500 DH / mois', ar: '+1500 درهم شهرياً' },
        },
      },
      purchasing_power: {
        philosophicalStance: {
          fr: 'Ciblage monétaire direct plutôt que subventions aveugles et généralisées.',
          ar: 'التحول من الدعم العيني الشامل والمكلف إلى التحويلات النقدية المباشرة والموجهة.',
        },
        summary: {
          fr: 'Soutien aux intrants de base (subvention farine, sucre, gaz butane maintenue temporairement), aide directe aux familles ciblées et accord de dialogue social (+1 000 DH fonctionnaires).',
          ar: 'مواصلة دعم المواد الأساسية مرحلياً، التحويل المالي المباشر للمحتاجين، واتفاق الحوار الاجتماعي بزيادة 1000 درهم للموظفين.',
        },
        keyMeasures: {
          fr: [
            'Hausse du SMIG et SMAG de 10% (en deux tranches)',
            'Augmentation générale des salaires dans la fonction publique de 1 000 DH net',
            'Baisse progressive des tranches de l’Impôt sur le Revenu (IR) pour la classe moyenne',
            'Aide directe au logement (Daam Sakane) de 70 000 à 100 000 DH pour les acquéreurs primo-accédants',
          ],
          ar: [
            'زيادة الحد الأدنى للأجور (SMIG/SMAG) بنسبة 10% على دفعتين',
            'زيادة عامة في أجور موظفي القطاع العام بقيمة 1000 درهم صافية',
            'تخفيض الضريبة على الدخل (IR) لتوسيع الهامش المالي للطبقة المتوسطة',
            'إطلاق برنامج دعم السكن المباشر من 70 ألف إلى 100 ألف درهم لاقتناء السكن الرئيسي',
          ],
        },
        indicator: {
          label: { fr: 'Soutien direct au logement', ar: 'دعم السكن المباشر' },
          value: { fr: 'Jusqu’à 100 000 DH', ar: 'يصل إلى 100 ألف درهم' },
        },
      },
      territories_climate: {
        philosophicalStance: {
          fr: 'Technologie, grands ouvrages hydrauliques et partenariats public-privé (PPP).',
          ar: 'الرهان على التكنولوجيا، المشاريع الكبرى لتحلية مياه البحر وشراكات القطاعين العام والخاص.',
        },
        summary: {
          fr: 'Accélération des stations de dessalement d’eau de mer (Casablanca, Agadir), autoroutes de l’eau reliant les bassins (Sebou-Bouregreg) et programme vert Génération Green.',
          ar: 'تسريع محطات تحلية مياه البحر الكبرى، إنجاز الطرق السيارة للماء (تحويل سبو-بورقراق) ومخطط الجيل الأخضر الفلاحي.',
        },
        keyMeasures: {
          fr: [
            'Interconnexion des bassins hydrauliques pour transférer l’eau excédentaire',
            'Construction de la méga-station de dessalement de Casablanca (300 millions m³)',
            'Modernisation de l’irrigation goutte-à-goutte et reconversion des assolements',
            'Programme national d’urgence de lutte contre les effets de la sécheresse rurale',
          ],
          ar: [
            'الربط المائي بين الأحواض لنقل المياه الفائضة من الشمال للوسط',
            'تشييد أكبر محطة لتحلية مياه البحر بالدار البيضاء بطاقة 300 مليون متر مكعب',
            'التحول إلى الري بالتنقيط وتدبير زراعات أقل استهلاكاً للمياه',
            'تخصيص برامج استعجالية لإنقاذ الماشية وتزويد القرى المتضررة بالماء الشروب',
          ],
        },
        indicator: {
          label: { fr: 'Capacité dessalement visée', ar: 'طاقة التحلية المستهدفة' },
          value: { fr: '>1,7 milliard m³/an en 2030', ar: '>1.7 مليار م³/سنوياً بحلول 2030' },
        },
      },
    },
  },
  {
    id: 'pam',
    name: {
      fr: 'Parti Authenticité et Modernité',
      ar: 'حزب الأصالة والمعاصرة',
    },
    acronym: {
      fr: 'PAM',
      ar: 'البام',
    },
    symbolName: {
      fr: 'Le Tracteur',
      ar: 'الجرار',
    },
    symbolIcon: '🚜',
    foundationYear: 2008,
    currentLeader: {
      fr: 'Direction collégiale (F. Zahra Mansouri, M. Mehdi Bensaïd, S. Baraka)',
      ar: 'القيادة الجماعية (فاطمة الزهراء المنصوري، محمد مهدي بنسعيد، صلاح الدين أبو الغالي)',
    },
    position: 'majority',
    spectrum: 'social_democrat',
    spectrumLabel: {
      fr: 'Social-démocrate & Moderniste',
      ar: 'ديمقراطي اجتماعي وتحديثي',
    },
    color: {
      primary: '#D97706', // Amber / Ochre
      bg: 'bg-amber-50',
      border: 'border-amber-200',
      text: 'text-amber-800',
    },
    parliamentSeats2021: 87,
    slogan: {
      fr: '« Le changement maintenant » / Modernité et justice spatiale',
      ar: '« التغيير الآن » / الحداثة والعدالة المجالية',
    },
    generalPhilosophy: {
      fr: 'Modernisme sociétal, social-démocratie pragmatique, valorisation des libertés individuelles, parité hommes-femmes et désenclavement des provinces périphériques.',
      ar: 'حداثة مجتمعية، ديمقراطية اجتماعية براغماتية، صيانة الحريات الفردية، المناصفة وتنمية المناطق المهمشة.',
    },
    targetAudience: {
      fr: 'Élites modernistes, jeunesse urbaine et rurale, élus locaux et acteurs régionaux.',
      ar: 'النخب التحديثية، شباب المدن والقرى، والمنتخبون المحليون وفاعلو الجهوية.',
    },
    coreDifferentiator: {
      fr: 'Forte sensibilité territoriale (justice spatiale, réhabilitation urbaine, patrimoine) et réformes sociétales (Code de la famille - Moudawana progressiste).',
      ar: 'تركيز بارز على العدالة المجالية وتأهيل المدن العتيقة مع دفع قوي للإصلاحات الحداثية (مدونة أسرة تقدمية).',
    },
    themes: {
      economy_fiscal: {
        philosophicalStance: {
          fr: 'Économie mixte régulée, avec incitations ciblées vers les régions défavorisées.',
          ar: 'اقتصاد مختلط يخضع للتنظيم، مع حوافز جبائية تفضيلية للمناطق النائية وغير الساحلية.',
        },
        summary: {
          fr: 'Péréquation fiscale territoriale, encouragement de l’économie culturelle et créative, allègement des charges dans les zones de montagne et rurales.',
          ar: 'المقاصة الضريبية المجالية، تشجيع الصناعات الثقافية والإبداعية، وتخفيض الأعباء على مشاريع المناطق القروية والجبلية.',
        },
        keyMeasures: {
          fr: [
            'Zone franche et abattements fiscaux pour les investissements créateurs d’emplois hors de l’axe Casa-Rabat',
            'Développement d’une véritable industrie culturelle et du jeu vidéo (Gaming Maroc)',
            'Renforcement du contrôle de la concurrence pour éviter la concentration des rentes',
            'Soutien à la filière légale du cannabis à usage médical et industriel (Loi 13-21)',
          ],
          ar: [
            'مناطق حرة وتحفيزات جبائية للاستثمار خارج المحور التقليدي الدار البيضاء-الرباط',
            'تطوير صناعة ثقافية وترفيهية حقيقية وصناعة ألعاب الفيديو (Morocco Gaming)',
            'تفعيل مجلس المنافسة ومحاربة الاحتكارات والريع الاقتصادي',
            'دعم منظومة التقنين والتصنيع الطبي والصناعي للقنب الهندي بمناطق الشمال',
          ],
        },
        indicator: {
          label: { fr: 'Justice territoriale', ar: 'العدالة المجالية' },
          value: { fr: 'Bonus fiscal pour les régions intérieures', ar: 'تحفيزات ضريبية خاصة للجهات الداخلية' },
        },
      },
      employment_youth: {
        philosophicalStance: {
          fr: 'La jeunesse doit être actrice culturelle et économique, fin des barrières d’accès aux concours.',
          ar: 'تمكين الشباب اقتصادياً وثقافياً ورفع الحواجز البيروقراطية عن ولوج المباريات والوظائف.',
        },
        summary: {
          fr: 'Lancement du « Pass Jeunes » (accès aux services, transports, loisirs), valorisation des métiers du futur (numérique, IA, design) et soutien à l’artisanat d’art.',
          ar: 'إطلاق « جواز الشباب » للولوج للخدمات والترفيه، وتأهيل الشباب لمهن المستقبل (الرقميات والذكاء الاصطناعي) ودعم الصناعة التقليدية.',
        },
        keyMeasures: {
          fr: [
            'Généralisation de l’application Pass Jeunes avec réductions dans les transports et la culture',
            'Assouplissement des critères d’accès aux concours de recrutement public pour les jeunes diplômés',
            'Incubateurs régionaux de startups financés par les conseils régionaux',
            'Valorisation des emplois verts et de l’écotourisme dans les provinces du Sud et de l’Atlas',
          ],
          ar: [
            'تعميم تطبيق جواز الشباب بخصومات وتخفيضات في النقل والثقافة والرياضة',
            'مراجعة شروط السن والشهادات لتيسير ولوج الشباب حاملي الشواهد للوظيفة العمومية',
            'حاضنات أعمال جهوية لتمويل ومواكبة المقاولات الناشئة بمساهمة مجالس الجهات',
            'تطوير مناصب الشغل الخضراء والسياحة البيئية بمناطق الأطلس والواحات والجنوب',
          ],
        },
        indicator: {
          label: { fr: 'Dispositif Jeunesse clé', ar: 'الآلية الشبابية الأبرز' },
          value: { fr: 'Pass Jeunes National digitalisé', ar: 'جواز الشباب الرقمي الوطني' },
        },
      },
      social_health: {
        philosophicalStance: {
          fr: 'Droit fondamental à la dignité et santé pour tous, fin des déserts médicaux par des incitations massives.',
          ar: 'الحق في الصحة والكرامة للجميع، وإنهاء الصحاري الطبية عبر تحفيزات مجزية للأطباء بالمناطق النائية.',
        },
        summary: {
          fr: 'Appui ferme à la généralisation de la couverture médicale, création de pôles régionaux de santé et encouragement du retour des médecins marocains de l’étranger.',
          ar: 'دعم تعميم التغطية الصحية، إنشاء أقطاب صحية جهوية كبرى وتحفيز الأطباء المغاربة بالخارج للعودة.',
        },
        keyMeasures: {
          fr: [
            'Indemnités spécifiques et attractives pour le personnel soignant exerçant dans les zones reculées',
            'Modernisation des hôpitaux régionaux et développement poussé de la télémédecine',
            'Ouverture accrue du secteur de la santé aux investissements et compétences étrangères',
            'Reconnaissance et prise en charge intégrale de la santé mentale et des addictions',
          ],
          ar: [
            'تعويضات تحفيزية خاصة للأطر الصحية العاملة في المناطق الوعرة والجبلية',
            'تحديث المستشفيات الإقليمية وتطوير منظومة التطبيب عن بعد (Télémédecine)',
            'جذب الاستثمارات الطبية واستقدام الكفاءات والخبرات الأجنبية',
            'إدماج برامج الصحة النفسية وعلاج الإدمان في قلب منظومة التغطية الصحية',
          ],
        },
        indicator: {
          label: { fr: 'Priorité Santé', ar: 'أولوية الصحة' },
          value: { fr: 'Élimination des déserts médicaux', ar: 'القضاء على الصحاري الطبية' },
        },
      },
      education: {
        philosophicalStance: {
          fr: 'École de l’égalité des chances, modernité pédagogique et ouverture trilingue précoce.',
          ar: 'مدرسة تكافؤ الفرص، حداثة المناهج والتمكن من اللغات الحية منذ التعليم الأولي.',
        },
        summary: {
          fr: 'Digitalisation des écoles rurales, renforcement de l’enseignement des langues étrangères et de l’Amazighe, modernisation des internats et de la restauration scolaire.',
          ar: 'رقمنة المدارس القروية، تقوية تدريس اللغات الحية والأمازيغية، وتحسين جودة الإطعام الداخلي والنقل المدرسي.',
        },
        keyMeasures: {
          fr: [
            'Équipement informatique et connexion haut débit pour 100% des écoles rurales',
            'Développement des écoles communautaires pour lutter contre l’abandon scolaire des filles',
            'Renforcement du transport scolaire gratuit géré par les communes et régions',
            'Révision des manuels pour ancrer les valeurs de tolérance, parité et droits humains',
          ],
          ar: [
            'ربط وتجهيز كافة المدارس القروية بالحواسيب والإنترنت عالي الصبيب',
            'توسيع شبكة المدارس الجماعاتية لمحاربة الهدر المدرسي خاصة لدى الفتيات القرويات',
            'مجانية وتعميم النقل المدرسي بشراكة مع الجماعات والجهات',
            'تجديد المناهج لترسيخ قيم التسامح والمناصفة وحقوق الإنسان وحرية الفكر',
          ],
        },
        indicator: {
          label: { fr: 'Cible abandon scolaire', ar: 'هدف الهدر المدرسي' },
          value: { fr: 'Division par 2 en milieu rural', ar: 'تقليص بنسبة 50% بالوسط القروي' },
        },
      },
      purchasing_power: {
        philosophicalStance: {
          fr: 'Régulation des intermédiaires commerciaux et moralisation des chaînes de distribution.',
          ar: 'تنظيم سلاسل التوزيع ومحاربة الوسطاء والمضاربين في أسواق الجملة.',
        },
        summary: {
          fr: 'Réforme des marchés de gros pour réduire les marges des spéculateurs, subventions ciblées aux intrants alimentaires et simplification des démarches de Daam Sakane.',
          ar: 'إصلاح أسواق الجملة للحد من هوامش المضاربة، دعم مدخلات الإنتاج الفلاحي، وتيسير الولوج للدعم المالي للسكن.',
        },
        keyMeasures: {
          fr: [
            'Digitalisation et transparence des marchés de gros de fruits et légumes',
            'Sanctions sévères contre la spéculation illicite sur les produits de première nécessité',
            'Maintien du soutien temporaire au gaz butane et aux céréales',
            'Soutien ciblé aux loyers et accès facilité au crédit logement pour les jeunes ménages',
          ],
          ar: [
            'رقمنة وتحديث أسواق الجملة للخضر والفواكه لضمان شفافية الأسعار',
            'تشديد العقوبات على المضاربة غير المشروعة في السلع الاستهلاكية الأساسية',
            'التدرج الحذر في إصلاح صندوق المقاصة لعدم الإضرار بالفئات المتوسطة',
            'تسهيل شروط التمويل البنكي ودعم اقتناء السكن للأسر الشابة',
          ],
        },
        indicator: {
          label: { fr: 'Action sur les prix', ar: 'إجراءات الأسعار' },
          value: { fr: 'Refonte des circuits de distribution', ar: 'إعادة هيكلة مسالك التوزيع والمضاربين' },
        },
      },
      territories_climate: {
        philosophicalStance: {
          fr: 'Aménagement durable du territoire, villes intelligentes et préservation des écosystèmes fragiles.',
          ar: 'تهيئة مجالية مستدامة، مدن ذكية بيئياً وحماية الواحات والأنظمة الإيكولوجية الهشة.',
        },
        summary: {
          fr: 'Plan d’urgence pour la sauvegarde des oasis et des zones de montagne, écoconstruction, réutilisation des eaux usées traitées (REUT) pour les espaces verts.',
          ar: 'مخطط استعجالي لإنقاذ الواحات ومناطق الجبال، البناء الإيكولوجي المستدام، وإعادة استعمال المياه العادمة لسقي المساحات الخضراء.',
        },
        keyMeasures: {
          fr: [
            'Plan national de réhabilitation des médinas et des habitats menaçant ruine',
            'Prohibition de l’arrosage des espaces verts et golfs avec de l’eau potable',
            'Revalorisation des techniques traditionnelles de captage d’eau (khattara, seguias)',
            'Création d’une agence spéciale dédiée au développement des zones oasiennes et d’arganier',
          ],
          ar: [
            'مخطط وطني لتأهيل المدن العتيقة ومعالجة المباني الآيلة للسقوط',
            'منع استعمال الماء الشروب في سقي المساحات الخضراء وملاعب الغولف',
            'إحياء التقنيات التراثية لحصاد المياه (الخطارات والسواقي)',
            'تطوير برامج خاصة بالمناطق الواحية وشجر الأركان لمقاومة التصحر',
          ],
        },
        indicator: {
          label: { fr: 'Réutilisation des eaux usées', ar: 'إعادة تدوير المياه' },
          value: { fr: '100% des espaces verts arrosés par REUT', ar: '100% من المساحات الخضراء بالمياه المعالجة' },
        },
      },
    },
  },
  {
    id: 'istiqlal',
    name: {
      fr: 'Parti de l’Istiqlal',
      ar: 'حزب الاستقلال',
    },
    acronym: {
      fr: 'PI',
      ar: 'الاستقلال',
    },
    symbolName: {
      fr: 'La Balance',
      ar: 'الميزان',
    },
    symbolIcon: '⚖️',
    foundationYear: 1944,
    currentLeader: {
      fr: 'Nizar Baraka',
      ar: 'نزار بركة',
    },
    position: 'majority',
    spectrum: 'conservative',
    spectrumLabel: {
      fr: 'Nationalisme Économique & Égalitarisme (Taâdoulia)',
      ar: 'وطنية اقتصادية وتعادلية اجتماعية',
    },
    color: {
      primary: '#DB2777', // Pink / Magenta
      bg: 'bg-pink-50',
      border: 'border-pink-200',
      text: 'text-pink-800',
    },
    parliamentSeats2021: 81,
    slogan: {
      fr: '« La Taâdoulia économique et sociale » (L’Égalitarisme)',
      ar: '« التعادلية الاقتصادية والاجتماعية »',
    },
    generalPhilosophy: {
      fr: 'Doctrine de la « Taâdoulia » : recherche constante de l’équilibre social, défense intraitable de la classe moyenne, patriotisme économique et souveraineté nationale sur les ressources vitales.',
      ar: 'عقيدة "التعادلية" الاقتصادية والاجتماعية: توازن دائم بين النمو والعدالة، حماية الطبقة الوسطى، الوطنية الاقتصادية والسيادة الوطنية.',
    },
    targetAudience: {
      fr: 'Classe moyenne, fonctionnaires, artisans traditionnels, agriculteurs et professions libérales.',
      ar: 'الطبقة المتوسطة، الموظفون، الصناع التقليديون، الفلاحون والمهن الحرة.',
    },
    coreDifferentiator: {
      fr: 'Préférence nationale marquée dans les marchés publics, combat pour le relèvement du pouvoir d’achat et gestion stratégique de l’eau (ministère de l’Équipement et de l’Eau).',
      ar: 'الأفضلية الوطنية في الصفقات العمومية، الدفاع المستميت عن الطبقة الوسطى وإدارة استراتيجية الموارد المائية والتجهيز.',
    },
    themes: {
      economy_fiscal: {
        philosophicalStance: {
          fr: 'Le patriotisme économique : priorité à la production nationale et à l’entreprise marocaine.',
          ar: 'الوطنية الاقتصادية: الأولوية للإنتاج المحلي والمقاولة المغربية في طلبيات الدولة.',
        },
        summary: {
          fr: 'Application stricte de la préférence nationale dans la commande publique (30% réservé aux TPME marocaines), substitution aux importations et rééquilibrage de la balance commerciale.',
          ar: 'تطبيق صارم للأفضلية الوطنية في الصفقات العمومية (تخصيص 30% للمقاولات الصغرى والمتوسطة)، تعويض الواردات بالمنتوج المحلي وحماية النسيج الصناعي الوطني.',
        },
        keyMeasures: {
          fr: [
            'Instauration d’un label « Made in Morocco » garanti et privilégié par l’État',
            'Abattements fiscaux pour les entreprises réinvestissant leurs bénéfices au Maroc',
            'Allègement de la TVA sur les intrants agricoles et artisanaux',
            'Plafonnement des marges bénéficiaires des grands distributeurs et raffineurs en période de crise',
          ],
          ar: [
            'إقرار علامة "صنع في المغرب" مدعومة ومعتمدة في كافة مشتريات الدولة',
            'إعفاءات ضريبية على الأرباح المعاد استثمارها داخل التراب الوطني',
            'تخفيض الضريبة على القيمة المضافة على المدخلات الفلاحية والحرفية',
            'تسقيف هوامش الربح للشركات المحتكرة للمحروقات والمواد الأساسية وقت الأزمات',
          ],
        },
        indicator: {
          label: { fr: 'Commande publique PME', ar: 'الصفقات المخصصة للمقاولات الصغرى' },
          value: { fr: '30% réservé aux TPME nationales', ar: '30% مخصصة للمقاولات الوطنية الصغرى' },
        },
      },
      employment_youth: {
        philosophicalStance: {
          fr: 'Emploi stable plutôt que contrats précaires, valorisation du statut des jeunes diplômés.',
          ar: 'الشغل اللائق والمستقر بديلاً عن الهشاشة والتعاقد غير الآمن.',
        },
        summary: {
          fr: 'Plan de sauvegarde de l’emploi industriel, formalisation de l’économie informelle sans asphyxier les petits marchands, et incitations à l’installation des jeunes en zone rurale.',
          ar: 'خطة لحماية مناصب الشغل الصناعية، إدماج الاقتصاد غير المهيكل بمرونة، وتحفيز استقرار الشباب في العالم القروي.',
        },
        keyMeasures: {
          fr: [
            'Prime d’installation et mise à disposition de terres soulaliyates pour les jeunes agriculteurs',
            'Soutien financier direct aux coopératives de jeunes diplômés',
            'Obligation de quotas d’emplois stables dans les marchés financés par l’État',
            'Facilitation de l’accès au micro-crédit à taux préférentiel pour les artisans',
          ],
          ar: [
            'منحة استقرار وتمليك أراضي سلالية للشباب القروي حاملي المشاريع الفلاحية',
            'دعم مالي وتقني مباشر لتعاونيات الشباب حاملي الشواهد العليا',
            'إلزام الشركات الفائزة بالصفقات العمومية بتشغيل نسب قارة من اليد العاملة المحلية',
            'تيسير القروض الصغرى بدون فائدة للصناع التقليديين والحرفيين',
          ],
        },
        indicator: {
          label: { fr: 'Terres pour les jeunes', ar: 'الأراضي للشباب' },
          value: { fr: 'Mobilisation d’1 million d’hectares soulaliyates', ar: 'تعبئة مليون هكتار من الأراضي السلالية' },
        },
      },
      social_health: {
        philosophicalStance: {
          fr: 'L’égalité des chances face à la maladie est le fondement de la cohésion nationale.',
          ar: 'المساواة أمام المرض والحق في العلاج الكريم أساس التماسك والتضامن الوطني.',
        },
        summary: {
          fr: 'Soutien total à l’AMO universelle, mais avec renforcement impératif de l’hôpital public pour que la couverture ne serve pas uniquement au secteur privé.',
          ar: 'تأييد تعميم التغطية الصحية مع التشبث بإنقاذ وتأهيل المستشفى العمومي لكي لا يتحول الدعم لصالح المصحات الخاصة وحدها.',
        },
        keyMeasures: {
          fr: [
            'Baisse du reste à charge pour les patients atteints d’affections de longue durée (ALD)',
            'Plafonnement des tarifs des cliniques privées conventionnées avec l’AMO',
            'Revalorisation substantielle des indemnités de garde et d’astreinte des soignants',
            'Création d’un statut protecteur pour les proches aidants et personnes en situation de handicap',
          ],
          ar: [
            'تصفير أو تقليص التكلفة المتبقية على عاتق المصابين بالأمراض المزمنة والمكلفة',
            'تسقيف وتدقيق تعريفات المصحات الخاصة المتعاقدة مع الصندوق الوطني للضمان الاجتماعي',
            'الرفع الملموس من تعويضات الحراسة والإلزامية للأطباء والممرضين العموميين',
            'إحداث تعويض مالي خاص لمرافقي الأشخاص في وضعية إعاقة والمسنين',
          ],
        },
        indicator: {
          label: { fr: 'Reste à charge ALD', ar: 'تكلفة الأمراض المزمنة' },
          value: { fr: 'Objectif de 0 DH pour les pathologies lourdes', ar: 'استهداف مجانية تامة للأمراض الثقيلة' },
        },
      },
      education: {
        philosophicalStance: {
          fr: 'L’école publique est le sanctuaire de l’ascenseur social et de l’identité marocaine.',
          ar: 'المدرسة العمومية هي المصعد الاجتماعي الأسمى وحامية الهوية الوطنية المغربية.',
        },
        summary: {
          fr: 'Défense vigoureuse du statut du corps enseignant, maîtrise de la langue arabe et amazighe tout en ouvrant l’accès aux sciences en langues internationales, gratuité garantie.',
          ar: 'الدفاع عن كرامة ووضعية هيئة التدريس، تعزيز اللغتين الرسميتين العربية والأمازيغية والانفتاح العلمي واللغوي، وصيانة مجانية التعليم.',
        },
        keyMeasures: {
          fr: [
            'Intégration pleine et entière des enseignants contractuels dans la fonction publique statutaire',
            'Revalorisation périodique des pensions des retraités de l’enseignement',
            'Généralisation des cantines scolaires avec des repas chauds et équilibrés',
            'Modernisation de l’enseignement originel (Zaouias et Médersas) intégré au cursus national',
          ],
          ar: [
            'الإدماج النهائي للأساتذة أطر الأكاديميات في نظام موحد يضمن نفس الحقوق',
            'مراجعة سنوية لمعاشات متقاعدي أسرة التعليم لمواكبة التضخم',
            'تعميم المطاعم المدرسية وتوفير وجبات غذائية متكاملة لجميع تلاميذ القرى',
            'تطوير التعليم الأصيل وإدماجه كرافد للهوية والتميز العلمي والأخلاقي',
          ],
        },
        indicator: {
          label: { fr: 'Statut des enseignants', ar: 'وضعية الأساتذة' },
          value: { fr: 'Unification statutaire complète', ar: 'إدماج موحد وشامل في الوظيفة العمومية' },
        },
      },
      purchasing_power: {
        philosophicalStance: {
          fr: 'Le panier de la ménagère est une ligne rouge : la classe moyenne ne doit pas être sacrifiée.',
          ar: 'القدرة الشرائية خط أحمر: الطبقة الوسطى صمام أمان ويجب صون كرامتها ومعيشتها.',
        },
        summary: {
          fr: 'Revendication historique d’augmentation des salaires, réforme de l’IR au profit des classes moyennes salariées, contrôle des prix et maintien du soutien au gaz et au pain.',
          ar: 'المطالبة الدائمة برفع الأجور، تخفيف الاقتطاع الضريبي من أجور الموظفين والعمال، ومراقبة صارمة للأسعار وحماية صندوق المقاصة.',
        },
        keyMeasures: {
          fr: [
            'Allègement de l’IR touchant directement les salaires nets de la classe moyenne (gain de 400 à 1 000 DH/mois)',
            'Indexation régulière du SMIG sur le taux d’inflation officiel',
            'Contrôle rigoureux des marges des grossistes et intermédiaires pour faire baisser les viandes et légumes',
            'Création d’un chèque énergie ou prime carburant pour les artisans et transporteurs lors des flambées mondiales',
          ],
          ar: [
            'مراجعة أشطر الضريبة على الدخل لتحقيق زيادة ملموسة في أجور الطبقة المتوسطة',
            'ربط الزيادة في الحد الأدنى للأجور بمعدلات التضخم السنوية',
            'مراقبة هوامش أرباح المضاربين لخفض أسعار اللحوم والخضر في الأسواق الأسبوعية',
            'إقرار دعم للمحروقات موجه للمهنيين والنقالين والفلاحين لعدم عكس الزيادات على المستهلك',
          ],
        },
        indicator: {
          label: { fr: 'Gain net IR visé', ar: 'الربح الصافي من مراجعة الضريبة' },
          value: { fr: '+500 à +1 200 DH/mois pour la classe moyenne', ar: '+500 إلى +1200 درهم شهرياً' },
        },
      },
      territories_climate: {
        philosophicalStance: {
          fr: 'La sécurité hydrique est une priorité de souveraineté vitale : pas de développement sans eau.',
          ar: 'الأمن المائي مسألة سيادة ووجود: لا تنمية ولا استقرار بدون تأمين قطرة الماء.',
        },
        summary: {
          fr: 'Conduite du Plan National de l’Eau : accélération des barrages collinaires et grands barrages, interconnexion hydraulique Sebou-Bouregreg, lutte sans merci contre le gaspillage.',
          ar: 'قيادة المخطط الوطني للماء: تسريع تشييد السدود الكبرى والصغرى، مشروع الربط المائي سبو-بورقراق، ومحاربة هدر المياه.',
        },
        keyMeasures: {
          fr: [
            'Construction accélérée de 18 nouveaux grands barrages d’ici 2027',
            'Achèvement en temps record de l’autoroute de l’eau Sebou-Bouregreg pour alimenter Rabat et Casablanca',
            'Plan d’urgence pour l’eau potable dans les douars isolés par camions-citernes et forages profonds',
            'Police de l’eau renforcée pour sanctionner les forages illicites et abus industriels',
          ],
          ar: [
            'تسريع إنجاز 18 سداً كبيراً ورفع وتيرة السدود التلية الصغرى بحلول 2027',
            'إنجاز الشطر الأول للطريق السيار للماء لنقل فائض نهر سبو لحوض بورقراق في وقت قياسي',
            'تزويد الدواوير المعزولة بالماء الصالح للشرب عبر الشاحنات الصهريجية وحفر الآبار الاستكشافية',
            'تفعيل جهاز شرطة الماء لمراقبة الآبار العشوائية واستنزاف الفرشة المائية الجوفية',
          ],
        },
        indicator: {
          label: { fr: 'Grands barrages', ar: 'السدود الكبرى' },
          value: { fr: '18 nouveaux barrages d’ici 2027', ar: '18 سداً كبيراً جديداً في أفق 2027' },
        },
      },
    },
  },
  {
    id: 'usfp',
    name: {
      fr: 'Union Socialiste des Forces Populaires',
      ar: 'الاتحاد الاشتراكي للقوات الشعبية',
    },
    acronym: {
      fr: 'USFP',
      ar: 'الاتحاد الاشتراكي',
    },
    symbolName: {
      fr: 'La Rose',
      ar: 'الوردة',
    },
    symbolIcon: '🌹',
    foundationYear: 1959,
    currentLeader: {
      fr: 'Driss Lachgar',
      ar: 'إدريس لشكر',
    },
    position: 'opposition',
    spectrum: 'social_democrat',
    spectrumLabel: {
      fr: 'Gauche Social-démocrate',
      ar: 'يسار ديمقراطي اشتراكي',
    },
    color: {
      primary: '#E11D48', // Red / Rose
      bg: 'bg-rose-50',
      border: 'border-rose-200',
      text: 'text-rose-800',
    },
    parliamentSeats2021: 34,
    slogan: {
      fr: '« Le Maroc d’abord : pour un nouveau contrat social »',
      ar: '« المغرب أولا : من أجل تعاقد اجتماعي جديد »',
    },
    generalPhilosophy: {
      fr: 'Socialisme démocratique et progressisme. L’État doit être fort, stratège et régulateur. Redistribution équitable des richesses, impôt progressif, renforcement sans concession des services publics gratuits.',
      ar: 'اشتراكية ديمقراطية وتقدمية: الدولة يجب أن تكون قوية، استراتيجية ومعدلة، مع توزيع عادل للثروات، عدالة ضريبية تصاعدية، وتطوير الخدمات العمومية المجانية.',
    },
    targetAudience: {
      fr: 'Salariés, ouvriers, syndicats, intellectuels de gauche, jeunesse estudiantine et classes populaires.',
      ar: 'الأجراء، العمال، النقابات، مثقفو اليسار، الطلبة والطبقات الشعبية الكادحة.',
    },
    coreDifferentiator: {
      fr: 'Critique virulente de l’hégémonie du capital privé et des conflits d’intérêts ; exigence d’une taxe sur les superprofits et les grandes fortunes.',
      ar: 'انتقاد شديد لزواج المال بالسلطة وهيمنة الرأسمال الخاص، والمطالبة الصريحة بفرض ضريبة على الثروة والأرباح الفاحشة.',
    },
    themes: {
      economy_fiscal: {
        philosophicalStance: {
          fr: 'L’impôt doit être un instrument puissant de justice sociale et de réduction des inégalités indécentes.',
          ar: 'الضريبة أداة مركزية لتحقيق العدالة الاجتماعية وتقليص الفوارق الطبقية الصارخة.',
        },
        summary: {
          fr: 'Création d’un impôt sur les grandes fortunes (ISF), taxation exceptionnelle des superprofits des compagnies pétrolières et bancaires, lutte impitoyable contre l’évasion fiscale.',
          ar: 'إقرار ضريبة على الثروات الكبرى، فرض ضريبة استثنائية على الأرباح الفاحشة لشركات المحروقات والأبناك، وحزم صارم ضد التهرب الضريبي.',
        },
        keyMeasures: {
          fr: [
            'Instauration d’une tranche d’IR supérieure à 45% pour les très hauts revenus',
            'Taxation des dividendes non réinvestis et de la spéculation foncière',
            'Réhabilitation du rôle interventionniste de l’État stratège dans les secteurs régaliens',
            'Réouverture et nationalisation ou rachat stratégique de la raffinerie La Samir à Mohammedia',
          ],
          ar: [
            'إحداث شطر ضريبي جديد أعلى من 45% على المداخيل البالغة الارتفاع',
            'فرض ضرائب رادعة على الأرباح الموزعة غير المستثمرة وعلى المضاربات العقارية',
            'إعادة الاعتبار لدور الدولة المتدخلة والاستراتيجية في القطاعات الحيوية',
            'إعادة تشغيل وتأميم مصفاة البترول "سامير" بالمحمدية لضمان السيادة الطاقية وخفض أسعار البنزين',
          ],
        },
        indicator: {
          label: { fr: 'Mesure fiscale phare', ar: 'الإجراء الضريبي الأبرز' },
          value: { fr: 'Taxation des superprofits et ISF', ar: 'ضريبة على الثروة والأرباح الفاحشة' },
        },
      },
      employment_youth: {
        philosophicalStance: {
          fr: 'Le travail n’est pas une marchandise : l’emploi stable est un droit constitutionnel fondamental.',
          ar: 'العمل ليس سلعة: الحق في شغل قار وكريم حق دستوري لا يقبل المزايدة.',
        },
        summary: {
          fr: 'Rupture avec les contrats temporaires et précaires (critique d’Awrach), titularisation des contractuels et grand plan national d’embauche dans la santé et l’éducation.',
          ar: 'رفض برامج العمل الهشة (انتقاد برنامج أوراش كحل ترقيعي)، الإدماج الشامل لجميع المتعاقدين، ومخطط توظيف عمومي ضخم بالصحة والتعليم.',
        },
        keyMeasures: {
          fr: [
            'Recrutement massif et pérenne de 150 000 postes dans les services publics (hôpitaux, écoles, universités)',
            'Allocation chômage / revenu d’insertion garanti pour les jeunes diplômés en recherche d’emploi',
            'Renforcement des pouvoirs de l’Inspection du travail face aux abus patronaux',
            'Représentation obligatoire des salariés dans les conseils d’administration des grandes entreprises',
          ],
          ar: [
            'توظيف عمومي قار لـ 150 ألف منصب في القطاعات الحيوية (المستشفيات، المدارس، الجامعات)',
            'إقرار منحة بطالة وتعويض إدماج للشباب حاملي الشواهد العاطلين عن العمل',
            'تقوية صلاحيات مفتشي الشغل لمراقبة احترام قانون الشغل ومعاقبة الطرد التعسفي',
            'إشراك ممثلي الأجراء والنقابات في مجالس إدارة الشركات الكبرى',
          ],
        },
        indicator: {
          label: { fr: 'Recrutement public visé', ar: 'التوظيف العمومي المستهدف' },
          value: { fr: '150 000 postes statutaires garantis', ar: '150 ألف منصب وظيفي قار' },
        },
      },
      social_health: {
        philosophicalStance: {
          fr: 'La santé est un bien commun inaliénable, non un marché lucratif ouvert aux fonds financiers.',
          ar: 'الصحة خدمة عمومية مقدسة وليست سلعة خاضعة لمنطق الربح وصناديق الاستثمار المالية.',
        },
        summary: {
          fr: 'Gratuité totale des soins essentiels dans le secteur public, arrêt de la privatisation rampante des hôpitaux, et augmentation du budget de la santé à 12% du PIB.',
          ar: 'مجانية تامة للعلاجات الأساسية بالمستشفى العمومي، وقف خوصصة الصحة، ورفع ميزانية قطاع الصحة إلى 12% من الميزانية العامة.',
        },
        keyMeasures: {
          fr: [
            'Interdiction du contrôle des cliniques par des fonds d’investissement sans participation médicale majoritaire',
            'Plafond strict des honoraires médicaux privés et suppression du « chèque de caution » illégal',
            'Création d’un pôle public de fabrication de médicaments génériques et vaccins',
            'Garantie d’un médecin et d’un infirmier pour chaque école et lycée du Royaume',
          ],
          ar: [
            'منع استيلاء صناديق الاستثمار المالية على المصحات الخاصة دون معايير طبية وأخلاقية صارمة',
            'تطبيق عقوبات جنائية على فرض "شيك الضمان" في المصحات الخاصة والتصدي للنوار (التعريفات غير المصرح بها)',
            'تأسيس قطب عمومي وطني لصناعة الأدوية الجنيسة بأسعار في متناول الجميع',
            'تخصيص طبيب وممرض قار لكل مجمع مدرسي وثانوي بالمملكة',
          ],
        },
        indicator: {
          label: { fr: 'Budget Santé réclamé', ar: 'الميزانية المطلوبة للصحة' },
          value: { fr: '12% du budget de l’État', ar: '12% من الميزانية العامة للدولة' },
        },
      },
      education: {
        philosophicalStance: {
          fr: 'L’école publique républicaine et laïque est le pilier d’une société émancipée et éclairée.',
          ar: 'المدرسة العمومية الديمقراطية هي عماد تحرير الإنسان وبناء مجتمع مستنير ومتكافئ.',
        },
        summary: {
          fr: 'Fin définitive du système contractuel (zéro enseignant précaire), alignement de l’école publique sur les standards des meilleures écoles privées, et revalorisation globale du statut de l’enseignant.',
          ar: 'إنهاء نظام التعاقد نهائياً، تأهيل المدارس العمومية لتنافس أفضل المدارس الخصوصية، والرفع الشامل من أجور وقيمة المدرس.',
        },
        keyMeasures: {
          fr: [
            'Augmentation générale des salaires des enseignants de 2 500 DH/mois nets',
            'Interdiction des cours de soutien payants dispensés par les enseignants à leurs propres élèves',
            'Plafonnement des frais de scolarité dans les établissements d’enseignement privé',
            'Enseignement gratuit de la philosophie, des arts et de la pensée critique dès le primaire',
          ],
          ar: [
            'زيادة صافية لا تقل عن 2500 درهم شهرياً لنساء ورجال التعليم تكريماً لمكانتهم',
            'منع الدروس الخصوصية المؤدى عنها وفرض رقابة تربوية ومالية صارمة على المدارس الخاصة',
            'تسقيف رسوم التسجيل والدراسة في المدارس الخصوصية لحماية أولياء الأمور من الجشع',
            'تدريس الفلسفة والفنون والتفكير النقدي منذ المراحل الأولى للتعليم',
          ],
        },
        indicator: {
          label: { fr: 'Éducation publique', ar: 'التعليم العمومي' },
          value: { fr: 'Zéro contractuel, école 100% publique de qualité', ar: 'إلغاء تام للتعاقد ومدرسة عمومية رائدة' },
        },
      },
      purchasing_power: {
        philosophicalStance: {
          fr: 'Protéger le pouvoir d’achat nécessite d’attaquer les rentes et de bloquer les prix des produits de base.',
          ar: 'حماية القوة الشرائية تتطلب ضرب أوكار الريع وتسقيف أسعار المحروقات والسلع الأساسية.',
        },
        summary: {
          fr: 'Plafonnement immédiat des prix des hydrocarbures, baisse de la TVA à 0% sur le panier alimentaire essentiel, et relèvement immédiat du SMIG à 4 000 DH net.',
          ar: 'التسقيف الفوري لأسعار المحروقات، حذف الضريبة على القيمة المضافة (0% TVA) عن سلة الغذاء الأساسية، والرفع الفوري للحد الأدنى للأجور إلى 4000 درهم.',
        },
        keyMeasures: {
          fr: [
            'Relèvement du SMIG à 4 000 DH net/mois et indexation trimestrielle sur l’inflation',
            'Plafonnement des marges de raffinage et de distribution des carburants',
            'Augmentation substantielle des allocations familiales à 500 DH par enfant dès le premier enfant',
            'Maintien intégral et consolidation de la Caisse de compensation',
          ],
          ar: [
            'رفع الحد الأدنى للأجور (SMIG) إلى 4000 درهم صافية وربطه التلقائي بارتفاع الأسعار',
            'تسقيف هوامش أرباح شركات توزيع البنزين والغازوال بعد تقرير مجلس المنافسة',
            'رفع التعويضات العائلية إلى 500 درهم شهرياً عن كل طفل دون تمييز',
            'الحفاظ الكامل على صندوق المقاصة وتوسيعه ليشمل مواد حيوية جديدة',
          ],
        },
        indicator: {
          label: { fr: 'Revendication SMIG', ar: 'مطلب الحد الأدنى للأجور' },
          value: { fr: '4 000 DH net par mois', ar: '4000 درهم صافية شهرياً' },
        },
      },
      territories_climate: {
        philosophicalStance: {
          fr: 'Transition écologique juste : les gros pollueurs et gros consommateurs doivent payer pour les petits paysans.',
          ar: 'تحول إيكولوجي عادل: كبار الملوثين والمستهلكين يجب أن يدفعوا لتعويض صغار الفلاحين والقرى.',
        },
        summary: {
          fr: 'Redéfinition du modèle agricole : arrêt immédiat des cultures d’exportation hyper-consommatrices d’eau (avocats, pastèques), et garantie d’un accès égal à l’eau potable pour tous les citoyens.',
          ar: 'إعادة النظر الجذرية في النموذج الفلاحي: الوقف الصارم للزراعات التصديرية المستنزفة للماء (الأفوكادو، الدلاح)، وضمان الحق في الماء للجميع.',
        },
        keyMeasures: {
          fr: [
            'Interdiction formelle de l’irrigation des cultures hautement consommatrices d’eau destinées à l’export',
            'Tarification progressive de l’eau : gratuité des premiers mètres cubes vitaux, surtaxe punitive pour le luxe',
            'Plan Marshall pour les zones de montagne et enclavées',
            'Nationalisation ou régie publique de la gestion de l’eau et de l’assainissement (fin des concessions privées)',
          ],
          ar: [
            'حظر ري الزراعات التصديرية المستنزفة للمياه الجوفية مثل الأفوكادو والبطيخ الأحمر',
            'تسعيرة تصاعدية عادلة للماء: مجانية الحجم الحيوي الأدنى، ومضاعفة الفواتير على الاستهلاك الترفيهي',
            'خطة وطنية استثنائية لتنمية مناطق الجبال والمغرب العميق غير النافع',
            'إنهاء التدبير المفوض للشركات الأجنبية في الماء والكهرباء واستعادتها عبر شركات عمومية وطنية',
          ],
        },
        indicator: {
          label: { fr: 'Politique de l’eau', ar: 'السياسة المائية' },
          value: { fr: 'Stop aux cultures d’exportation destructrices d’eau', ar: 'وقف الزراعات التصديرية المستنزفة للفرشة المائية' },
        },
      },
    },
  },
  {
    id: 'mp',
    name: {
      fr: 'Mouvement Populaire',
      ar: 'الحركة الشعبية',
    },
    acronym: {
      fr: 'MP',
      ar: 'الحركة الشعبية',
    },
    symbolName: {
      fr: 'L’Épi de Blé',
      ar: 'السنبلة',
    },
    symbolIcon: '🌾',
    foundationYear: 1957,
    currentLeader: {
      fr: 'Mohamed Ouzzine',
      ar: 'محمد أوزين',
    },
    position: 'opposition',
    spectrum: 'centrist',
    spectrumLabel: {
      fr: 'Droite Rurale & Libéralisme Identitaire',
      ar: 'يمين محافظ، تنمية قروية وهوياتية',
    },
    color: {
      primary: '#15803D', // Green
      bg: 'bg-green-50',
      border: 'border-green-200',
      text: 'text-green-800',
    },
    parliamentSeats2021: 28,
    slogan: {
      fr: '« La voix de la ruralité, des montagnes et de l’identité marocaine plurielle »',
      ar: '« صوت العالم القروي والجبل والأصالة المغربية المتعددة »',
    },
    generalPhilosophy: {
      fr: 'Défense prioritaire du monde rural, des populations montagnardes et périurbaines marginalisées. Officialisation réelle et effective de l’Amazighe, libéralisme solidaire et décentralisation avancée.',
      ar: 'الأولوية القصوى لتنمية البوادي والمناطق الجبلية، تفعيل الطابع الرسمي للأمازيغية، ليبرالية متضامنة ولا مركزية جهوية حقيقية.',
    },
    targetAudience: {
      fr: 'Populations rurales, montagnards, agriculteurs familiaux, militants amazighs et communautés périurbaines.',
      ar: 'ساكنة البوادي والجبال، الفلاحون الصغار، الفاعلون الأمازيغ، والمناطق شبه الحضرية.',
    },
    coreDifferentiator: {
      fr: 'Exigence d’une « Loi Cadre sur la Montagne », statut protecteur de l’agriculteur familial et généralisation de l’Amazighe dans toutes les administrations.',
      ar: 'المطالبة بقانون إطار لتنمية الجبل، حماية الفلاح الصغير، وتعميم اللغة الأمازيغية في كل الإدارات والمحاكم.',
    },
    themes: {
      economy_fiscal: {
        philosophicalStance: {
          fr: 'L’économie rurale doit bénéficier d’une discrimination positive pour rattraper des décennies de retard.',
          ar: 'الاقتصاد القروي يستحق تمييزاً إيجابياً لتعويض عقود من التهميش التنموي.',
        },
        summary: {
          fr: 'Exonération fiscale totale des petites exploitations agricoles, création d’une banque publique du développement rural et rééquilibrage budgétaire en faveur de l’intérieur du pays.',
          ar: 'إعفاء ضريبي شامل لصغار الفلاحين والتعاونيات القروية، إحداث بنك وطني لتنمية العالم القروي، وتوجيه الميزانيات للمناطق الداخلية.',
        },
        keyMeasures: {
          fr: [
            'Exonération permanente de tout impôt pour les agriculteurs possédant moins de 10 hectares',
            'Création d’un Fonds Spécial de Compensation des Disparités Régionales doté de 20 milliards DH',
            'Incitations fiscales massives pour implanter des unités agroalimentaires dans les zones de montagne',
            'Régularisation gratuite et sécurisation juridique des terres collectives et soulaliyates',
          ],
          ar: [
            'إعفاء دائم وشامل من الضرائب للاستغلاليات الفلاحية التي تقل عن 10 هكتارات',
            'إحداث صندوق خاص للعدالة المجالية وتنمية الجبال بميزانية لا تقل عن 20 مليار درهم',
            'حوافز جبائية قوية لإنشاء مصانع تحويل المنتجات الفلاحية والغدائية داخل المناطق الجبلية',
            'تسوية الوضعية القانونية للأراضي السلالية والجماعية وتمليكها لذوي الحقوق دون تعقيدات',
          ],
        },
        indicator: {
          label: { fr: 'Soutien aux petits exploitants', ar: 'دعم صغار الفلاحين' },
          value: { fr: 'Exonération fiscale totale < 10 ha', ar: 'إعفاء ضريبي تام لأقل من 10 هكتارات' },
        },
      },
      employment_youth: {
        philosophicalStance: {
          fr: 'Fixer les jeunes dans leurs terroirs en créant des opportunités économiques locales et dignes.',
          ar: 'تثبيت شباب البوادي والجبال في مناطقهم الأصلية عبر خلق فرص عمل محلية محترمة.',
        },
        summary: {
          fr: 'Appui aux micro-entreprises vertes, à l’écotourisme montagnard et soutien technique et financier aux coopératives de terroir (argan, safran, dattes, plantes aromatiques).',
          ar: 'دعم المقاولات الخضراء والسياحة الجبلية وتمويل تعاونيات المنتوجات المجالية (الأركان، الزعفران، التمور، الأعشاب العطرية).',
        },
        keyMeasures: {
          fr: [
            'Subventions à 100% pour la formation professionnelle nomade et itinérante dans les zones enclavées',
            'Attribution prioritaire de terres agricoles aux coopératives de jeunes ruraux diplômés',
            'Facilitation de l’accès aux marchés publics locaux pour les artisans et coopératives régionales',
            'Recrutement localisé obligatoire des agents publics de proximité',
          ],
          ar: [
            'قوافل متنقلة للتكوين المهني المجاني في الحرف المطلوبة بالقرى والمداشر',
            'أولوية كراء واستغلال الأراضي الفلاحية لتعاونيات الشباب القروي حاملي الشواهد',
            'إلزام الإدارات المحلية باقتناء منتوجات الصناع التقليديين والتعاونيات المحلية',
            'إقرار التوظيف الجهوي والمحلي لضمان استقرار الأطر الإدارية في مناطقها الأصلية',
          ],
        },
        indicator: {
          label: { fr: 'Priorité rurale', ar: 'الأولوية القروية' },
          value: { fr: 'Emploi vert et valorisation des terroirs', ar: 'مناصب شغل خضراء ومحلية في البادية' },
        },
      },
      social_health: {
        philosophicalStance: {
          fr: 'Le citoyen du douar reculé doit avoir les mêmes droits de santé que le citoyen de Casablanca ou Rabat.',
          ar: 'المواطن في قمم الجبال له نفس الحقوق الدستورية في الصحة كالمواطن في العواصم الكبرى.',
        },
        summary: {
          fr: 'Plan d’urgence pour les dispensaires ruraux, déploiement d’hélicoptères sanitaires pour les urgences vitales dans les montagnes, et primes d’éloignement substantielles pour les soignants.',
          ar: 'مخطط استعجالي للمستوصفات القروية، تعميم المروحيات الإسعافية لنقل الحالات الحرجة من الجبال، وتعويضات كبرى للمرابطين بالقرى.',
        },
        keyMeasures: {
          fr: [
            'Doublement du salaire de base pour les médecins et infirmiers affectés en zones de montagne',
            'Garantie d’une ambulance médicalisée tout-terrain et d’un hélicoptère d’urgence par province enclavée',
            'Élimination des démarches bureaucratiques du RSU pénalisant les populations rurales analphabètes',
            'Création de maisons de maternité gratuites (Dar Al Oumouma) à proximité de chaque dispensaire',
          ],
          ar: [
            'مضاعفة التعويضات الأساسية للأطباء والممرضين المقيمين في المناطق الجبلية والوعرة',
            'توفير سيارات إسعاف مجهزة رباعية الدفع ومروحيات طبية في كل إقليم جبائي لنقل النساء الحوامل والمرضى',
            'تبسيط معايير السجل الاجتماعي الموحد (RSU) لعدم حرمان فقراء البوادي بسبب معايير تعسفية',
            'تعميم دور الأمومة المجانية في كل دائرة قروية لتفادي وفيات الأمهات والمواليد',
          ],
        },
        indicator: {
          label: { fr: 'Urgences montagnardes', ar: 'طوارئ المناطق الوعرة' },
          value: { fr: 'Héli-secours sanitaire dans chaque province isolée', ar: 'إسعاف جوي وسيارات مجهزة لكل إقليم جبلي' },
        },
      },
      education: {
        philosophicalStance: {
          fr: 'L’école rurale doit cesser d’être le parent pauvre de l’enseignement public.',
          ar: 'المدرسة القروية يجب أن تتوقف عن كونها الحلقة الأضعف في المنظومة التعليمية.',
        },
        summary: {
          fr: 'Généralisation effective de la langue amazighe avec formation d’enseignants spécialisés, raccordement décent de toutes les écoles rurales à l’eau et à l’électricité, fin des classes multi-niveaux.',
          ar: 'التعميم الفعلي للأمازيغية وتكوين أساتذة متخصصين، ربط المدارس القروية بالماء والكهرباء، والقضاء على الأقسام المشتركة.',
        },
        keyMeasures: {
          fr: [
            'Adoption de l’Amazighe comme matière obligatoire et langue d’enseignement dans tout le primaire',
            'Rénovation et salubrité garantie (eau potable, sanitaires filles) dans 100% des écoles de douars',
            'Gratuité totale du transport scolaire et des internats avec cantines équilibrées',
            'Bourses scolaires complètes pour les élèves méritants du monde rural pour intégrer les filières d’élite',
          ],
          ar: [
            'تنزيل الطابع الرسمي للأمازيغية كمادة إلزامية ولغة تدريس في كل مستويات التعليم الابتدائي',
            'تأهيل بنيات المدارس القروية وتوفير المرافق الصحية والماء الصالح للشرب في كل فرعية مدرسية',
            'مجانية شاملة لأسطول النقل المدرسي وتحسين جودة الوجبات في الداخليات',
            'تخصيص منح دراسية كاملة للمتفوقين من أبناء القرى لولوج الأقسام التحضيرية والمدارس الكبرى',
          ],
        },
        indicator: {
          label: { fr: 'Officialisation Amazighe', ar: 'ترسيم الأمازيغية' },
          value: { fr: 'Généralisation dans 100% des écoles', ar: 'تعميم شامل في جميع المدارس الابتدائية' },
        },
      },
      purchasing_power: {
        philosophicalStance: {
          fr: 'La cherté de la vie frappe deux fois plus fort en milieu rural à cause des coûts de transport.',
          ar: 'الغلاء يضرب العالم القروي بحدة مضاعفة بسبب مصاريف النقل والوسطاء.',
        },
        summary: {
          fr: 'Aide directe d’urgence en période de sécheresse pour l’aliment de bétail, subvention des transports de vivres vers les douars enclavés et régulation des prix des semences.',
          ar: 'دعم مباشر عاجل للأعلاف أثناء الجفاف، دعم تكاليف نقل المواد الغذائية للدواوير المعزولة ومراقبة أسعار البذور والأسمدة.',
        },
        keyMeasures: {
          fr: [
            'Distribution gratuite ou subventionnée à 80% de l’orge et du son pour les éleveurs',
            'Exemption totale de péages et taxes de transport pour les denrées acheminées vers les montagnes',
            'Lutte contre la spéculation sur le bétail lors de l’Aïd Al Adha au détriment de l’éleveur de base',
            'Revalorisation du SMAG (salaire agricole) pour l’aligner strictement sur le SMIG industriel',
          ],
          ar: [
            'توزيع الأعلاف المدعمة (الشعير والأعلاف المركبة) بشفافية تامة وبدون وساطة',
            'إلغاء رسوم النقل عن السلع والمواد الأساسية الموجهة للمناطق الجبلية',
            'حماية مربي الماشية (الكسابة) من شبكات السماسرة وضمان بيع مواشيهم بأسعار عادلة',
            'المساواة الفورية بين الحد الأدنى للأجور في الفلاحة (SMAG) والأجور الصناعية (SMIG)',
          ],
        },
        indicator: {
          label: { fr: 'Égalité salariale agricole', ar: 'مساواة الأجر الفلاحي' },
          value: { fr: 'Alignement total SMAG = SMIG', ar: 'المساواة التامة بين الحد الأدنى الفلاحي والصناعي' },
        },
      },
      territories_climate: {
        philosophicalStance: {
          fr: 'Le monde rural est en première ligne du choc climatique : il faut une Loi Cadre sur la Montagne.',
          ar: 'العالم القروي والجبال في الخط الأمامي للصدمة المناخية: إقرار قانون إطار للجبل ضرورة حيوية.',
        },
        summary: {
          fr: 'Adoption urgente d’une Loi Montagne, construction massive de petits barrages collinaires et seuils de rétention, et indemnisation systématique des dégâts climatiques (gel, inondations, sécheresse).',
          ar: 'إصدار فوري لقانون إطار للمناطق الجبلية، تشييد سدود تلية وبحيرات جبلية لحصاد الأمطار، وتعويض الفلاحين عن الكوارث المناخية.',
        },
        keyMeasures: {
          fr: [
            'Vote de la Loi Spécifique sur la Montagne (statut foncier, fiscal et environnemental dérogatoire)',
            'Programme de 1 000 barrages collinaires et lacs collinaires répartis sur les bassins intérieurs',
            'Assurance publique universelle et gratuite contre la sécheresse pour les agriculteurs vulnérables',
            'Reboisement massif d’arbres endémiques (cèdre, genévrier, caroubier) pour lutter contre l’érosion',
          ],
          ar: [
            'المصادقة على قانون إطار لتنمية وحماية المناطق الجبلية بامتيازات تنموية وقانونية',
            'إطلاق برنامج وطني لـ 1000 سد تلي وبحيرة جبلية لتجميع مياه الأمطار والثلوج',
            'تأمين فلاحي تكافلي شامل تتحمله الدولة بالكامل ضد الجفاف والفيضانات لصغار الفلاحين',
            'غرس مكثف للأشجار المحلية المقاومة (الأرز، العرعار، الخروب) لحماية التربة من الانجراف',
          ],
        },
        indicator: {
          label: { fr: 'Projet législatif majeur', ar: 'المشروع التشريعي الرئيسي' },
          value: { fr: 'Loi Cadre pour le Développement de la Montagne', ar: 'قانون إطار خاص لتنمية المناطق الجبلية' },
        },
      },
    },
  },
  {
    id: 'pps',
    name: {
      fr: 'Parti du Progrès et du Socialisme',
      ar: 'حزب التقدم والاشتراكية',
    },
    acronym: {
      fr: 'PPS',
      ar: 'التقدم والاشتراكية',
    },
    symbolName: {
      fr: 'Le Livre & Le Flambeau',
      ar: 'الكتاب',
    },
    symbolIcon: '📖',
    foundationYear: 1943,
    currentLeader: {
      fr: 'Nabil Benabdallah',
      ar: 'نبيل بنعبد الله',
    },
    position: 'opposition',
    spectrum: 'left',
    spectrumLabel: {
      fr: 'Gauche Progressiste & Socialisme Réformiste',
      ar: 'يسار تقدمي واشتراكية إصلاحية',
    },
    color: {
      primary: '#0284C7', // Sky Blue / Cyan
      bg: 'bg-sky-50',
      border: 'border-sky-200',
      text: 'text-sky-800',
    },
    parliamentSeats2021: 22,
    slogan: {
      fr: '« Le citoyen d’abord » / L’être humain au cœur du développement',
      ar: '« كرامة المواطن أولاً » / الإنسان في صلب التنمية',
    },
    generalPhilosophy: {
      fr: 'Socialisme démocratique ancré dans la justice sociale, la laïcité de l’espace civique, l’émancipation totale des femmes, la défense du service public et la transparence contre la corruption et l’oligarchie.',
      ar: 'اشتراكية ديمقراطية تضع الإنسان وكرامته في الصدارة، تمكين المرأة والمناصفة، صيانة المرفق العام ومحاربة تحالف المال بالسلطة والفساد.',
    },
    targetAudience: {
      fr: 'Mouvements féministes, classes populaires urbaines, syndicalistes, enseignants et classes moyennes précarisées.',
      ar: 'الحركات الحقوقية والنسائية، الطبقات الشعبية، النقابيون، نساء ورجال التعليم والطبقة الوسطى المهددة.',
    },
    coreDifferentiator: {
      fr: 'Opposition rigoureuse et constructive au gouvernement d’affaires ; défense intransigeante du logement social décent et de la mixité urbaine (héritage ministériel fort).',
      ar: 'معارضة برلمانية صارمة لحكومة رجال الأعمال، مع خبرة تاريخية في الدفاع عن السكن اللائق ومحاربة مدن الصفيح.',
    },
    themes: {
      economy_fiscal: {
        philosophicalStance: {
          fr: 'L’économie doit servir le bien-être collectif, non la maximisation des rentes d’un cartel.',
          ar: 'الاقتصاد وظيفته خدمة التنمية البشرية ورفاه المجتمع، لا مضاعفة أرباح الكارتيلات والمحتكرين.',
        },
        summary: {
          fr: 'Fiscalité progressive et écologique, rupture avec le modèle d’accumulation rentière, renforcement des prérogatives des instances de bonne gouvernance (Conseil de la concurrence, CESE).',
          ar: 'عدالة جبائية تصاعدية وبيئية، القطع مع اقتصاد الريع والمضاربة، وتقوية سلطات مؤسسات الحكامة الدستورية (مجلس المنافسة والهيئة الوطنية للنزاهة).',
        },
        keyMeasures: {
          fr: [
            'Révision profonde du barème de l’IR pour alléger les bas salaires et taxer les rentes financières',
            'Suppression des niches fiscales injustifiées accordées aux grands groupes non créateurs d’emplois',
            'Développement d’une économie sociale et solidaire (ESS) représentant 10% du PIB',
            'Application stricte des avis du Conseil de la concurrence contre les ententes illicites',
          ],
          ar: [
            'إصلاح جذري لجدول الضريبة على الدخل لإعفاء الأجور الصغرى وتثقيل الضرائب على الأرباح العقارية والمالية',
            'إلغاء الامتيازات والإعفاءات الجبائية غير المبررة الممنوحة لشركات كبرى دون مقابل تشغيلي',
            'النهوض بالاقتصاد الاجتماعي والتضامني ليمثل 10% من الناتج الداخلي الخام',
            'التفعيل الصارم لتوصيات مجلس المنافسة ومعاقبة الاتفاقات السرية لرفع الأسعار',
          ],
        },
        indicator: {
          label: { fr: 'Économie Sociale et Solidaire', ar: 'الاقتصاد الاجتماعي' },
          value: { fr: 'Viser 10% du PIB national', ar: 'استهداف 10% من الناتج الداخلي' },
        },
      },
      employment_youth: {
        philosophicalStance: {
          fr: 'Le travail digne est la première condition de la citoyenneté active.',
          ar: 'العمل اللائق والمحترم هو الشرط الأساسي للمواطنة الكاملة والكرامة الإنسانية.',
        },
        summary: {
          fr: 'Création d’un statut d’insertion professionnelle pour les jeunes, investissement massif dans les emplois du « Care » (santé, petite enfance, personnes âgées) et de l’économie verte.',
          ar: 'إحداث نظام قانوني لإدماج الشباب المعطلين، استثمار واسع في مهن الرعاية الاجتماعية (الطفولة، المسنون، الصحة) والاقتصاد الدائري.',
        },
        keyMeasures: {
          fr: [
            'Garantie d’un premier emploi ou stage rémunéré obligatoire financé à 50% par l’État',
            'Création de 100 000 emplois dans les services d’aide sociale et d’animation culturelle',
            'Protection juridique accrue contre la précarité des plateformes numériques et livreurs',
            'Refonte des critères de l’ANAPEC pour accompagner les jeunes des quartiers populaires',
          ],
          ar: [
            'ضمان فترة تدريب مدفوعة الأجر أو أول وظيفة مدعومة من الدولة بنسبة 50%',
            'خلق 100 ألف وظيفة في خدمات الرعاية المجتمعية، الطفولة المبكرة والتنشيط الثقافي',
            'حماية اجتماعية وقانونية لعمال التطبيقات الذكية والتوصيل السريع من الاستغلال',
            'تطوير وتحديث خدمات الوكالة الوطنية لإنعاش التشغيل (ANAPEC) لتصل لشباب الأحياء الشعبية',
          ],
        },
        indicator: {
          label: { fr: 'Emplois de soins et du Care', ar: 'وظائف الرعاية الاجتماعية' },
          value: { fr: '100 000 emplois pérennes', ar: '100 ألف منصب شغل في مهن الرعاية' },
        },
      },
      social_health: {
        philosophicalStance: {
          fr: 'La couverture sociale universelle ne doit pas devenir une aubaine pour l’affairisme médical privé.',
          ar: 'التغطية الصحية ورش ملكي نبيل يجب ألا يتحول لفرصة إثراء غير مشروع للمصحات الخاصة.',
        },
        summary: {
          fr: 'Audit et régulation stricte des remboursements AMO pour préserver les fonds publics, réhabilitation d’urgence des urgences hospitalières, et mise en place d’un pôle pharmaceutique public.',
          ar: 'افتحاص ومراقبة صارمة لتعويضات التأمين الصحي لحماية المال العام، إنقاذ أقسام المستعجلات العمومية، وتأسيس قطب وطني للأدوية.',
        },
        keyMeasures: {
          fr: [
            'Plafonnement des dépassements d’honoraires et fin des pratiques abusives de facturation',
            'Création d’une assurance autonomie pour la prise en charge des personnes âgées dépendantes',
            'Augmentation des effectifs de médecins dans les CHU avec un statut attractif',
            'Remboursement à 100% des soins et thérapies contre les cancers et maladies cardiovasculaires',
          ],
          ar: [
            'تجريم النوار ووضع حد نهائي للزيادات غير القانونية في فواتير العلاج بالمصحات',
            'إحداث تأمين وطني لفقدان الاستقلالية لرعاية كبار السن والأشخاص في وضعية عجز',
            'مضاعفة توظيف الأطباء بالمستشفيات الجامعية وتحسين ظروف اشتغالهم لمنع هجرة الأدمغة',
            'تعويض بنسبة 100% لكافة تكاليف علاج أمراض السرطان والقلب والشرايين',
          ],
        },
        indicator: {
          label: { fr: 'Prise en charge du cancer', ar: 'علاج السرطان' },
          value: { fr: '100% gratuit et remboursé pour tous', ar: 'مجانية تامة وتكفل شامل 100%' },
        },
      },
      education: {
        philosophicalStance: {
          fr: 'L’école publique est le ciment de la nation : la marchander détruit le vivre-ensemble.',
          ar: 'المدرسة العمومية إسمنت التماسك الوطني: تسليع التعليم يقوض العيش المشترك وتكافؤ الفرص.',
        },
        summary: {
          fr: 'Recherche scientifique financée à 2% du PIB, école inclusive dès la maternelle, laïcité de la méthode d’apprentissage, et titularisation sans condition de l’ensemble des contractuels.',
          ar: 'رفع ميزانية البحث العلمي إلى 2% من الناتج الداخلي، مدرسة دامجة للجميع منذ التعليم الأولي، ومحاربة الهدر المدرسي بترسيخ تكافؤ الفرص.',
        },
        keyMeasures: {
          fr: [
            'Plafond légal des tarifs pratiqués par les écoles privées sous peine de sanctions financières',
            'Valorisation du statut social de l’enseignant comme acteur central de la société',
            'Bourses universitaires revalorisées de 50% pour les étudiants issus de familles modestes',
            'Intégration d’un pôle d’éducation civique, de droits humains et d’égalité femmes-hommes',
          ],
          ar: [
            'تسقيف قانوني لأقساط المدارس الخصوصية ومراقبة جودة البرامج التربوية المقدمة',
            'رد الاعتبار المعنوي والمادي لنساء ورجال التعليم كركيزة لبناء المجتمع',
            'رفع قيمة المنحة الجامعية بنسبة 50% لتمكين الطلبة المنحدرين من أسر فقيرة',
            'إدماج مبادئ التربية على المواطنة، حقوق الإنسان والمساواة في كل المقررات المدرسية',
          ],
        },
        indicator: {
          label: { fr: 'Recherche Scientifique', ar: 'البحث العلمي' },
          value: { fr: 'Objectif de 2% du PIB', ar: '2% من الناتج الداخلي للبحث والابتكار' },
        },
      },
      purchasing_power: {
        philosophicalStance: {
          fr: 'L’inflation actuelle est largement importée et spéculative : l’État doit intervenir fermement.',
          ar: 'الغلاء الراهن ناتج عن المضاربة وغياب الرقابة: واجب الدولة التدخل الصارم لحماية المواطن.',
        },
        summary: {
          fr: 'Encadrement par décret des prix des produits de première nécessité, révision à la hausse du SMIG et des pensions de retraite, et aide directe accrue sans conditions discriminatoires.',
          ar: 'تسقيف أسعار المواد الأساسية بمراسيم حكومية، زيادة حقيقية في الحد الأدنى للأجور ومعاشات التقاعد، وتوسيع الدعم الاجتماعي دون إقصاء.',
        },
        keyMeasures: {
          fr: [
            'Plafonnement strict des marges sur les carburants raffinés et le gaz',
            'Augmentation des pensions de retraite minimales à au moins 1 500 DH/mois',
            'Baisse de la TVA sur les fournitures scolaires, médicaments et produits d’hygiène à 0%',
            'Contrôle permanent des prix sur les marchés locaux par des brigades citoyennes mixtes',
          ],
          ar: [
            'تسقيف هوامش أرباح المحروقات المكررة وغاز البوتان ومحاسبة شركات التوزيع',
            'رفع الحد الأدنى لمعاشات التقاعد إلى ما لا يقل عن 1500 درهم شهرياً لضمان كرامة المتقاعدين',
            'تصفير الضريبة على القيمة المضافة على الأدوات المدرسية والأدوية والمواد الأساسية',
            'إطلاق لجان تفتيش صارمة وميدانية ودائمة لضبط الأسعار في الأسواق والمحلات التجارية',
          ],
        },
        indicator: {
          label: { fr: 'Retraite minimale visée', ar: 'الحد الأدنى للمعاش' },
          value: { fr: 'Minimum 1 500 DH/mois pour tous', ar: 'حد أدنى 1500 درهم شهرياً' },
        },
      },
      territories_climate: {
        philosophicalStance: {
          fr: 'La justice climatique est indissociable de la justice sociale.',
          ar: 'العدالة المناخية جزء لا يتجزأ من العدالة الاجتماعية.',
        },
        summary: {
          fr: 'Transition énergétique 100% publique et souveraine, protection stricte du littoral contre le bétonnage, et sanctuarisation de la nappe phréatique pour l’eau potable.',
          ar: 'تحول طاقي سيادي تقوده المؤسسات العمومية، حماية السواحل من الزحف الإسمنتي، وصيانة الفرشة المائية لتأمين ماء الشرب أولاً.',
        },
        keyMeasures: {
          fr: [
            'Audit complet des autorisations de forage accordées aux grands domaines agro-industriels',
            'Développement des énergies renouvelables distribuées avec tarification sociale de l’électricité verte',
            'Plan national contre les bidonvilles et réhabilitation de l’habitat insalubre',
            'Création d’un corps d’écogardes pour protéger les forêts et zones humides protégées',
          ],
          ar: [
            'افتحاص شامل لرخص حفر الآبار الممنوحة للضيعات الفلاحية الكبرى المستنزفة للمياه',
            'تطوير الطاقات المتجددة وإقرار تعريفة اجتماعية تفضيلية للكهرباء النظيفة للأسر',
            'تسريع القضاء على مدن الصفيح وتوفير سكن لائق يحفظ كرامة الفئات الهشة',
            'إحداث سلك حراس البيئة لمراقبة وحماية الغابات والمحميات الطبيعية من التخريب',
          ],
        },
        indicator: {
          label: { fr: 'Habitat décent', ar: 'السكن اللائق' },
          value: { fr: 'Éradication totale des bidonvilles', ar: 'القضاء المبرم على السكن غير اللائق ومدن الصفيح' },
        },
      },
    },
  },
  {
    id: 'pjd',
    name: {
      fr: 'Parti de la Justice et du Développement',
      ar: 'حزب العدالة والتنمية',
    },
    acronym: {
      fr: 'PJD',
      ar: 'العدالة والتنمية',
    },
    symbolName: {
      fr: 'La Lampe',
      ar: 'المصباح',
    },
    symbolIcon: '💡',
    foundationYear: 1967,
    currentLeader: {
      fr: 'Abdelilah Benkirane',
      ar: 'عبد الإله بنكيران',
    },
    position: 'opposition',
    spectrum: 'conservative',
    spectrumLabel: {
      fr: 'Conservateur à Référentiel Islamique & Libéralisme Tempéré',
      ar: 'محافظ بمرجعية إسلامية وليبرالية معتدلة',
    },
    color: {
      primary: '#0F766E', // Teal / Dark Cyan
      bg: 'bg-teal-50',
      border: 'border-teal-200',
      text: 'text-teal-800',
    },
    parliamentSeats2021: 13,
    slogan: {
      fr: '« Voix honnête, fidélité aux valeurs et lutte contre la corruption »',
      ar: '« صوت الصدق، الوفاء للثوابت ومحاربة الفساد والريع »',
    },
    generalPhilosophy: {
      fr: 'Conservatisme moral et sociétal fondé sur l’éthique islamique, rigueur budgétaire orthodoxe, ciblage monétaire direct des plus pauvres (héritage du RAMED et de l’aide aux veuves), et lutte déclarée contre les rentes et la corruption.',
      ar: 'محافظة مجتمعية وأخلاقية مستندة إلى المرجعية الإسلامية، انضباط مالي وميزانياتي صارم، استهداف مباشر للفقراء (برامج دعم الأرامل والمطلقات وتيسير)، ومحاربة الفساد والريع.',
    },
    targetAudience: {
      fr: 'Classes populaires pieuses, petits commerçants, artisans, enseignants et classes moyennes conservatrices.',
      ar: 'الفئات الشعبية المحافظة، التجار الصغار، المهنيون، أساتذة وموظفو الطبقة المتوسطة المتمسكون بالهوية.',
    },
    coreDifferentiator: {
      fr: 'Discours politique fondé sur la probité morale, défense des réformes structurelles menées sous ses mandats (décompensation des carburants, réforme des retraites), et opposition résolue aux dérives sociétales progressistes.',
      ar: 'خطاب النزاهة الأخلاقية ومحاربة الفساد، التذكير بإصلاح صندوق المقاصة وأنظمة التقاعد، والدفاع عن الثوابت الدينية والأسرة في مدونة الأسرة.',
    },
    themes: {
      economy_fiscal: {
        philosophicalStance: {
          fr: 'Éthique des affaires, libéralisme régulé, rigueur budgétaire et assainissement des comptes publics.',
          ar: 'أخلاقيات المعاملات، اقتصاد السوق المنضبط، الصرامة المالية وحماية التوازنات الماكرو-اقتصادية.',
        },
        summary: {
          fr: 'Maintien de l’équilibre des finances publiques, encouragement de la finance participative (islamique), simplification fiscale pour les petits commerçants et baisse du train de vie de l’État.',
          ar: 'الحفاظ على التوازنات المالية للدولة، دعم الصيرفة والمالية التشاركية، تبسيط النظام الضريبي لصغار التجار، وتقليص نفقات تسيير الإدارة.',
        },
        keyMeasures: {
          fr: [
            'Développement des instruments de la finance islamique (Sukuk, Takaful) pour financer l’économie réelle',
            'Lutte intransigeante contre la corruption et l’enrichissement illicite dans la gestion publique',
            'Rationalisation stricte des dépenses de fonctionnement des ministères et agences étatiques',
            'Soutien au commerce de proximité et protection des petits commerçants face aux hypermarchés',
          ],
          ar: [
            'توسيع منتجات المالية التشاركية (الصكوك، التأمين التكافلي) لتمويل الاقتصاد الحقيقي والمشاريع',
            'التصدي الحازم للفساد الإداري ومحاربة الإثراء غير المشروع واستغلال النفوذ',
            'ترشيد صارم لنفقات تسيير الوزارات والإدارات والمؤسسات العمومية',
            'حماية تجارة القرب وتجار الأحياء الصغار أمام تغول المراكز التجارية الكبرى',
          ],
        },
        indicator: {
          label: { fr: 'Intégrité et Gouvernance', ar: 'النزاهة والحكامة' },
          value: { fr: 'Tolérance zéro contre la corruption', ar: 'محاربة الفساد واستغلال النفوذ المالي' },
        },
      },
      employment_youth: {
        philosophicalStance: {
          fr: 'Transparence absolue dans les concours de recrutement : le mérite individuel plutôt que le clientélisme.',
          ar: 'الشفافية المطلقة وتكافؤ الفرص في مباريات التوظيف: الكفاءة والاستحقاق لا المحسوبية والزبونية.',
        },
        summary: {
          fr: 'Consolidation du concours national unifié d’accès à la fonction publique, promotion de l’auto-emploi éthique et soutien aux coopératives de jeunes diplômés.',
          ar: 'التمسك الصارم بالمباريات المفتوحة والشفافة للتوظيف العمومي، دعم التشغيل الذاتي والتعاونيات الإنتاجية للشباب.',
        },
        keyMeasures: {
          fr: [
            'Sanctuarisation de la plateforme emploi-public.ma pour garantir l’égalité de tous les candidats',
            'Prêts d’honneur islamiques sans intérêt (Al-Qard Al-Hasan) pour les jeunes entrepreneurs',
            'Lutte contre le népotisme et les passe-droits dans les attributions de marchés et stages',
            'Création de passerelles entre les universités et les PME familiales régionales',
          ],
          ar: [
            'تحصين موقع التشغيل العمومي (emploi-public.ma) لضمان تكافؤ الفرص التام لكل أبناء الشعب',
            'إتاحة صيغ القرض الحسن والتمويلات التشاركية بدون فوائد ربوية للشباب حاملي المشاريع',
            'محاربة الزبونية والوساطات غير القانونية في التوظيف والصفقات',
            'ربط التكوين الجامعي بمتطلبات النسيج المقاولاتي المحلي والصناعات التصديرية',
          ],
        },
        indicator: {
          label: { fr: 'Transparence recrutement', ar: 'شفافية التوظيف' },
          value: { fr: '100% par concours public ouvert', ar: '100% عبر مباريات عمومية شفافة' },
        },
      },
      social_health: {
        philosophicalStance: {
          fr: 'L’aide monétaire directe ciblée est le moyen le plus digne et efficace pour extirper les familles de la pauvreté.',
          ar: 'الدعم النقدي المباشر والمشروط هو السبيل الأنجع لحفظ كرامة الفقراء وانتشالهم من العوز.',
        },
        summary: {
          fr: 'Défense de l’héritage des programmes sociaux historiques : programme d’aide directe aux veuves et orphelins, programme Tayssir pour la scolarisation, et maintien de l’accès gratuit aux soins pour les plus démunis.',
          ar: 'الدفاع عن البرامج الاجتماعية الرائدة: برنامج دعم الأرامل والمطلقات الحاضنات، برنامج تيسير، وضمان ولوج المعوزين للعلاج المجاني دون تعقيد.',
        },
        keyMeasures: {
          fr: [
            'Poursuite et revalorisation du soutien financier direct aux veuves en charge d’enfants scolarisés',
            'Suppression des barrières bureaucratiques qui ont exclu des millions d’ex-Ramedistes de l’AMO',
            'Renforcement des sanctions contre l’absentéisme médical injustifié dans les hôpitaux publics',
            'Plafonnement et contrôle rigoureux des prix des médicaments vitaux par l’Agence du Médicament',
          ],
          ar: [
            'الاستمرار في دعم الأرامل الحاضنات لأطفالهن اليتامى والرفع من قيمته المالية',
            'إصلاح اختلالات عتبة السجل الاجتماعي الموحد التي أقصت ملايين الفقراء من التغطية الصحية المجانية',
            'محاربة التغيب غير المبرر للأطباء والممرضين وتفعيل التفتيش بمستشفيات الدولة',
            'مواصلة خفض أسعار الأدوية الباهظة والمزمنة وتوفيرها في الصيدليات والمراكز الصحية',
          ],
        },
        indicator: {
          label: { fr: 'Soutien aux veuves', ar: 'دعم الأرامل واليتامى' },
          value: { fr: 'Préservation et revalorisation du programme', ar: 'الحفاظ على دعم الأرامل والرفع من مبالغه' },
        },
      },
      education: {
        philosophicalStance: {
          fr: 'L’école marocaine doit concilier excellence scientifique moderne et préservation des valeurs morales et religieuses.',
          ar: 'المدرسة المغربية يجب أن تجمع بين التفوق العلمي العصري والتمسك بالقيم الأخلاقية والدينية الراسخة.',
        },
        summary: {
          fr: 'Consolidation de la loi-cadre de l’éducation, renforcement de l’enseignement de la langue arabe et des valeurs éthiques, lutte contre la déperdition scolaire via les bourses Tayssir.',
          ar: 'تنزيل القانون الإطار للتربية والتكوين، تقوية مكانة اللغة العربية والتربية الأخلاقية، ومكافحة الانقطاع الدراسي عبر تحفيزات برنامج تيسير.',
        },
        keyMeasures: {
          fr: [
            'Rétablissement et revalorisation du programme Tayssir d’aide financière conditionnelle aux familles d’élèves',
            'Défense de la langue arabe comme langue d’enseignement des matières scientifiques aux côtés de l’ouverture linguistique',
            'Moralisation de l’espace scolaire et lutte contre la violence et la propagation des stupéfiants',
            'Reconnaissance et encouragement des écoles coraniques traditionnelles et de l’excellence universitaire',
          ],
          ar: [
            'استعادة وتوسيع برنامج تيسير للتحويلات المالية المشروطة للأسر لمكافحة الهدر المدرسي',
            'التمسك بمكانة اللغة العربية في تدريس العلوم مع الانفتاح المتوازن على اللغات الأجنبية',
            'تطهير محيط المؤسسات التعليمية من ترويج المخدرات والسلوكيات المشينة',
            'دعم التعليم الأصيل والكتاتيب القرآنية وتشجيع البحث العلمي والابتكار بالجامعات',
          ],
        },
        indicator: {
          label: { fr: 'Programme Tayssir', ar: 'برنامج تيسير' },
          value: { fr: 'Restauration pleine de l’aide directe aux écoliers', ar: 'استعادة وتوسيع التحويلات المالية للأسر' },
        },
      },
      purchasing_power: {
        philosophicalStance: {
          fr: 'La vérité des prix avec compensation directe aux ménages nécessite une stricte régulation de la concurrence.',
          ar: 'حقيقة الأسعار لا تستقيم إلا مع محاربة التواطؤات الاحتكارية وحماية المستهلك.',
        },
        summary: {
          fr: 'Défense du bilan de la décompensation des hydrocarbures pour sauver les finances de l’État, mais exigence de réactivation du Conseil de la concurrence pour plafonner les marges abusives des pétroliers.',
          ar: 'الدفاع عن إصلاح المقاصة لإنقاذ مالية الدولة من الإفلاس، مع المطالبة الصارمة بمحاسبة شركات المحروقات وتفعيل مجلس المنافسة لكبح أرباحها.',
        },
        keyMeasures: {
          fr: [
            'Application immédiate des sanctions du Conseil de la concurrence contre les ententes des pétroliers',
            'Exemption de TVA sur tous les produits alimentaires consommés par les couches modestes',
            'Augmentation des tranches d’allocations familiales versées directement aux mères de famille',
            'Revalorisation périodique des retraites indexée sur l’excédent budgétaire',
          ],
          ar: [
            'استرجاع الأرباح غير المشروعة التي حققتها شركات توزيع المحروقات بعد تحرير الأسعار',
            'إعفاء تام من ضريبة القيمة المضافة لكافة المواد الاستهلاكية الأساسية للفقراء',
            'صرف التعويضات العائلية مباشرة للأمهات لضمان وصولها لتغذية وتمدرس الأبناء',
            'مراجعة دورية للمعاشات التقاعدية للمدنيين والعسكريين',
          ],
        },
        indicator: {
          label: { fr: 'Régulation carburants', ar: 'ضبط المحروقات' },
          value: { fr: 'Plafonnement des marges excessives', ar: 'كبح الأرباح الفاحشة للشركات المحتكرة' },
        },
      },
      territories_climate: {
        philosophicalStance: {
          fr: 'Préservation des ressources naturelles en tant que dépôt divin (Amanah) et bien collectif.',
          ar: 'حفظ الموارد الطبيعية والماء أمانة دينية ومسؤولية وطنية للأجيال القادمة.',
        },
        summary: {
          fr: 'Gestion sobre et responsable de l’eau, encouragement de l’agriculture vivrière familiale au détriment de l’agro-business destructeur de nappes, et accélération de la transition solaire.',
          ar: 'تدبير حكيم للمياه دون تبذير، تفضيل الفلاحة المعيشية الغذائية على المشاريع الاستثمارية المستنزفة، وتسريع الاستثمار في الطاقة الشمسية.',
        },
        keyMeasures: {
          fr: [
            'Interdiction stricte des gaspillages d’eau dans les loisirs de luxe et les grandes résidences',
            'Soutien prioritaire aux cultures de céréales et légumineuses pour la souveraineté alimentaire',
            'Généralisation de l’énergie solaire dans le pompage de l’eau d’irrigation rurale',
            'Reboisement et lutte contre la désertification dans les provinces du Sud et de l’Oriental',
          ],
          ar: [
            'منع تبذير المياه في المسابح والأنشطة الترفيهية الفاخرة وملاعب الغولف أثناء الشح',
            'دعم زراعة الحبوب والقطاني لتقليص التبعية الغذائية للخارج وتحقيق الاكتفاء الذاتي',
            'دعم استعمال الطاقة الشمسية في الضخ الفلاحي بالبوادي كبديل للغازوال والغاز',
            'مشاريع التشجير ومكافحة التصحر وزحف الرمال بالجنوب والشرق',
          ],
        },
        indicator: {
          label: { fr: 'Souveraineté alimentaire', ar: 'السيادة الغذائية' },
          value: { fr: 'Priorité aux céréales et cultures vivrières', ar: 'الأولوية لزراعة الحبوب والاكتفاء الغذائي' },
        },
      },
    },
  },
  {
    id: 'psu',
    name: {
      fr: 'Parti Socialiste Unifié',
      ar: 'الحزب الاشتراكي الموحد',
    },
    acronym: {
      fr: 'PSU',
      ar: 'الاشتراكي الموحد',
    },
    symbolName: {
      fr: 'La Bougie & Le Compas',
      ar: 'الشمعة',
    },
    symbolIcon: '🕯️',
    foundationYear: 2002,
    currentLeader: {
      fr: 'Jamal El Asri (anc. Nabila Mounib)',
      ar: 'جمال العسري (سابقاً نبيلة منيب)',
    },
    position: 'opposition',
    spectrum: 'left',
    spectrumLabel: {
      fr: 'Gauche Démocratique & Écosocialiste',
      ar: 'يسار ديمقراطي جذري واشتراكية بيئية',
    },
    color: {
      primary: '#991B1B', // Dark Red / Crimson
      bg: 'bg-red-50',
      border: 'border-red-200',
      text: 'text-red-800',
    },
    parliamentSeats2021: 1,
    slogan: {
      fr: '« Une autre société est possible : monarchie parlementaire et justice sociale »',
      ar: '« مغرب آخر ممكن : ملكية برلمانية وعدالة اجتماعية وبيئية »',
    },
    generalPhilosophy: {
      fr: 'Rupture radicale avec le néolibéralisme et les diktats des institutions financières internationales. Écosocialisme, monarchie parlementaire où le Roi règne sans gouverner, nationalisation des secteurs stratégiques et primauté absolue des droits humains.',
      ar: 'قطع جذري مع السياسات النيوليبرالية وإملاءات المؤسسات المالية الدولية، اشتراكية بيئية، ملكية برلمانية يسود فيها الملك ولا يحكم، تأميم القطاعات الاستراتيجية، وسيادة حقوق الإنسان كاملة.',
    },
    targetAudience: {
      fr: 'Mouvements sociaux contestataires, intellectuels critiques, jeunesse militante, chômeurs diplômés et syndicats combatifs.',
      ar: 'الحركات الاحتجاجية، المثقفون النقديون، الشباب المناضل، المعطلون حاملو الشهادات والنقابيون المكافحون.',
    },
    coreDifferentiator: {
      fr: 'Opposition frontale au système de gouvernance actuel, revendication d’une assemblée constituante, refus de toute compromission et discours écologiste intransigeant.',
      ar: 'معارضة جذرية للنموذج التنموي القائم، المطالبة بملكية برلمانية ودستور ديمقراطي حقيقي، والتمسك بالسيادة الشعبية والبيئية.',
    },
    themes: {
      economy_fiscal: {
        philosophicalStance: {
          fr: 'Nationalisation des secteurs clés et souveraineté économique totale face aux multinationales.',
          ar: 'تأميم القطاعات الاستراتيجية الحيوية واستعادة السيادة الوطنية في وجه الشركات متعددة الجنسيات.',
        },
        summary: {
          fr: 'Nationalisation immédiate de La Samir, de l’eau, de l’électricité et des phosphates. Répudiation de la dette illégitime, impôt sur la fortune et imposition à 50% des très hauts patrimoines.',
          ar: 'تأميم فوري لمصفاة سامير، قطاعات الماء، الكهرباء والمناجم. تدقيق ديون الدولة وإلغاء غير المشروع منها، فرض ضريبة على الثروة تصل إلى 50% على كبار المتمولين.',
        },
        keyMeasures: {
          fr: [
            'Nationalisation complète de la raffinerie SAMIR pour garantir l’indépendance énergétique nationale',
            'Impôt progressif sur les grandes fortunes et sur les successions colossales',
            'Audit citoyen de la dette publique et suspension des accords de libre-échange asymétriques',
            'Création d’un pôle bancaire public d’investissement non spéculatif',
          ],
          ar: [
            'تأميم فوري واستعادة مصفاة "سامير" للبترول لضمان استقرار أسعار المحروقات والسيادة الطاقية',
            'إقرار ضريبة تصاعدية على الثروات الكبرى والتركات الضخمة لتمويل التنمية',
            'إجراء تدقيق ومراجعة شعبية لديون الدولة الخارجية ومراجعة اتفاقيات التبادل الحر غير المتكافئة',
            'إنشاء قطب بنكي عمومي موحد للاستثمار المنتج وغير المضارب',
          ],
        },
        indicator: {
          label: { fr: 'Nationalisation', ar: 'التأميم والسيادة' },
          value: { fr: 'Secteurs de l’énergie, de l’eau et des mines', ar: 'تأميم قطاعات الطاقة والمحروقات والمناجم' },
        },
      },
      employment_youth: {
        philosophicalStance: {
          fr: 'Le plein emploi garanti par la puissance publique et réduction du temps de travail hebdomadaire.',
          ar: 'الحق في الشغل تضمنه الدولة وتقليص ساعات العمل الأسبوعية لاقتسام مناصب الشغل.',
        },
        summary: {
          fr: 'Passage aux 35 heures de travail par semaine sans baisse de salaire pour créer de l’emploi, titularisation inconditionnelle de tous les contractuels et revenu citoyen universel.',
          ar: 'تقليص ساعات العمل إلى 35 ساعة أسبوعياً بنفس الأجر لخلق مناصب شغل جديدة، إدماج فوري لجميع العاملين بالعقد، ودخل كرامة للمواطنين.',
        },
        keyMeasures: {
          fr: [
            'Instauration de la semaine de travail à 35 heures pour stimuler l’embauche',
            'Recrutement direct de 200 000 jeunes dans la fonction publique et les régies écologiques',
            'Revenu d’autonomie universel pour tous les jeunes diplômés et chômeurs de longue durée',
            'Interdiction légale des licenciements économiques pour les entreprises distributrices de dividendes',
          ],
          ar: [
            'تخفيض ساعات العمل الأسبوعية إلى 35 ساعة لاقتسام مناصب الشغل المتاحة دون خفض الأجور',
            'توظيف مباشر لـ 200 ألف من حاملي الشهادات في قطاعات التعليم والصحة والبيئة',
            'إقرار دخل أساسي للكرامة لكل عاطل عن العمل حتى الاندماج المهني',
            'منع التسريح الاقتصادي للعمال في الشركات التي توزع أرباحاً طائلة على مساهميها',
          ],
        },
        indicator: {
          label: { fr: 'Temps de travail', ar: 'ساعات العمل' },
          value: { fr: 'Passage aux 35h / semaine', ar: '35 ساعة عمل أسبوعياً' },
        },
      },
      social_health: {
        philosophicalStance: {
          fr: 'Santé publique 100% gratuite, universelle et financée par l’impôt : fermeture des cliniques commerciales.',
          ar: 'صحة عمومية مجانية 100% وممولة من الضرائب العادلة: منع المتاجرة بصحة المواطنين.',
        },
        summary: {
          fr: 'Refus du modèle d’assurance privée de l’AMO, passage à un Service National de Santé (NHS à la marocaine) financé par l’impôt, avec gratuité absolue des soins et médicaments.',
          ar: 'رفض النموذج التأميني التجاري، وبناء خدمة وطنية عمومية للصحة ممولة من الضرائب، مع مجانية تامة وشاملة للتحاليل والأدوية والعمليات الجراحية.',
        },
        keyMeasures: {
          fr: [
            'Interdiction formelle de toute recherche de profit financier dans le secteur de la santé',
            'Gratuité totale de l’ensemble des soins et médicaments délivrés par les hôpitaux publics',
            'Augmentation du budget de la santé à 15% du budget général de l’État',
            'Doublement du nombre de lits d’hôpitaux publics et revalorisation des salaires du corps soignant',
          ],
          ar: [
            'حظر المضاربة والربح التجاري في القطاع الصحي وإخضاعه لدفتر تحملات عمومي صارم',
            'مجانية كاملة وشاملة لكل العلاجات، العمليات، والأدوية في كافة المستشفيات والمستوصفات',
            'رفع ميزانية وزارة الصحة إلى 15% من الميزانية العامة للدولة',
            'مضاعفة عدد الأسرة بالمستشفيات العمومية ومضاعفة أجور الأطباء والممرضين العموميين',
          ],
        },
        indicator: {
          label: { fr: 'Modèle Santé', ar: 'النموذج الصحي' },
          value: { fr: '100% public, gratuit et universel', ar: 'مجانية تامة وعمومية 100%' },
        },
      },
      education: {
        philosophicalStance: {
          fr: 'L’éducation est un droit humain fondamental : nationalisation progressive de l’enseignement privé.',
          ar: 'التعليم حق إنساني غير قابل للبيع والشراء: استعادة المدرسة العمومية الوطنية الموحدة.',
        },
        summary: {
          fr: 'École publique unique, gratuite, laïque et démocratique de la maternelle à l’université. Arrêt de toute subvention publique au secteur privé et budget de l’éducation porté à 30% du budget de l’État.',
          ar: 'مدرسة عمومية موحدة، مجانية، ديمقراطية وعلمية من التعليم الأولي إلى الدكتوراه. وقف أي دعم عمومي للقطاع الخاص ورفع ميزانية التعليم إلى 30%.',
        },
        keyMeasures: {
          fr: [
            'Titularisation immédiate et sans condition de tous les enseignants contractuels avec statut de fonctionnaire d’État',
            'Interdiction progressive de l’enseignement privé lucratif au profit d’un grand service public unifié',
            'Doublement des bourses d’études universitaires et gratuité des cités universitaires',
            'Budget de l’éducation et de l’université porté à 30% des dépenses de l’État',
          ],
          ar: [
            'الإدماج الفوري لجميع الأساتذة الذين فرض عليهم التعاقد كأسلاك وظيفية تابعة للوزارة مباشرة',
            'وقف تراخيص التعليم الخصوصي التجاري وبناء مدرسة عمومية قوية ومجانية للجميع',
            'مضاعفة المنح الجامعية للطلبة وتوفير السكن الجامعي اللائق والمجاني',
            'تخصيص 30% من الميزانية العامة لقطاع التربية الوطنية والتعليم العالي والبحث العلمي',
          ],
        },
        indicator: {
          label: { fr: 'Budget Éducation', ar: 'ميزانية التعليم' },
          value: { fr: '30% du budget de l’État', ar: '30% من الميزانية العامة للدولة' },
        },
      },
      purchasing_power: {
        philosophicalStance: {
          fr: 'Garantir un niveau de vie digne à chaque citoyen en bloquant les prix et en taxant la rente.',
          ar: 'ضمان العيش الكريم لكل مواطن عبر تسقيف الأسعار ورفع الأجور ومصادرة أرباح الريع.',
        },
        summary: {
          fr: 'Fixation du SMIG à 5 000 DH net, blocage par la loi des prix des denrées de base, gratuité des transports scolaires et tarification sociale des énergies.',
          ar: 'تحديد الحد الأدنى للأجور في 5000 درهم صافية، تجميد أسعار المواد الغذائية بمرسوم، مجانية النقل المدرسي والجامعي، وتعريفة اجتماعية للطاقة.',
        },
        keyMeasures: {
          fr: [
            'Hausse immédiate du SMIG et du SMAG à 5 000 DH nets par mois pour tous les travailleurs',
            'Blocage administratif des prix des denrées de base (farine, huile, sucre, carburants, électricité)',
            'Taxation punitive à 80% des marges des spéculateurs et importateurs d’aliments',
            'Gratuité totale des manuels et fournitures scolaires pour tous les écoliers marocains',
          ],
          ar: [
            'رفع الحد الأدنى للأجور (SMIG/SMAG) إلى 5000 درهم صافية لجميع العمال والفلاحين',
            'التسقيف الإداري والحديدي لأسعار السلع الأساسية (الزيت، الدقيق، السكر، البنزين، الدواء)',
            'فرض ضريبة عقابية بنسبة 80% على أرباح المضاربين والمحتكرين في السلع الغذائية',
            'توفير مجاني وشامل للكتب والأدوات المدرسية لجميع تلميذات وتلاميذ المغرب',
          ],
        },
        indicator: {
          label: { fr: 'Revendication SMIG', ar: 'مطلب الحد الأدنى للأجور' },
          value: { fr: '5 000 DH net / mois', ar: '5000 درهم صافية شهرياً' },
        },
      },
      territories_climate: {
        philosophicalStance: {
          fr: 'Écosocialisme : rupture avec le productivisme agricole exportateur destructeur des nappes phréatiques.',
          ar: 'اشتراكية بيئية: قطع نهائي مع الفلاحة التصديرية الريعية المستنزفة للثروة المائية الوطنية.',
        },
        summary: {
          fr: 'Arrêt immédiat de toute subvention à l’agrobusiness d’exportation (avocats, baies, pastèques), redistribution des terres domaniales aux petits paysans, et déclaration de l’eau comme bien commun inaliénable.',
          ar: 'إيقاف فوري لكل أشكال الدعم العمومي لشركات الفلاحة التصديرية المستنزفة للمياه، توزيع الأراضي الفلاحية على الفلاحين الصغار، وإعلان الماء ملكاً عاماً مقدساً غير قابل للخوصصة.',
        },
        keyMeasures: {
          fr: [
            'Interdiction pénale de l’exportation d’eau virtuelle (avocats, pastèques, agrumes intensifs)',
            'Nationalisation des concessions d’eau et d’électricité : fin de la gestion déléguée privée (Lydec, Amendis, etc.)',
            'Développement des régies publiques locales pour la gestion écologique des déchets et de l’eau',
            'Plan d’urgence éco-territorial pour les zones de l’Atlas et du Rif négligées',
          ],
          ar: [
            'تجريم تصدير المياه الافتراضية عبر حظر الزراعات التصديرية الشرهة للماء (الأفوكادو والفواكه الحمراء)',
            'إنهاء فوري لعقود التدبير المفوض لشركات توزيع الماء والكهرباء واسترجاعها لشركات وطنية عمومية',
            'إحداث وكالات عمومية شعبية لتدبير النفايات والتحول الطاقي النظيف',
            'خطة إيكولوجية وتنموية استعجالية لإنصاف جبال الأطلس والريف المنسية',
          ],
        },
        indicator: {
          label: { fr: 'Souveraineté hydrique', ar: 'السيادة المائية' },
          value: { fr: 'Interdiction de l’exportation d’eau virtuelle', ar: 'حظر تصدير المياه الافتراضية والزراعات المستنزفة' },
        },
      },
    },
  },
];

export const PARTIES: Party[] = RAW_PARTIES.map((party) => ({
  ...party,
  metrics: PARTY_METRICS[party.id] || {
    stateVsMarket: 5,
    socialSpending: 5,
    taxProgressivity: 5,
    ruralPriority: 5,
    priceRegulation: 5,
    climateSobriety: 5,
    economicSpectrumScore: 0,
    societalSpectrumScore: 0,
    targetSmigMAD: 3120,
    targetHealthBudgetPercent: 8,
    targetEducationBudgetPercent: 20,
  },
}));


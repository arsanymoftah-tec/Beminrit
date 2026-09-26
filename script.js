/* =========================================================
   مونديال بي مينريت صيف 2026 — Interactive Script
   المحتوى مستخرج حرفيًا من ملف PDF الرسمي
   ========================================================= */

/* ============ TIMELINE (من صفحة 2-3) ============ */
const TIMELINE_DATA = [
  { name: 'تي بارثينوس', year: '2014', season: 'صيف', theme: 'ومحوره العذراء مريم' },
  { name: 'تي أكليسيا', year: '2015', season: 'شتاء', theme: 'ومحوره الكنيسة' },
  { name: 'ني مارتيروس', year: '2015', season: 'صيف', theme: 'ومحوره الشهداء' },
  { name: 'باركليتون', year: '2016', season: 'شتاء', theme: 'ومحوره عن الروح القدس' },
  { name: 'إيف إنجيليون', year: '2016', season: 'صيف', theme: 'ومحوره عن الكتاب المقدس' },
  { name: 'بي إبروفيتيس', year: '2017', season: 'شتاء', theme: 'ومحوره عن يوحنا النبي' },
  { name: 'ني ميستيريون', year: '2017', season: 'صيف', theme: 'ومحوره أسرار الكنيسة' },
  { name: 'ثيؤتي تينو', year: '2018', season: 'شتاء', theme: 'ومحوره المجامع الكنسية' },
  { name: 'ني إنجيلوس', year: '2018', season: 'صيف', theme: 'ومحوره عن الملائكة' },
  { name: 'بي رف تي أومس', year: '2019', season: 'شتاء', theme: 'ومحوره عن يوحنا المعمدان' },
  { name: 'ني أبو ستولوس', year: '2019', season: 'صيف', theme: 'ومحوره عن الآباء الرسل' },
  { name: 'ني إبريسفيا', year: '2020', season: 'شتاء', theme: 'ومحوره عن الشفاعة' },
  { name: 'أنا فورا', year: '2022', season: 'شتاء', theme: 'ومحوره عن القداس الإلهي' },
  { name: 'إيوفولميسيس', year: '2022', season: 'صيف', theme: 'ومحوره عن كنائس سفر الرؤيا' },
  { name: 'أفتيشي ساركس', year: '2023', season: 'شتاء', theme: 'ومحوره عن عقيدة' },
  { name: 'بي إستافروس', year: '2023', season: 'صيف', theme: 'ومحوره عن الصليب' },
  { name: 'ديأكونية', year: '2024', season: 'شتاء', theme: 'ومحوره عن الشمامسة' },
  { name: 'ثينوطوكوس', year: '2024', season: '—', theme: 'ومحوره عن عقيدتنا في والدة الإله' },
  { name: 'تي ناهتي', year: '—', season: '—', theme: 'ومحوره عن قانون الإيمان المسيحي' },
  { name: 'أونياتو', year: '—', season: '—', theme: 'ومحوره الموعظة على الجبل والشفاعة' },
  { name: 'بي ثيؤريفوس', year: '—', season: '—', theme: 'ومحوره مارمرقس الرسول والثالوث والتوحيد' }
];

/* ============ CURRICULUM — المحتوى الكامل ============ */
const CURRICULUM = [
  {
    id: 'lesson-1',
    num: 'الدرس الأول',
    title: 'القديس يوحنا الحبيب وإنجيل يوحنا',
    desc: 'من هو يوحنا الرسول؟ وما ألقابه؟ وكيف كتب إنجيله؟ كل التفاصيل في هذا الدرس.',
    topics: ['من هو', 'ألقابه', 'تلاميذه', 'كتابة الإنجيل', 'هدف الإنجيل', 'مفتاح السفر', 'الأقسام', 'المحتوى', 'المعجزات', 'اللاهوت'],
    content: `
      <h3>١. من هو القديس يوحنا الرسول؟</h3>
      <ul>
        <li>اسمه <strong>يوحنا</strong> وتعني <strong>«الله يتحنن»</strong>.</li>
        <li>أحد تلاميذ الرب الاثني عشر.</li>
        <li>أصغر التلاميذ سنًا.</li>
        <li>الوحيد الذي رافق الرب في الصلب.</li>
        <li>أول المعترفين حيث نال آلام الاستشهاد ولم يمت أثناء التعذيب.</li>
        <li>دُعي هو وأخوه <strong>بوأنرجس (ابني الرعد)</strong>.</li>
        <li>حسبه بولس الرسول أحد <strong>أعمدة الكنيسة</strong> (أع 15: 6، غل 2: 9).</li>
      </ul>

      <h3>٢. ألقابه</h3>
      <ul>
        <li>الإنجيلي</li>
        <li>اللاهوتي</li>
        <li>الرائي</li>
        <li>البتول</li>
        <li>الحبيب</li>
        <li>رسول المحبة</li>
        <li>التلميذ الذي يسوع يحبه</li>
      </ul>

      <h3>٣. نشأته وعائلته</h3>
      <ul>
        <li>أبوه <strong>زبدى إي (هبة الله)</strong>.</li>
        <li>أمه <strong>سالومة</strong> (أخت مريم العذراء).</li>
        <li>أخوه <strong>يعقوب الملقب بالكبير</strong> — وهو من تلاميذ الاثني عشر.</li>
        <li>وُلد يوحنا سنة <strong>10 ميلاديًا</strong> في قرية بيت صيدا في مقاطعة الجليل.</li>
        <li>استُشهد من التلاميذ عام <strong>44 م</strong> (أخوه يعقوب).</li>
        <li>كان <strong>صيادًا</strong> وصاحب مركب للصيد عند بحيرة جنيسارت.</li>
        <li>تلميذ يوحنا المعمدان إلى أن دعاه السيد المسيح للتلمذة مع أخيه يعقوب فتبعاه.</li>
        <li>كان أبوه زبدى غنيًا وشريكه سمعان في الصيد.</li>
      </ul>

      <h3>٤. تلاميذه وخدمته</h3>
      <ul>
        <li>اختار السيد المسيح سمعان وأندراوس ويوحنا ويعقوب كأول تلاميذ له.</li>
        <li>نُفي يوحنا إلى <strong>جزيرة بطمس</strong> بحكم من <strong>دومتيان الروماني</strong> سنة 95 م.</li>
        <li>نياحة يوحنا الرسول حوالي سنة <strong>100 م</strong> في حكم <strong>تراجان الروماني</strong>.</li>
        <li>من تلاميذ يوحنا: <strong>بوليكاربوس أسقف سميرنا، أغناطيوس، بابياس</strong>.</li>
      </ul>

      <h3>٥. كتابة إنجيل يوحنا</h3>
      <ul>
        <li>كتب للعالم أجمع.</li>
        <li>مكان كتابته: <strong>أفسس</strong> وهو آخر إنجيل كُتب سنة <strong>85 - 100 م</strong>.</li>
      </ul>

      <h3>٦. هدف إنجيل يوحنا</h3>
      <div class="gold-box">يسوع المسيح ابن الله لنؤمن به من خلال أعماله وتعاليمه، وتأكيد لاهوت السيد المسيح والرد على الهرطقات.</div>

      <h3>٧. مفتاح السفر</h3>
      <div class="verse">"وَأَمَّا هذِهِ فَقَدْ كُتِبَتْ لِتُؤْمِنُوا أَنَّ يَسُوعَ هُوَ الْمَسِيحُ ابْنُ اللهِ" (يو 20: 31)</div>

      <h3>٨. سمات إنجيل يوحنا</h3>
      <ul>
        <li>عدد إصحاحات إنجيل يوحنا <strong>21 إصحاحًا</strong>.</li>
        <li>ركز على لاهوت المسيح، لذا اختار <strong>8 معجزات</strong> تثبت لاهوته.</li>
        <li>يركز على الإيمان بالله والحب الذي بدونه نفقد تبعيتنا للمسيح.</li>
        <li>بما أنه آخر إنجيل قد كُتب، لذا لم يكتب أحداث البشارة والميلاد، سواء ميلاد السيد المسيح أو يوحنا المعمدان، وكذلك سلسلة.</li>
      </ul>

      <h3>٩. أقسام إنجيل يوحنا</h3>
      <ul>
        <li><strong>١-</strong> التجسد وكرازة يوحنا وانتخاب التلاميذ (ص 1).</li>
        <li><strong>٢-</strong> خدمة يسوع المسيح الجهارية وكرازته (ص 2: 12).</li>
        <li><strong>٣-</strong> موته وقيامته (ص 13: 21).</li>
      </ul>

      <h3>١٠. معجزات انفرد بها القديس يوحنا</h3>
      <ul>
        <li>تحويل الماء إلى خمر في عرس قانا الجليل (يو 2: 1-11).</li>
        <li>شفاء ابن خادم الملك في قانا الجليل (يو 4: 46-54).</li>
        <li>شفاء مريض بيت حسدا بعد 38 سنة (يو 5: 2-61).</li>
        <li>شفاء المولود أعمى (خلق له عينان) (يو 9: 1-38).</li>
        <li>إقامة لعازر بعد أربعة أيام (يو 11).</li>
        <li>صيد السمك الكثير (153 سمكة) (يو 12: 1-14).</li>
      </ul>

      <div class="info-box">
        <strong>ملاحظة:</strong> المعجزة الوحيدة التي ذكرت في الأناجيل الأربعة هي معجزة إطعام الجموع بالخمس خبزات والسمكتين، ومعجزة المشي على الماء ذُكرت في بعض الأناجيل.
      </div>

      <h3>١١. شهادة القديس يوحنا ضد هرطقة الدوسيطية</h3>
      <p>قال البعض أن المسيح لم يكن جسده حقيقيًا بل كان خيالًا، وأن آلامه على الصليب وموته لم يكن حقيقيًا. الرد: أكد القديس يوحنا ناسوت الرب يسوع فقال:</p>
      <div class="verse">"وَالْكَلِمَةُ صَارَ جَسَدًا وَحَلَّ بَيْنَنَا" (يو 1: 14)</div>
      <div class="verse">"فَإِذْ كَانَ يَسُوعُ قَدْ تَعِبَ مِنَ السَّفَرِ جَلَسَ هكَذَا عَلَى الْبِئْرِ" (يو 4: 6)</div>
      <div class="verse">"لكِنَّ وَاحِدًا مِنَ الْعَسْكَرِ طَعَنَ جَنْبَهُ بِحَرْبَةٍ، وَلِلْوَقْتِ خَرَجَ دَمٌ وَمَاءٌ" (يو 19: 34)</div>
    `
  },
  {
    id: 'lesson-2',
    num: 'الدرس الثاني',
    title: 'إثبات لاهوت السيد المسيح',
    desc: 'أدلة كتابية ومعجزات تثبت أن المسيح هو الله الظاهر في الجسد — 5 صفات + السلطان المطلق + السجود.',
    topics: ['أقنوم الابن', 'الكلمة', 'الخالق', 'موجود في كل مكان', 'يقي الموتى', 'يغفر الخطايا', 'الديان', 'السلطان', 'السجود'],
    content: `
      <h3>أولًا: الكلمة (اللوغوس)</h3>
      <p>دُعي الابن <strong>«اللوغوس»</strong> أي الكلمة، والكلمة مأخوذة من الفعل اليوناني ينطق، لذا تعني عقل الله الناطق أو نطق الله العاقل، فهي تعني العقل والنطق معًا، وهذا هو وضع أقنوم الابن في الثالوث القدوس.</p>
      <p>ودُعي السيد المسيح بالكلمة في ثلاثة مواضع هامة:</p>
      <ul>
        <li>في إنجيل يوحنا: <span class="verse">"فِي الْبَدْءِ كَانَ الْكَلِمَةُ، وَالْكَلِمَةُ كَانَ عِنْدَ اللهِ، وَكَانَ الْكَلِمَةُ اللهَ" (يو 1: 1)</span></li>
        <li>في رسالة يوحنا: <span class="verse">"الَّذِينَ يَشْهَدُونَ فِي السَّمَاءِ هُمْ ثَلاَثَةٌ: الآبُ وَالْكَلِمَةُ وَالرُّوحُ الْقُدُسُ، وَهؤُلاَءِ الثَّلاَثَةُ هُمْ وَاحِدٌ" (1 يو 5: 7)</span></li>
        <li>في سفر الرؤيا: <span class="verse">"وَهُوَ مُتَسَرْبِلٌ بِثَوْبٍ مَغْسُولٍ بِدَمٍ، وَيُدْعَى اسْمُهُ كَلِمَةَ اللهِ" (رؤ 19: 13)</span></li>
      </ul>
      <p>والطبيعي أن عقل الله لا ينفصل عن الله، والله وعقله كيان واحد. لذلك لما تجسد الابن رأينا الله فيه فقال القديس يوحنا الرسول: <span class="verse">"اللهُ لَمْ يَرَهُ أَحَدٌ قَطُّ. اَلابْنُ الْوَحِيدُ الْكَائِنُ فِي حِضْنِ الآبِ هُوَ خَبَّرَ" (يو 1: 18)</span>. وبالإجماع <span class="verse">"عَظِيمٌ هُوَ سِرُّ التَّقْوَى: اللهُ ظَهَرَ فِي الْجَسَدِ" (1 تي 3: 16)</span>. لذلك قال الرب يسوع: <span class="verse">"مَنْ رَآنِي فَقَدْ رَأَى الآبَ" (يو 14: 9)</span>.</p>

      <h3>ثانيًا: صفات تثبت لاهوته</h3>

      <h4>١. صفة الخلق</h4>
      <p>لا شك أن الله وحده هو الخالق كما جاء في سفر التكوين: <span class="verse">"فِي الْبَدْءِ خَلَقَ اللهُ السَّمَاوَاتِ وَالأَرْضَ" (تك 1: 1)</span>.</p>
      <p>أشار الكتاب المقدس أن السيد المسيح هو الخالق:</p>
      <div class="verse">"كُلُّ شَيْءٍ بِهِ كَانَ، وَبِغَيْرِهِ لَمْ يَكُنْ شَيْءٌ مِمَّا كَانَ" (يو 1: 3)</div>
      <div class="verse">"كَانَ فِي الْعَالَمِ، وَكُوِّنَ الْعَالَمُ بِهِ" (يو 1: 10)</div>
      <p><strong>معجزات تثبت أنه الخالق:</strong></p>
      <ul>
        <li><strong>معجزة تحويل الماء إلى خمر (يو 2):</strong> تمت هذه المعجزة وفيها خلق مادة جديدة من العدم، فالخمر به عنصر الكربون غير الموجود أصلًا في الماء.</li>
        <li><strong>معجزة المولود أعمى (يو 9):</strong> فيها خلق الرب يسوع عينين للمولود أعمى حيث صنع مقلتين من الطين، علمًا بأن الطين إذا وضع في عين بصير يفقده البصر.</li>
        <li><strong>معجزة إشباع الجموع (مت 1.5، 1.5):</strong> فمن أين جاءت الأرغفة والسمك الذي أشبع الجموع بالإضافة لما تبقى بعد المعجزة.</li>
      </ul>

      <h4>٢. موجود في كل مكان</h4>
      <p>هذه الصفة تخص الله وحده بسبب أنه غير محدود، فنجد ربنا يسوع يؤكد ذلك:</p>
      <div class="verse">"حَيْثُمَا اجْتَمَعَ اثْنَانِ أَوْ ثَلاَثَةٌ بِاسْمِي فَهُنَاكَ أَكُونُ فِي وَسْطِهِمْ" (مت 18: 20)</div>
      <p>وفي حديثه مع نيقدويموس: <span class="verse">"لَيْسَ أَحَدٌ صَعِدَ إِلَى السَّمَاءِ إِلاَّ الَّذِي نَزَلَ مِنَ السَّمَاءِ، ابْنُ الإِنْسَانِ الَّذِي هُوَ فِي السَّمَاءِ" (يو 3: 13)</span>.</p>

      <h4>٣. يقي الموتى</h4>
      <p>لا يقدر أحد أن يقيم ميت بذاته لأن الحياة هي من الله ومعطيها هو الله وحده.</p>
      <p>أشار الكتاب المقدس أن السيد المسيح هو معطي الحياة: <span class="verse">"الْوَاهِبُ الْحَيَاةَ لِلْعَالَمِ" (يو 6: 33)</span>.</p>
      <p><strong>معجزات تثبت أنه الله معطي الحياة:</strong></p>
      <ul>
        <li>معجزة إقامة ابنة يايرس (مر 5: 22) — أقامها وهي ما زالت على فراشها.</li>
        <li>معجزة إقامة ابن أرملة نايين (لو 7: 11) — كان محمولًا على نعش في الطريق وحوله جمع كثير من المدينة.</li>
        <li>معجزة إقامة لعازر (يو 11) — أقامه بعد موته بأربعة أيام.</li>
      </ul>

      <h4>٤. يغفر الخطايا</h4>
      <p>من يستطيع مغفرة الخطايا سوى الله وحده.</p>
      <p>ورد في سفر الخروج: <span class="verse">"الرَّبُّ إِلهٌ رَحِيمٌ وَرَؤُوفٌ، بَطِيءُ الْغَضَبِ وَكَثِيرُ الإِحْسَانِ وَالْوَفَاءِ... غَافِرُ الإِثْمِ وَالْمَعْصِيَةِ وَالْخَطِيَّةِ" (خر 34: 6-7)</span>.</p>
      <p>وقال داود النبي: <span class="verse">"بَارِكِي يَا نَفْسِي الرَّبَّ، الَّذِي يَغْفِرُ جَمِيعَ ذُنُوبِكِ" (مز 103: 1-3)</span>.</p>
      <p>ومن أمثلة من غفر لهم السيد المسيح خطاياهم: <span class="verse">"إِنْ حَرَّرَكُمُ الابْنُ فَبِالْحَقِيقَةِ تَكُونُونَ أَحْرَارًا" (يو 8: 36)</span>.</p>
      <ul>
        <li>غفر للمفلوج قائلًا له: <span class="verse">"مَغْفُورَةٌ لَكَ خَطَايَاكَ" (مر 5: 2)</span>.</li>
        <li>غفر للمرأة الخاطئة في بيت سمعان الفريسي (لو 7: 48).</li>
        <li>غفر للص المصلوب معه (لو 23: 43).</li>
        <li>غفر للمرأة التي أُمسكت في ذات الفعل (يو 8) وقال لها ولا أنا أدينك، وأيضًا كتب خطايا راجميها على الأرض حتى تركوها ومضوا.</li>
      </ul>

      <h4>٥. المسيح الديان</h4>
      <p>الله وحده هو الديان: <span class="verse">"الرَّبُّ يَدِينُ الشُّعُوبَ" (مز 7: 8)</span>. فهل السيد المسيح يدين؟</p>
      <ul>
        <li>يقول بولس الرسول: <span class="verse">"لأَنَّنَا لاَ بُدَّ أَنَّنَا جَمِيعًا نَظْهَرُ أَمَامَ كُرْسِيِّ الْمَسِيحِ، لِيَنَالَ كُلُّ وَاحِدٍ مَا كَانَ بِالْجَسَدِ، بِحَسَبِ مَا صَنَعَ خَيْرًا أَمْ شَرًّا" (2 كو 5: 10)</span>.</li>
        <li>وفي إنجيل متى: <span class="verse">"فَإِنَّ ابْنَ الإِنْسَانِ سَوْفَ يَأْتِي فِي مَجْدِ أَبِيهِ مَعَ مَلاَئِكَتِهِ وَحِينَئِذٍ يُجَازِي كُلَّ وَاحِدٍ حَسَبَ عَمَلِهِ" (مت 16: 27)</span>.</li>
      </ul>

      <h3>ثالثًا: سلطانه المطلق يثبت لاهوته</h3>

      <h4>١. سلطانه المطلق على الطبيعة</h4>
      <ul>
        <li><strong>على البحر والرياح والأمواج:</strong> حينما حدث نوع عظيم على السفينة <span class="verse">"قَامَ وَانْتَهَرَ الرِّيحَ وَقَالَ لِلْبَحْرِ: اسْكُتْ! اِبْكَمْ! فَسَكَتَ الرِّيحُ وَصَارَ هُدُوءٌ عَظِيمٌ" (مر 4: 37)</span>.</li>
        <li><strong>لعن شجرة التين:</strong> فيبست في الحال (مت 21: 19).</li>
        <li><strong>المشي على الماء:</strong> (يو 6: 17).</li>
        <li><strong>صعوده إلى السماء:</strong> (مر 16: 19).</li>
      </ul>

      <h4>٢. سلطانه على الملائكة</h4>
      <ul>
        <li>بعد التجربة على الجبل: <span class="verse">"وَصَارَتِ الْمَلاَئِكَةُ تَخْدِمُهُ" (مر 1: 13)</span>.</li>
        <li>أعظم من الملائكة (عب 1: 4).</li>
      </ul>

      <h4>٣. سلطانه على الشياطين</h4>
      <p>يخافون الرب ويصرخون عند لقائه أمثلة على سلطانه عليهم:</p>
      <ul>
        <li>الإنسان الذي به روح نجس في مجمع كفر ناحوم: <span class="verse">"آهِ! مَا لَنَا وَلَكَ يَا يَسُوعُ النَّاصِرِيُّ؟ أَتَيْتَ لِتُهْلِكَنَا! أَنَا أَعْرِفُكَ مَنْ أَنْتَ: قُدُّوسُ اللهِ" (مر 1: 22)</span>.</li>
        <li>الإنسان الذي كان عليه ليجيون: <span class="verse">"صَرَخَ قَائِلًا: مَا لِي وَلَكَ يَا يَسُوعُ ابْنُ اللهِ؟" (مت 8: 29)</span>.</li>
      </ul>

      <h3>رابعًا: السجود للمسيح</h3>
      <p>السجود والعبادة لله وحدة، ويذكر القديس بولس الرسول: <span class="verse">"وَتَجْثُو بِاسْمِ يَسُوعَ كُلُّ رُكْبَةٍ مِمَّنْ فِي السَّمَاءِ وَمَا عَلَى الأَرْضِ وَمَنْ تَحْتَ الأَرْضِ، وَيَعْتَرِفُ كُلُّ إِنْسَانٍ أَنَّ يَسُوعَ الْمَسِيحَ هُوَ رَبٌّ" (في 2: 10)</span>.</p>
      <p><strong>أمثلة على السجود للمسيح:</strong></p>
      <ul>
        <li>المجوس سجدوا له وهو طفل (مت 2: 11).</li>
        <li>سجود الملائكة له: <span class="verse">"لِتَسْجُدْ لَهُ كُلُّ مَلاَئِكَةِ اللهِ" (عب 1: 6)</span>.</li>
        <li>سجد له المولود أعمى: <span class="verse">"أَتُؤْمِنُ بِيَا سَيِّدِي وَسَجَدَ لَهُ" (يو 9: 36)</span>.</li>
        <li>سجد له القديس بطرس بعد معجزة صيد السمك الكثير (لو 5: 8).</li>
        <li>سجدت له نازفة الدم بعد شفائها (مر 5: 33).</li>
        <li>سجدت له المرأتان بعد القيامة (مت 28: 9).</li>
        <li>وسجد له الأحد عشر رسولًا لما رأوه بعد القيامة (مت 28: 17).</li>
      </ul>
      <div class="gold-box">لإلهنا كل المجد والكرامة إلى الأبد آمين.</div>
    `
  }
];

/* ============ JOHN CHAPTERS (من الصفحات 21-23) ============ */
const JOHN_CHAPTERS = [
  { n: 1, title: 'الكلمة', topics: ['الكلمة صار جسدًا (ع 1-18)', 'شهادة أن المسيح هو حمل الله (ع 19-43)', 'يسوع يدعو فيلبس ونثنائيل (ع 43-51)'] },
  { n: 2, title: 'العرس', topics: ['عرس قانا الجليل (ع 1-11)', 'تطهير الهيكل (ع 12-25)'] },
  { n: 3, title: 'المعمودية', topics: ['حديث الرب مع نيقدويموس (ع 1-21)', 'شهادة يوحنا المعمدان للمسيح (ع 22-36)'] },
  { n: 4, title: 'السامرية', topics: ['حديث الرب مع السامرية (ع 1-38)', 'إيمان السامريين (ع 39-42)', 'شفاء ابن خادم الملك (ع 43-54)'] },
  { n: 5, title: 'المخلع', topics: ['شفاء مريض بيت حسدا (ع 1-15)', 'عمل الآب والابن (ع 16-30)', 'الشهادة للابن (ع 31-47)'] },
  { n: 6, title: 'الافخارستيا', topics: ['إشباع الخمسة آلاف (ع 1-15)', 'يسوع يمشي على الماء (ع 16-24)', 'خبز الحياة (ع 25-71)'] },
  { n: 7, title: 'الماء الحي', topics: ['الرب يسوع يذهب إلى أورشليم (ع 1-24)', 'حديث الرب يسوع أنه المسيح (ع 25-44)'] },
  { n: 8, title: 'المرأة التي أُمسكت في ذات الفعل', topics: ['يسوع مع المرأة التي أُمسكت بالخطية (ع 1-11)', 'أنا هو نور العالم (ع 12-29)', 'أبناء إبراهيم (ع 30-40)'] },
  { n: 9, title: 'المولود أعمى', topics: ['شفاء المولود أعمى وتحقيق الفريسيين (ع 1-24)', 'العمى الروحي (ع 35-41)'] },
  { n: 10, title: 'الراعي الصالح', topics: ['الراعي الصالح (ع 1-21)', 'عدم إيمان اليهود (ع 22-42)'] },
  { n: 11, title: 'السبوع الأخير - لعازر', topics: ['أحداث الأسبوع الأخير', 'موت لعازر وإقامته (ع 1-44)', 'التآمر على قتل يسوع (ع 45-57)'] },
  { n: 12, title: 'الشعانين', topics: ['سكب الطيب على يسوع (ع 1-11)', 'يسوع يدخل أورشليم (ع 12-19)', 'يسوع ينبئ بموته وعدم إيمانهم (ع 20-50)'] },
  { n: 13, title: 'الباراقليط', topics: ['غسل أرجل التلاميذ (ص 13)', 'المنازل السماوية (ص 14)', 'الشركة معه والمحبة (ص 15)', 'السلام وعمل الروح القدس (ص 16)', 'الصلاة الوداعية (ص 17)'] },
  { n: 14, title: 'المحاكمة', topics: ['القبض على الرب يسوع (ع 1-28)', 'الاعتراف الحسن (ع 28-40)'] },
  { n: 15, title: 'الصلب', topics: ['الإعداد للصلب (ع 1-16)', 'الصلب (ع 17-28)', 'موته، دفنه (ع 28-42)'] },
  { n: 16, title: 'القيامة', topics: ['قيامه وظهورات الرب يسوع (ع 1-31)'] },
  { n: 17, title: 'بحيرة طبرية', topics: ['صيد السمك (ع 1-14)', 'الرب والتلاميذ (ع 15-24)', 'أعمال الرب التي لم تُذكر (ع 21-25)'] },
  { n: 18, title: '—', topics: [] },
  { n: 19, title: '—', topics: [] },
  { n: 20, title: '—', topics: [] },
  { n: 21, title: '—', topics: [] }
];

/* ============ COMPETITIONS (كامل من الملف) ============ */
const COMPETITIONS = [
  {
    id: 'study',
    icon: '📖',
    title: 'المسابقة الدراسية',
    type: 'فردية',
    desc: 'اختبار في منهج المونديال: إنجيل يوحنا وإثبات لاهوت السيد المسيح.',
    details: {
      'المحتوى': 'إنجيل يوحنا كاملًا + إثبات لاهوت السيد المسيح.',
      'الشروط': [
        'حفظ إنجيل يوحنا (أصحاح 1)',
        'حفظ صلاة نصف الليل — الخدمة الثالثة',
        'أول ثلاث قطع في صلاة نصف الليل — الخدمة الثالثة',
        'الاشتراك في المسابقة الدراسية',
        'المسابقة فردية'
      ]
    }
  },
  {
    id: 'memorization',
    icon: '🧠',
    title: 'مسابقة المحفوظات',
    type: 'فردية',
    desc: 'حفظ الآيات والآشهور والنصوص المحددة في المنهج.',
    details: {
      'المطلوب': [
        'حفظ إنجيل يوحنا (أصحاح 1)',
        'حفظ صلاة نصف الليل — الخدمة الثالثة',
        'أول ثلاث قطع في صلاة نصف الليل — الخدمة الثالثة',
        'المحفوظات الدراسية'
      ],
      'ملاحظة': 'المسابقة الدراسية والمحفوظات فردية، أما الألحان جماعية.'
    }
  },
  {
    id: 'hymns',
    icon: '🎵',
    title: 'مسابقة الألحان والتسبحة',
    type: 'جماعية',
    desc: 'تسميع الألحان الآتية جماعيًا باستخدام الدف والتريانتو.',
    details: {
      'الألحان المطلوبة': [
        'ذكصولوجية القديس يوحنا الحبيب',
        'مارين أوؤنه (أول ربعين فقط باللحن)',
        'لحن أرى ابريسفافني (التمجيد)',
        'إبصالية واطس للثلاث فتية (الريسالني) تسبحة دمج'
      ],
      'ملاحظة': 'يتم تسميع جميع الألحان الآتية جماعيًا باستخدام الدف والتريانتو.'
    }
  },
  {
    id: 'ai',
    icon: '🤖',
    title: 'المسابقة الإلكترونية والذكاء الاصطناعي',
    type: 'فردية',
    desc: 'استخدام أدوات الذكاء الاصطناعي والتحول الرقمي لإنتاج محتوى إبداعي.',
    details: {
      'الموضوعات': [
        'معجزات المسيح في إنجيل يوحنا',
        'إثبات لاهوت المسيح في إنجيل يوحنا',
        'رموز وألقاب المسيح في الإنجيل'
      ],
      'الفئات': [
        'فئة العروض التقديمية (بأدوات الذكاء الاصطناعي)',
        'فئة الفيديو (مدة الفيديو: 1-3 دقائق)',
        'فئة التصميم والصور',
        'فئة الألعاب والمسابقات الرقمية',
        'فئة الأفكار الابتكارية'
      ],
      'أمثلة فئة الفيديو': [
        'شرح آية تثبت لاهوتية المسيح',
        'قصة يوحنا الحبيب',
        'عرض تقديمي بالذكاء الاصطناعي',
        'فيديو رسوم متحركة AI',
        'فيديو بمقدم افتراضي (أفاتار) يحكي أحداث من الإنجيل'
      ],
      'برامج فئة الفيديو': [
        'ChatGPT (كتابة السكريبت والأفكار)',
        'Claude.ai (كتابة وتنظيم المحتوى)',
        'Gemini (Veo) — توليد فيديو من نص',
        'Canva AI — مونتاج وتصميم سريع',
        'CapCut AI — مونتاج ومؤثرات',
        'InVideo AI — تحويل نص إلى فيديو كامل',
        'Pictory — تحويل مقال إلى فيديو',
        'HeyGen — مقدم افتراضي (أفاتار) ناطق',
        'Synthesia — فيديو بشخصية افتراضية',
        'Kling AI — توليد فيديو واقعي من نص/صورة',
        'Microsoft Designer — تصميم مشاهد وصور',
        'Gamma — عرض تقديمي يتحول لفيديو'
      ],
      'موضوعات فئة التصميم': [
        'في البدء كان الكلمة',
        'أنا هو نور العالم',
        'أنا هو الطريق والحق والحياة'
      ],
      'برامج فئة التصميم': [
        'Canva AI (بوسترات وإنفوجرافيك جاهز)',
        'Microsoft Designer (تصميم سريع من وصف نصي)',
        'Gemini (Nano Banana) — صور تدعم الكتابة العربية بدقة',
        'Adobe Firefly (تصميم وتحرير احترافي)',
        'Midjourney (صور فنية عالية الجودة)',
        'Leonardo AI (شخصيات وخلفيات وبرموز)',
        'ChatGPT (توليد صور ونصوص مرافقة)',
        'Ideogram (تصميمات تحتوي نصوص واضحة)'
      ],
      'برامج فئة الألعاب': [
        'ChatGPT / Claude.ai (توليد الأسئلة والإجابات)',
        'Kahoot (مسابقة تفاعلية جماعية)',
        'Wordwall (ألعاب وأنشطة تعليمية متنوعة)',
        'Quizizz (اختبارات تفاعلية ذاتية)',
        'Blooket (ألعاب تعليمية بأسلوب تنافسي)',
        'Baamboozle (السرعة)',
        'Google Forms (استمارة تصحيح تلقائي)',
        'Jotform AI (بناء نموذج أو تطبيق بسيط بدون كود)'
      ],
      'برامج فئة الأفكار الابتكارية': [
        'ChatGPT / Gemini / Claude.ai (بناء منطق الشات بوت)',
        'Botpress (بناء شات بوت بدون كود)',
        'Diff (شات بوت مُدرَّب على محتوى الإنجيل)',
        'Wix / Framer AI (بناء تطبيقات ذكاء اصطناعي متكاملة)',
        'Jotform AI App (إنشاء موقع إلكتروني بدون برمجة)',
        'Gamma (صفحة ويب أو عرض تفاعلي سريع)',
        'Builder (تطبيق بسيط بدون كود)'
      ],
      'أمثلة فئة الأفكار الابتكارية': [
        'روبوت يجيب على أسئلة عن إنجيل يوحنا',
        'Chatbot كتابي',
        'موقع إلكتروني للمونديال',
        'تطبيق لآليات اليومية',
        'لعبة تعليمية للأطفال'
      ]
    }
  },
  {
    id: 'art',
    icon: '🎨',
    title: 'المسابقة الفنية',
    type: 'فردية',
    desc: 'عمل فني متنوع وبه أفكار في أحد الموضوعات المحددة.',
    details: {
      'الشروط': [
        'أن يكون العمل فرديًا فقط',
        'أن يكون متنوعًا وبه أفكار',
        'أن يكون في أحد الموضوعات الآتية'
      ],
      'الموضوعات': [
        'الإله المتجسد',
        'القديس يوحنا الحبيب',
        'الظهور الإلهي',
        'الابن الشاطر',
        'إقامة لعازر',
        'رؤيا أشعياء الإصحاح السادس',
        'معجزات الرب بإنجيل يوحنا',
        'مقابلة السيد المسيح مع السامرية',
        'الكائنات الأربعة غير المتجسدين',
        'أمثال السيد المسيح'
      ]
    }
  },
  {
    id: 'research',
    icon: '📝',
    title: 'مسابقة الأبحاث',
    type: 'فردية',
    desc: 'كتابة بحث يدويًا في أحد الموضوعات المحددة، لا يقل عن 10 ورقات.',
    details: {
      'الشروط': [
        'يتم كتابة البحث يدويًا وليس بالكمبيوتر في ورق فلوسكاب',
        'لا يقل عن 10 ورقات',
        'سيتم مناقشة البحث مع المشترك',
        'البد من كتابة مراجع البحث وعمل فهرس البحث',
        'البحث فردي فقط',
        'البد أن يكون في أحد الموضوعات الآتية'
      ],
      'الموضوعات': [
        'الإله المتجسد',
        'القديس يوحنا الحبيب',
        'الظهور الإلهي',
        'الابن الشاطر',
        'إقامة لعازر',
        'رؤيا أشعياء الإصحاح السادس',
        'معجزات الرب بإنجيل يوحنا',
        'مقابلة السيد المسيح مع السامرية',
        'الكائنات الأربعة غير المتجسدين',
        'أمثال السيد المسيح'
      ]
    }
  },
  {
    id: 'coptic',
    icon: '🔤',
    title: 'مسابقة اللغة القبطية',
    type: 'فردية',
    desc: 'قراءة اللغة القبطية بشكل صحيح + حفظ المفردات والآيات.',
    details: {
      'الشروط': [
        'أن يكون المشترك قادرًا على قراءة اللغة القبطية بشكل صحيح حسب قواعد النطق المدروسة',
        'حفظ المفردات والآيات والآشهور ونص الحفظ'
      ],
      'معلومات الأبجدية': 'عدد حروف الأبجدية القبطية 32 حرفًا: 7 حروف متحركة + 24 حرفًا ساكنًا + حرف سوى (6).'
    }
  },
  {
    id: 'chess',
    icon: '♟️',
    title: 'مسابقة الشطرنج',
    type: 'فردي أو فريق (3 أشخاص)',
    desc: 'التسابق لكل كنيسة يكون إما فرديًا أو فريقًا مكونًا من ثلاثة أشخاص.',
    details: {
      'الشروط': [
        'التسابق لكل كنيسة يكون إما فرديًا أو فريقًا مكونًا من ثلاثة أشخاص',
        'لا يقبل التسجيل في لعبة الشطرنج يوم التقييم',
        'يتم احتساب وقت المباراة بحد أقصى 20 دقيقة (10 دقائق لكل لاعب مع احتساب 0 ثواني)',
        'في حالة لمس اللاعب إلى قطعه فيجب لعبه بقانون تانش موف (Touch move)',
        'في حالة لمس اللاعب إلى قطعة من جيش الخصم يلزم بأكلها وإذا لم يستطيع اللاعب أكلها يحصل اللاعب على إنذار',
        'في حالة لمس اللاعب إلى قطعه في أي مربع قانوني لها طالما لم يتركها من يده (حتى لو لمست مربع آخر) أما في حالة تركها في أي مربع قانوني فلا يستطيع اللاعب تحريك القطعة مرة أخرى (Touch move) بقانون تانش بليز',
        'يتم اللعب بقانون المرور للبيدق',
        'إذا لعب اللاعب ثلاث مرات لعبة غير قانونية يحصل اللاعب في كل مخالفة على إنذار وفي حالة حصول اللاعب على الإنذار الثالث يعتبر اللاعب مهزومًا',
        'يتم غلق المحمول قبل بداية المباراة وإذا تم إصدار صوت يعتبر اللاعب منسحبًا'
      ]
    }
  }
];

/* ============ COPTIC LETTERS (32 حرف كامل) ============ */
const COPTIC_LETTERS = [
  { char: 'Ⲁ', name: 'ألفا', type: 'متحرك', note: 'ينطق (أ) دائمًا' },
  { char: 'Ⲃ', name: 'بيتا', type: 'ساكن', note: '(ب) دائمًا' },
  { char: 'Ⲅ', name: 'غما', type: 'ساكن', note: '(ج) إذا جاء بعده حرف متحرك للكسر — (غ) فيما عدا ذلك' },
  { char: 'Ⲇ', name: 'دلتا', type: 'ساكن', note: '(د) إذا جاء في الأعلام (كاسم شخص أو اسم بلد) — (ذ) في غير الأعلام' },
  { char: 'Ⲉ', name: 'إي', type: 'متحرك', note: '(ي) خفيفة' },
  { char: 'Ⲋ', name: 'سو', type: 'رقم ستة', note: 'يستخدم في التعبير عن رقم 6' },
  { char: 'Ⲍ', name: 'زيتا', type: 'ساكن', note: '(ز) دائمًا' },
  { char: 'Ⲏ', name: 'إيتا', type: 'متحرك', note: '(ي) طويلة' },
  { char: 'Ⲑ', name: 'ثيتا', type: 'ساكن', note: '(ت) إذا جاء قبله (ي أو c) — (ث) فيما عدا ذلك' },
  { char: 'Ⲓ', name: 'يوتا', type: 'متحرك', note: '(ي) قصيرة (كسرة)' },
  { char: 'Ⲕ', name: 'كبا', type: 'ساكن', note: '(ك) دائمًا' },
  { char: 'Ⲗ', name: 'لفلا', type: 'ساكن', note: '(ل) دائمًا' },
  { char: 'Ⲙ', name: 'مي', type: 'ساكن', note: '(م) دائمًا' },
  { char: 'Ⲛ', name: 'فن', type: 'ساكن', note: '(ن) دائمًا' },
  { char: 'Ⲝ', name: 'إكسى', type: 'ساكن مزدوج', note: '(ك + س) دائمًا' },
  { char: 'Ⲟ', name: 'أو', type: 'متحرك', note: '(و) قصيرة (ضمة)' },
  { char: 'Ⲡ', name: 'بى', type: 'ساكن', note: '(پ) دائمًا' },
  { char: 'Ⲣ', name: 'رو', type: 'ساكن', note: '(ر) دائمًا' },
  { char: 'Ⲥ', name: 'سيما', type: 'ساكن', note: '(ز) إذا جاء في كلمة يونانية وبعده حرف (w) — (ص) إذا جاء بعده (w) (م) (س) — (س) فيما عدا ذلك' },
  { char: 'Ⲧ', name: 'تاف', type: 'ساكن', note: '(د) إذا جاء في كلمة يونانية وجاء قبله (N) — (ط) إذا جاء بعده حرف التضخيم (w) (م) — (ت) فيما عدا ذلك' },
  { char: 'Ⲩ', name: 'إبسلن', type: 'متحرك', note: '(ف) إذا جاء قبله (م أو e) — (أوو) إذا جاء قبله (ي) — (و) فيما عدا ذلك' },
  { char: 'Ⲫ', name: 'في', type: 'ساكن', note: '(ف) دائمًا' },
  { char: 'Ⲭ', name: 'كفي', type: 'ساكن', note: '(ك) في الكلمات القبطية — (ش) إذا جاء بعده حرف متحرك للكسر — (خ) فيما عدا ذلك' },
  { char: 'Ⲯ', name: 'إبسي', type: 'ساكن مزدوج', note: '(ب + س) دائمًا' },
  { char: 'Ⲱ', name: 'أوطنية', type: 'متحرك', note: '(و) طويلة مفتوحة' },
  { char: 'Ϣ', name: 'شاي', type: 'ساكن', note: '(ش) دائمًا' },
  { char: 'Ϥ', name: 'فاي', type: 'ساكن', note: '(ف) دائمًا' },
  { char: 'Ϧ', name: 'خاي', type: 'ساكن', note: '(خ) دائمًا' },
  { char: 'Ϩ', name: 'هوري', type: 'ساكن', note: '(هـ) دائمًا' },
  { char: 'Ϫ', name: 'چنجا', type: 'ساكن', note: '(چ) إذا جاء بعده أي حرف متحرك للكسر — (ج) فيما عدا ذلك' },
  { char: 'Ϭ', name: 'تشيما', type: 'ساكن مزدوج', note: '(ت + ش) دائمًا' },
  { char: 'Ϯ', name: 'تي', type: 'ساكن', note: '(ت + ي) دائمًا' }
];

/* ============ COPTIC NUMBERS ============ */
const COPTIC_NUMBERS = {
  units: [
    { n: '1', coptic: 'Ⲁ', name: 'ألفا' },
    { n: '2', coptic: 'Ⲃ', name: 'بيتا' },
    { n: '3', coptic: 'Ⲅ', name: 'غما' },
    { n: '4', coptic: 'Ⲇ', name: 'دلتا' },
    { n: '5', coptic: 'Ⲉ', name: 'إي' },
    { n: '6', coptic: 'Ⲋ', name: 'سو' },
    { n: '7', coptic: 'Ⲍ', name: 'زيتا' },
    { n: '8', coptic: 'Ⲏ', name: 'إيتا' },
    { n: '9', coptic: 'Ⲑ', name: 'ثيتا' }
  ],
  tens: [
    { n: '10', coptic: 'Ⲓ', name: 'يوتا' },
    { n: '20', coptic: 'Ⲕ', name: 'كبا' },
    { n: '30', coptic: 'Ⲗ', name: 'لفلا' },
    { n: '40', coptic: 'Ⲙ', name: 'مي' },
    { n: '50', coptic: 'Ⲛ', name: 'فن' },
    { n: '60', coptic: 'Ⲝ', name: 'إكسى' },
    { n: '70', coptic: 'Ⲟ', name: 'أو' },
    { n: '80', coptic: 'Ⲡ', name: 'بى' },
    { n: '90', coptic: 'Ϥ', name: 'فاي' }
  ]
};

/* ============ COPTIC VOCAB ============ */
const COPTIC_VOCAB = [
  { coptic: 'Ⲓⲱⲧ', arabic: 'أب' },
  { coptic: 'Ⲥⲱⲛ', arabic: 'أخ' },
  { coptic: 'Ⲥⲱⲛⲓ', arabic: 'أخت' },
  { coptic: 'Ϣⲏⲣⲓ', arabic: 'ابن' },
  { coptic: 'Ⲙⲁⲁⲩ', arabic: 'أم' },
  { coptic: 'Ϣⲉⲣⲓ', arabic: 'ابنة' },
  { coptic: 'Ⲣⲉⲙⲛ̀ⲭⲏⲙⲓ', arabic: 'مصري' },
  { coptic: 'Ⲭⲣⲓⲥⲧⲓⲁⲛⲟⲥ', arabic: 'مسيحي' },
  { coptic: 'Ⲥⲟⲛⲧ', arabic: 'عم' },
  { coptic: 'Ⲥⲱⲛⲁⲩ', arabic: 'خال' },
  { coptic: 'Ⲧⲁⲙⲁⲩ', arabic: 'أمي' },
  { coptic: 'Ⲡⲁⲓⲱⲧ', arabic: 'أبي' }
];

/* ============ COPTIC CONVERSATION ============ */
const COPTIC_CONVO = [
  { coptic: 'Ⲛ̀ⲑⲟⲕ ⲡⲉ ⲛⲓⲙ ؟', arabic: 'أنت من ؟' },
  { coptic: 'Ⲁⲛⲟⲕ ⲡⲉ Ⲙⲓⲛⲁ .', arabic: 'أنا مينا' },
  { coptic: 'Ⲓⲥ Ⲡⲁⲣⲕⲟⲥ ⲡⲉ ⲡⲉⲕⲥⲟⲛ ؟', arabic: 'هل مرقس أخوك ؟' },
  { coptic: 'Ⲥⲉ ⲛ̀ⲑⲟϥ ⲡⲉ ⲡⲁⲥⲟⲛ .', arabic: 'نعم هو أخي .' },
  { coptic: 'Ⲓⲥ Ⲙⲁⲣⲓⲁ ⲧⲉ ⲧⲉⲕⲥⲱⲛⲓ ؟', arabic: 'هل مريم أختك ؟' },
  { coptic: 'Ⲥⲉ ⲛ̀ⲑⲟⲥ ⲧⲉ ⲧⲁⲥⲱⲛⲓ .', arabic: 'نعم هي أختي .' }
];

/* ============ COPTIC SYLLABLES ============ */
const COPTIC_SYLLABLES = [
  'إفْ', 'إسْ', 'إثْ', 'إجْ', 'إهْ', 'إبْ', 'إجْ', 'إحْ'
];

/* ============ MEMORIZATION ============ */
const MEMORIZATION_ITEMS = [
  { id: 'mem-1', title: 'إنجيل يوحنا — الإصحاح الأول', desc: 'حفظ الإصحاح الأول من إنجيل يوحنا كاملًا (من آية 1 إلى آية 15).' },
  { id: 'mem-2', title: 'صلاة نصف الليل — الخدمة الثالثة', desc: 'حفظ صلاة نصف الليل (الخدمة الثالثة) كاملة.' },
  { id: 'mem-3', title: 'أول ثلاث قطع في صلاة نصف الليل', desc: 'حفظ أول ثلاث قطع من صلاة نصف الليل (الخدمة الثالثة).' },
  { id: 'mem-4', title: 'ذكصولوجية القديس يوحنا الحبيب', desc: 'حفظ ذكصولوجية القديس يوحنا الحبيب كاملة.' },
  { id: 'mem-5', title: 'مارين أوؤنه (أول ربعين)', desc: 'حفظ مارين أوؤنه — أول ربعين فقط باللحن.' },
  { id: 'mem-6', title: 'لحن أرى ابريسفافني', desc: 'حفظ لحن أرى ابريسفافني (التمجيد).' },
  { id: 'mem-7', title: 'إبصالية واطس للثلاث فتية', desc: 'حفظ إبصالية واطس للثلاث فتية (الريسالني) تسبحة دمج.' }
];

/* ============ STATE ============ */
const STORAGE_KEYS = {
  theme: 'bm_theme_v2',
  completedLessons: 'bm_completed_lessons_v2',
  completedMem: 'bm_completed_mem_v2',
  exploredComps: 'bm_explored_comps_v2',
  lastTopic: 'bm_last_topic_v2'
};

const state = {
  theme: localStorage.getItem(STORAGE_KEYS.theme) || 'dark',
  completedLessons: JSON.parse(localStorage.getItem(STORAGE_KEYS.completedLessons) || '[]'),
  completedMem: JSON.parse(localStorage.getItem(STORAGE_KEYS.completedMem) || '[]'),
  exploredComps: JSON.parse(localStorage.getItem(STORAGE_KEYS.exploredComps) || '[]'),
  lastTopic: localStorage.getItem(STORAGE_KEYS.lastTopic) || ''
};

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

function saveState() {
  localStorage.setItem(STORAGE_KEYS.theme, state.theme);
  localStorage.setItem(STORAGE_KEYS.completedLessons, JSON.stringify(state.completedLessons));
  localStorage.setItem(STORAGE_KEYS.completedMem, JSON.stringify(state.completedMem));
  localStorage.setItem(STORAGE_KEYS.exploredComps, JSON.stringify(state.exploredComps));
  localStorage.setItem(STORAGE_KEYS.lastTopic, state.lastTopic);
}

function updateTheme() {
  document.documentElement.setAttribute('data-theme', state.theme);
}

/* ============ THEME ============ */
$('#themeToggle').addEventListener('click', () => {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  updateTheme();
  saveState();
});

/* ============ NAVBAR ============ */
const navbar = $('#navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
  const sections = $$('section[id]');
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 200) current = s.id;
  });
  $$('.nav-link').forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + current));
  $$('.bn-item').forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + current));
});

/* ============ MOBILE MENU ============ */
$('#menuBtn').addEventListener('click', () => {
  $('#navLinks').classList.toggle('active');
});
$$('.nav-link').forEach(l => l.addEventListener('click', () => {
  $('#navLinks').classList.remove('active');
}));

/* ============ REVEAL ============ */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });
$$('.reveal').forEach(el => revealObserver.observe(el));

/* ============ TIMELINE ============ */
const timelineEl = $('#timeline');
TIMELINE_DATA.forEach((t, i) => {
  const div = document.createElement('div');
  div.className = 'tl-item';
  div.style.transitionDelay = Math.min(i * 0.04, 0.8) + 's';
  div.innerHTML = `
    <h4>${t.name}</h4>
    <p>${t.theme}</p>
    <div class="tl-meta">${t.season !== '—' ? t.season : ''} ${t.year !== '—' ? t.year : ''}</div>
  `;
  timelineEl.appendChild(div);
});

const timelineObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      timelineObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });
$$('.tl-item').forEach(el => timelineObserver.observe(el));

/* ============ CURRICULUM ============ */
const currGrid = $('#curriculumGrid');
CURRICULUM.forEach(lesson => {
  const card = document.createElement('div');
  card.className = 'lesson-card';
  if (state.completedLessons.includes(lesson.id)) card.classList.add('done');
  card.innerHTML = `
    <span class="lc-done">✓</span>
    <span class="lc-num">${lesson.num}</span>
    <h3>${lesson.title}</h3>
    <p>${lesson.desc}</p>
    <div class="lc-topics">
      ${lesson.topics.slice(0, 6).map(t => `<span>${t}</span>`).join('')}
      ${lesson.topics.length > 6 ? `<span>+${lesson.topics.length - 6}</span>` : ''}
    </div>
  `;
  card.addEventListener('click', () => openLessonModal(lesson));
  currGrid.appendChild(card);
});

function openLessonModal(lesson) {
  const isDone = state.completedLessons.includes(lesson.id);
  const body = `
    <h2>${lesson.num}: ${lesson.title}</h2>
    <p style="margin-bottom:20px;color:var(--text-dim)">${lesson.desc}</p>
    ${lesson.content}
    <button class="btn ${isDone ? 'btn-glass' : 'btn-primary'}" id="markLessonBtn">
      ${isDone ? '✓ تم إنهاء الدرس' : 'تحديد كدرس مكتمل'}
    </button>
  `;
  openModal(body);
  state.lastTopic = lesson.title;
  saveState();
  updateDashboard();

  const btn = $('#markLessonBtn');
  if (btn) {
    btn.addEventListener('click', () => {
      if (!state.completedLessons.includes(lesson.id)) {
        state.completedLessons.push(lesson.id);
        saveState();
        updateCurriculumProgress();
        updateDashboard();
        closeModal();
        $$('.lesson-card').forEach(c => {
          if (c.querySelector('h3').textContent === lesson.title) c.classList.add('done');
        });
      }
    });
  }
}

function updateCurriculumProgress() {
  const total = CURRICULUM.length;
  const done = state.completedLessons.length;
  const pct = Math.round((done / total) * 100);
  $('#curriculumProgress').style.width = pct + '%';
  $('#curriculumProgressText').textContent = pct + '%';
}
updateCurriculumProgress();

/* ============ JOHN CHAPTERS ============ */
const chaptersNav = $('#chaptersNav');
JOHN_CHAPTERS.forEach(ch => {
  const chip = document.createElement('button');
  chip.className = 'chip';
  chip.textContent = `إصحاح ${ch.n}`;
  chip.addEventListener('click', () => {
    $$('.chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    renderChapter(ch);
  });
  chaptersNav.appendChild(chip);
});

function renderChapter(ch) {
  const content = $('#chapterContent');
  if (!ch.topics.length) {
    content.innerHTML = `
      <h3>الإصحاح ${ch.n}</h3>
      <div class="chapter-placeholder">
        <div class="placeholder-icon">📖</div>
        <p>لا توجد بيانات تفصيلية لهذا الإصحاح في المنهج.</p>
      </div>
    `;
    return;
  }
  content.innerHTML = `
    <h3>الإصحاح ${ch.n} — ${ch.title}</h3>
    <ul>
      ${ch.topics.map(t => `<li>${t}</li>`).join('')}
    </ul>
  `;
}

/* ============ COMPETITIONS ============ */
const compGrid = $('#compGrid');
COMPETITIONS.forEach(comp => {
  const card = document.createElement('div');
  card.className = 'comp-card';
  card.innerHTML = `
    <span class="cc-icon">${comp.icon}</span>
    <h3>${comp.title}</h3>
    <p>${comp.desc}</p>
    <span class="cc-type">${comp.type}</span>
  `;
  card.addEventListener('click', () => openCompModal(comp));
  compGrid.appendChild(card);
});

function openCompModal(comp) {
  let detailsHTML = '';
  for (const [key, val] of Object.entries(comp.details)) {
    if (Array.isArray(val)) {
      detailsHTML += `<h3>${key}</h3><ul>${val.map(v => `<li>${v}</li>`).join('')}</ul>`;
    } else {
      detailsHTML += `<h3>${key}</h3><p>${val}</p>`;
    }
  }
  const body = `
    <h2>${comp.icon} ${comp.title}</h2>
    <p><strong style="color:var(--gold)">نوع المشاركة:</strong> ${comp.type}</p>
    <p>${comp.desc}</p>
    ${detailsHTML}
  `;
  openModal(body);
  if (!state.exploredComps.includes(comp.id)) {
    state.exploredComps.push(comp.id);
    saveState();
    updateDashboard();
  }
}

/* ============ COPTIC ============ */
const copticPanel = $('#copticPanel');

function renderCopticTab(tab) {
  $$('.tab-btn').forEach(b => b.classList.toggle('active', b.dataset.tab === tab));

  if (tab === 'letters') {
    copticPanel.innerHTML = `
      <p style="margin-bottom:20px;color:var(--text-dim)">اضغط على أي حرف لرؤية تفاصيله وقاعدة نطقه — 32 حرفًا بالكامل</p>
      <div class="coptic-grid">
        ${COPTIC_LETTERS.map(l => `
          <div class="coptic-letter" data-char="${l.char}">
            <span class="cl-char">${l.char}</span>
            <span class="cl-name">${l.name}</span>
          </div>
        `).join('')}
      </div>
    `;
    $$('.coptic-letter').forEach(el => {
      el.addEventListener('click', () => {
        const letter = COPTIC_LETTERS.find(l => l.char === el.dataset.char);
        if (letter) {
          openModal(`
            <h2 style="font-size:3rem;text-align:center">${letter.char}</h2>
            <p style="text-align:center;color:var(--text-dim);font-size:1.2rem;margin-bottom:24px">${letter.name}</p>
            <div class="info-box"><strong>التصنيف:</strong> ${letter.type}</div>
            <h3>قاعدة النطق</h3>
            <p style="font-size:1rem;line-height:2">${letter.note}</p>
          `);
        }
      });
    });
  } else if (tab === 'numbers') {
    copticPanel.innerHTML = `
      <h3 style="color:var(--gold);margin-bottom:16px;font-size:1.2rem">الأرقام في اللغة القبطية</h3>
      <p style="color:var(--text-dim);margin-bottom:24px;line-height:1.9">تُكتب الأرقام بإضافة شرطة فوق الحروف بترتيب الأبجدية.</p>

      <h4 style="color:var(--cyan);margin-bottom:14px">أولًا: الأحاد (1 - 9)</h4>
      <div class="coptic-numbers-grid" style="margin-bottom:28px">
        ${COPTIC_NUMBERS.units.map(u => `
          <div class="num-card">
            <span class="nc-arabic">${u.n} — ${u.name}</span>
            <span class="nc-coptic">${u.coptic}</span>
          </div>
        `).join('')}
      </div>

      <h4 style="color:var(--cyan);margin-bottom:14px">ثانيًا: العشرات (10 - 90)</h4>
      <div class="coptic-numbers-grid">
        ${COPTIC_NUMBERS.tens.map(t => `
          <div class="num-card">
            <span class="nc-arabic">${t.n} — ${t.name}</span>
            <span class="nc-coptic">${t.coptic}</span>
          </div>
        `).join('')}
      </div>

      <div class="info-box" style="margin-top:24px">
        <strong>مثال على تركيب الأرقام:</strong> من شهر توت تُكتب هكذا (Ⲧⲱⲟⲩⲧ) ١٤، و٢٥ تُكتب هكذا ⲔⲈ وتلفظ ⲔⲈ. وبنفس الطريقة يمكن أن نحصل على باقي الأرقام المركبة مثل ٢١ من شهر بابة، ١٣ من شهر كيهك، ١٥ من شهر بؤونه، ٦٠، ٧٤، ٨٤، ٩٣.
      </div>
    `;
  } else if (tab === 'vocab') {
    copticPanel.innerHTML = `
      <h3 style="color:var(--gold);margin-bottom:20px;font-size:1.2rem">المفردات المطلوب حفظها</h3>
      <div class="vocab-list">
        ${COPTIC_VOCAB.map(v => `
          <div class="vocab-item">
            <span class="v-coptic">${v.coptic}</span>
            <span class="v-arabic">${v.arabic}</span>
          </div>
        `).join('')}
      </div>
    `;
  } else if (tab === 'convo') {
    copticPanel.innerHTML = `
      <h3 style="color:var(--gold);margin-bottom:20px;font-size:1.2rem">المحادثة المطلوب حفظها</h3>
      <div class="vocab-list">
        ${COPTIC_CONVO.map(c => `
          <div class="vocab-item">
            <span class="v-coptic">${c.coptic}</span>
            <span class="v-arabic">${c.arabic}</span>
          </div>
        `).join('')}
      </div>
      <div class="info-box" style="margin-top:20px">
        استخدم الكلمات السابقة في تكوين محادثة حسب المثال المعطى...
      </div>
    `;
  } else if (tab === 'syllables') {
    copticPanel.innerHTML = `
      <h3 style="color:var(--gold);margin-bottom:16px;font-size:1.2rem">تقسيم الكلمة لمقاطع لتعلم القراءة</h3>
      <p style="color:var(--text-dim);line-height:1.9;margin-bottom:16px">
        <strong>أولًا:</strong> تُقرأ اللغة القبطية من الشمال لليمين.
      </p>
      <p style="color:var(--text-dim);line-height:1.9;margin-bottom:16px">
        <strong>ثانيًا:</strong> مقطع من حرف واحد (الجنكم، حرف تي):
        هو عبارة عن علامة مرسومة هكذا (Ⲍ) عندما توضع على حرف ساكن تُنطق كحرف (Ⲉ) أي مثل (إ)، وإذا وُضعت على حرف متحرك تفيد استقلال نطق الحرف.
      </p>
      <h4 style="color:var(--cyan);margin:20px 0 12px">أمثلة مع الحروف الساكنة</h4>
      <div class="coptic-syllables">
        ${COPTIC_SYLLABLES.map(s => `<span class="syllable-chip">${s}</span>`).join('')}
      </div>
    `;
  }
}

$$('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => renderCopticTab(btn.dataset.tab));
});
renderCopticTab('letters');

/* ============ MEMORIZATION ============ */
const memGrid = $('#memGrid');
MEMORIZATION_ITEMS.forEach(item => {
  const card = document.createElement('div');
  card.className = 'mem-card';
  if (state.completedMem.includes(item.id)) card.classList.add('done');
  card.innerHTML = `
    <h4>${item.title}</h4>
    <p>${item.desc}</p>
    <span class="mem-check">${state.completedMem.includes(item.id) ? '✓ محفوظ' : 'علّم كمحفوظ'}</span>
  `;
  card.addEventListener('click', () => {
    const idx = state.completedMem.indexOf(item.id);
    if (idx > -1) state.completedMem.splice(idx, 1);
    else state.completedMem.push(item.id);
    saveState();
    card.classList.toggle('done');
    card.querySelector('.mem-check').textContent =
      state.completedMem.includes(item.id) ? '✓ محفوظ' : 'علّم كمحفوظ';
    updateMemProgress();
    updateDashboard();
  });
  memGrid.appendChild(card);
});

function updateMemProgress() {
  const total = MEMORIZATION_ITEMS.length;
  const done = state.completedMem.length;
  const pct = Math.round((done / total) * 100);
  $('#memProgress').style.width = pct + '%';
  $('#memProgressText').textContent = pct + '%';
}
updateMemProgress();

/* ============ DASHBOARD ============ */
function updateDashboard() {
  const totalLessons = CURRICULUM.length;
  const doneLessons = state.completedLessons.length;
  const pct = Math.round((doneLessons / totalLessons) * 100);

  $('#statCompleted').textContent = doneLessons;
  $('#statMem').textContent = Math.round((state.completedMem.length / MEMORIZATION_ITEMS.length) * 100) + '%';
  $('#statComps').textContent = state.exploredComps.length;

  const circle = $('#statCircle1');
  circle.style.background = `conic-gradient(var(--cyan) ${pct}%, rgba(255,255,255,0.08) ${pct}%)`;
  circle.querySelector('span').textContent = pct + '%';

  $('#lastTopic').textContent = state.lastTopic || '—';
}
updateDashboard();

$('#continueBtn').addEventListener('click', () => {
  if (state.lastTopic) {
    const lesson = CURRICULUM.find(l => l.title === state.lastTopic);
    if (lesson) return openLessonModal(lesson);
  }
  document.getElementById('curriculum').scrollIntoView({ behavior: 'smooth' });
});

/* ============ SEARCH ============ */
const searchOverlay = $('#searchOverlay');
const searchInput = $('#searchInput');
const searchResults = $('#searchResults');

$('#searchBtn').addEventListener('click', () => {
  searchOverlay.classList.add('active');
  setTimeout(() => searchInput.focus(), 100);
});
$('#closeSearch').addEventListener('click', () => searchOverlay.classList.remove('active'));
searchOverlay.addEventListener('click', (e) => {
  if (e.target === searchOverlay) searchOverlay.classList.remove('active');
});

const SEARCH_INDEX = [
  ...CURRICULUM.map(l => ({ type: 'درس', title: l.title, desc: l.desc, action: () => openLessonModal(l) })),
  ...COMPETITIONS.map(c => ({ type: 'مسابقة', title: c.title, desc: c.desc, action: () => openCompModal(c) })),
  ...JOHN_CHAPTERS.map(ch => ({ type: 'إصحاح', title: `الإصحاح ${ch.n} — ${ch.title}`, desc: ch.topics.join(' · '), action: () => {
    document.getElementById('john').scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
      const chip = [...$$('.chip')].find(c => c.textContent === `إصحاح ${ch.n}`);
      if (chip) chip.click();
    }, 500);
  }})),
  ...COPTIC_VOCAB.map(v => ({ type: 'قبطية', title: v.coptic, desc: v.arabic, action: () => {
    document.getElementById('coptic').scrollIntoView({ behavior: 'smooth' });
    renderCopticTab('vocab');
  }})),
  ...COPTIC_LETTERS.map(l => ({ type: 'حرف قبطي', title: l.char + ' — ' + l.name, desc: l.note, action: () => {
    document.getElementById('coptic').scrollIntoView({ behavior: 'smooth' });
    renderCopticTab('letters');
    setTimeout(() => {
      const el = [...$$('.coptic-letter')].find(e => e.dataset.char === l.char);
      if (el) el.click();
    }, 600);
  }})),
  ...MEMORIZATION_ITEMS.map(m => ({ type: 'محفوظات', title: m.title, desc: m.desc, action: () => {
    document.getElementById('memorization').scrollIntoView({ behavior: 'smooth' });
  }})),
  ...TIMELINE_DATA.map(t => ({ type: 'مونديال سابق', title: t.name, desc: t.theme + ' — ' + t.year, action: () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  }}))
];

searchInput.addEventListener('input', () => {
  const q = searchInput.value.trim().toLowerCase();
  if (!q) {
    searchResults.innerHTML = '<div class="search-hint">ابدأ الكتابة للبحث في المنهج والمسابقات واللغة القبطية...</div>';
    return;
  }
  const matches = SEARCH_INDEX.filter(item =>
    item.title.toLowerCase().includes(q) || item.desc.toLowerCase().includes(q)
  ).slice(0, 15);
  if (!matches.length) {
    searchResults.innerHTML = '<div class="search-hint">لا توجد نتائج مطابقة</div>';
    return;
  }
  searchResults.innerHTML = matches.map((m, i) => `
    <div class="search-result-item" data-i="${i}">
      <span class="sr-tag">${m.type}</span>
      <span class="sr-title">${m.title}</span>
      <div class="sr-desc">${m.desc.slice(0, 90)}${m.desc.length > 90 ? '...' : ''}</div>
    </div>
  `).join('');
  $$('.search-result-item').forEach((el, i) => {
    el.addEventListener('click', () => {
      searchOverlay.classList.remove('active');
      searchInput.value = '';
      searchResults.innerHTML = '';
      matches[i].action();
    });
  });
});

/* ============ MODAL ============ */
const modalOverlay = $('#modalOverlay');
const modalBody = $('#modalBody');

function openModal(html) {
  modalBody.innerHTML = html;
  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
  modalBody.scrollTop = 0;
}
function closeModal() {
  modalOverlay.classList.remove('active');
  document.body.style.overflow = '';
}
$('#modalClose').addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) closeModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') { closeModal(); searchOverlay.classList.remove('active'); }
});

/* ============ PARTICLES ============ */
(function initParticles() {
  const canvas = document.getElementById('particles');
  if (!canvas) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const ctx = canvas.getContext('2d');
  let w, h, particles = [];
  const COUNT = window.innerWidth < 768 ? 25 : 60;

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  for (let i = 0; i < COUNT; i++) {
    particles.push({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.6 + 0.4,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      alpha: Math.random() * 0.45 + 0.2
    });
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = isLight
        ? `rgba(30,58,138,${p.alpha})`
        : `rgba(34,211,238,${p.alpha})`;
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  draw();
})();

/* ============ INIT ============ */
updateTheme();
console.log('%c✝ مونديال بي مينريت صيف 2026 — النسخة الكاملة', 'color:#22d3ee;font-size:16px;font-weight:bold');
// Bacaan Tahlil — susunan umum di Indonesia
// Disertai surah Yasin sebagai pembuka (lihat yasinData.ts)

export interface TahlilBacaan {
  id: string;
  judul: string;
  arab: string;
  latin: string;
  arti?: string;
  ulang?: number;
}

export const TAHLIL: TahlilBacaan[] = [
  {
    id: "fatihah",
    judul: "Surah Al-Fatihah (untuk arwah)",
    arab:
      "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ • الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ • الرَّحْمَٰنِ الرَّحِيمِ • مَالِكِ يَوْمِ الدِّينِ • إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ • اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ • صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ • آمِينَ",
    latin:
      "Bismillāhirraḥmānirraḥīm. Alḥamdulillāhi rabbil-‘ālamīn. Ar-raḥmānir-raḥīm. Māliki yaumiddīn. Iyyāka na‘budu wa iyyāka nasta‘īn. Ihdinaṣ-ṣirāṭal-mustaqīm. Ṣirāṭalladzīna an‘amta ‘alaihim ghairil-maghḍūbi ‘alaihim wa laḍ-ḍāllīn. Āmīn.",
    arti: "Dihadiahkan kepada Nabi Muhammad ﷺ, keluarga, sahabat, dan arwah yang dituju. Al-Fatihah…",
  },
  {
    id: "ikhlas",
    judul: "Surah Al-Ikhlas (3x)",
    arab:
      "قُلْ هُوَ اللَّهُ أَحَدٌ • اللَّهُ الصَّمَدُ • لَمْ يَلِدْ وَلَمْ يُولَدْ • وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ",
    latin:
      "Qul huwallāhu aḥad. Allāhuṣ-ṣamad. Lam yalid wa lam yūlad. Wa lam yakul lahū kufuwan aḥad.",
    ulang: 3,
  },
  {
    id: "falaq",
    judul: "Surah Al-Falaq",
    arab:
      "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ • مِنْ شَرِّ مَا خَلَقَ • وَمِنْ شَرِّ غَاسِقٍ إِذَا وَقَبَ • وَمِنْ شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ • وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ",
    latin:
      "Qul a‘ūdzu birabbil-falaq. Min syarri mā khalaq. Wa min syarri ghāsiqin idzā waqab. Wa min syarrin-naffāṡāti fil-‘uqad. Wa min syarri ḥāsidin idzā ḥasad.",
  },
  {
    id: "nas",
    judul: "Surah An-Nas",
    arab:
      "قُلْ أَعُوذُ بِرَبِّ النَّاسِ • مَلِكِ النَّاسِ • إِلَٰهِ النَّاسِ • مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ • الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ • مِنَ الْجِنَّةِ وَالنَّاسِ",
    latin:
      "Qul a‘ūdzu birabbin-nās. Malikin-nās. Ilāhin-nās. Min syarril-waswāsil-khannās. Alladzī yuwaswisu fī ṣudūrin-nās. Minal-jinnati wan-nās.",
  },
  {
    id: "fatihah-2",
    judul: "Al-Fatihah (sekali lagi)",
    arab:
      "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ • الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ • … (sampai akhir)",
    latin: "Bismillāhirraḥmānirraḥīm. Alḥamdulillāhi rabbil-‘ālamīn… Āmīn.",
  },
  {
    id: "baqarah-awal",
    judul: "Awal Surah Al-Baqarah (1–5)",
    arab:
      "الٓمٓ • ذَٰلِكَ الْكِتَابُ لَا رَيْبَ فِيهِ هُدًى لِلْمُتَّقِينَ • الَّذِينَ يُؤْمِنُونَ بِالْغَيْبِ وَيُقِيمُونَ الصَّلَاةَ وَمِمَّا رَزَقْنَاهُمْ يُنْفِقُونَ • وَالَّذِينَ يُؤْمِنُونَ بِمَا أُنْزِلَ إِلَيْكَ وَمَا أُنْزِلَ مِنْ قَبْلِكَ وَبِالْآخِرَةِ هُمْ يُوقِنُونَ • أُولَٰئِكَ عَلَىٰ هُدًى مِنْ رَبِّهِمْ وَأُولَٰئِكَ هُمُ الْمُفْلِحُونَ",
    latin:
      "Alif Lām Mīm. Dzālikal-kitābu lā raiba fīh, hudal lil-muttaqīn. Alladzīna yu’minūna bil-ghaibi wa yuqīmūnaṣ-ṣalāta wa mimmā razaqnāhum yunfiqūn. Walladzīna yu’minūna bimā unzila ilaika wa mā unzila min qablika wa bil-ākhirati hum yūqinūn. Ulā’ika ‘alā hudam mir rabbihim wa ulā’ika humul-mufliḥūn.",
  },
  {
    id: "kursi",
    judul: "Ayat Kursi (Al-Baqarah: 255)",
    arab:
      "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ، لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ، لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ، مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ، يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ، وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ، وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ، وَلَا يَئُودُهُ حِفْظُهُمَا، وَهُوَ الْعَلِيُّ الْعَظِيمُ",
    latin:
      "Allāhu lā ilāha illā huwal-ḥayyul-qayyūm. Lā ta’khudzuhū sinatuw wa lā naum. Lahū mā fissamāwāti wa mā fil-arḍ. Man dzalladzī yasyfa‘u ‘indahū illā bi’idznih. Ya‘lamu mā baina aidīhim wa mā khalfahum. Wa lā yuḥīṭūna bisyai’im min ‘ilmihī illā bimā syā’. Wasi‘a kursiyyuhus-samāwāti wal-arḍ. Wa lā ya’ūduhū ḥifẓuhumā wa huwal-‘aliyyul-‘aẓīm.",
  },
  {
    id: "baqarah-akhir",
    judul: "Akhir Surah Al-Baqarah (285–286)",
    arab:
      "آمَنَ الرَّسُولُ بِمَا أُنْزِلَ إِلَيْهِ مِنْ رَبِّهِ وَالْمُؤْمِنُونَ، كُلٌّ آمَنَ بِاللَّهِ وَمَلَائِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ، لَا نُفَرِّقُ بَيْنَ أَحَدٍ مِنْ رُسُلِهِ، وَقَالُوا سَمِعْنَا وَأَطَعْنَا غُفْرَانَكَ رَبَّنَا وَإِلَيْكَ الْمَصِيرُ • لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا، لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا اكْتَسَبَتْ، رَبَّنَا لَا تُؤَاخِذْنَا إِنْ نَسِينَا أَوْ أَخْطَأْنَا، رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَا إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِنْ قَبْلِنَا، رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ، وَاعْفُ عَنَّا، وَاغْفِرْ لَنَا، وَارْحَمْنَا، أَنْتَ مَوْلَانَا فَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ",
    latin:
      "Āmanar-rasūlu bimā unzila ilaihi mir rabbihī wal-mu’minūn. Kullun āmana billāhi wa malā’ikatihī wa kutubihī wa rusulih. Lā nufarriqu baina aḥadim mir rusulih. Wa qālū sami‘nā wa aṭa‘nā ghufrānaka rabbanā wa ilaikal-maṣīr. Lā yukallifullāhu nafsan illā wus‘ahā. Lahā mā kasabat wa ‘alaihā maktasabat. Rabbanā lā tu’ākhidznā in nasīnā au akhṭa’nā. Rabbanā wa lā taḥmil ‘alainā iṣran kamā ḥamaltahū ‘alalladzīna min qablinā. Rabbanā wa lā tuḥammilnā mā lā ṭāqata lanā bih. Wa‘fu ‘annā waghfir lanā warḥamnā anta maulānā fanṣurnā ‘alal-qaumil-kāfirīn.",
  },
  {
    id: "tahlil-utama",
    judul: "Tahlil (لا إله إلا الله) — 100x atau 33x",
    arab: "لَا إِلَٰهَ إِلَّا اللَّهُ",
    latin: "Lā ilāha illallāh.",
    ulang: 100,
  },
  {
    id: "kalimat-tauhid",
    judul: "Lā ilāha illallāh muhammadur rasūlullāh",
    arab: "لَا إِلَٰهَ إِلَّا اللَّهُ، مُحَمَّدٌ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ",
    latin: "Lā ilāha illallāh, Muḥammadur rasūlullāh ṣallallāhu ‘alaihi wa sallam.",
  },
  {
    id: "shalawat",
    judul: "Shalawat",
    arab: "اللَّهُمَّ صَلِّ عَلَىٰ سَيِّدِنَا مُحَمَّدٍ وَعَلَىٰ آلِ سَيِّدِنَا مُحَمَّدٍ",
    latin: "Allāhumma ṣalli ‘alā sayyidinā Muḥammad wa ‘alā āli sayyidinā Muḥammad.",
    ulang: 3,
  },
  {
    id: "tasbih",
    judul: "Tasbih, Tahmid, Takbir",
    arab: "سُبْحَانَ اللَّهِ • الْحَمْدُ لِلَّهِ • اللَّهُ أَكْبَرُ",
    latin: "Subḥānallāh • Alḥamdulillāh • Allāhu Akbar",
    ulang: 33,
  },
  {
    id: "doa-penutup",
    judul: "Doa Penutup Tahlil",
    arab:
      "اللَّهُمَّ أَوْصِلْ ثَوَابَ مَا قَرَأْنَاهُ، وَنُورَ مَا تَلَوْنَاهُ، هَدِيَّةً وَاصِلَةً، وَرَحْمَةً نَازِلَةً، وَبَرَكَةً شَامِلَةً، إِلَىٰ حَضْرَةِ سَيِّدِنَا مُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ، وَإِلَىٰ أَرْوَاحِ آبَائِنَا وَأُمَّهَاتِنَا، وَإِخْوَانِنَا وَأَخَوَاتِنَا، وَجَمِيعِ الْمُسْلِمِينَ وَالْمُسْلِمَاتِ. اللَّهُمَّ اغْفِرْ لَهُمْ وَارْحَمْهُمْ وَعَافِهِمْ وَاعْفُ عَنْهُمْ. آمِينَ يَا رَبَّ الْعَالَمِينَ",
    latin:
      "Allāhumma auṣil ṡawāba mā qara’nāhu, wa nūra mā talaunāhu, hadiyyatan wāṣilatan, wa raḥmatan nāzilatan, wa barakatan syāmilatan, ilā ḥaḍrati sayyidinā Muḥammadin ṣallallāhu ‘alaihi wa sallam, wa ilā arwāḥi ābā’inā wa ummahātinā, wa ikhwāninā wa akhawātinā, wa jamī‘il-muslimīna wal-muslimāt. Allāhummaghfir lahum warḥamhum wa ‘āfihim wa‘fu ‘anhum. Āmīn yā rabbal-‘ālamīn.",
    arti:
      "Ya Allah, sampaikanlah pahala bacaan kami sebagai hadiah, rahmat, dan keberkahan kepada Rasulullah ﷺ, serta arwah orang tua, saudara, dan seluruh kaum muslimin. Ampunilah, rahmatilah, dan maafkanlah mereka. Aamiin.",
  },
];

export type PrayerKey = "fajr" | "dhuhr" | "asr" | "maghrib" | "isha";

export const PRAYERS: { key: PrayerKey; name: string; arabic: string }[] = [
  { key: "fajr", name: "Subuh", arabic: "الفجر" },
  { key: "dhuhr", name: "Dzuhur", arabic: "الظهر" },
  { key: "asr", name: "Ashar", arabic: "العصر" },
  { key: "maghrib", name: "Maghrib", arabic: "المغرب" },
  { key: "isha", name: "Isya", arabic: "العشاء" },
];

export interface DzikirItem {
  arabic?: string;
  latin: string;
  count: number;
  meaning?: string;
}

export const DZIKIR_SETELAH_SHOLAT: DzikirItem[] = [
  {
    arabic: "أَسْتَغْفِرُ اللَّهَ",
    latin: "Astaghfirullah",
    count: 3,
    meaning: "Aku memohon ampun kepada Allah",
  },
  {
    arabic: "اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ، تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ",
    latin: "Allahumma antas-salam wa minkas-salam, tabarakta ya dzal jalali wal ikram",
    count: 1,
    meaning: "Ya Allah, Engkaulah As-Salam, dari-Mu kesejahteraan, Maha Suci Engkau wahai Pemilik Keagungan dan Kemuliaan",
  },
  {
    arabic: "سُبْحَانَ اللَّهِ",
    latin: "Subhanallah",
    count: 33,
    meaning: "Maha Suci Allah",
  },
  {
    arabic: "الْحَمْدُ لِلَّهِ",
    latin: "Alhamdulillah",
    count: 33,
    meaning: "Segala puji bagi Allah",
  },
  {
    arabic: "اللَّهُ أَكْبَرُ",
    latin: "Allahu Akbar",
    count: 33,
    meaning: "Allah Maha Besar",
  },
  {
    arabic: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
    latin: "La ilaha illallah wahdahu la syarikalah, lahul mulku walahul hamdu wa huwa 'ala kulli syai'in qadir",
    count: 1,
    meaning: "Penyempurna 100 — Tiada Tuhan selain Allah, Yang Maha Esa, tiada sekutu bagi-Nya, milik-Nya kerajaan dan pujian, Dia Maha Kuasa atas segala sesuatu",
  },
  {
    latin: "Ayat Kursi",
    count: 1,
    meaning: "Surat Al-Baqarah ayat 255",
  },
  {
    latin: "Al-Ikhlas, Al-Falaq, An-Nas",
    count: 1,
    meaning: "Masing-masing 1x",
  },
];

export const DZIKIR_PENUTUP: DzikirItem[] = [
  {
    arabic: "سُبْحَانَ اللَّهِ",
    latin: "Subhanallah",
    count: 10,
    meaning: "Maha Suci Allah",
  },
  {
    arabic: "الْحَمْدُ لِلَّهِ",
    latin: "Alhamdulillah",
    count: 10,
    meaning: "Segala puji bagi Allah",
  },
  {
    arabic: "اللَّهُ أَكْبَرُ",
    latin: "Allahu Akbar",
    count: 10,
    meaning: "Allah Maha Besar",
  },
  {
    arabic: "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ",
    latin: "Allahumma shalli 'ala Muhammad wa 'ala ali Muhammad",
    count: 10,
    meaning: "Sholawat kepada Nabi Muhammad ﷺ (minimal 10x)",
  },
  {
    arabic: "لَا إِلَهَ إِلَّا اللَّهُ",
    latin: "La ilaha illallah",
    count: 10,
    meaning: "Tahlil — Tiada Tuhan selain Allah",
  },
  {
    arabic: "الْحَمْدُ لِلَّهِ عَلَى كُلِّ حَالٍ",
    latin: "Alhamdulillah 'ala kulli hal",
    count: 3,
    meaning: "Tahmid tambahan — Segala puji bagi Allah dalam segala keadaan",
  },
  {
    arabic: "اللَّهُ أَكْبَرُ كَبِيرًا",
    latin: "Allahu Akbar kabira",
    count: 3,
    meaning: "Takbir tambahan — Allah Maha Besar dengan sebesar-besarnya",
  },
  {
    arabic: "اللَّهُمَّ اغْفِرْ لِي ذَنْبِي كُلَّهُ، دِقَّهُ وَجِلَّهُ، أَوَّلَهُ وَآخِرَهُ، عَلَانِيَتَهُ وَسِرَّهُ",
    latin: "Allahumma ighfirli dzanbi kullahu, diqqahu wa jillahu, awwalahu wa akhirahu",
    count: 1,
    meaning: "Istighfar panjang — Ya Allah ampuni seluruh dosaku, yang kecil maupun besar, yang awal maupun akhir, yang nampak maupun tersembunyi",
  },
];

// Dzikir khusus pagi (setelah Subuh) & sore (setelah Ashar)
export const DZIKIR_PAGI_SORE: DzikirItem[] = [
  {
    arabic: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي، فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ",
    latin: "Allahumma Anta Rabbi la ilaha illa Anta, khalaqtani wa ana 'abduka, wa ana 'ala 'ahdika wa wa'dika mastatha'tu, a'udzu bika min syarri ma shana'tu, abu'u laka bi ni'matika 'alayya, wa abu'u bi dzanbi faghfirli, fa innahu la yaghfirudz-dzunuba illa Anta",
    count: 1,
    meaning:
      "Sayyidul Istighfar — Ya Allah, Engkau Tuhanku, tiada Tuhan selain Engkau. Engkau ciptakan aku dan aku hamba-Mu. Aku berada di atas janji-Mu semampuku. Aku berlindung kepada-Mu dari keburukan amalku. Aku akui nikmat-Mu kepadaku, dan aku akui dosaku, maka ampunilah aku, sesungguhnya tiada yang mengampuni dosa selain Engkau. (HR. Bukhari — siapa membacanya pagi/sore dengan yakin lalu wafat di hari itu, ia masuk surga)",
  },
  {
    arabic: "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ",
    latin: "Bismillahilladzi la yadurru ma'asmihi syai'un fil ardhi wa la fis-sama'i wa huwas-sami'ul 'alim",
    count: 3,
    meaning: "Perlindungan — Dengan nama Allah yang dengan nama-Nya tidak ada sesuatu pun yang membahayakan di bumi maupun di langit, dan Dia Maha Mendengar lagi Maha Mengetahui",
  },
  {
    arabic: "حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ",
    latin: "Hasbiyallahu la ilaha illa Huwa, 'alaihi tawakkaltu wa Huwa Rabbul 'arsyil 'azhim",
    count: 7,
    meaning: "Tawakal — Cukuplah Allah bagiku, tiada Tuhan selain Dia. Kepada-Nya aku bertawakal, dan Dia adalah Rabb 'Arsy yang agung",
  },
  {
    arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ",
    latin: "Allahumma inni as'alukal 'afiyah fid-dunya wal akhirah",
    count: 1,
    meaning: "Keselamatan — Ya Allah, aku memohon kepada-Mu keselamatan di dunia dan akhirat",
  },
];

export interface DoaItem {
  id: string;
  title: string;
  subtitle: string;
  body: string;
  emoji: string;
  /**
   * Optional Latin transliteration for each Arabic paragraph in `body`,
   * in the same order as the Arabic paragraphs appear. Rendered under
   * the Arabic text to help readers who cannot read Arabic script.
   */
  latin?: string[];
}

export const DOA_BANGUN_TIDUR: DoaItem = {
  id: "bangun",
  title: "Doa Bangun Tidur",
  subtitle: "Awal hari penuh syukur",
  emoji: "🌅",
  body: `Ya Allah, segala puji bagi-Mu yang telah menghidupkanku kembali setelah Engkau mematikanku sementara.

Aku bersyukur atas nikmat kehidupan ini.

Ampunilah dosa-dosaku, dosa kedua orang tuaku, keluargaku, kakek nenekku, dan mertua-mertuaku.

Bersihkan hatiku dari dosa dan kesalahan, dan bimbing aku agar tetap istiqamah dalam iman.

Berikan aku keputusan yang benar dalam setiap langkah, berkahi waktuku hari ini, dan lindungi aku dari segala fitnah yang terlihat maupun yang tidak terlihat.

Jaga istriku dengan penuh kasih sayang-Mu, dan lindungi anak kami dalam kandungan, sempurnakan penciptaannya dan sehatkan ia.

Berikan aku rezeki yang halal, luas, dan penuh keberkahan, serta mudahkan karierku agar bermanfaat bagi banyak orang.

Ya Allah, berikan aku keselamatan di dunia dan akhirat, dan wafatkan aku kelak dalam keadaan husnul khatimah.`,
};

export const DOA_SETELAH_SUBUH: DoaItem = {
  id: "subuh",
  title: "Doa Setelah Sholat Subuh",
  subtitle: "Permohonan di awal hari",
  emoji: "🕌",
  body: `Ya Allah, di awal hari ini aku memohon ampunan, rahmat, dan keberkahan dari-Mu.

Ampunilah aku, kedua orang tuaku, keluargaku, kakek nenekku, dan mertua-mertuaku.

Jadikan aku hamba yang istiqamah dalam iman dan ketaatan.

Berikan aku kemampuan untuk mengambil keputusan yang benar, dan jauhkan aku dari kesalahan.

Berkahilah waktuku hari ini, lapangkan rezekiku, dan mudahkan karierku.

Lindungi aku dari fitnah dunia, dari hal-hal buruk yang terlihat maupun yang tersembunyi.

Jaga istriku dalam kesehatan dan kebahagiaan, dan lindungi anak kami dalam kandungan, sempurnakan penciptaannya, sehatkan jasmani dan rohaninya.

Berikan kami keselamatan di dunia dan akhirat, dan jadikan akhir hidup kami husnul khatimah.`,
};

export const DOA_PAGI: DoaItem = {
  id: "pagi",
  title: "Doa Memulai Aktivitas Pagi",
  subtitle: "Mengawali pekerjaan dengan berkah",
  emoji: "🌤️",
  body: `Ya Allah, aku memulai hariku dengan memohon pertolongan-Mu.

Mudahkan pekerjaanku, berikan aku fokus, ketelitian, dan kecerdasan.

Jadikan setiap langkahku bernilai ibadah.

Ampuni dosa-dosaku dan dosa keluargaku seluruhnya.

Lapangkan rezekiku, cukupkan kebutuhanku, dan berkahi hasil usahaku.

Jaga keluargaku, bahagiakan istriku, dan lindungi anak kami dalam kandungan.

Jadikan aku pribadi yang istiqamah, bijak dalam mengambil keputusan, dan selamat dari segala fitnah.`,
};

export const DOA_DHUHA: DoaItem = {
  id: "dhuha",
  title: "Doa Sholat Dhuha",
  subtitle: "Memohon rezeki & keberkahan",
  emoji: "☀️",
  body: `Ya Allah, dengan sholat dhuha ini aku memohon rezeki dari-Mu.

Jika rezekiku jauh maka dekatkanlah, jika sulit maka mudahkanlah, jika sedikit maka berkahilah.

Ampuni aku, kedua orang tuaku, keluargaku, kakek nenekku, dan mertua-mertuaku.

Berkahilah pekerjaanku dan karierku.

Jaga istriku dan anak kami dalam kandungan, sehatkan dan lindungi mereka.

Jadikan aku hamba yang bersyukur, istiqamah, dan selalu dalam lindungan-Mu.`,
};

export const DOA_SETELAH_DZUHUR: DoaItem = {
  id: "dzuhur",
  title: "Doa Setelah Sholat Dzuhur",
  subtitle: "Pertengahan hari",
  emoji: "🕌",
  body: `Ya Allah, di pertengahan hari ini aku memohon ampunan-Mu.

Ampunilah seluruh dosa kami.

Perbaikilah langkahku jika aku melakukan kesalahan.

Kuatkan aku untuk melanjutkan hari ini dengan kebaikan.

Berkahilah waktuku, lindungi aku dari fitnah, dan bimbing aku dalam setiap keputusan.

Jaga istriku dan anak kami dalam kandungan, dan limpahkan keselamatan bagi kami semua di dunia dan akhirat.`,
};

export const DOA_SIANG: DoaItem = {
  id: "siang",
  title: "Doa Siang Hari",
  subtitle: "Kekuatan & kesabaran",
  emoji: "🌞",
  body: `Ya Allah, berikan aku kekuatan dan kesabaran dalam menjalani hari ini.

Lapangkan rezekiku dan berkahilah setiap usaha yang aku lakukan.

Jauhkan aku dari kelelahan yang sia-sia dan keputusan yang salah.

Lindungi aku dan keluargaku dari segala keburukan.`,
};

export const DOA_SETELAH_ASHAR: DoaItem = {
  id: "ashar",
  title: "Doa Setelah Sholat Ashar",
  subtitle: "Perlindungan di sisa hari",
  emoji: "🕌",
  body: `Ya Allah, aku memohon perlindungan di sisa hari ini.

Ampuni dosa-dosaku dan dosa keluargaku.

Jadikan aku tetap istiqamah dan kuat dalam iman.

Jauhkan aku dari fitnah dan kesalahan.

Jaga istriku dan anak kami dalam kandungan, dan berikan kami keberkahan dalam hidup.`,
};

export const DOA_SORE: DoaItem = {
  id: "sore",
  title: "Doa Sore Menjelang Malam",
  subtitle: "Syukur penutup siang",
  emoji: "🌇",
  body: `Ya Allah, aku bersyukur atas hari ini.

Terima segala amal baikku dan ampuni kesalahanku.

Berkahilah waktu yang tersisa hari ini.

Berikan ketenangan hati dan pikiran.

Jaga keluargaku dan lindungi kami dari segala keburukan.`,
};

export const DOA_MAGHRIB: DoaItem = {
  id: "maghrib",
  title: "Doa Sholat Maghrib",
  subtitle: "Keberkahan keluarga",
  emoji: "🌆",
  body: `Ya Allah, ampunilah kami semua dan rahmatilah kami.

Dekatkan kami kepada-Mu dan jadikan kami keluarga yang penuh keberkahan.

Jaga istriku dan anak kami dalam kandungan.

Berikan kami keselamatan di dunia dan akhirat.`,
};

export const DOA_ISYA: DoaItem = {
  id: "isya",
  title: "Doa Sholat Isya",
  subtitle: "Perlindungan malam",
  emoji: "🌃",
  body: `Ya Allah, aku memohon perlindungan di malam ini.

Ampuni dosa kami seluruhnya.

Bersihkan hati kami dan tenangkan jiwa kami.

Jaga keluargaku dan lindungi kami dari segala keburukan.

Berikan kami keselamatan dunia dan akhirat serta akhir hidup yang baik.`,
};

export const DOA_SEBELUM_TIDUR: DoaItem = {
  id: "tidur",
  title: "Doa Sebelum Tidur",
  subtitle: "Menyerahkan diri pada-Nya",
  emoji: "🌙",
  body: `Ya Allah, aku serahkan diriku kepada-Mu malam ini.

Ampuni dosa-dosaku dan dosa keluargaku.

Lindungi aku dari gangguan dan mimpi buruk.

Jaga istriku dan anak kami dalam kandungan.

Berikan aku istirahat yang cukup dan bangunkan aku dalam kebaikan.`,
};

export const DOA_TAHAJUD: DoaItem = {
  id: "tahajud",
  title: "Doa Tahajud",
  subtitle: "Sepertiga malam terakhir",
  emoji: "🌌",
  body: `Ya Allah, di sepertiga malam ini aku datang memohon ampunan-Mu.

Ampuni seluruh dosa kami, terimalah taubat kami.

Berikan aku rezeki yang halal, luas, dan berkah.

Mudahkan karierku dan jadikan aku bermanfaat.

Jaga istriku dan bahagiakan dia.

Lindungi anak kami dalam kandungan, sempurnakan penciptaannya dan jadikan ia anak yang sholeh/sholehah.

Jadikan aku istiqamah dalam iman, tepat dalam keputusan, dan selamat dari segala fitnah.

Berikan kami keselamatan dunia dan akhirat, dan wafatkan kami dalam keadaan husnul khatimah.`,
};

// ============= DOA UNIVERSAL (selalu tersedia setelah sholat) =============

export const DOA_ORANG_TUA: DoaItem = {
  id: "ortu",
  title: "Doa untuk Orang Tua",
  subtitle: "Rabbighfirli wa liwalidayya",
  emoji: "👨‍👩‍👦",
  body: `رَبِّ اغْفِرْ لِي وَلِوَالِدَيَّ وَارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا

"Ya Rabb, ampunilah aku dan kedua orang tuaku. Sayangilah mereka sebagaimana mereka menyayangiku di waktu kecil.

Panjangkan umur mereka dalam ketaatan, sehatkan jasmani dan rohani mereka, lapangkan rezeki mereka, dan jadikan akhir hidup mereka husnul khatimah.

Bagi yang telah tiada, lapangkan kuburnya, terangi dengan cahaya-Mu, dan tempatkan mereka di surga-Mu yang tertinggi."`,
  latin: ["Rabbighfirli wa liwalidayya warhamhuma kama rabbayani shaghira"],
};

export const DOA_SAPU_JAGAT: DoaItem = {
  id: "sapu-jagat",
  title: "Doa Sapu Jagat",
  subtitle: "Kebaikan dunia & akhirat",
  emoji: "🌍",
  body: `رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ

"Ya Rabb kami, berikanlah kami kebaikan di dunia dan kebaikan di akhirat, dan lindungilah kami dari siksa api neraka."

(QS. Al-Baqarah: 201)`,
  latin: ["Rabbana atina fid-dunya hasanah, wa fil akhirati hasanah, waqina 'adzaban-nar"],
};

export const DOA_RIZQI: DoaItem = {
  id: "rizqi",
  title: "Doa Memohon Rezeki",
  subtitle: "Rezeki halal, luas, & berkah",
  emoji: "💰",
  body: `اللَّهُمَّ إِنِّي أَسْأَلُكَ رِزْقًا حَلَالًا طَيِّبًا مُبَارَكًا

"Ya Allah, aku memohon kepada-Mu rezeki yang halal, baik, dan berkah.

Jika rezekiku jauh, dekatkanlah. Jika sulit, mudahkanlah. Jika sedikit, perbanyaklah. Jika banyak, berkahilah.

Cukupkan aku dengan yang halal sehingga aku tidak butuh kepada yang haram, dan cukupkan aku dengan karunia-Mu sehingga aku tidak bergantung kepada selain-Mu.

Mudahkan karierku, lancarkan usahaku, dan jadikan setiap rezekiku bermanfaat bagi keluargaku dan sesama."`,
  latin: ["Allahumma inni as'aluka rizqan halalan thayyiban mubarakan"],
};

export const DOA_KETURUNAN: DoaItem = {
  id: "keturunan",
  title: "Doa untuk Istri & Anak",
  subtitle: "Keluarga sakinah",
  emoji: "👶",
  body: `رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا

"Ya Rabb kami, anugerahkanlah kepada kami pasangan dan keturunan sebagai penyejuk hati, dan jadikanlah kami imam bagi orang-orang yang bertakwa."

(QS. Al-Furqan: 74)

Ya Allah, jaga istriku dalam kesehatan dan kebahagiaan. Sempurnakan penciptaan anak kami dalam kandungan, sehatkan ia, dan jadikan ia anak yang sholeh/sholehah, cerdas, berakhlak mulia, dan menjadi penyejuk mata kami.

Mudahkan persalinannya, dan jadikan keluarga kami keluarga yang sakinah, mawaddah, wa rahmah.`,
  latin: ["Rabbana hab lana min azwajina wa dzurriyatina qurrata a'yunin waj'alna lil-muttaqina imama"],
};

export const DOA_ISTIQOMAH: DoaItem = {
  id: "istiqomah",
  title: "Doa Istiqamah & Keputusan",
  subtitle: "Diteguhkan dalam iman",
  emoji: "🧭",
  body: `يَا مُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِي عَلَى دِينِكَ

"Wahai Yang Membolak-balikkan hati, teguhkanlah hatiku di atas agama-Mu.

Ya Allah, bimbing aku dalam setiap keputusan. Tunjukkan mana yang benar dan mudahkan aku untuk mengikutinya. Tunjukkan mana yang salah dan jauhkan aku darinya.

Lindungi aku dari fitnah yang terlihat maupun tersembunyi. Jadikan aku pribadi yang istiqamah, jujur, dan amanah."`,
  latin: ["Ya muqallibal qulub, tsabbit qalbi 'ala dinik"],
};

export const DOA_HUSNUL_KHATIMAH: DoaItem = {
  id: "husnul",
  title: "Doa Husnul Khatimah",
  subtitle: "Akhir hidup yang baik",
  emoji: "🤲",
  body: `اللَّهُمَّ اخْتِمْ لَنَا بِحُسْنِ الْخَاتِمَةِ

"Ya Allah, akhirilah hidup kami dengan husnul khatimah.

Wafatkan kami dalam keadaan beriman, mengucap kalimat tauhid, dan dalam ridha-Mu.

Berikan kami keselamatan dunia dan akhirat, kumpulkan kami bersama keluarga di surga-Mu yang tertinggi, bersama para nabi, shiddiqin, syuhada, dan orang-orang sholeh."`,
  latin: ["Allahumma ikhtim lana bi husnil khatimah"],
};

export const DOA_SERIBU_DINAR: DoaItem = {
  id: "seribu-dinar",
  title: "Ayat Seribu Dinar",
  subtitle: "QS. At-Talaq: 2–3",
  emoji: "💎",
  body: `وَمَنْ يَتَّقِ اللَّهَ يَجْعَلْ لَهُ مَخْرَجًا ۝ وَيَرْزُقْهُ مِنْ حَيْثُ لَا يَحْتَسِبُ ۚ وَمَنْ يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ ۚ إِنَّ اللَّهَ بَالِغُ أَمْرِهِ ۚ قَدْ جَعَلَ اللَّهُ لِكُلِّ شَيْءٍ قَدْرًا

"Barangsiapa bertakwa kepada Allah, niscaya Dia akan membukakan jalan keluar baginya, dan memberinya rezeki dari arah yang tidak disangka-sangkanya. Dan barangsiapa bertawakal kepada Allah, niscaya Allah akan mencukupkan (keperluan)nya. Sesungguhnya Allah melaksanakan urusan-Nya. Sungguh, Allah telah mengadakan ketentuan bagi setiap sesuatu."

(QS. At-Talaq: 2–3)`,
  latin: [
    "Wa man yattaqillaha yaj'al lahu makhraja. Wa yarzuqhu min haitsu la yahtasib. Wa man yatawakkal 'alallahi fa huwa hasbuh. Innallaha balighu amrih, qad ja'alallahu likulli syai'in qadra",
  ],
};

export const DOA_INSYIRAH: DoaItem = {
  id: "insyirah",
  title: "QS. Al-Insyirah",
  subtitle: "Kelapangan urusan",
  emoji: "🌿",
  body: `أَلَمْ نَشْرَحْ لَكَ صَدْرَكَ ۝ وَوَضَعْنَا عَنْكَ وِزْرَكَ ۝ الَّذِي أَنْقَضَ ظَهْرَكَ ۝ وَرَفَعْنَا لَكَ ذِكْرَكَ ۝ فَإِنَّ مَعَ الْعُسْرِ يُسْرًا ۝ إِنَّ مَعَ الْعُسْرِ يُسْرًا ۝ فَإِذَا فَرَغْتَ فَانْصَبْ ۝ وَإِلَىٰ رَبِّكَ فَارْغَبْ

"Bukankah Kami telah melapangkan dadamu untukmu? Dan Kami pun telah menurunkan bebanmu darimu, yang memberatkan punggungmu, dan Kami tinggikan sebutan (nama)mu bagimu.

Maka sesungguhnya bersama kesulitan ada kemudahan. Sesungguhnya bersama kesulitan ada kemudahan.

Maka apabila engkau telah selesai (dari suatu urusan), tetaplah bekerja keras (untuk urusan yang lain), dan hanya kepada Tuhanmulah engkau berharap."

(QS. Al-Insyirah: 1–8)`,
  latin: [
    "Alam nasyrah laka shadrak. Wa wadha'na 'anka wizrak. Alladzi anqadha zhahrak. Wa rafa'na laka dzikrak. Fa inna ma'al 'usri yusra. Inna ma'al 'usri yusra. Fa idza faraghta fanshab. Wa ila Rabbika farghab",
  ],
};

export const DOA_BAQARAH_286: DoaItem = {
  id: "baqarah-286",
  title: "QS. Al-Baqarah: 286",
  subtitle: "Perlindungan & kekuatan",
  emoji: "🛡️",
  body: `رَبَّنَا لَا تُؤَاخِذْنَا إِنْ نَسِينَا أَوْ أَخْطَأْنَا ۚ رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَا إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِنْ قَبْلِنَا ۚ رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ ۖ وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا ۚ أَنْتَ مَوْلَانَا فَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ

"Ya Rabb kami, janganlah Engkau hukum kami jika kami lupa atau kami melakukan kesalahan.

Ya Rabb kami, janganlah Engkau bebani kami dengan beban yang berat sebagaimana Engkau bebankan kepada orang-orang sebelum kami.

Ya Rabb kami, janganlah Engkau pikulkan kepada kami apa yang tidak sanggup kami memikulnya.

Maafkanlah kami, ampunilah kami, dan rahmatilah kami. Engkaulah pelindung kami, maka tolonglah kami menghadapi kaum yang kafir."

(QS. Al-Baqarah: 286 — penutup)`,
  latin: [
    "Rabbana la tu'akhidzna in nasina aw akhtha'na. Rabbana wa la tahmil 'alaina ishran kama hamaltahu 'aladzina min qablina. Rabbana wa la tuhammilna ma la thaqata lana bih, wa'fu 'anna waghfir lana warhamna, anta maulana fanshurna 'alal qaumil kafirin",
  ],
};

export const DOA_SHOLAWAT: DoaItem = {
  id: "sholawat",
  title: "Sholawat Ibrahimiyah",
  subtitle: "Penguat doa",
  emoji: "🌹",
  body: `اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ، كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ، وَبَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ، كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ، فِي الْعَالَمِينَ إِنَّكَ حَمِيدٌ مَجِيدٌ

"Ya Allah, limpahkanlah sholawat kepada Nabi Muhammad ﷺ dan keluarga beliau, sebagaimana Engkau telah memberikan sholawat kepada Nabi Ibrahim dan keluarganya.

Berkahilah Nabi Muhammad ﷺ dan keluarganya, sebagaimana Engkau telah memberkahi Nabi Ibrahim dan keluarganya, di seluruh alam. Sesungguhnya Engkau Maha Terpuji lagi Maha Mulia."`,
  latin: [
    "Allahumma shalli 'ala Muhammad wa 'ala ali Muhammad, kama shallaita 'ala Ibrahim wa 'ala ali Ibrahim, wa barik 'ala Muhammad wa 'ala ali Muhammad, kama barakta 'ala Ibrahim wa 'ala ali Ibrahim, fil 'alamina innaka hamidun majid",
  ],
};

export const DOA_WAQIAH: DoaItem = {
  id: "waqiah",
  title: "QS. Al-Waqi'ah",
  subtitle: "Pembuka rezeki — dibaca malam hari",
  emoji: "🌙",
  body: `Dianjurkan membaca QS. Al-Waqi'ah secara penuh (96 ayat) di malam hari sebagai pembuka pintu rezeki.

Sabda Nabi ﷺ:
"Barangsiapa membaca surat Al-Waqi'ah pada setiap malam, maka ia tidak akan ditimpa kefakiran selama-lamanya."
(HR. Al-Baihaqi)

Pembuka:
بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
إِذَا وَقَعَتِ الْوَاقِعَةُ ۝ لَيْسَ لِوَقْعَتِهَا كَاذِبَةٌ ۝ خَافِضَةٌ رَافِعَةٌ

"Apabila terjadi hari Kiamat, tidak seorang pun dapat mendustakan kejadiannya. (Kejadian itu) merendahkan (satu golongan) dan meninggikan (golongan yang lain)."

(Lanjutkan membaca surat hingga selesai dari mushaf Anda.)`,
  latin: [
    "Bismillahirrahmanirrahim. Idza waqa'atil waqi'ah. Laisa liwaq'atiha kadzibah. Khafidhatun rafi'ah",
  ],
};
export const DOA_UNIVERSAL: DoaItem[] = [
  DOA_ORANG_TUA,
  DOA_RIZQI,
  DOA_SERIBU_DINAR,
  DOA_INSYIRAH,
  DOA_KETURUNAN,
  DOA_ISTIQOMAH,
  DOA_BAQARAH_286,
  DOA_SAPU_JAGAT,
  DOA_HUSNUL_KHATIMAH,
];

// Doa khusus malam (setelah Maghrib & Isya)
export const DOA_MALAM: DoaItem[] = [
  DOA_SHOLAWAT,
];


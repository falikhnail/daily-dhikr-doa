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
];

export interface DoaItem {
  id: string;
  title: string;
  subtitle: string;
  body: string;
  emoji: string;
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

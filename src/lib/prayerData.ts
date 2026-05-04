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

// Doa harian tematik — situasi sehari-hari
// Sumber: HR. Bukhari, Muslim, Abu Dawud, Tirmidzi, dll.

export interface DoaTematik {
  id: string;
  judul: string;
  arab: string;
  latin: string;
  arti: string;
  emoji: string;
}

export interface DoaTematikKategori {
  id: string;
  nama: string;
  emoji: string;
  doa: DoaTematik[];
}

export const DOA_TEMATIK: DoaTematikKategori[] = [
  {
    id: "rumah",
    nama: "Rumah",
    emoji: "🏠",
    doa: [
      {
        id: "masuk-rumah",
        judul: "Masuk Rumah",
        arab: "بِسْمِ اللَّهِ وَلَجْنَا، وَبِسْمِ اللَّهِ خَرَجْنَا، وَعَلَى رَبِّنَا تَوَكَّلْنَا",
        latin: "Bismillāhi walajnā, wa bismillāhi kharajnā, wa ‘alā rabbinā tawakkalnā.",
        arti: "Dengan nama Allah kami masuk, dengan nama Allah kami keluar, dan kepada Rabb kami, kami bertawakal.",
        emoji: "🚪",
      },
      {
        id: "keluar-rumah",
        judul: "Keluar Rumah",
        arab: "بِسْمِ اللَّهِ، تَوَكَّلْتُ عَلَى اللَّهِ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ",
        latin: "Bismillāhi, tawakkaltu ‘alallāhi, wa lā ḥaula wa lā quwwata illā billāh.",
        arti: "Dengan nama Allah, aku bertawakal kepada Allah. Tiada daya dan kekuatan kecuali dengan Allah.",
        emoji: "🏃",
      },
    ],
  },
  {
    id: "kendaraan",
    nama: "Perjalanan",
    emoji: "🚗",
    doa: [
      {
        id: "naik-kendaraan",
        judul: "Naik Kendaraan",
        arab: "سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَٰذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ، وَإِنَّا إِلَىٰ رَبِّنَا لَمُنْقَلِبُونَ",
        latin: "Subḥānalladzī sakhkhara lanā hādzā wa mā kunnā lahū muqrinīn, wa innā ilā rabbinā lamunqalibūn.",
        arti: "Maha Suci Allah yang telah menundukkan ini untuk kami, padahal kami tidak mampu menguasainya. Sesungguhnya hanya kepada Tuhan kami, kami akan kembali.",
        emoji: "🚙",
      },
      {
        id: "bepergian",
        judul: "Hendak Bepergian (Safar)",
        arab: "اللَّهُمَّ إِنَّا نَسْأَلُكَ فِي سَفَرِنَا هَٰذَا الْبِرَّ وَالتَّقْوَىٰ، وَمِنَ الْعَمَلِ مَا تَرْضَىٰ",
        latin: "Allāhumma innā nas’aluka fī safarinā hādzal-birra wat-taqwā, wa minal-‘amali mā tarḍā.",
        arti: "Ya Allah, kami memohon kepada-Mu kebaikan dan ketakwaan dalam perjalanan ini, serta amalan yang Engkau ridhai.",
        emoji: "✈️",
      },
    ],
  },
  {
    id: "masjid",
    nama: "Masjid",
    emoji: "🕌",
    doa: [
      {
        id: "masuk-masjid",
        judul: "Masuk Masjid",
        arab: "اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ",
        latin: "Allāhummaftaḥ lī abwāba raḥmatik.",
        arti: "Ya Allah, bukakanlah untukku pintu-pintu rahmat-Mu.",
        emoji: "🕌",
      },
      {
        id: "keluar-masjid",
        judul: "Keluar Masjid",
        arab: "اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ",
        latin: "Allāhumma innī as’aluka min faḍlik.",
        arti: "Ya Allah, sesungguhnya aku memohon kepada-Mu sebagian karunia-Mu.",
        emoji: "🚶",
      },
    ],
  },
  {
    id: "makan",
    nama: "Makan & Minum",
    emoji: "🍽️",
    doa: [
      {
        id: "sebelum-makan",
        judul: "Sebelum Makan",
        arab: "بِسْمِ اللَّهِ وَعَلَىٰ بَرَكَةِ اللَّهِ",
        latin: "Bismillāhi wa ‘alā barakatillāh.",
        arti: "Dengan nama Allah dan atas berkah dari Allah.",
        emoji: "🍚",
      },
      {
        id: "lupa-bismillah",
        judul: "Lupa Baca Bismillah",
        arab: "بِسْمِ اللَّهِ أَوَّلَهُ وَآخِرَهُ",
        latin: "Bismillāhi awwalahū wa ākhirah.",
        arti: "Dengan nama Allah pada awal dan akhirnya.",
        emoji: "🥄",
      },
      {
        id: "sesudah-makan",
        judul: "Sesudah Makan",
        arab: "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مُسْلِمِينَ",
        latin: "Alḥamdulillāhilladzī aṭ‘amanā wa saqānā wa ja‘alanā muslimīn.",
        arti: "Segala puji bagi Allah yang telah memberi kami makan dan minum, serta menjadikan kami sebagai orang-orang muslim.",
        emoji: "🍵",
      },
    ],
  },
  {
    id: "wc",
    nama: "Kamar Mandi",
    emoji: "🚿",
    doa: [
      {
        id: "masuk-wc",
        judul: "Masuk Kamar Mandi",
        arab: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبُثِ وَالْخَبَائِثِ",
        latin: "Allāhumma innī a‘ūdzu bika minal-khubuṡi wal-khabā’iṡ.",
        arti: "Ya Allah, aku berlindung kepada-Mu dari setan jantan dan setan betina.",
        emoji: "🚪",
      },
      {
        id: "keluar-wc",
        judul: "Keluar Kamar Mandi",
        arab: "غُفْرَانَكَ",
        latin: "Ghufrānak.",
        arti: "Aku memohon ampunan-Mu (ya Allah).",
        emoji: "✨",
      },
    ],
  },
  {
    id: "alam",
    nama: "Cuaca & Alam",
    emoji: "🌧️",
    doa: [
      {
        id: "lihat-hujan",
        judul: "Saat Hujan Turun",
        arab: "اللَّهُمَّ صَيِّبًا نَافِعًا",
        latin: "Allāhumma ṣayyiban nāfi‘ā.",
        arti: "Ya Allah, jadikanlah hujan ini hujan yang bermanfaat.",
        emoji: "🌧️",
      },
      {
        id: "setelah-hujan",
        judul: "Setelah Hujan",
        arab: "مُطِرْنَا بِفَضْلِ اللَّهِ وَرَحْمَتِهِ",
        latin: "Muṭirnā bifaḍlillāhi wa raḥmatih.",
        arti: "Kami diberi hujan karena karunia Allah dan rahmat-Nya.",
        emoji: "🌈",
      },
      {
        id: "guntur",
        judul: "Mendengar Guntur",
        arab: "سُبْحَانَ الَّذِي يُسَبِّحُ الرَّعْدُ بِحَمْدِهِ وَالْمَلَائِكَةُ مِنْ خِيفَتِهِ",
        latin: "Subḥānalladzī yusabbiḥur-ra‘du biḥamdihī wal-malā’ikatu min khīfatih.",
        arti: "Maha Suci Allah yang guruh bertasbih dengan memuji-Nya, demikian pula para malaikat karena takut kepada-Nya.",
        emoji: "⛈️",
      },
      {
        id: "angin-kencang",
        judul: "Angin Kencang",
        arab: "اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَهَا، وَأَعُوذُ بِكَ مِنْ شَرِّهَا",
        latin: "Allāhumma innī as’aluka khairahā, wa a‘ūdzu bika min syarrihā.",
        arti: "Ya Allah, aku memohon kebaikannya dan berlindung kepada-Mu dari keburukannya.",
        emoji: "💨",
      },
    ],
  },
  {
    id: "diri",
    nama: "Aktivitas Diri",
    emoji: "🪞",
    doa: [
      {
        id: "bercermin",
        judul: "Bercermin",
        arab: "اللَّهُمَّ كَمَا حَسَّنْتَ خَلْقِي فَحَسِّنْ خُلُقِي",
        latin: "Allāhumma kamā ḥassanta khalqī fa ḥassin khuluqī.",
        arti: "Ya Allah, sebagaimana Engkau telah memperindah rupaku, maka perindahlah pula akhlakku.",
        emoji: "🪞",
      },
      {
        id: "pakaian-baru",
        judul: "Memakai Pakaian Baru",
        arab: "اللَّهُمَّ لَكَ الْحَمْدُ أَنْتَ كَسَوْتَنِيهِ، أَسْأَلُكَ خَيْرَهُ وَخَيْرَ مَا صُنِعَ لَهُ",
        latin: "Allāhumma lakal-ḥamdu anta kasautanīh, as’aluka khairahū wa khaira mā ṣuni‘a lah.",
        arti: "Ya Allah, segala puji bagi-Mu. Engkaulah yang memberiku pakaian ini. Aku memohon kebaikannya dan kebaikan dari tujuan dibuatnya.",
        emoji: "👕",
      },
      {
        id: "bersin",
        judul: "Setelah Bersin",
        arab: "الْحَمْدُ لِلَّهِ",
        latin: "Alḥamdulillāh.",
        arti: "Segala puji bagi Allah.",
        emoji: "🤧",
      },
    ],
  },
];

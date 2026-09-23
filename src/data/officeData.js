export const P = (n, gender = "men") =>
  `https://randomuser.me/api/portraits/${gender}/${n}.jpg`;

export const VC_LIST = [
  { sn: 1,  name: "Mr. Dhrubnarayan Lal Das",       from: "2052-11-23 BS", fromEn: "06 Mar, 1996", to: "2057-11-07 BS", toEn: "18 Feb, 2001", img: P(32) },
  { sn: 2,  name: "Mr. Toran Bahadur Karki",          from: "2058-01-20 BS", fromEn: "03 May, 2001", to: "2062-01-19 BS", toEn: "02 May, 2005", img: P(45) },
  { sn: 3,  name: "Prof. Jagat Bahadur KC",           from: "2062-01-28 BS", fromEn: "11 May, 2005", to: "2063-06-27 BS", toEn: "13 Oct, 2006", img: P(12) },
  { sn: 4,  name: "Prof. Dr. Ramawatar Yadav",        from: "2064-01-17 BS", fromEn: "30 Apr, 2007", to: "2068-01-16 BS", toEn: "29 Apr, 2011", img: P(54) },
  { sn: 5,  name: "Prof. Maheshwar Man Shreshta",     from: "2068-04-23 BS", fromEn: "08 Aug, 2011", to: "2072-04-22 BS", toEn: "07 Aug, 2015", img: P(76) },
  { sn: 6,  name: "Prof. Shirish Rijal",              from: "2071-01-10 BS", fromEn: "23 Apr, 2014", to: "2071-12-25 BS", toEn: "08 Apr, 2015", img: P(23) },
  { sn: 7,  name: "Prof. Dr. Ghanashyam Lal Das",     from: "2072-05-07 BS", fromEn: "24 Aug, 2015", to: "2076-05-06 BS", toEn: "23 Aug, 2019", img: P(81) },
  { sn: 8,  name: "Prof. Dr. Biju Kumar Thapalia",    from: "2076-05-07 BS", fromEn: "24 Aug, 2019", to: "2076-11-18 BS", toEn: "01 Mar, 2020", img: P(60) },
  { sn: 9,  name: "Prof. Dr. Yadav Raj Koirala",      from: "2076-11-19 BS", fromEn: "02 Mar, 2020", to: "2080-11-18 BS", toEn: "01 Mar, 2024", img: P(14) },
  { sn: 10, name: "Dr. Shailesh Mani Pokharel",       from: "2080-11-20 BS", fromEn: "03 Mar, 2024", to: "2081-01-17 BS", toEn: "29 Apr, 2024", img: P(37) },
  { sn: 11, name: "Prof. Dr. Biju Kumar Thapalia",    from: "2081-01-18 BS", fromEn: "30 Apr, 2024", to: "2083-01-18 BS", toEn: "01 May, 2026", img: P(60) },
  { sn: 12, name: "Prof. Dr. Biju Kumar Thapalia",    from: "2083-01-30 BS", fromEn: "13 May, 2026", to: "2083-03-18 BS", toEn: "02 Jul, 2026", img: P(60) },
  { sn: 13, name: "Prof. Dr. Sujan Babu Marahatta",   from: "2083-03-19 BS", fromEn: "03 Jul, 2026", to: "Till Now",       toEn: "",              img: P(15) },
];

export const REGISTRAR_LIST = [
  { sn: 1,  name: "Dr. Bhesh Prasad Dhamala",         from: "2052-11-29 BS", fromEn: "12 Mar, 1996", to: "2056-11-28 BS", toEn: "11 Mar, 2000", img: P(41) },
  { sn: 2,  name: "Prof. Dr. Krishna Prasad Sharma",  from: "2057-01-23 BS", fromEn: "05 May, 2000", to: "2061-01-22 BS", toEn: "04 May, 2004", img: P(56) },
  { sn: 3,  name: "Dr. Bhogendra Prasad Upadhyay",    from: "2061-02-22 BS", fromEn: "04 Jun, 2004", to: "2063-06-27 BS", toEn: "13 Oct, 2006", img: P(66) },
  { sn: 4,  name: "Prof. Sanjesh Prasad Koirala",     from: "2063-06-20 BS", fromEn: "06 Oct, 2006", to: "2063-09-19 BS", toEn: "03 Jan, 2007", img: P(21) },
  { sn: 5,  name: "Prof. Raj Kumar Thakur",           from: "2065-08-18 BS", fromEn: "03 Dec, 2008", to: "2069-08-17 BS", toEn: "02 Dec, 2012", img: P(72) },
  { sn: 6,  name: "Dr. Niroj Pandey",                 from: "2069-08-28 BS", fromEn: "13 Dec, 2012", to: "2073-08-27 BS", toEn: "12 Dec, 2016", img: P(29) },
  { sn: 7,  name: "Dr. Pramila Thapa",                from: "2073-09-01 BS", fromEn: "16 Dec, 2016", to: "2077-08-30 BS", toEn: "15 Dec, 2020", img: P(44, "women") },
  { sn: 8,  name: "Mr. Nilmani Pokharel",             from: "2078-01-27 BS", fromEn: "10 May, 2021", to: "2082-01-26 BS", toEn: "09 May, 2025", img: P(88) },
  { sn: 9,  name: "Prof. Dr. Kalyani Mishra Tripathi",from: "2082-02-30 BS", fromEn: "13 Jun, 2025", to: "2083-01-18 BS", toEn: "01 May, 2026", img: P(28, "women") },
  { sn: 10, name: "Dr. Ramesh Babu Kafle",            from: "2083-02-07 BS", fromEn: "21 May, 2026", to: "2083-05-16 BS", toEn: "01 Sep, 2026", img: P(10) },
  { sn: 11, name: "Prof. Dr. Panna Thapa",            from: "2083-05-17 BS", fromEn: "02 Sep, 2026", to: "Till Now",       toEn: "",              img: P(50) },
];
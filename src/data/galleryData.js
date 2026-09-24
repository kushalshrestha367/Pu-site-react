const IMG = (seed, w = 1200, h = 800) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

const makePhotos = (slug, count) =>
  Array.from({ length: count }, (_, i) => IMG(`${slug}-${i + 1}`));

export const ALBUMS = [
  {
    slug: "12th-convocation",
    title: "१२औं दीक्षान्त समारोह, पूर्वाञ्चल विश्वविद्यालय",
    titleEn: "12th Convocation Ceremony",
    cover: IMG("12th-convocation-1", 1200, 900),
    photos: makePhotos("12th-convocation", 13),
  },
  {
    slug: "39th-senate-meeting",
    title: "३९औँ सभा-बैठकका झलकहरू",
    titleEn: "39th Senate Meeting",
    cover: IMG("39th-senate-1", 1200, 900),
    photos: makePhotos("39th-senate", 16),
  },
  {
    slug: "mou-signing",
    title: "सम्झौता पत्रमा हस्ताक्षर कार्यक्रम",
    titleEn: "MoU Signing Ceremony",
    cover: IMG("mou-signing-1", 1200, 900),
    photos: makePhotos("mou-signing", 10),
  },
  {
    slug: "vc-assumption",
    title: "उपकुलपतिमा पदभार ग्रहणको एक झलक",
    titleEn: "Vice-Chancellor Assumption of Office",
    cover: IMG("vc-assumption-1", 1200, 900),
    photos: makePhotos("vc-assumption", 10),
  },
  {
    slug: "registrar-farewell",
    title: "निवर्तमान रजिष्ट्रारको विदाई कार्यक्रम",
    titleEn: "Farewell for Outgoing Registrar",
    cover: IMG("registrar-farewell-1", 1200, 900),
    photos: makePhotos("registrar-farewell", 5),
  },
  {
    slug: "service-commission",
    title: "सेवा आयोग पदस्थापन कार्यक्रम",
    titleEn: "Service Commission Installation",
    cover: IMG("service-commission-1", 1200, 900),
    photos: makePhotos("service-commission", 7),
  },
  {
    slug: "32nd-anniversary",
    title: "३२औँ वार्षिकोत्सवको झलक",
    titleEn: "32nd Anniversary Celebration",
    cover: IMG("32nd-anniversary-1", 1200, 900),
    photos: makePhotos("32nd-anniversary", 16),
  },
  {
    slug: "ai-training",
    title: "एक हप्ते ए.आई. तालिम",
    titleEn: "Week-long AI Training",
    cover: IMG("ai-training-1", 1200, 900),
    photos: makePhotos("ai-training", 3),
  },
  {
    slug: "erasmus-roadshow",
    title: "इरास्मस रोडशो कार्यक्रम",
    titleEn: "Erasmus Roadshow Program",
    cover: IMG("erasmus-1", 1200, 900),
    photos: makePhotos("erasmus", 4),
  },
  {
    slug: "world-bank-discussion",
    title: "विश्व बैंकसँगको छलफल कार्यक्रम",
    titleEn: "Discussion with the World Bank",
    cover: IMG("world-bank-1", 1200, 900),
    photos: makePhotos("world-bank", 11),
  },
  {
    slug: "ugc-visit",
    title: "विश्वविद्यालय अनुदान आयोगको भ्रमण",
    titleEn: "UGC Team Visit",
    cover: IMG("ugc-visit-1", 1200, 900),
    photos: makePhotos("ugc-visit", 4),
  },
  {
    slug: "national-education-day",
    title: "राष्ट्रिय शिक्षा दिवस समारोह",
    titleEn: "National Education Day",
    cover: IMG("education-day-1", 1200, 900),
    photos: makePhotos("education-day", 7),
  },
];

export const findAlbum = (slug) => ALBUMS.find((a) => a.slug === slug);

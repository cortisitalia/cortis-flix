const videoData = [
  {
    id: "1",
    title: "Info sulla gita scolastica 2026",
    category: "youtube",
    videoSrc: "https://bysebuho.com/e/j6rirmq5fkql",
    cover: "https://i.ytimg.com/vi/jKUZlGcJ-w0/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBTu8zpvO2Yfq1Q6ucVDKMGBVx5Dw",
    date: "2026-08-18" // Aggiungi la data se vuoi ordinare anche i documentari
  },
  {
    id: "2",
    title: "James sotto la doccia",
    category: "youtube",
    videoSrc: "https://bysebuho.com/e/3aiaf04i095p",
    cover: "https://i.ytimg.com/vi/Vvl_qDDOTo0/hq720.jpg",
    date: "2026-08-23" // Formato anno-mese-giorno è il top per l'ordinamento
  },
  {
    id: "3",
    title: "Esercizi per la salute",
    category: "youtube",
    videoSrc: "https://bysebuho.com/e/52z17u0q3vxn",
    cover: "https://i.ytimg.com/vi/eQSWoYavBuA/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBTew0bQA0mju1jO5kqD0kuTVm0rg",
    date: "2026-09-15"
  },
  {
    id: "4",
    title: "Doljabi",
    category: "youtube",
    videoSrc: "https://bysebuho.com/e/vwbk952tsfuy",
    cover: "https://i.ytimg.com/vi/1Ka-HoqHvIU/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLApIK1aplmglvqVWL03aRIn4BF8ag",
    date: "2026-08-10"
  },
  {
    id: "5",
    title: "Guida al lightstick...?",
    category: "youtube",
    videoSrc: "https://bysebuho.com/e/bqpq2o3szhvs",
    cover: "https://i.ytimg.com/vi/DOUUYxE7FeY/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDKhsCDnfjYyhbZMiEVnBDKS-1j3g",
    date: "2026-08-10"
  },
  {
    id: "6",
    title: "<PUT YOUR PHONE DOWN> IN JAPAN Day 1",
    category: "extra",
    videoSrc: "https://bysebuho.com/e/8k2w7jeqb8eu",
    cover: "https://pbs.twimg.com/media/HRYIokuawAAxozX.jpg",
    date: "2026-09-04"
  },
  {
    id: "7",
    title: "<PUT YOUR PHONE DOWN> IN JAPAN Day 2",
    category: "extra",
    videoSrc: "https://bysebuho.com/e/s6exkd0fv5s8",
    cover: "https://pbs.twimg.com/media/HRcsW5BboAApmza.jpg",
    date: "2026-09-05"
  },
  {
    id: "8",
    title: "Cucinando PACK IT UP & MONEYMONEYMONEY",
    category: "youtube",
    videoSrc: "https://bysebuho.com/e/he5pdfzemz8z",
    cover: "https://i.ytimg.com/vi/kqvSN7prFjE/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDeIaqVbIXtSsM4mpXUGHEw1Ej74w",
    date: "2026-09-02"
  },
  {
    id: "9",
    title: "ASMR di soldi che entrano",
    category: "youtube",
    videoSrc: "https://bysebuho.com/e/y16gdyda0jer",
    cover: "https://i.ytimg.com/vi/4uQqmGTGjJ4/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCktK769oWcnCBnaikYcSJBAPFafg",
    date: "2026-08-28"
  },
  {
    id: "10",
    title: "JAMES - cena",
    category: "live",
    videoSrc: "https://bysebuho.com/e/hcicbstmhn7z",
    cover: "https://phinf.wevpstatic.net/MjAyNjA3MTJfNDUg/MDAxNzgzODUzMzE4MjAy.MSdCPLe4Pg2qGR5PoZasnprcPHP30CHbPeE1kIH4n24g.DET2UUK5F_fIXpT-NEaBavkkkVF_RgHy9PaQMZGnejIg.JPEG/image.jpg?type=f_or_blur_bg_640_360",
    date: "2026-07-12"
  },
  {
    id: "11",
    title: "PACK IT UP Official Visualizer dietro le quinte",
    category: "youtube",
    videoSrc: "https://bysebuho.com/e/p68jmu1qtwdn",
    cover: "https://i.ytimg.com/vi/9d39RqVQNso/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLB3eMTZcnHRtb6UrrsyscuBBGW2kw",
    date: "2026-08-29"
  },
  {
    id: "12",
    title: "<PUT YOUR PHONE DOWN> B-DAY PARTY in Seoul Day 1",
    category: "extra",
    videoSrc: "https://bysebuho.com/e/yfz5bs3ed6ms",
    cover: "https://pbs.twimg.com/media/HQUw-TSbAAAe6jD.jpg",
    date: "2026-08-22"
  },
  {
    id: "13",
    title: "<PUT YOUR PHONE DOWN> B-DAY PARTY in Seoul Day 2",
    category: "extra",
    videoSrc: "https://bysebuho.com/e/u5hz1ntxzycm",
    cover: "https://pbs.twimg.com/media/HQZu0o7aQAAv_l-.jpg",
    date: "2026-08-23"
  },
  {
    id: "14",
    title: "prima reazione",
    category: "youtube",
    videoSrc: "https://bysebuho.com/e/05ex92c9zarw",
    cover: "https://i.ytimg.com/vi/V8xSTZAvKxg/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAqKolnUoDvfhk_MhvkUhjCITk2ZQ",
    date: "2026-08-25"
  },
  {
    id: "15",
    title: "documentario cortis \"cosa vogliamo\" episodio 1",
    category: "documentario",
    videoSrc: "https://bysebuho.com/e/6rpohelppfjw",
    cover: "https://i.ytimg.com/vi/v1d4Rj1pnMY/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDxaP8mTm03Im6ArvGi3IaPdq6hHQ"
  },
  {
    id: "16",
    title: "Proteggi Pororo",
    category: "youtube",
    videoSrc: "https://bysebuho.com/e/9oqvgbdo3q7z",
    cover: "https://i.ytimg.com/vi/BEkpxcxdZxs/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDcXCXpO48-bptxe-GksRZzFu4jLw",
    date: "2026-09-07"
  },
  {
    id: "17",
    title: "documentario cortis \"cosa vogliamo\" episodio 2",
    category: "documentario",
    videoSrc: "https://bysebuho.com/e/ojec60hfp8bn",
    cover: "https://i.ytimg.com/vi/o_WOlIxOZDs/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLADsM9PVeUPwI4ba9tDq9L4wsuzVA"
  },
  {
    id: "18",
    title: "Si trattava comunque di contenuti brevi.",
    category: "youtube",
    videoSrc: "https://bysebuho.com/e/wzsyauczzbcq",
    cover: "https://i.ytimg.com/vi/W9Tk6AMaJvE/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDKkBzMK0tByTwoy0MrEBktuxmFAQ",
    date: "2026-09-14"
  },
  {
    id: "19",
    title: "lollaFAHHHHHHHHlooza",
    category: "dietro-le-quinte",
    videoSrc: "https://bysebuho.com/e/3vvo5g1ws5u3",
    cover: "https://i.ytimg.com/vi/YvwjeHSkMws/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBGMjCTxYiKdpo-8k420ZXpKOs4Dg",
    date: "2026-09-10"
  },
  {
    id: "20",
    title: "documentario cortis \"cosa vogliamo\" episodio 3",
    category: "documentario",
    videoSrc: "https://bysebuho.com/e/2b0dlhve6crf",
    cover: "https://i.ytimg.com/vi/VrFDKz2eo0I/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBZGzsndhzTGa7mHlhHs6IayOOakQ"
  },
  {
    id: "21",
    title: "documentario cortis \"cosa vogliamo\" episodio 4",
    category: "documentario",
    videoSrc: "https://bysebuho.com/e/hilja5uz44tm",
    cover: "https://i.ytimg.com/vi/W3xhrW33qCI/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCmCFTO3ZFyVzikLDv0kVBSM-dXbA"
  },
  {
    id: "22",
    title: "Il Fagiooooolo",
    category: "youtube",
    videoSrc: "https://bysebuho.com/e/p5zj89fvag7h",
    cover: "https://i.ytimg.com/vi/yPS8y3w_9Ow/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAPwyedJKfZuO6YtJ22yuiiUgjEBw",
    date: "2026-09-17"
  },
  {
    id: "23",
    title: "photoshoot per l'album a Los Angeles",
    category: "dietro-le-quinte",
    videoSrc: "https://bysebuho.com/d/orlu8skrkaea",
    cover: "https://i.ytimg.com/vi/r6vn1ZeYC5I/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDP_0zwlB84FqJ4qaNodtKJLsKnpQ",
    date: "2026-10-02"
  },
  {
    id: "24",
    title: "martin pov a Busan TMA",
    category: "dietro-le-quinte",
    videoSrc: "https://bysebuho.com/d/c0imv1v501di",
    cover: "https://i.ytimg.com/vi/kaYrFZGjY7g/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDHsnoahhu_2sFbaERz18yfrQy7GQ",
    date: "2026-10-08"
  },
  {
    id: "25",
    title: "sto volando, Jack!",
    category: "youtube",
    videoSrc: "https://bysebuho.com/d/7ebkcvwxrn08",
    cover: "https://i.ytimg.com/vi/k6UI2mi1cTY/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCZqzhJ35gzTk5AtQ_ME6Dk4-2MSQ",
    date: "2026-10-04"
  },
  {
    id: "26",
    title: "COER guardami",
    category: "youtube",
    videoSrc: "https://byseraguci.com/e/zn9uj9cqw3k9",
    cover: "https://i.ytimg.com/vi/0S9FK_Zmz50/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCzwFKit-8j8LPIiQx2SM6eBcpZQg",
    date: "2026-09-21"
  },
  {
    id: "27",
    title: "martin pov a Barcellona",
    category: "youtube",
    videoSrc: "https://byseraguci.com/e/3nav36wxws2u",
    cover: "https://i.ytimg.com/vi/hhrvUa1wcvU/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCIWuan4IaX3wmRloulxl2y3UM8cg",
    date: "2026-10-12"
  },
  {
    id: "28",
    title: "Il figlio di Daejeon",
    category: "youtube",
    videoSrc: "https://byseraguci.com/e/e75tlktcj9ie",
    cover: "https://i.ytimg.com/vi/uhw3nzDvwkA/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCgmUU1v8dmoAOgcR1zyWDc8iy7Fg",
    date: "2026-09-28"
  },
  {
    id: "29",
    title: "vlog a staffetta a Los Angeles",
    category: "youtube",
    videoSrc: "https://bysebuho.com/e/nqzyjk096nvq",
    cover: "https://i.ytimg.com/vi/ISkAWt8_aqI/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAvrSDPkiyTEivDYhn5ZJ9uLitNkg",
    date: "2026-10-16"
  },
  {
    id: "30",
    title: "samgyeopsal mattutino",
    category: "youtube",
    videoSrc: "https://bysebuho.com/e/4eoag1wcvar0",
    cover: "https://i.ytimg.com/vi/t90kL72BjfY/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLB8Ca6x4gVJVH1kvke2TeNV0JixAw",
    date: "2026-10-20"
  }
];

const categories = {
  'documentario': 'Documentario',
  'dietro-le-quinte': 'Dietro le Quinte',
  'youtube': 'YouTube',
  'live': 'Live',
  'extra': 'Extra'
};

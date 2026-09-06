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
    id: "12",
    title: "<PUT YOUR PHONE DOWN> B-DAY PARTY in Seoul Day 2",
    category: "extra",
    videoSrc: "https://bysebuho.com/e/u5hz1ntxzycm",
    cover: "https://pbs.twimg.com/media/HQZu0o7aQAAv_l-.jpg",
    date: "2026-08-23"
  },
];

const categories = {
  'documentario': 'Documentario',
  'dietro-le-quinte': 'Dietro le Quinte',
  'youtube': 'YouTube',
  'live': 'Live',
  'extra': 'Extra'
};

const videoData = [
  {
    id: "1",
    title: "Documentario Ep. 1",
    category: "documentario",
    videoSrc: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    cover: "https://picsum.photos/400/225?random=1",
    date: "2026-09-01" // Aggiungi la data se vuoi ordinare anche i documentari
  },
  {
    id: "2",
    title: "Super gay in camera da letto scopano nel culios",
    category: "youtube",
    videoSrc: "https://bysebuho.com/e/3aiaf04i095p",
    cover: "https://i.ytimg.com/vi/Vvl_qDDOTo0/hq720.jpg",
    date: "2026-08-23" // Formato anno-mese-giorno è il top per l'ordinamento
  },
  {
    id: "3",
    title: "Live Chiacchiere e Gameplay",
    category: "live",
    videoSrc: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    cover: "https://picsum.photos/400/225?random=3",
    date: "2026-09-15"
  },
  {
    id: "4",
    title: "Video Fuori Categoria",
    category: "extra",
    videoSrc: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    cover: "https://picsum.photos/400/225?random=4",
    date: "2026-08-10"
  }
];

const categories = {
  'documentario': 'Documentario',
  'dietro-le-quinte': 'Dietro le Quinte',
  'youtube': 'YouTube',
  'live': 'Live',
  'extra': 'Extra'
};

// database.js
const videoData = [
  {
    id: "1",
    title: "Documentario Ep. 1 - Le Origini",
    category: "documentario",
    videoSrc: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    cover: "https://picsum.photos/400/225?random=1"
  },
  {
    id: "2",
    title: "Making of Music Video",
    category: "dietro-le-quinte",
    videoSrc: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    cover: "https://picsum.photos/400/225?random=2"
  }
  // Quando hai un nuovo video, aggiungi un blocco qui sotto!
];

const categories = {
  'documentario': 'Documentario',
  'dietro-le-quinte': 'Dietro le Quinte',
  'youtube': 'YouTube',
  'live': 'Live'
};

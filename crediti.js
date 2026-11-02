// CREDITI TRADUTTORI
// In database.js scrivi: credit: "stella"  (oppure più persone: credit: "stella, lea")
// Per aggiungere una persona nuova basta una riga qui sotto.
const creditEmoji = {
  stella: '⭐',
  eivy:   '🦇',
  lea:    '🪷',
  emma1:  '🎀',
  emma2:  '🛼'
};
 
// Trasforma ciò che scrivi nel database nelle emoji.
// Se scrivi qualcosa che non è nella lista (es. 'Cedry ⭐') lo lascia com'è.
function formatCredit(credit) {
  if (!credit) return '';
  return String(credit)
    .split(',')
    .map(part => {
      const p = part.trim();
      return creditEmoji[p.toLowerCase()] || p;
    })
    .join(' ');
}

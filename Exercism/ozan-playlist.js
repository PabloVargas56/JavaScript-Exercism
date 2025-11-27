const playlist = [
  'Court and Spark - Joni Mitchell',
  'Big Yellow Taxi - Joni Mitchell',
  'Court and Spark - Joni Mitchell',
  'The Fashion Show - Grace Jones',
  'Dr. Funkenstein - Parliament',
];

function removeDuplicates(playlist) {
  let set = new Set(playlist); // ← agrega cada elemento
  return Array.from(set);      // ← devuelve un array sin duplicados
}

console.log(removeDuplicates(playlist));

function hasTrack(playlist, track) {
  for (let i = 0; i < playlist.length; i++) {
    if (track === playlist[i]) {
      return true;
    }
  }
  return false;
}

console.log(hasTrack(playlist, 'Dr. Funkenstein - Parliament'))
console.log(hasTrack(playlist, 'Fashion Show'))

function addTrack(playlist, track) {
  let set = new Set(playlist);
  set.add(track);
  return Array.from(set);
}

console.log(addTrack(playlist, "Adele - Song 1"));

function deleteTrack(playlist, track) {
  let set = new Set(playlist); 
  set.delete(track);           
  return Array.from(set);       
}

console.log(deleteTrack(playlist,'Big Yellow Taxi - Joni Mitchell'));

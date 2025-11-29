export function randomShipRegistryNumber() {
  const min = 1000;
  const max = 10000;

  let random = Math.floor(Math.random() * (max - min)) + min;
  return "NCC-" + random;
}


export function randomStardate() {
  const min = 41000.0;
  const max = 42000.0;

  return Math.random() * (max - min) + min;
}

export function randomPlanetClass() {
  const classes = ["D", "H", "J", "K", "L", "M", "N", "R", "T", "Y"];
  
  const index = Math.floor(Math.random() * classes.length);
  return classes[index];
}
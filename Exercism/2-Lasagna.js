// Lucian's girlfriend is on her way home, and he hasn't cooked their anniversary dinner!
// In this exercise, you're going to write some code to help Lucian cook an exquisite lasagna from his favorite cookbook.

// Constantes
const preparationMinutesPerLayer = 2;
const expectedMinutesInOven = 40;

// Task 1 - Calculate the remaining oven time in minutes
function remainingMinutesInOven(actualMinutesInOven) {
  return expectedMinutesInOven - actualMinutesInOven;
}

// Task 2 - Calculate the preparation time in minutes
function preparationTimeInMinutes(numberOfLayers) {
  return numberOfLayers * preparationMinutesPerLayer;
}

// Task 3 - Calculate the total working time in minutes
function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
  return preparationTimeInMinutes(numberOfLayers) + actualMinutesInOven;
}

// Programa
const actualMinutesInOven = Number(prompt("Ingresa cuántos minutos lleva en el horno:"));
const layers = Number(prompt("Ingresa cuántas capas tiene la lasaña:"));

const remaining = remainingMinutesInOven(actualMinutesInOven);
const total = totalTimeInMinutes(layers, actualMinutesInOven);

alert(
  `La lasaña lleva ${actualMinutesInOven} minutos en el horno.\n` +
  `Faltan ${remaining} minutos para estar lista.\n` +
  `El tiempo total de trabajo es ${total} minutos.`
);








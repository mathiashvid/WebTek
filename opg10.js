// Noget JavaScript der gør det muligt at læse fra terminalen når der skrives.
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

// Noget JavaScript der læser et svar på et spørgsmål fra terminalen.
readline.question(`Hvad bliver næste terningekast? `, function (gæt) {
  console.log(`Du gætter på ${gæt}!`);

  // Kast terning: 
  let terning = Math.floor(Math.random() * 6 + 1);
  console.log(`Der blev kastet ${terning}!`);

  // TODO: Udskriv om spilleren gættede rigtigt eller forkert!
  if (terning >= 1 && terning > 2) {
    console.log("rigtigt");

  } else if (terning >= 2 && terning > 3) {
    console.log("rigtigt");

  } else if (terning >= 3 && terning > 4) {
    console.log("rigtigt");

  } else if (terning >= 4 && terning > 5) {
    console.log("rigtigt");

  } else if (terning >= 5 && terning > 6) {
    console.log("rigtigt");

  } else if (terning >= 6 && terning > 7) {
    console.log("rigtigt");

  } else {
    console.log("forkert");
  }

  readline.close();
})

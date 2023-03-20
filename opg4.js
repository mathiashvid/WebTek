console.log("Hej, verden!");

  for (let i = 5; i < 50; i++) {
    console.log (i)
  }

  for (let i = 2; i <= 40; i += 2) {
    console.log(i);
  }

  let sum = 0;

for (let i = 1; i <= 100; i += 2) {
  sum += i;
}
{console.log("Summen af alle ulige tal fra 1 til 100 er: " + sum);}
// summen er 2500

for (let i = 80; i >= 40; i--) {
    console.log (i)
  }

  for (let i = 5; i < 50; i++) {
    console.log (i)
  }

  for (let i = 1; i <= 7; i++) {
    console.log(i * i);
  }

  for (let i = 0; i < 10; i++) {
    let output = "";
    for (let j = i; j < 10; j++) {
      output = output + "*";
    }
    console.log(output);
  }

  for (let i = 0; i < 10; i++) {
    let output = "";
    for (let j = -i; j < 1; j++) {
      output = output + "*";
    }
    console.log(output);
  }

  for (let i = 0; i < 10; i++) {
    let output = " ";
    for (let j = -i; j < 1; j++) {
      output = output + " ";
    }
    console.log(output);
  }
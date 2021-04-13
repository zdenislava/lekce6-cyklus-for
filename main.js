// Použij výpis do konzole prohlížeče pomocí console.log('text')
// Konzoli otevřeš v Chrome stiskem F12 (na Windows) nebo Command-Option-I (na Macu)


// První příklad - vypiš vzestupně čísla od 0 do 10
console.log('Prvni příklad');
let cisla = [];

for (let i = 0; i <= 10; i = i + 1) {
    cisla.push(i);
}
console.log(cisla);

//TADY NAPIS CYKLUS

console.log('-------------------');

let odstavec = document.querySelector(".cisla");

for (let i = 0; i < cisla.length; i++) {
odstavec.innerHTML += cisla[i] + " ";
};


// Druhý příklad - zkopíruj předchozí příklad
// a vyzkoušej, jaký je rozdíl mezi <= a <
// v podmínce uvnitř cyklu

console.log('Druhý příklad - rozdíl mezi <= a <');

//TADY NAPIS CYKLUS

let cislicka = [];

for (let i = 0; i < 10; i = i + 1) {
    cislicka.push(i);
}
console.log(cislicka);





// Třetí příklad - vypiš sestupně čísla od 10 do 0
console.log('Třetí příklad - sestupná řada 10 - 0');

//TADY NAPIS CYKLUS

let cislaDolu = [];

for (let i = 10; i >= 0; i = i - 1) {
    cislaDolu.push(i);
}
console.log(cislaDolu);

let sestupnaRada = document.querySelector(".radaDolu");

for (let i = 0; i < cislaDolu.length; i++) {
    sestupnaRada.innerHTML += cislaDolu[i] + " ";
};
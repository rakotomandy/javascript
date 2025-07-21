/* Origine mathématique : nombres entiers non signés sur 8 bits (1 octet)

Plage : de 0 à 255

Taille : 1 octet par élément

Stockage : Binaire simple sans bit de signe */

Exemple :
const uint8 = new Uint8Array([0, 255, 128]);

console.log(uint8[0]); // 0
console.log(uint8[1]); // 255
console.log(uint8[2]); // 128
/* Commentaires :
255 = 11111111 en binaire (sans bit de signe) */
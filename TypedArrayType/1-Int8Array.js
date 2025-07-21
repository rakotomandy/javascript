/* Origine mathématique : nombres entiers signés sur 8 bits (1 octet)

Plage : de -128 à 127

Taille : 1 octet par élément

Stockage : Binaire sur 8 bits, premier bit = bit de signe (0 = positif, 1 = négatif) */

Exemple :
// Création d'un tableau de 3 éléments signés sur 8 bits
const int8 = new Int8Array([127, -128, 0]);

console.log(int8[0]); // 127
console.log(int8[1]); // -128
console.log(int8[2]); // 0*


/* Commentaires :
127 = 01111111 en binaire (bit de signe 0)
-128 = 10000000 en binaire (bit de signe 1) */
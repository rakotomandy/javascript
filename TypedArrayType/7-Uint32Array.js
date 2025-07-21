/* 
Origine mathématique : entier non signé sur 32 bits (4 octets)

Plage : de 0 à 4,294,967,295

Taille : 4 octets par élément
*/
const uint32 = new Uint32Array([0, 4294967295]);

console.log(uint32[0]); // 0
console.log(uint32[1]); // 4294967295

/* 
Commentaires :
2^32 - 1 = 4294967295
*/
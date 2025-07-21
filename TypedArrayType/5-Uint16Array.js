/* 
Origine mathématique : entier non signé sur 16 bits (2 octets)

Plage : de 0 à 65,535

Taille : 2 octets par élément
*/

const uint16 = new Uint16Array([0, 65535, 12345]);

console.log(uint16[0]); // 0
console.log(uint16[1]); // 65535
console.log(uint16[2]); // 12345


/* 
Commentaires :
Aucun bit de signe ici.
*/
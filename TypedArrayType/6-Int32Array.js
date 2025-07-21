/* 
Origine mathématique : entier signé sur 32 bits (4 octets)

Plage : de –2,147,483,648 à 2,147,483,647

Taille : 4 octets par élément
*/
const int32 = new Int32Array([2147483647, -2147483648, 0]);

console.log(int32[0]); // 2147483647
console.log(int32[1]); // -2147483648
console.log(int32[2]); // 0

/* 
Commentaires :
4 octets = 32 bits = 1er bit signe + 31 bits pour la valeur
*/
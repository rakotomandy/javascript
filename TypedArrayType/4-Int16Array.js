/* 
Origine mathématique : entier signé sur 16 bits (2 octets)

Plage : de -32,768 à 32,767

Taille : 2 octets par élément

Stockage : 16 bits, premier bit = bit de signe
*/

const int16 = new Int16Array([32767, -32768, 0]);

console.log(int16[0]); // 32767
console.log(int16[1]); // -32768
console.log(int16[2]); // 0

/* 
Commentaires :
32767 = 01111111 11111111 en binaire (bit de signe 0)
-32768 = 10000000 00000000
*/
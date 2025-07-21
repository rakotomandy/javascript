/* 
Origine mathématique : nombre à virgule flottante (IEEE 754 simple précision)

Plage : environ ±3.4 × 10³⁸

Taille : 4 octets par élément

Stockage : 1 bit de signe, 8 bits d'exposant, 23 bits de mantisse
*/
const float32 = new Float32Array([1.5, -2.25, 3.14159]);

console.log(float32[0]); // 1.5
console.log(float32[1]); // -2.25
console.log(float32[2]); // 3.14159

/* 
Commentaires :
Stocke les nombres flottants sur 32 bits
*/
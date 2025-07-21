/* 
Origine mathématique : nombre à virgule flottante (IEEE 754 double précision)

Plage : très grand, environ ±1.8 × 10³⁰⁸

Taille : 8 octets par élément

Stockage : 1 bit de signe, 11 bits d'exposant, 52 bits de mantisse
*/
const float64 = new Float64Array([1.5, -2.25, 3.141592653589793]);

console.log(float64[0]); // 1.5
console.log(float64[1]); // -2.25
console.log(float64[2]); // 3.141592653589793

/* 
Beaucoup plus précis que Float32Array


*/
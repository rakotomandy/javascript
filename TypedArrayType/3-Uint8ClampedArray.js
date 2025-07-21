/* 
Origine mathématique : entier non signé, mais clampé (limité) entre 0 et 255

Plage : 0 à 255

Taille : 1 octet par élément

Stockage : Comme Uint8Array, mais si on donne une valeur hors plage, elle est automatiquement corrigée.
*/
const clamp = new Uint8ClampedArray([300, -20, 128]);

console.log(clamp[0]); // 255 (300 clampé à 255)
console.log(clamp[1]); // 0 (–20 clampé à 0)
console.log(clamp[2]); // 128 (reste inchangé)

/* 
Commentaires :
300 devient 255 automatiquement, -20 devient 0
*/
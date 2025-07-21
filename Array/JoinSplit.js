// ===============================
// 🎓 Lesson 8: join() and split()
// ===============================

const words = ["Hello", "world"];

// join() - join elements into a string
const sentence = words.join(" ");
console.log("📝 Sentence:", sentence); // "Hello world"

// split() - from string to array (not array method but useful together)
const chars = sentence.split("");
console.log("🔤 Characters:", chars); // ["H", "e", "l", ...]

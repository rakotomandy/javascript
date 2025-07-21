// ================================================
// ✅ LESSON 7: Looping Through Map (entries, keys, values)
// ================================================

const capitalMap = new Map([
    ["France", "Paris"],
    ["Spain", "Madrid"],
    ["Germany", "Berlin"]
  ]);
  
  // Loop over key-value pairs
  for (const [country, capital] of capitalMap) {
    console.log(`🏛️ Capital of ${country} is ${capital}`);
  }
  
  // Loop over only keys
  for (const country of capitalMap.keys()) {
    console.log("🌍 Country:", country);
  }
  
  // Loop over only values
  for (const capital of capitalMap.values()) {
    console.log("🏙️ Capital:", capital);
  }
  
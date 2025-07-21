/* 🔍 Code in Focus:
js

const hex = Array.from(byteArray)
  .map(b => b.toString(16).padStart(2, '0'))
  .join(" ");
Let us zoom in on this part:

js

b.toString(16)
💡 What does toString(16) do?
toString(base) converts a number to a string in the given base.
b.toString(10) → decimal string (default)

b.toString(2) → binary string

b.toString(16) → hexadecimal string ✅

Example:
js

let b = 255;
b.toString(16);  // "ff"

let b2 = 72;
b2.toString(16); // "48"
✨ Why use padStart(2, '0')?
Because some hex values only take 1 digit:

js

9.toString(16)  // "9" ← we want "09"
So this makes sure all hex values are 2-digit strings, like:

arduino

"09" "0a" "ff"
js

b.toString(16).padStart(2, '0')
Ensures output like:

css

["48", "69", "ff", "0a"]
🔗 Finally, .join(" ")
That combines the array of hex strings into one string with spaces:

js

["48", "69"] → "48 69"
🧠 Full Example Recap
If byteArray = [72, 105] (which is "Hi"):

js

Array.from(byteArray)
  .map(b => b.toString(16).padStart(2, '0')) // → ["48", "69"]
  .join(" ")                                // → "48 69"
 */
/* 
🧮 1. What is Hexadecimal?
Hexadecimal is a base-16 number system. That means it uses 16 different symbols:


Decimal:   0  1  2  3  4  5  6  7  8  9
Hex:       0  1  2  3  4  5  6  7  8  9
           A  B  C  D  E  F
Decimal:  10 11 12 13 14 15
So:

10 in decimal = A in hex

15 in decimal = F in hex

16 in decimal = 10 in hex (just like 10 in decimal means one group of ten, 10 in hex means one group of sixteen)

🔢 2. Converting Decimal to Hex
Let us convert 156 (decimal) to hex:

✏️ Step-by-step:
Divide by 16 repeatedly, keep track of remainders.


156 ÷ 16 = 9 remainder 12   → 12 = C
 9  ÷ 16 = 0 remainder 9    → 9
Now write remainders bottom to top:

✅ 156 (decimal) = 9C (hex)

🔁 3. Converting Hex to Decimal
Let us reverse it: Convert 9C (hex) to decimal:

Each digit is a power of 16:

9C = (9 × 16¹) + (C × 16⁰) = (9 × 16) + (12 × 1) = 144 + 12 = 156

🧱 4. Why Use Hex?
Hex is more compact for representing binary (base 2) values.

Each hex digit represents exactly 4 binary digits (bits).

🔁 Binary to Hex example
yaml

Binary:      1101 1110
Split:       1101   1110
To Hex:       D      E

Answer:      DE
🔁 Hex to Binary example
makefile

Hex:    3F
3 = 0011
F = 1111

Binary = 00111111
🧠 5. Real-World Example
In HTML/CSS:

css

color: #FF0000; /* red */

/* Split it:

FF = 255 (Red)

00 = 0 (Green)

00 = 0 (Blue)

So #FF0000 means 255 red, 0 green, 0 blue → pure red.

🧪 Practice Questions
Try these:

Convert 47 decimal to hex.

Convert 1F hex to decimal.

Convert binary 10101100 to hex.

Let me know when you're ready for the answers or want more practice! */










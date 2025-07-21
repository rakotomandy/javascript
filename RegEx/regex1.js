// ===================================================
// ✅ 1. What is RegExp?
// ===================================================
/*
Regular Expression (RegExp) is a pattern used to match character combinations in strings.
Useful for:
✔ validating input (e.g. emails, passwords)
✔ searching within strings
✔ extracting or replacing patterns

Syntax:
  - Literal: /pattern/flags
  - Constructor: new RegExp("pattern", "flags")
*/

// Example:
let pattern = /abc/;
let testStr = "123abc456";
console.log(pattern.test(testStr)); // true


// ===================================================
// ✅ 2. Common Flags
// ===================================================
/*
i → ignore case
g → global (find all matches)
m → multiline (^ and $ match start/end of each line)
u → Unicode mode
*/

// Example with flags
let caseInsensitive = /hello/i;
console.log(caseInsensitive.test("HeLLo")); // true


// ===================================================
// ✅ 3. .test(string)
/*
Returns true if the pattern is found in the string.
*/
console.log(/cat/.test("A cat is here")); // true
console.log(/dog/.test("A cat is here")); // false


// ===================================================
// ✅ 4. .exec(string)
/*
Returns matched result (array) or null.
More detailed than .test().
*/
let execResult = /c.t/.exec("My cat");
console.log(execResult); // ['cat', index: 3, ...]


// ===================================================
// ✅ 5. String.prototype.match()
// ===================================================
/*
Returns array of matches or null.
*/
let text = "a1 b2 c3";
console.log(text.match(/\d/g)); // ['1', '2', '3']


// ===================================================
// ✅ 6. String.prototype.search()
// ===================================================
/*
Returns index of the first match or -1.
*/
console.log(text.search(/\d/)); // 1


// ===================================================
// ✅ 7. String.prototype.replace()
// ===================================================
/*
Replaces matched content.
*/
let email = "My email is test@mail.com";
let safe = email.replace(/\S+@\S+\.\S+/, "[protected]");
console.log(safe); // My email is [protected]


// ===================================================
// ✅ 8. String.prototype.split()
// ===================================================
/*
Splits string using regex as a delimiter.
*/
let messy = "apple   orange   banana";
let clean = messy.split(/\s+/);
console.log(clean); // ["apple", "orange", "banana"]


// ===================================================
// ✅ 9. Anchors: ^ and $
// ===================================================
/*
^ → start of string
$ → end of string
*/
console.log(/^abc/.test("abcdef"));   // true
console.log(/def$/.test("abcdef"));   // true


// ===================================================
// ✅ 10. Character Sets: [abc]
// ===================================================
/*
Matches any one character in the set.
*/
console.log(/[aeiou]/.test("dog")); // true (contains 'o')


// ===================================================
// ✅ 11. Ranges: [a-z], [0-9]
// ===================================================
/*
Matches any one character within the range.
*/
console.log(/[a-z]/.test("X")); // true (case-insensitive with /i)


// ===================================================
// ✅ 12. Negated Set: [^abc]
// ===================================================
/*
Matches any character except a, b, or c.
*/
console.log(/[^0-9]/.test("123")); // false → contains only numbers
console.log(/[^0-9]/.test("123a")); // true → contains non-number


// ===================================================
// ✅ 13. Quantifiers: *, +, ?, {n}, {n,m}
// ===================================================
/*
*  → 0 or more
+  → 1 or more
?  → 0 or 1
{n}     → exactly n times
{n,m}   → between n and m times
*/

// Example:
console.log(/lo*/.test("looong"));  // true (l followed by 0+ o's)
console.log(/lo+/.test("lg"));      // false (l not followed by o)
console.log(/a{3}/.test("caaa"));   // true (exactly 3 a's)
console.log(/a{2,4}/.test("aaaaa"));// true (has 4 a's, matches 2-4)


// ===================================================
// ✅ 14. Wildcard: .
// ===================================================
/*
Matches any single character (except newline).
*/
console.log(/c.t/.test("cat")); // true (matches 'c' any 'a' 't')


// ===================================================
// ✅ 15. Escape Special Characters
// ===================================================
/*
Use \ to escape special characters like ., *, ?, [, etc.
*/
console.log(/\./.test("a.b")); // true → matches literal dot


// ===================================================
// ✅ 16. Groups: (abc)
// ===================================================
/*
Groups part of the pattern together.
Can also be used for backreferences.
*/
let date = "2025-07-10";
console.log(/^(\d{4})-(\d{2})-(\d{2})$/.exec(date)); // full match + 3 groups


// ===================================================
// ✅ 17. Alternation: |
// ===================================================
/*
Matches either pattern.
*/
console.log(/dog|cat/.test("I love dogs")); // true


// ===================================================
// ✅ 18. Word Boundaries: \b
// ===================================================
/*
\b → matches word boundary (start/end of word)
*/
console.log(/\bcat\b/.test("cat"));      // true
console.log(/\bcat\b/.test("concatenate")); // false


// ===================================================
// ✅ 19. Lookahead & Lookbehind
// ===================================================
/*
?=  → Positive Lookahead (followed by)
?!  → Negative Lookahead (not followed by)
?<= → Positive Lookbehind (preceded by)
?<! → Negative Lookbehind (not preceded by)
(ES2018+)
*/

// Positive lookahead: only match "foo" followed by "bar"
console.log(/foo(?=bar)/.test("foobar")); // true

// Negative lookahead: match "foo" not followed by "bar"
console.log(/foo(?!bar)/.test("foobaz")); // true

// Positive lookbehind (only supported in modern browsers)
console.log(/(?<=\$)\d+/.exec("$120")); // ['120']


// ===================================================
// ✅ 20. Named Groups (?<name>...)
// ===================================================
/*
Allows naming groups for better readability.
(ES2018+)
*/
let fullDate = "2025-07-10";
let regex = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
let result = fullDate.match(regex);
console.log(result.groups.year);  // 2025
console.log(result.groups.month); // 07
console.log(result.groups.day);   // 10


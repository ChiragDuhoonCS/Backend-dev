# JavaScript Strings | Sigma Web Development Course — Tutorial #60

This lecture focuses on creating strings, accessing characters, template literals, escape sequences, string methods, slicing, replacing, concatenation, and the important concept that **strings are immutable**. ([YouTube][1])

---

## 1. What is a String?

A **string** is a sequence of characters used to represent text.

```javascript
let a = "Harry";
```

Strings can be written using:

```javascript
let name1 = "Harry";
let name2 = 'Harry';
let name3 = `Harry`;
```

All three represent strings.

### Check type

```javascript
console.log(typeof name1);
```

Output:

```text
string
```

---

# 2. Accessing Characters

Each character has an **index**.

Index starts from **0**.

```javascript
let name = "Harry";
```

```text
 H   a   r   r   y
 0   1   2   3   4
```

Access a character:

```javascript
console.log(name[0]);  // H
console.log(name[1]);  // a
console.log(name[4]);  // y
```

You can also use:

```javascript
console.log(name.charAt(0));
```

---

# 3. String Length

Use the `.length` property to find the number of characters.

```javascript
let name = "Harry";

console.log(name.length);
```

Output:

```text
5
```

### Important

`.length` is a **property**, not a function.

```javascript
name.length      // ✅
name.length()    // ❌
```

For `"Harry"`:

```text
Index:   0 1 2 3 4
         H a r r y
Length:  5
```

So the last index is:

```text
length - 1
```

---

# 4. Template Literals

Template literals use **backticks**:

```javascript
let name = `Harry`;
```

They are especially useful for inserting variables into strings.

### Normal concatenation

```javascript
let name = "Harry";
let age = 25;

console.log("My name is " + name + " and I am " + age);
```

### Template literal

```javascript
console.log(`My name is ${name} and I am ${age}`);
```

Output:

```text
My name is Harry and I am 25
```

The syntax:

```javascript
`${variable}`
```

is called **string interpolation**.

You can also put expressions inside:

```javascript
console.log(`2 + 3 = ${2 + 3}`);
```

Output:

```text
2 + 3 = 5
```

### Tip

For strings containing several variables, template literals are usually much cleaner than repeatedly using `+`.

---

# 5. Run JavaScript Anywhere

JavaScript can be executed using **Node.js**, not just inside HTML/browser.

For example, in a `.js` file:

```javascript
console.log("Hello World");
```

Run:

```bash
node script.js
```

This connects with what you learned in Tutorial #54.

---

# 6. Escape Sequences

Escape sequences allow special characters to be included inside strings.

### New line — `\n`

```javascript
console.log("Hello\nWorld");
```

Output:

```text
Hello
World
```

### Tab — `\t`

```javascript
console.log("Hello\tWorld");
```

### Single quote — `\'`

```javascript
console.log('It\'s Harry');
```

### Double quote — `\"`

```javascript
console.log("He said \"Hello\"");
```

### Backslash — `\\`

```javascript
console.log("C:\\Users\\Harry");
```

### Important

The backslash `\` tells JavaScript that the following character has a special meaning.

---

# 7. Changing Case

JavaScript provides methods to convert strings to uppercase/lowercase.

### `toUpperCase()`

```javascript
let name = "Harry";

console.log(name.toUpperCase());
```

Output:

```text
HARRY
```

### `toLowerCase()`

```javascript
console.log(name.toLowerCase());
```

Output:

```text
harry
```

⚠️ These methods return a **new string**; they don't modify the original string.

---

# 8. Slicing a String

`slice()` extracts a portion of a string.

```javascript
let name = "Harry";

console.log(name.slice(1, 4));
```

Output:

```text
arr
```

### Syntax

```javascript
string.slice(start, end)
```

`start` is included, but `end` is **not included**.

For:

```javascript
"Harry".slice(1, 4)
```

```text
 H  a  r  r  y
 0  1  2  3  4
    ↑     ↑
   start  end
```

Characters at indexes `1, 2, 3` are selected.

### Omitting end

```javascript
console.log(name.slice(1));
```

Output:

```text
arry
```

It takes everything from index `1` to the end.

---

# 9. Negative Index with `slice()`

You can use negative indexes to count from the end.

```javascript
let name = "Harry";

console.log(name.slice(-3));
```

This takes the last 3 characters:

```text
r r y
```

Think:

```text
H  a  r  r  y
-5 -4 -3 -2 -1
```

---

# 10. `replace()`

Used to replace part of a string.

```javascript
let text = "Harry is a good boy";

console.log(text.replace("good", "great"));
```

Output:

```text
Harry is a great boy
```

### Important

`replace()` returns a **new string**.

The original remains unchanged.

```javascript
let text = "Hello World";

let newText = text.replace("World", "Harry");

console.log(newText);
```

---

# 11. Concatenation

**Concatenation** means joining strings together.

Using `+`:

```javascript
let firstName = "Harry";
let lastName = "Bhai";

let fullName = firstName + " " + lastName;

console.log(fullName);
```

Output:

```text
Harry Bhai
```

You can also use:

```javascript
let result = "Hello".concat(" ", "Harry");
```

But template literals are often cleaner:

```javascript
let result = `Hello ${firstName} ${lastName}`;
```

---

# 12. Strings are Immutable ⭐

This is one of the most important concepts.

**Immutable** means the original string cannot be changed directly.

```javascript
let name = "Harry";

name[0] = "M";

console.log(name);
```

The string remains:

```text
Harry
```

You cannot directly modify an individual character.

Instead, create a **new string**:

```javascript
let name = "Harry";

name = "Marry";

console.log(name);
```

Methods such as:

```javascript
toUpperCase()
slice()
replace()
```

also return new strings rather than modifying the original.

Example:

```javascript
let name = "harry";

let upper = name.toUpperCase();

console.log(name);   // harry
console.log(upper);  // HARRY
```

---

# 13. More Useful String Methods

The lecture also explores additional string functionality. Some important methods/properties to remember:

### `trim()`

Removes whitespace from the beginning and end.

```javascript
let text = "  Hello  ";

console.log(text.trim());
```

Result:

```text
Hello
```

### `includes()`

Checks whether a string contains another string.

```javascript
let text = "Hello World";

console.log(text.includes("World"));
```

Result:

```text
true
```

### `startsWith()`

```javascript
"Hello World".startsWith("Hello");
```

Result:

```text
true
```

### `endsWith()`

```javascript
"Hello World".endsWith("World");
```

Result:

```text
true
```

These methods return a **boolean** (`true`/`false`).

---

# 🧠 Important String Concepts

| Concept             | Example                  |
| ------------------- | ------------------------ |
| Access character    | `name[0]`                |
| Length              | `name.length`            |
| Uppercase           | `name.toUpperCase()`     |
| Lowercase           | `name.toLowerCase()`     |
| Slice               | `name.slice(1, 4)`       |
| Replace             | `name.replace("a", "b")` |
| Concatenate         | `"Hello " + name`        |
| Template literal    | `` `Hello ${name}` ``    |
| Remove outer spaces | `name.trim()`            |
| Check contains      | `name.includes("a")`     |
| Starts with         | `name.startsWith("H")`   |
| Ends with           | `name.endsWith("y")`     |

---

## 💡 Tips & Common Mistakes

* String indexes start at **0**.
* `.length` gives the number of characters, so the last index is `length - 1`.
* `slice(start, end)` → `end` is **not included**.
* Negative indexes count from the end.
* `.length` is a property → don't write `length()`.
* String methods generally return a **new string**.
* Strings are **immutable**.
* Use backticks `` ` ` `` for template literals.
* `${}` works inside template literals for inserting variables/expressions.
* `===` should generally be preferred when comparing strings.
* `toUpperCase()` and `toLowerCase()` are useful when you want case-insensitive-style comparisons.

## ⚡ Quick Revision

```text
String → sequence of characters

Index starts → 0
Length → string.length

"Harry"[0] → H
"Harry".length → 5

Template literal:
`Hello ${name}`

Escape:
\n → new line
\t → tab
\' → single quote
\" → double quote
\\ → backslash

slice(start, end)
→ start included
→ end excluded

replace(old, new)
→ returns new string

Strings → IMMUTABLE
→ original string cannot be directly changed
```

([YouTube][1])

[1]: https://www.youtube.com/watch?v=uJbYqm7W_mA&utm_source=chatgpt.com "JavaScript Strings | Sigma Web Development Course - Tutorial #60 - YouTube"

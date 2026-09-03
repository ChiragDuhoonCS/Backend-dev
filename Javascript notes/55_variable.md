# JavaScript Variables, Data Types & Objects — Tutorial #55

([YouTube][1])

## 1. Variables

A **variable** is a container used to store data.

```javascript
let age = 20;
let name = "Harry";
```

Here:

* `age` → variable
* `20` → value
* `name` → variable
* `"Harry"` → value

You can change a variable:

```javascript
let age = 20;
age = 25;
```

---

## 2. Declaring Variables

JavaScript has 3 keywords:

```javascript
var
let
const
```

### `let`

Used when the value **may change**.

```javascript
let age = 20;
age = 21;
```

You **cannot redeclare** the same `let` variable in the same scope.

```javascript
let x = 10;
let x = 20; // ❌ Error
```

---

### `const`

Used when a variable **should not be reassigned**.

```javascript
const pi = 3.14;
```

```javascript
pi = 3.15; // ❌ Error
```

`const` must be given a value when declared:

```javascript
const x; // ❌ Error
```

### Important

`const` prevents **reassignment**, not necessarily changes inside an object.

```javascript
const user = {
    name: "Harry"
};

user.name = "John"; // ✅
```

---

## 3. `var` vs `let`

`var` is the older way of declaring variables.

```javascript
var x = 10;
x = 20;       // ✅
var x = 30;   // ✅
```

`let` is block-scoped:

```javascript
let x = 10;

{
    let x = 20;
    console.log(x); // 20
}

console.log(x); // 10
```

### Modern practice

```text
const → default choice
let   → when value needs to change
var   → generally avoid in modern JS
```

---

## 4. Variable Naming Rules

Valid characters:

* Letters: `a-z`, `A-Z`
* Digits: `0-9`
* `_`
* `$`

Examples:

```javascript
let name = "Harry";
let user1 = "John";
let _age = 20;
let $price = 100;
```

### Rules

❌ Cannot start with a number:

```javascript
let 1name = "Harry";
```

❌ Cannot use reserved keywords:

```javascript
let var = 10;
```

✅ JavaScript is **case-sensitive**:

```javascript
let age = 20;
let Age = 30;
```

These are two different variables.

**Tip:** Use meaningful names and preferably `camelCase`.

```javascript
let firstName = "Harry";
let totalPrice = 500;
```

---

# 5. JavaScript Data Types

JavaScript has **primitive data types** and **objects**.

### Primitive Data Types

The video covers these:

| Data type | Example         |
| --------- | --------------- |
| Number    | `10`, `3.14`    |
| String    | `"Hello"`       |
| Boolean   | `true`, `false` |
| Undefined | `undefined`     |
| Null      | `null`          |
| BigInt    | `123n`          |
| Symbol    | `Symbol("id")`  |

---

### Number

Both integers and decimals are `number`.

```javascript
let age = 20;
let price = 99.99;
```

---

### String

Text enclosed in quotes.

```javascript
let name = "Harry";
let city = 'Delhi';
```

---

### Boolean

Only two possible values:

```javascript
true
false
```

Example:

```javascript
let isLoggedIn = true;
let isAdmin = false;
```

---

### Undefined

A variable exists but has not been assigned a value.

```javascript
let x;
console.log(x);
```

Output:

```text
undefined
```

---

### Null

Represents an **intentional absence of a value**.

```javascript
let x = null;
```

### ⚠️ Interesting point

```javascript
typeof null
```

returns:

```text
"object"
```

This is a historical JavaScript behavior/quirk.

---

### BigInt

Used for very large integers.

```javascript
let bigNumber = 123456789012345678901234567890n;
```

The `n` at the end indicates a BigInt.

---

### Symbol

Creates a unique value.

```javascript
let id = Symbol("id");
```

Symbols are commonly useful when you need unique property keys.

---

# 6. `typeof` Operator

`typeof` tells you the type of a value.

```javascript
let age = 20;

console.log(typeof age);
```

Output:

```text
number
```

Examples:

```javascript
typeof "Harry"     // string
typeof 20          // number
typeof true        // boolean
typeof undefined   // undefined
typeof null        // object ⚠️
```

---

# 7. Objects

An **object** stores multiple related pieces of data using **key-value pairs**.

```javascript
let person = {
    name: "Harry",
    age: 25,
    city: "Delhi"
};
```

Structure:

```text
person
 ├── name → "Harry"
 ├── age  → 25
 └── city → "Delhi"
```

### Access object values

Using dot notation:

```javascript
console.log(person.name);
console.log(person.age);
```

Output:

```text
Harry
25
```

You can also use brackets:

```javascript
console.log(person["name"]);
```

---

## 8. Changing Object Values

```javascript
person.age = 26;
```

Add a new property:

```javascript
person.country = "India";
```

Now:

```javascript
console.log(person);
```

---

# ⭐ Important Difference

```javascript
let age = 20;
```

`age` stores **one value**.

But:

```javascript
let person = {
    name: "Harry",
    age: 25,
    city: "Delhi"
};
```

`person` stores **multiple related values**.

---

## 💡 Tips

* Prefer **`const`** unless you know the variable needs reassignment.
* Use **`let`** when the value will change.
* Avoid `var` in modern JavaScript.
* JavaScript is **dynamically typed** — you don't specify the type when declaring a variable.
* Remember the `typeof null === "object"` quirk.
* Objects use **key-value pairs**.
* Variable names are **case-sensitive**.

## ⚡ Quick Revision

```text
Variable → stores data

let   → can reassign
const → cannot reassign
var   → old style

Primitive:
Number
String
Boolean
Undefined
Null
BigInt
Symbol

Object → key-value pairs

typeof → checks data type

typeof null → "object" ⚠️
```

[1]: https://www.youtube.com/watch?v=HGCDMJXS1cc&utm_source=chatgpt.com "JavaScript Variables, Data Types & Objects | Sigma Web Development Course - Tutorial #55 - YouTube"

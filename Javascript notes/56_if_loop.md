# JavaScript Conditionals: `if`, `else if`, `else` Ladder — Tutorial #56

## 1. What are Conditionals?

**Conditionals** allow JavaScript to make decisions based on whether a condition is `true` or `false`.

```javascript
if (condition) {
    // code
}
```

Example:

```javascript
let age = 18;

if (age >= 18) {
    console.log("You can vote");
}
```

If the condition is `true`, the code inside `{}` executes.

---

## 2. `if` Statement

Used when you want to execute code **only when a condition is true**.

```javascript
let age = 20;

if (age >= 18) {
    console.log("Adult");
}
```

If `age < 18`, nothing happens.

---

## 3. `if...else`

Used when there are **two possibilities**.

```javascript
let age = 16;

if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}
```

### Flow

```text
          condition
          /       \
       true       false
        ↓           ↓
       if          else
```

---

## 4. `else if`

Used when there are **multiple conditions**.

```javascript
let marks = 75;

if (marks >= 90) {
    console.log("A");
} else if (marks >= 75) {
    console.log("B");
} else if (marks >= 50) {
    console.log("C");
} else {
    console.log("Fail");
}
```

JavaScript checks conditions **from top to bottom**.

Once one condition becomes `true`, its block executes and the remaining conditions are skipped.

---

# 5. `else if` Ladder

An `else if` ladder is useful when there are multiple possible outcomes.

```javascript
if (condition1) {
    // code
} else if (condition2) {
    // code
} else if (condition3) {
    // code
} else {
    // default code
}
```

### Example

```javascript
let age = 25;

if (age < 13) {
    console.log("Child");
} else if (age < 20) {
    console.log("Teenager");
} else if (age < 60) {
    console.log("Adult");
} else {
    console.log("Senior");
}
```

Output:

```text
Adult
```

---

## 6. Comparison Operators

Conditions commonly use comparison operators:

| Operator | Meaning                  |
| -------- | ------------------------ |
| `==`     | Equal value              |
| `===`    | Equal value **and type** |
| `!=`     | Not equal                |
| `!==`    | Not equal value or type  |
| `>`      | Greater than             |
| `<`      | Less than                |
| `>=`     | Greater than or equal    |
| `<=`     | Less than or equal       |

### `==` vs `===`

```javascript
5 == "5"     // true
5 === "5"    // false
```

`===` checks both **value and data type**.

**Tip:** Prefer `===` and `!==` in modern JavaScript.

---

# 7. Logical Operators in Conditions

### AND `&&`

Both conditions must be true.

```javascript
let age = 20;

if (age >= 18 && age <= 60) {
    console.log("Eligible");
}
```

### OR `||`

At least one condition must be true.

```javascript
let day = "Sunday";

if (day === "Saturday" || day === "Sunday") {
    console.log("Weekend");
}
```

### NOT `!`

Reverses a boolean value.

```javascript
let isLoggedIn = false;

if (!isLoggedIn) {
    console.log("Please login");
}
```

---

# 8. Multiple Conditions

Conditions can be combined:

```javascript
let age = 25;
let hasLicense = true;

if (age >= 18 && hasLicense) {
    console.log("You can drive");
}
```

---

## 9. Nested `if`

An `if` can be placed inside another `if`.

```javascript
let age = 20;
let hasLicense = true;

if (age >= 18) {
    if (hasLicense) {
        console.log("You can drive");
    }
}
```

But don't unnecessarily nest conditions when a simpler condition works:

```javascript
if (age >= 18 && hasLicense) {
    console.log("You can drive");
}
```

---

## 💡 Important Tips

* Conditions evaluate to **`true` or `false`**.
* `else` does **not** have a condition.
* Only the **first matching** branch in an `if...else if` ladder executes.
* Order your conditions carefully.
* Use `===` instead of `==` when possible.
* Use `{}` even for one-line blocks—it makes code clearer and safer.
* `&&` → **both** conditions must be true.
* `||` → **at least one** condition must be true.
* `!` → reverses the condition.

## ⚡ Quick Revision

```text
if          → check a condition
else if     → check another condition
else        → runs if nothing above is true

&&          → AND
||          → OR
!           → NOT

==          → loose equality
===         → strict equality ✅

Condition → true  → execute block
          → false → move to next condition
```

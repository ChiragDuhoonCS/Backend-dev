# JavaScript Loops | Sigma Web Development Course — Tutorial #57

## 1. What is a Loop?

A **loop** is used to execute a block of code repeatedly until a condition becomes false.

Instead of writing:

```javascript
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
```

Use a loop:

```javascript
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

Output:

```text
1
2
3
4
5
```

---

# 2. `for` Loop

### Syntax

```javascript
for (initialization; condition; update) {
    // code
}
```

Example:

```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

### Three parts

```text
for ( initialization ; condition ; update )
          ↓              ↓           ↓
        start         check       change
```

Execution:

```text
Initialize
   ↓
Check condition
   ↓
  true
   ↓
Execute body
   ↓
Update
   ↓
Check condition again
```

When the condition becomes `false`, the loop stops.

---

# 3. Example: Print 1–10

```javascript
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
```

### Reverse Loop

```javascript
for (let i = 10; i >= 1; i--) {
    console.log(i);
}
```

---

# 4. `while` Loop

A `while` loop runs **as long as the condition is true**.

### Syntax

```javascript
while (condition) {
    // code
}
```

Example:

```javascript
let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}
```

### Flow

```text
condition
    ↓
 true ──→ execute ──→ update
  ↑                    │
  └────────────────────┘
    ↓
 false
    ↓
  stop
```

⚠️ Make sure the condition eventually becomes false, otherwise you get an **infinite loop**.

---

# 5. `do...while` Loop

A `do...while` loop executes the code **at least once**, because the condition is checked after the body.

### Syntax

```javascript
do {
    // code
} while (condition);
```

Example:

```javascript
let i = 1;

do {
    console.log(i);
    i++;
} while (i <= 5);
```

### Important Difference

```javascript
while (false) {
    console.log("Hello");
}
```

Nothing prints.

But:

```javascript
do {
    console.log("Hello");
} while (false);
```

Output:

```text
Hello
```

Because `do...while` executes once before checking.

---

# 6. `break`

`break` **immediately terminates the loop**.

```javascript
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break;
    }

    console.log(i);
}
```

Output:

```text
1
2
3
4
```

When `i` becomes `5`, the loop stops.

---

# 7. `continue`

`continue` **skips the current iteration** and moves to the next one.

```javascript
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }

    console.log(i);
}
```

Output:

```text
1
2
4
5
```

### Remember

```text
break    → stop the entire loop
continue → skip current iteration
```

---

# 8. Nested Loops

A loop inside another loop is called a **nested loop**.

Example:

```javascript
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(i, j);
    }
}
```

The inner loop completes all its iterations for every iteration of the outer loop.

---

# 9. Loop with Arrays

Loops are commonly used to process array elements.

```javascript
let numbers = [10, 20, 30, 40];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
```

Output:

```text
10
20
30
40
```

### Why `.length`?

```javascript
numbers.length
```

gives the number of elements in the array.

Using it avoids hard-coding the array size.

---

# 10. Choosing a Loop

| Loop         | Best use                              |
| ------------ | ------------------------------------- |
| `for`        | Known/repeated number of iterations   |
| `while`      | Repeat while a condition remains true |
| `do...while` | Code must execute at least once       |

---

## 💡 Tips

* Always make sure your loop can eventually **terminate**.
* In a `for` loop, check the **initialization, condition and update** carefully.
* When looping through an array, commonly use:

  ```javascript
  i < array.length
  ```
* `i++` increases by 1.
* `i--` decreases by 1.
* Be careful with `<=` vs `<` to avoid going outside the array.
* `break` = **exit**.
* `continue` = **skip**.

## ⚡ Quick Revision

```text
for        → initialization → condition → update
while      → condition → execute → repeat
do...while → execute → condition → repeat

break      → completely stop loop
continue   → skip current iteration

Nested loop → loop inside another loop
```

# JavaScript Functions | Sigma Web Development Course — Tutorial #58

## 1. What is a Function?

A **function** is a block of code designed to perform a particular task.

Main benefit: **avoid repeating the same code**.

Instead of writing the same code multiple times:

```javascript
console.log("Hey Harry, you are best");
console.log("Hey Harry, you are best");
console.log("Hey Harry, you are best");
```

Create a function once and call it whenever needed.

---

## 2. Creating a Function

### Syntax

```javascript
function functionName(parameters) {
    // code
}
```

Example:

```javascript
function nice(name) {
    console.log("Hey " + name + ", you are best");
}
```

This only **defines** the function. The code doesn't run until you call it.

---

## 3. Calling a Function

```javascript
nice("Rohan");
nice("Shyam");
```

Output:

```text
Hey Rohan, you are best
Hey Shyam, you are best
```

So:

```text
Function definition
       ↓
     call()
       ↓
Function executes
```

---

# 4. Parameters

**Parameters** are variables written inside the function definition.

```javascript
function nice(name) {
    console.log("Hey " + name);
}
```

Here `name` is a **parameter**.

When calling:

```javascript
nice("Rohan");
```

`"Rohan"` is the **argument** passed to the function.

### Remember

```text
Parameter → variable in function definition
Argument  → actual value passed during function call
```

---

# 5. Multiple Parameters

A function can accept multiple parameters.

```javascript
function sum(a, b) {
    console.log(a + b);
}

sum(5, 10);
```

Output:

```text
15
```

You can have several parameters:

```javascript
function sum(a, b, c) {
    console.log(a + b + c);
}
```

---

# 6. Default Parameters

You can give a parameter a **default value**.

```javascript
function sum(a, b, c = 4) {
    return a + b + c;
}
```

If `c` isn't provided:

```javascript
let result = sum(3, 7);
console.log(result);
```

`c` automatically becomes `4`.

```text
3 + 7 + 4 = 14
```

But if you provide `c`:

```javascript
let result = sum(3, 7, 10);
```

Then `c = 10`, not `4`.

### Important

The supplied argument **overrides** the default value.

---

# 7. `return`

`return` sends a value **back from the function**.

```javascript
function sum(a, b) {
    return a + b;
}
```

Now:

```javascript
let result = sum(5, 10);

console.log(result);
```

Output:

```text
15
```

### `console.log()` vs `return`

```javascript
console.log(a + b);
```

→ displays the result.

```javascript
return a + b;
```

→ gives the result back to the code that called the function.

Example:

```javascript
function sum(a, b) {
    return a + b;
}

let x = sum(10, 20);
let y = x * 2;

console.log(y);
```

Output:

```text
60
```

### Important

Once JavaScript executes `return`, the function **ends immediately**.

```javascript
function test() {
    return 10;

    console.log("Hello"); // ❌ never executes
}
```

---

# 8. Function Without `return`

A function doesn't have to return anything.

```javascript
function greet(name) {
    console.log("Hello " + name);
}
```

If you don't explicitly return a value, the function returns:

```javascript
undefined
```

---

# 9. Arrow Functions

JavaScript also provides a shorter way to write functions: **arrow functions**.

### Normal function

```javascript
function fun1(x) {
    console.log("I am a function", x);
}
```

### Arrow function

```javascript
const fun1 = (x) => {
    console.log("I am an arrow function", x);
};
```

Call it normally:

```javascript
fun1(34);
fun1(56);
fun1(567);
```

---

## 10. Arrow Function Syntax

Basic:

```javascript
const functionName = (parameters) => {
    // code
};
```

For a single parameter, parentheses can be omitted:

```javascript
const square = x => {
    return x * x;
};
```

For a single expression, you can use an **implicit return**:

```javascript
const square = x => x * x;
```

Equivalent to:

```javascript
const square = (x) => {
    return x * x;
};
```

---

# 11. Why Functions are Useful

Functions provide:

* **Reusability** → write once, use many times
* **Less repetition**
* **Better organization**
* **Easier debugging**
* **Modularity** → divide a large program into smaller tasks

Example:

```javascript
function calculateTotal(price, quantity) {
    return price * quantity;
}

let total = calculateTotal(500, 3);
console.log(total);
```

---

## 💡 Important Tips

* A function **doesn't execute just because you define it**; you must call it.
* Parameters act like local variables inside the function.
* Default parameters are used when an argument is **not provided**.
* `return` gives a value back and immediately exits the function.
* Don't confuse `console.log()` with `return`.
* Use functions whenever you notice the **same logic being repeated**.
* Arrow functions are especially common in modern JavaScript.
* Use `const` for an arrow function when you don't need to reassign the function variable.

## ⚡ Quick Revision

```text
Function → reusable block of code

function name(parameters) {
    // code
}

name(arguments);

Parameter → function definition
Argument  → value passed during call

return → sends value back + ends function

Default parameter:
function sum(a, b, c = 4) { ... }

Arrow function:
const fun = (x) => {
    // code
};

Implicit return:
const square = x => x * x;
```

([youtube.com][1])

[1]: https://www.youtube.com/watch?v=Jtc3j4ZNZEQ&utm_source=chatgpt.com "JavaScript Functions | Sigma Web Development Course - Tutorial #58"

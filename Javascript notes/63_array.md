# JavaScript Arrays | Sigma Web Development Course — Tutorial #63

## 1. What is an Array?

An **array** is a collection of multiple values stored in a single variable.

```javascript
let arr = [1, 2, 4, 5, 7];
```

Instead of:

```javascript
let a = 1;
let b = 2;
let c = 4;
```

you can store them together:

```javascript
let arr = [1, 2, 4];
```

Arrays can contain different types of values:

```javascript
let arr = [1, 2, "Harry", true];
```

---

# 2. Creating an Array

### Array literal — most common

```javascript
let fruits = ["Apple", "Banana", "Mango"];
```

### Using `Array()`

```javascript
let arr = new Array(1, 2, 3);
```

Usually, the **array literal `[]`** is preferred because it is simpler.

---

# 3. Array Index

Arrays use **zero-based indexing**.

```javascript
let fruits = ["Apple", "Banana", "Mango"];
```

```text
Apple    Banana    Mango
  0        1         2
```

Access elements:

```javascript
console.log(fruits[0]); // Apple
console.log(fruits[1]); // Banana
console.log(fruits[2]); // Mango
```

---

# 4. Changing Array Elements

Arrays are mutable, so individual elements can be changed.

```javascript
let fruits = ["Apple", "Banana", "Mango"];

fruits[1] = "Orange";

console.log(fruits);
```

Result:

```text
["Apple", "Orange", "Mango"]
```

You can also add an element at a new index:

```javascript
fruits[3] = "Grapes";
```

---

# 5. Array `length`

Use `.length` to find the number of elements.

```javascript
let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits.length);
```

Output:

```text
3
```

Remember:

```text
Last index = length - 1
```

---

# 6. Arrays Can Contain Different Data Types

JavaScript arrays don't require every element to have the same type.

```javascript
let arr = [
    10,
    "Harry",
    true,
    3.14,
    null
];
```

You can even put objects or another array inside an array.

```javascript
let arr = [
    "Harry",
    { age: 20 },
    [1, 2, 3]
];
```

---

# 7. `toString()`

Converts an array into a string.

```javascript
let arr = [1, 2, 3];

console.log(arr.toString());
```

Output:

```text
1,2,3
```

---

# 8. `join()`

`join()` combines array elements into a string using a separator.

```javascript
let arr = ["Harry", "Rohan", "Rahul"];

console.log(arr.join(" - "));
```

Output:

```text
Harry - Rohan - Rahul
```

Examples:

```javascript
arr.join(", ");
arr.join(" ");
arr.join("-");
```

---

# 9. `pop()`

Removes the **last element** from an array.

```javascript
let arr = [1, 2, 3, 4];

arr.pop();

console.log(arr);
```

Result:

```text
[1, 2, 3]
```

`pop()` also **returns the removed element**.

```javascript
let removed = arr.pop();

console.log(removed);
```

---

# 10. `push()`

Adds an element to the **end** of an array.

```javascript
let arr = [1, 2, 3];

arr.push(4);

console.log(arr);
```

Result:

```text
[1, 2, 3, 4]
```

`push()` returns the **new length** of the array.

```javascript
let length = arr.push(5);

console.log(length);
```

---

# 11. `shift()`

Removes the **first element**.

```javascript
let arr = [1, 2, 3];

arr.shift();

console.log(arr);
```

Result:

```text
[2, 3]
```

---

# 12. `unshift()`

Adds an element to the **beginning**.

```javascript
let arr = [2, 3];

arr.unshift(1);

console.log(arr);
```

Result:

```text
[1, 2, 3]
```

### Easy memory trick

```text
push()    → add to END
pop()     → remove from END

unshift() → add to START
shift()   → remove from START
```

---

# 13. `delete`

You can use `delete` to remove an array element:

```javascript
let arr = [1, 2, 3, 4];

delete arr[1];

console.log(arr);
```

The element at index `1` is removed, but the position remains empty.

Conceptually:

```text
[1, empty, 3, 4]
```

⚠️ **Important:** `delete` does **not** shift the remaining elements and does not reduce `.length`.

So for normal array removal, `splice()` is generally more appropriate.

---

# 14. `concat()`

Combines arrays.

```javascript
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let arr3 = arr1.concat(arr2);

console.log(arr3);
```

Output:

```text
[1, 2, 3, 4, 5, 6]
```

You can concatenate multiple arrays:

```javascript
let arr4 = arr1.concat(arr2, [7, 8]);
```

`concat()` creates/returns a combined array; it doesn't modify the original arrays.

---

# 15. `sort()`

Sorts the elements of an array.

```javascript
let arr = [5, 2, 8, 1, 3];

arr.sort();

console.log(arr);
```

⚠️ **Very important:** JavaScript's default `sort()` compares elements as **strings**, not numerically.

```javascript
let arr = [1, 20, 3, 100];

arr.sort();

console.log(arr);
```

This can produce:

```text
[1, 100, 20, 3]
```

For numerical ascending order:

```javascript
arr.sort((a, b) => a - b);
```

For descending:

```javascript
arr.sort((a, b) => b - a);
```

---

# 16. `splice()`

`splice()` can **add, remove, or replace** elements at any position.

### Syntax

```javascript
array.splice(start, deleteCount, item1, item2, ...);
```

Example — remove:

```javascript
let arr = [1, 2, 3, 4];

arr.splice(1, 2);

console.log(arr);
```

Result:

```text
[1, 4]
```

Starting at index `1`, it removes `2` elements.

### Add

```javascript
let arr = [1, 4];

arr.splice(1, 0, 2, 3);

console.log(arr);
```

Result:

```text
[1, 2, 3, 4]
```

### Replace

```javascript
let arr = [1, 2, 4];

arr.splice(2, 1, 3);

console.log(arr);
```

Result:

```text
[1, 2, 3]
```

---

# 17. `slice()`

`slice()` extracts part of an array **without changing the original array**.

```javascript
let arr = [1, 2, 3, 4, 5];

let newArr = arr.slice(1, 4);

console.log(newArr);
```

Output:

```text
[2, 3, 4]
```

Just like string `slice()`:

```text
start → included
end   → excluded
```

### Difference: `slice()` vs `splice()`

| `slice()`               | `splice()`                        |
| ----------------------- | --------------------------------- |
| Extracts/copies portion | Adds/removes/replaces             |
| Original unchanged      | Original modified                 |
| `slice(start, end)`     | `splice(start, deleteCount, ...)` |

---

# 18. Arrays with Loops

Arrays are commonly processed using loops.

```javascript
let arr = [10, 20, 30, 40];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
```

Output:

```text
10
20
30
40
```

Using `.length` means the loop automatically works if the array size changes.

---

# ⭐ Important Array Methods

```text
push()     → add at end
pop()      → remove from end
shift()    → remove from beginning
unshift()  → add at beginning
splice()   → add/remove/replace
slice()    → extract portion
concat()   → combine arrays
sort()     → sort elements
join()     → convert/combine into string
toString() → array → string
```

## 💡 Tips & Common Mistakes

* Array indexes start at **0**.
* Last index = `array.length - 1`.
* Arrays are **mutable**.
* `.length` is a property, not a function.
* `push()` and `unshift()` return the **new array length**.
* `pop()` and `shift()` return the **removed element**.
* `delete arr[index]` leaves an empty slot; it doesn't shrink the array.
* `sort()` has a **lexicographic/string comparison default**—use `(a, b) => a - b` for numeric ascending order.
* `slice()` doesn't modify the original array.
* `splice()` **does modify** the original array.
* Don't confuse:

  ```text
  slice → copy/extract
  splice → modify
  ```

## ⚡ Quick Revision

```text
Array:
let arr = [10, 20, 30];

Index:
arr[0] → 10

Length:
arr.length

Add:
push()       → end
unshift()    → beginning

Remove:
pop()        → end
shift()      → beginning

Modify:
splice()

Copy/extract:
slice()

Combine:
concat()

String:
join()
toString()

Sort:
sort()
sort((a,b) => a-b)  → numeric ascending
```

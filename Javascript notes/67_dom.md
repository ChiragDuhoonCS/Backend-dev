# JavaScript DOM — Children, Parent & Sibling Nodes

### Sigma Web Development Course — Tutorial #67

[Watch the original Tutorial #67](https://www.youtube.com/watch?v=_8o_BiLAgQM&utm_source=chatgpt.com)

## 1. DOM Tree & Relationships

In the DOM, elements/nodes have relationships:

```text
              parent
                │
        ┌───────┼───────┐
      child    child    child
                │
          ┌─────┴─────┐
       sibling      sibling
```

* **Parent** → element directly above another element.
* **Child** → element directly inside another element.
* **Siblings** → elements having the same parent.
* These relationships are used to **traverse/navigate the DOM**. ([Scribd][1])

---

# 2. `parentNode`

Gets the **parent node** of an element.

```javascript
let cont = document.querySelector(".container");

console.log(cont.parentNode);
```

Example:

```html
<div class="container">
    <p>Hello</p>
</div>
```

For the `<p>`:

```javascript
p.parentNode
```

gives:

```html
<div class="container">...</div>
```

### `parentElement`

Similar to `parentNode`, but specifically returns the **parent element**.

```javascript
console.log(p.parentElement);
```

### Difference

| Property        | Returns        |
| --------------- | -------------- |
| `parentNode`    | Parent node    |
| `parentElement` | Parent element |

---

# 3. `childNodes`

Returns a **NodeList containing all child nodes**.

```javascript
let cont = document.querySelector(".container");

console.log(cont.childNodes);
```

⚠️ Important:

`childNodes` includes **elements + text nodes + comments**.

For example:

```html
<div>
    <p>Hello</p>
    <p>World</p>
</div>
```

The whitespace/newlines between tags can also become **text nodes**.

So:

```javascript
cont.childNodes
```

may contain:

```text
text
<p>
text
<p>
text
```

This is an important reason why `childNodes` and `children` behave differently. ([Scribd][1])

---

# 4. `children`

Returns the **element children only**.

```javascript
console.log(cont.children);
```

Unlike `childNodes`, it ignores text nodes and comments.

Example:

```html
<div class="container">
    <p>One</p>
    <p>Two</p>
</div>
```

```javascript
cont.children
```

returns the two `<p>` elements.

### Remember

```text
childNodes → all types of child nodes
children   → only child elements
```

---

# 5. `firstChild`

Returns the **first child node**.

```javascript
console.log(cont.firstChild);
```

⚠️ Because it works with **nodes**, the first result can be a text node caused by whitespace/newlines.

---

# 6. `lastChild`

Returns the **last child node**.

```javascript
console.log(cont.lastChild);
```

Again, it can return a text node.

---

# 7. `firstElementChild`

Returns the **first child element**.

```javascript
console.log(cont.firstElementChild);
```

Unlike `firstChild`, it ignores text nodes/comments.

Example:

```html
<div class="container">
    <p>First</p>
    <p>Second</p>
</div>
```

```javascript
cont.firstElementChild
```

→ `<p>First</p>`

---

# 8. `lastElementChild`

Returns the **last child element**.

```javascript
console.log(cont.lastElementChild);
```

Example:

```html
<div class="container">
    <p>First</p>
    <p>Last</p>
</div>
```

```javascript
cont.lastElementChild
```

→ `<p>Last</p>`

---

# 9. Siblings

**Siblings** are nodes/elements that have the same parent.

```html
<div>
    <p>One</p>
    <p>Two</p>
    <p>Three</p>
</div>
```

Here:

```text
<p>One</p>
<p>Two</p>
<p>Three</p>
```

are siblings.

---

## `nextSibling`

Returns the **next node** at the same level.

```javascript
console.log(element.nextSibling);
```

⚠️ It can return a text node because whitespace is also a node.

---

## `nextElementSibling`

Returns the **next sibling element**.

```javascript
console.log(element.nextElementSibling);
```

Example:

```html
<p id="one">One</p>
<p id="two">Two</p>
```

```javascript
let one = document.querySelector("#one");

console.log(one.nextElementSibling);
```

Output:

```html
<p id="two">Two</p>
```

### Similarly

```javascript
element.previousSibling
```

→ previous node

```javascript
element.previousElementSibling
```

→ previous sibling element

---

# 10. Node vs Element — VERY IMPORTANT

This is the main thing to remember from this lecture:

| Node-based        | Element-based            |
| ----------------- | ------------------------ |
| `parentNode`      | `parentElement`          |
| `childNodes`      | `children`               |
| `firstChild`      | `firstElementChild`      |
| `lastChild`       | `lastElementChild`       |
| `nextSibling`     | `nextElementSibling`     |
| `previousSibling` | `previousElementSibling` |

### Easy memory trick

```text
Node      → can include text/comments/elements
Element   → HTML elements only
```

So if whitespace is causing unexpected results:

```javascript
firstChild
```

may give a text node, while:

```javascript
firstElementChild
```

gives the actual first HTML element.

---

# 11. `nodeName`

`nodeName` gives the **name of the current node**.

```javascript
console.log(element.nodeName);
```

For:

```html
<div class="container"></div>
```

it can return:

```text
DIV
```

For a text node, it identifies it as a text node rather than an HTML element. ([Gist][2])

---

# 12. DOM Traversal Example

Suppose:

```html
<div class="container">
    <div>Box 1</div>
    <div>Box 2</div>
    <div>Box 3</div>
</div>
```

JavaScript:

```javascript
let cont = document.querySelector(".container");

console.log(cont.children);
console.log(cont.firstElementChild);
console.log(cont.lastElementChild);
```

You can move around the DOM:

```text
             .container
                  │
       ┌──────────┼──────────┐
       ↓          ↓          ↓
     Box 1      Box 2      Box 3
                  │
           next sibling → Box 3
           previous ← Box 1
```

This is called **DOM traversal** — moving from one node/element to another using their relationships.

---

## ⭐ Practical Tips

* Prefer **`children`** when you specifically want HTML child elements.
* Prefer **`firstElementChild` / `lastElementChild`** when you don't want whitespace text nodes.
* Remember that `childNodes` includes text and comments.
* `nextSibling` can unexpectedly return a text node because of formatting whitespace.
* For normal HTML navigation, `nextElementSibling` and `previousElementSibling` are often more convenient.
* Don't confuse **node** with **element**: every element is a node, but not every node is an element.

---

# 🧠 Quick Revision

```text
PARENT
parentNode
parentElement

CHILDREN
childNodes          → all child nodes
children            → child elements only
firstChild          → first node
lastChild           → last node
firstElementChild   → first element
lastElementChild    → last element

SIBLINGS
nextSibling
previousSibling
nextElementSibling
previousElementSibling

OTHER
nodeName → name of node
```

### 🔥 One-line memory

**`Node` = elements + text + comments; `Element` = HTML elements only.**

[1]: https://www.scribd.com/document/698694791/Complete-A-Z-Javascript-notes-1682741974?utm_source=chatgpt.com "JavaScript Overview and Key Concepts | PDF | Java Script | Dynamic Web Page"
[2]: https://gist.github.com/bgoonz/213503c2cad5be1696da3069c5d5d378?utm_source=chatgpt.com "medium markdown · GitHub"

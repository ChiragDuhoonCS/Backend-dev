# Document Object Model (DOM) in JavaScript — Tutorial #66

## 1. What is DOM?

**DOM = Document Object Model**

When a browser loads an HTML page, it converts the HTML document into a **tree-like structure of objects**.

JavaScript can then use the DOM to:

* Access HTML elements
* Change their content
* Change styles
* Add/remove elements
* Change attributes
* Respond to user actions

### HTML → DOM Tree

```text
Document
   │
   └── html
       ├── head
       │    └── title
       └── body
            ├── h1
            ├── p
            └── div
```

The DOM represents HTML as **nodes/objects** that JavaScript can manipulate.

---

# 2. `document` Object

JavaScript provides the `document` object to interact with the webpage.

```javascript
console.log(document);
```

`document` represents the current HTML document.

Example:

```javascript
document.title
```

gets the page title.

You can also change it:

```javascript
document.title = "My Website";
```

---

# 3. Selecting Elements

One of the most important parts of DOM manipulation is **finding HTML elements**.

Suppose:

```html
<h1 id="title">Hello World</h1>
```

JavaScript can select it using its ID.

### `getElementById()`

```javascript
let title = document.getElementById("title");

console.log(title);
```

Then you can modify it:

```javascript
title.innerHTML = "Hello Harry";
```

---

# 4. `getElementsByClassName()`

If elements have a class:

```html
<p class="red">One</p>
<p class="red">Two</p>
```

Select them:

```javascript
let elements = document.getElementsByClassName("red");
```

This returns a **collection** of matching elements.

You can access an individual element by index:

```javascript
console.log(elements[0]);
console.log(elements[1]);
```

---

# 5. `getElementsByTagName()`

Select elements by their HTML tag:

```javascript
let paragraphs = document.getElementsByTagName("p");
```

This selects all `<p>` elements.

Access an individual element:

```javascript
console.log(paragraphs[0]);
```

---

# 6. `querySelector()`

`querySelector()` selects the **first element** matching a CSS selector.

### ID

```javascript
document.querySelector("#title");
```

### Class

```javascript
document.querySelector(".red");
```

### Tag

```javascript
document.querySelector("p");
```

You can use more complex CSS selectors too:

```javascript
document.querySelector("div p");
```

```javascript
document.querySelector("div > p");
```

### Important

```javascript
querySelector()
```

→ returns **first matching element**.

---

# 7. `querySelectorAll()`

Selects **all elements** matching a CSS selector.

```javascript
let elements = document.querySelectorAll(".red");
```

You can access them by index:

```javascript
console.log(elements[0]);
console.log(elements[1]);
```

It returns a **NodeList**.

---

# 8. Changing HTML Content

### `innerHTML`

Used to get or change the HTML inside an element.

```html
<div id="box">Hello</div>
```

```javascript
let box = document.getElementById("box");

box.innerHTML = "Hello Harry";
```

The content changes to:

```text
Hello Harry
```

It can also insert HTML:

```javascript
box.innerHTML = "<b>Hello</b>";
```

---

# 9. `innerText`

`innerText` deals with the **visible text** inside an element.

```javascript
box.innerText = "Hello World";
```

### `innerHTML` vs `innerText`

```text
innerHTML → HTML markup + content
innerText  → text
```

Example:

```javascript
box.innerHTML = "<b>Hello</b>";
```

→ displays **bold Hello**

```javascript
box.innerText = "<b>Hello</b>";
```

→ displays the literal text:

```text
<b>Hello</b>
```

---

# 10. `textContent`

Another way to access/change text:

```javascript
box.textContent = "Hello World";
```

Difference to remember:

```text
innerHTML   → parses HTML
innerText   → visible/rendered text
textContent → text content of the node
```

For ordinary text changes, `textContent` is often a straightforward choice.

---

# 11. Changing CSS with JavaScript

JavaScript can modify an element's style using `.style`.

```javascript
let box = document.querySelector("#box");

box.style.color = "red";
box.style.backgroundColor = "yellow";
```

### CSS property naming

CSS:

```css
background-color
```

JavaScript:

```javascript
backgroundColor
```

CSS hyphenated properties generally become **camelCase** when accessed through `.style`.

Examples:

```javascript
element.style.fontSize = "30px";
element.style.marginTop = "20px";
element.style.backgroundColor = "blue";
```

---

# 12. Changing Attributes

Use:

```javascript
setAttribute()
```

Example:

```html
<img id="image">
```

```javascript
let image = document.querySelector("#image");

image.setAttribute("src", "image.jpg");
```

### Get an attribute

```javascript
image.getAttribute("src");
```

### Remove an attribute

```javascript
image.removeAttribute("src");
```

---

# 13. `className`

You can access or replace an element's classes using:

```javascript
element.className
```

Example:

```javascript
let box = document.querySelector("#box");

box.className = "red";
```

This replaces the element's existing class value.

---

# 14. `classList`

`classList` provides methods for working with individual classes.

### Add

```javascript
element.classList.add("red");
```

### Remove

```javascript
element.classList.remove("red");
```

### Toggle

```javascript
element.classList.toggle("red");
```

`toggle()`:

```text
class exists     → remove it
class doesn't    → add it
```

### Check

```javascript
element.classList.contains("red");
```

Returns:

```text
true / false
```

---

# 15. Creating Elements

JavaScript can create new HTML elements.

```javascript
let div = document.createElement("div");
```

Now `div` exists as a DOM element, but it isn't yet attached to the page.

Add content:

```javascript
div.innerHTML = "Hello World";
```

---

# 16. Adding Elements to the Page

Use:

```javascript
document.body.append(div);
```

Now the newly created element appears inside `<body>`.

Another common method:

```javascript
parent.appendChild(child);
```

Example:

```javascript
let div = document.createElement("div");

div.innerText = "Hello";

document.body.appendChild(div);
```

---

# 17. Removing Elements

An element can be removed using:

```javascript
element.remove();
```

Example:

```javascript
let box = document.querySelector("#box");

box.remove();
```

---

# 18. DOM Navigation

The DOM allows you to move between related nodes/elements.

### Parent

```javascript
element.parentElement
```

### Children

```javascript
element.children
```

### First child

```javascript
element.firstElementChild
```

### Last child

```javascript
element.lastElementChild
```

### Next sibling

```javascript
element.nextElementSibling
```

### Previous sibling

```javascript
element.previousElementSibling
```

Example:

```text
        parent
           │
     ┌─────┼─────┐
   child1 child2 child3
             ↑
          element
```

For `child2`:

```javascript
element.parentElement
element.previousElementSibling
element.nextElementSibling
```

---

# 19. DOM vs HTML

```text
HTML
 ↓
Browser parses HTML
 ↓
DOM Tree
 ↓
JavaScript manipulates DOM
 ↓
Webpage changes
```

**HTML** is the markup/source structure.

**DOM** is the browser's object representation of that document that JavaScript can manipulate.

---

## ⭐ Important Methods to Remember

| Method / Property          | Purpose                  |
| -------------------------- | ------------------------ |
| `getElementById()`         | Select by ID             |
| `getElementsByClassName()` | Select by class          |
| `getElementsByTagName()`   | Select by tag            |
| `querySelector()`          | First CSS-selector match |
| `querySelectorAll()`       | All CSS-selector matches |
| `innerHTML`                | Get/set HTML             |
| `innerText`                | Get/set visible text     |
| `textContent`              | Get/set text content     |
| `style`                    | Change inline CSS        |
| `setAttribute()`           | Set attribute            |
| `getAttribute()`           | Get attribute            |
| `removeAttribute()`        | Remove attribute         |
| `classList.add()`          | Add class                |
| `classList.remove()`       | Remove class             |
| `classList.toggle()`       | Add/remove class         |
| `createElement()`          | Create element           |
| `append()`                 | Add element/content      |
| `remove()`                 | Remove element           |

---

## 💡 Tips & Common Mistakes

* `querySelector("#id")` → use `#` for ID.
* `querySelector(".class")` → use `.` for class.
* `querySelector()` returns **one (first) match**.
* `querySelectorAll()` returns **all matches**.
* `.style.backgroundColor`, not `.style.background-color`.
* `innerHTML` can interpret HTML; don't insert untrusted user input into it.
* `className = ...` can replace all existing classes; `classList` is better when you only want to add/remove one.
* `createElement()` creates the element but **doesn't automatically put it on the page**—you need to append it.
* DOM manipulation is the foundation for making static HTML pages **dynamic with JavaScript**.

## ⚡ Quick Revision

```text
DOM = Document Object Model

document
   ↓
HTML → DOM Tree
          ↓
     JavaScript
          ↓
   Manipulate webpage

Select:
getElementById()
getElementsByClassName()
getElementsByTagName()
querySelector()
querySelectorAll()

Change:
innerHTML
innerText
textContent
style

Classes:
classList.add()
classList.remove()
classList.toggle()

Create:
createElement()

Add:
append()
appendChild()

Remove:
remove()

Navigate:
parentElement
children
firstElementChild
lastElementChild
nextElementSibling
previousElementSibling
```

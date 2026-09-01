# Introduction to JavaScript & Installing Node.js | Sigma Web Development Course — Tutorial #54

## 1. What is JavaScript?

* **JavaScript (JS)** is a programming language used to make websites **interactive and dynamic**.
* HTML → structure
* CSS → styling
* JavaScript → behavior/functionality

Examples of things JS can do:

* Button clicks
* Form validation
* Animations/interactions
* Changing HTML/CSS dynamically
* Fetching data from servers/APIs
* Building web applications

---

## 2. JavaScript vs Java

**JavaScript and Java are different languages.**

* JavaScript → mainly used for web development
* Java → separate programming language commonly used for backend, Android, enterprise applications, etc.
* The names are similar, but they are not the same language.

---

## 3. Where JavaScript Runs

### In the Browser

Browsers such as Chrome have a **JavaScript engine** that executes JS.

Example:

```html
<script>
    alert("Hello World");
</script>
```

The browser reads and executes the JavaScript.

### Outside the Browser

JavaScript can also run outside the browser using **Node.js**.

This allows JS to be used for:

* Backend/server-side development
* Command-line programs
* Tools and scripts
* APIs

---

# 4. What is Node.js?

**Node.js** is a runtime environment that allows JavaScript to run **outside the browser**.

Normally:

```text
JavaScript → Browser → JS Engine
```

With Node.js:

```text
JavaScript → Node.js → JS Engine → Computer
```

Node.js is built using the **V8 JavaScript engine**.

---

# 5. Why Node.js?

Before Node.js, JavaScript was mainly associated with browser-based programming.

Node.js made it possible to use JavaScript for **server-side programming** as well.

So you can use JavaScript for:

```text
Frontend
   ↓
JavaScript

Backend
   ↓
JavaScript + Node.js
```

This makes JavaScript useful across the **full stack**.

---

# 6. Installing Node.js

After installing Node.js, verify the installation from the terminal.

### Check Node version

```bash
node -v
```

or

```bash
node --version
```

### Check npm

```bash
npm -v
```

**npm = Node Package Manager**

It is used to install and manage JavaScript/Node.js packages.

---

# 7. Running JavaScript with Node

Create a file:

```text
script.js
```

Write:

```javascript
console.log("Hello World");
```

Run it from the terminal:

```bash
node script.js
```

Output:

```text
Hello World
```

So:

```text
script.js
   ↓
node script.js
   ↓
Node.js executes JavaScript
   ↓
Output
```

---

## 8. JavaScript in HTML

JavaScript can be included using the `<script>` tag:

```html
<script>
    console.log("Hello World");
</script>
```

Or using an external JS file:

```html
<script src="script.js"></script>
```

External JavaScript is generally better for larger projects because HTML and JS remain separated.

---

## 💡 Tips

* **JavaScript ≠ Java**.
* **Node.js is not a programming language**; it is a runtime environment for JavaScript.
* `node -v` → check Node.js version.
* `npm -v` → check npm version.
* `node filename.js` → run a JavaScript file with Node.js.
* `console.log()` → commonly used to print/debug values.

## ⚡ Quick Revision

```text
JavaScript → Programming language
Node.js → Runs JS outside browser
V8 → JavaScript engine used by Node.js
npm → Node Package Manager
node file.js → Execute JS file
<script> → Add JS to HTML
```

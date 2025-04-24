import { useState } from 'react'
import './App.css'

interface Question {
  id: number;
  question: string;
  answer: string;
  codeExample?: string;
}

function App() {
  const [activeId, setActiveId] = useState<number | null>(null);

  const questions: Question[] = [
    {
      id: 1,
      question: "1. What is CSS and why is it used?",
      answer: "CSS is used to style HTML elements and control the layout of web pages. It allows developers to separate content from design and make websites look more attractive and responsive."
    },
    {
      id: 2,
      question: "2. What are the different types of CSS?",
      answer: "There are three types of CSS: Inline (inside the element), Internal (inside the <style> tag), and External (separate CSS file linked to HTML).",
      codeExample: ` Inline CSS Example:
<p style="color: blue;">Hello</p>

Internal CSS Example:
<head>
  <style>
    p { color: blue; }
  </style>
</head>

External CSS Example:
<link rel="stylesheet" href="style.css">
`
    },
    {
      id: 3,
      question: "3. What is the difference between classes and IDs in CSS?",
      answer: "Classes are reusable and used with a dot (.), while IDs are unique and used with a hash (#). IDs have higher specificity than classes.",
      codeExample: `Example:
<!-- Class Example -->
<p class="highlight">This is a paragraph.</p>

<!-- ID Example -->
<p id="unique">This is another paragraph.</p>

CSS:
.highlight {
  color: blue;
}

#unique {
  color: red;
}
`
    },
    {
      id: 4,
      question: "4. What is the Box Model in CSS?",
      answer: "The box model in CSS includes content, padding, border, and margin. It helps control the spacing and layout of elements on a page.",
      codeExample: `📦 The Box Model has 4 parts:
Content – The actual text or image.

Padding – Space inside the box, around the content.

Border – The line around padding (optional).

Margin – Space outside the box, between elements.

+--------------------------+
|         Margin           |
|  +--------------------+  |
|  |      Border        |  |
|  |  +-------------+   |  |
|  |  |  Padding    |   |  |
|  |  | +---------+ |   |  |
|  |  | | Content | |   |  |
|  |  | +---------+ |   |  |
|  |  +-------------+   |  |
|  +--------------------+  |
+--------------------------+
`
    },
    {
      id: 5,
      question: "5. What is the difference between relative, absolute, fixed, and sticky positioning?",
      answer: "relative: Positions the element relative to its normal position. \nabsolute: Positions the element relative to the position of its first parent. \nfixed: Positions the element relative to the browser window. \nsticky: Positions the element based on the user's scroll position. \nstatic: The default position, top, left, right, and bottom properties have no effect. The element stays in the normal flow.",
      codeExample: `relative example:
position: relative;
top: 10px;

absolute example:
position: absolute;
top: 0;
right: 0;

fixed example:
position: fixed;
bottom: 0;

sticky example:
position: sticky;
top: 0;
`
    },
    {
      id: 6,
      question: "6. What are pseudo-classes and pseudo-elements in CSS?",
      answer: " Pseudo-classes are used to define the special state of an element, while pseudo-elements are used to style a specific part of an element. \nPseudo-classes use : \npseudo-elements use :: ",
      codeExample: `
/* Pseudo-class example */
a:hover {
  color: blue;
}

/* Pseudo-element example */
p::first-line {
  font-weight: bold;
}


✅ Pseudo-classes (:)
:hover
:active
:focus
:visited
:link
:first-child
:last-child
:nth-child()
:checked
:disabled
:required
:not()
:empty



✅ Pseudo-elements (::)
::before
::after
::first-letter
::first-line
::selection
::placeholder
::backdrop
::marker`
    },
    {
      id: 7,
      question: "7. What is the difference between em, rem, %, and px units in CSS?",
      answer: "px is fixed size. \nem is based on the parent font size. \nrem is based on the root <html> font size. \n% is relative to the parent element’s size.",
      codeExample: `✅ px – Pixels (Absolute Unit)
Fixed size

Doesn’t change with screen size or parent styles
🔸 Example: font-size: 16px;

✅ em – Relative to Parent Element
Size is based on the parent’s font size
🔸 Example: If parent is 16px, then 2em = 32px

✅ rem – Relative to Root Element (html)
Size is based on the <html> element’s font size
🔸 Example: If html { font-size: 16px; }, then 2rem = 32px

✅ % – Percentage
Relative to the parent element’s size (width, height, etc.)
🔸 Example: width: 50% makes element half as wide as its parent`
    },
    {
      id: 8,
      question: "8. How does the z-index property work in CSS?",
      answer: "z-index is used to control the front-back position of overlapping elements. It only works on positioned elements (relative, absolute, fixed).",
      codeExample: `
<div style="position: absolute; z-index: 1; background: red; width: 100px; height: 100px;"></div>
<div style="position: absolute; z-index: 2; background: blue; width: 100px; height: 100px; left: 20px; top: 20px;"></div>

`
    },
    {
      id: 9,
      question: "9. What is Flexbox and how does it work?",
      answer: " Flexbox is a CSS layout model that allows for responsive design. It provides a way to align and distribute space among items in a container, even when their size is unknown.",
      codeExample: `
<div class="flex-container">
  <div class="flex-item">Item 1</div>
  <div class="flex-item">Item 2</div>
  <div class="flex-item">Item 3</div>
</div>

<style>
.flex-container {
  display: flex;
  justify-content: space-between; /* Align items */
  align-items: center; /* Center items vertically */
  flex-direction: row; /* Row or column */
  flex-wrap: wrap; /* Wrap items if needed */
}`
    },
    {
      id: 10,
      question: "10. What is CSS Grid and how does it work?",
      answer: "CSS Grid is a two-dimensional layout system that allows for complex layouts. It uses rows and columns to create a grid structure.",
      codeExample: `
<div class="grid-container">
  <div class="grid-item">Item 1</div>
  <div class="grid-item">Item 2</div>
  <div class="grid-item">Item 3</div>
  <div class="grid-item">Item 4</div>
</div>

<style>
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 equal columns */
  grid-template-rows: repeat(2, 1fr); /* 2 equal rows */
  gap: 10px; /* Space between items */
}

1fr gets 1 part
First column = 100px (1 part)`
    },
    {
      id: 11,
      question: "11. What are media queries in CSS?",
      answer: "Media queries in CSS are used to make a website responsive. They apply different styles based on screen size, resolution, or device type. For example, you can change layout or font size for mobile screens.",
      codeExample: `
@media (max-width: 600px) {
  body {
    background-color: lightblue;
    }
  h1 {
    font-size: 20px;
    }
}`
    },
    {
      id: 12,
      question: "12. How do you make a website responsive using CSS?",
      answer: "To make a website responsive using CSS, I use media queries, flexbox, grid, and relative units like %, em, or rem. \nThese tools help adjust the layout and design based on the screen size, so the website looks good on all devices — like phones, tablets, and desktops.",
    },
    {
      id: 13,
      question: "13. What is the difference between visibility: hidden and display: none?",
      answer: "**visibility: hidden** hides the element, but it still takes up space on the page. \n **display: none** hides the element and it doesn’t take up any space — it’s like it’s not there.",
      codeExample: `
<!DOCTYPE html>
<html>
<head>
  <style>
    .hidden-box {
      visibility: hidden;
    }

    .none-box {
      display: none;
    }

    .box {
      width: 100px;
      height: 100px;
      background-color: lightblue;
      margin-bottom: 10px;
    }
  </style>
</head>
<body>

  <div class="box">Box 1</div>

  <div class="box hidden-box">Box 2 (hidden)</div>

  <div class="box none-box">Box 3 (none)</div>

  <div class="box">Box 4</div>

</body>
</html>
`
    },
    {
      id: 14,
      question: "14. What are CSS transitions and animations?",
      answer: "CSS Transitions allow smooth changes from one style to another over time (like color or size changes). \nCSS Animations let you create more complex effects with keyframes, like moving or fading elements repeatedly.",
      codeExample: `
Transition Example:
<style>
.box {
  width: 100px;
  height: 100px;
  background: blue;
  transition: background 0.5s ease;
}

.box:hover {
  background: red;
}
</style>

<div class="box"></div>


Animation Example:
<style>
@keyframes moveRight {
  from { transform: translateX(0); }
  to { transform: translateX(200px); }
}

.box {
  width: 100px;
  height: 100px;
  background: green;
  animation: moveRight 2s linear infinite;
}
</style>

<div class="box"></div>
`
    },
    {
      id: 15,
      question: "15. How do you center a div using CSS?",
      answer: "",
      codeExample: `
.parent {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* full height */
}


<div class="parent">
  <div class="child">Centered</div>
</div>
`
    },
    {
      id: 16,
      question: "16. How does inheritance work in CSS?",
      answer: "Inheritance in CSS means some properties automatically pass from a parent element to its child elements.",
      codeExample: `Example:
<div style="color: red;">
  <p>This text is red</p>
</div>

The <p> inherits the color from the <div> without setting it directly.

Common inherited properties:
color

font-family

font-size

visibility

line-height

`
    },
    {
      id: 17,
      question: "17. What is !important in CSS?",
      answer: "Overrides all other styles, no matter the specificity.",
      codeExample: `Example:
p {
  color: blue;
}

p {
  color: red !important;
}

 The paragraph will be red, because !important forces it, even though blue was written first.
 
⚠️ Note:
Use !important only when necessary — too much can make your CSS hard to manage.`
    },
    {
      id: 18,
      question: "18. What is the use of clip-path in CSS?",
      answer: "clip-path is used to crop elements into different shapes like circles, polygons, or custom designs without needing images.",
      codeExample: `Example:
.square {
  width: 200px;
  height: 200px;
  background: orange;
  clip-path: circle(50%);
}

Common shapes:
circle() – for circles

ellipse() – for ovals

polygon() – for custom shapes

inset() – for rectangles`
    },
    {
      id: 19,
      question: "19. What is a CSS preprocessor?",
      answer: "A CSS preprocessor like SASS lets us write cleaner, reusable, and more organized CSS using variables and nesting. It compiles into normal CSS for the browser.",
      codeExample: ` Example (SASS/SCSS):
scss
$main-color: blue;

.button {
  color: $main-color;
  padding: 10px;
}

This compiles to:
.button {
  color: blue;
  padding: 10px;
}
`
    },
    {
      id: 20,
      question: "20. What is the use of the :nth-child() selector in CSS?",
      answer: "The :nth-child() selector is used to select one or more elements based on their position (index) in a parent element.",
      codeExample: `Example:
html
<ul>
  <li>Item 1</li>  <!-- 1st -->
  <li>Item 2</li>  <!-- 2nd -->
  <li>Item 3</li>  <!-- 3rd -->
  <li>Item 4</li>  <!-- 4th -->
</ul>

css
li:nth-child(2) {
  color: red;  /* Only Item 2 */
}

li:nth-child(odd) {
  background: lightgray;  /* Item 1 and 3 */
}

li:nth-child(2n) {
  font-weight: bold;  /* Item 2 and 4 */
}


✅ Select every 3rd paragraph
p:nth-child(3n) {
  font-weight: bold;
}
`
    },
    {
      id: 21,
      question: "21. How do you apply styles to only one specific element on a page?",
      answer: "To style one specific element, I use an id selector with #, because IDs are unique and apply styles only to that element.",
      codeExample: `Example:
<p id="special">This is a special paragraph.</p>

#special {
  color: blue;
  font-weight: bold;
}
`
    },
    {
      id: 22,
      question: "22. What is the object-fit property used for?",
      answer: "The object-fit property is used to control how an image or video fits inside its container (like a div).",
      codeExample: `
<img src="image.jpg" style="width: 300px; height: 200px; object-fit: cover;">



cover: Fills the container, cropping if needed.

contain: Fits the whole image without cropping.

fill: Stretches the image to fill (might distort).

none: Shows image at original size.

scale-down: Chooses between none or contain, whichever is smaller.
`
    },
    {
      id: 23,
      question: "23. what is container?",
      answer: "A container is an element used to group other elements together. It is mainly used for layout and styling purposes.",
      codeExample: `<div class="container">
  <h1>Hello</h1>
  <p>This is inside the container</p>
</div>

Here, the <div class="container"> is the container that holds the <h1> and <p> elements.`
    },
    {
      id: 24,
      question: "24. what is cascading?",
      answer: "The cascade in CSS decides which styles are applied when there are conflicts (i.e., multiple styles for the same element). \n\nIt follows three main rules: \n\nImportance \n\tStyles marked with !important will override others. \n\nSpecificity \n\tMore specific selectors (like #id) override less specific ones (like div or .class). \n\nSource Order \n\tIf the above are the same, the last defined style in the code wins.",
      codeExample: `Selector               |   Specificity
p                     ->   Low
.class                ->   Medium
#id                   ->   High
style="" (inline CSS) ->   Highest

example:
p { color: blue; }
#myPara { color: red; }  /* this one wins */


p {
  color: blue !important;
}
#myPara {
  color: red;
}
Blue wins, because of !important.`
    },
    {
      id: 25,
      question: "25. How can you optimize CSS for performance?",
      answer: "To optimize CSS for performance, we write clean and minimal code, avoid unused styles, use shorthand properties, reduce specificity, combine files, and minify CSS.",
      codeExample: `Remove unused CSS – Don’t keep styles that aren’t used on your site.

Minify CSS – Compress CSS files to reduce size (.min.css).

Use shorthand properties – Like margin: 10px 20px; instead of writing each side separately.

Avoid deep selectors – Keep selectors simple and avoid long chains like div ul li a.

Combine files – Use fewer CSS files to reduce HTTP requests.

Use external CSS – Instead of writing styles inside HTML (inline styles), link CSS externally.

Use CSS tools – Like PurgeCSS or PostCSS for optimization.

Use caching – Let the browser cache your CSS file to load it faster next time.`
    },
    {
      id: 26,
      question: "26. What is opacity in CSS and how is it used?",
      answer: "Opacity in CSS controls how transparent an element is. \nIt’s a value between 0 (completely transparent) and 1 (fully visible).",
      codeExample: `<div style="opacity: 0.5;">This is semi-transparent text</div>

✅ opacity: 0 → fully invisible
✅ opacity: 1 → fully visible
✅ opacity: 0.5 → 50% transparent`
    },
    {
      id: 27,
      question: "27. What is the use of overflow, overflow-x, and overflow-y?",
      answer: "Overflow controls how content behaves when it overflows its container. \n\noverflow: auto; adds scrollbars if needed. \noverflow-x: auto; adds horizontal scrollbars. \noverflow-y: auto; adds vertical scrollbars.",
      codeExample: `Property    | Use for
overflow   -> Control both X & Y
overflow-x -> Only left/right overflow
overflow-y -> Only top/bottom overflow


Values:

visible (default): content spills out
hidden: hides the overflow
scroll: adds scrollbars
auto: adds scrollbars only if needed

example:
<div style="width: 200px; height: 100px; overflow: auto; border: 1px solid black;">
  <p>This is some long text.</p>
  <p>This is some long text.</p>
  <p>This is some long text.</p>
  <p>This is some long text.</p>
  <p>This is some long text.</p>
</div>
`
    },
    {
      id: 28,
      question: "28. What is vh, vw, and vmin, vmax in CSS units?",
      answer: "These are 'viewport-based units' used in CSS for responsive design.",
      codeExample: `🔹 vh (viewport height)
1vh = 1% of the browser window height

  height: 100vh; /* Full height of the screen */


🔹 vw (viewport width)
1vw = 1% of the browser window width

  width: 50vw; /* 50% of screen width */


🔹 vmin
Takes the smaller value between vh and vw

  font-size: 5vmin;


🔹 vmax
Takes the larger value between vh and vw

  font-size: 5vmax;

example:
<hr>
<h2>Viewport Units Demo</h2>

<div style="height: 30vh; background: lightblue; text-align: center; line-height: 30vh; margin-bottom: 10px;">
  30vh (30% of screen height)
</div>

<div style="width: 50vw; background: lightcoral; color: white; padding: 20px; margin-bottom: 10px;">
  50vw (50% of screen width)
</div>

<div style="width: 20vmin; height: 20vmin; background: gold; text-align: center; line-height: 20vmin; margin-bottom: 10px;">
  vmin
</div>

<div style="width: 20vmax; height: 20vmax; background: green; color: white; text-align: center; line-height: 20vmax;">
  vmax
</div>

`
    },
    {
      id: 29,
      question: "29. How can you use custom fonts in CSS?",
      answer: "You can use custom fonts by importing them using the @font-face rule or linking from services like Google Fonts.",
      codeExample: ` Option 1: Using @font-face
@font-face {
  font-family: 'MyFont';
  src: url('fonts/MyFont.woff2') format('woff2');
}

body {
  font-family: 'MyFont', sans-serif;
}


Option 2: Using Google Fonts (Easy Way)
<link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">

<style>
  body {
    font-family: 'Poppins', sans-serif;
  }
</style>  

 https://fonts.google.com
`
    },
    {
      id: 30,
      question: "30. What is a CSS reset?",
      answer: "A CSS reset is used to remove default styling by browsers so that all elements look the same across different browsers. \nIt helps create a consistent base for your custom styles.",
      codeExample: `
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`
    },
    {
      id: 31,
      question: "31. What is the purpose of box-sizing: border-box?",
      answer: "It tells the browser to include padding and border inside the element's total width and height.",
      codeExample: `🔹 Without border-box (default: content-box):
If you set:

width: 100px;
padding: 10px;

👉 Final width becomes 120px (100 + 10 left + 10 right)


🔹 With box-sizing: border-box:

box-sizing: border-box;
width: 100px;
padding: 10px;

👉 Final width stays 100px, and padding is included inside.`
    },
    {
      id: 32,
      question: "32. What is the difference between currentColor, inherit, and initial?",
      answer: "currentColor uses the current text color, inherit takes the value from the parent element, and initial resets the property to the default browser value.",
      codeExample: `
.my-box {
  border-color: currentColor; /* uses current text color */
  font-size: inherit;         /* takes size from parent */
  display: initial;           /* resets to browser default (block/inline) */
}

currentColor Example:
div {
  color: blue;
  border: 1px solid currentColor;  /* border will be blue */
}

inherit Example:
.parent {
  color: green;
}
.child {
  color: inherit;  /* will also be green */
}

initial Example:
p {
  color: red;
}
p.reset {
  color: initial;  /* goes back to default, usually black */
}
`
    },
    {
      id: 33,
      question: "33. What is a media feature in media queries?",
      answer: "A media feature is a condition inside a media query that targets a specific characteristic of the device or browser.",
      codeExample: `@media (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}
`
    },
    {
      id: 34,
      question: "34. How do you use variables in modern CSS?",
      answer: "In modern CSS, variables are defined with -- and used with var(). They help in reusing values like colors, spacing, and fonts, making styles easier to manage and update.",
      codeExample: `
🔹 Step-by-step Example:
1. Define a variable (usually inside :root for global scope):
:root {
  --main-color: #3498db;
  --padding: 10px;
}


2. Use the variable:
button {
  background-color: var(--main-color);
  padding: var(--padding);
  color: white;
}`
    },
       
  ];

  const toggleQuestion = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="app-container">
      <h1>CSS Interview Questions</h1>
      <div className="questions-container">
        {questions.map((q) => (
          <div key={q.id} className="question-item">
            <button 
              className={`question-button ${activeId === q.id ? 'active' : ''}`}
              onClick={() => toggleQuestion(q.id)}
            >
              {q.question}
            </button>
            {activeId === q.id && (
              <div className="answer-container">
                <div className="answer">
                  <h3>Answer:</h3>
                  <p>{q.answer}</p>
                </div>
                {q.codeExample && (
                  <div className="code-example">
                    <h3>Code Example:</h3>
                    <pre>
                      <code>{q.codeExample}</code>
                    </pre>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default App

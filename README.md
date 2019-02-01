# html-template-string

Dead simple and insanely powerful JavaScript `template-string` to `HTML DOM Elements` renderer.  
Converts a HTML String in JavaScript to a HTML DOM Element.  

## Features

- Small, less than 1kb gziped
- Renders everything
  (as SVG, fragment, regular Dom, what ever you like).
- Fast
- Dead simple easy to use

## Why?

When working with WebComponents you’ll find yourself creating a lot of HTML inside JavaScript. Usually you’ll use `document.createElement('div')` or the like. Which is a pain in the ass to write but even more painful to read!  
So various brilliant people came up with a template string or jsx method to do so. Those other libraries are huge in size and complicated. [@tonis2](https://github.com/tonis2) and I believe that there is a benefit in using our tiny html helper tool. For instance most tools does not allow you to bind events to dom elements inline. Also, often they don’t allow you to create document fragments or the output might not be the same as your input.   
After [kelbas](https://github.com/tonis2/kelbas) [@tonis2](https://github.com/tonis2) and I had different believes in how the engine should look like and be used in future so we split up and are following our own path. You’re welcome to do the same, just copy this project and make it work for you or contribute. That is the power of open source.  
Have a look at the code, its in fact only one file with ~100 lines of code. It’s nothing new, it’s nothing fancy, it’s just straight up usefull.  

## Hey but then I won’t have colorcoding or intellisense ? No.

Not true. Since this is common practice, you’ll find a lot of plugins that support this scenario.
For Visual Studio Code, I use this one: https://marketplace.visualstudio.com/items?itemName=pushqrdx.inline-html

## How to use 

### Include

#### via HTML

Add script tagg to your HTML file.
```HTML
<script type="module" src="https://tjb-webcomponents.github.io/html-template-string/html.min.js"></script>
```

#### via JavaScript

```JavaScript
import html from 'https://tjb-webcomponents.github.io/html-template-string/html.min.js'
```

#### via NPM

```bash
npm i -S html-template-string
```

Then in your code:

```JavaScript
import html from 'html-template-string'
```


### Start using the library

[View live examples here!](https://tjb-webcomponents.github.io/html-template-string/)

### Examples

#### Create an html element
To create html elements, as in `jsx`, the elements have to have a container element. Otherwise you’ll have to use a document fragment.
```js
const click_event = () => {
  window.alert("Click event works!");
}

const element = html`
<div>
  <span onclick="${click_event}"><strong>Click me!</strong></span>
  <span>Element2</span>
  <span>Element3</span>
<div>`


document.body.appendChild(element);
```

#### Create a document fragment with list of elements
Usually you’ll have to provide an outer container that wraps your element.  
But if you wish to create elements without outer container, you can create a **document fragment**  
Document fragments are elements without a real container [Document Fragment](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment)  
```js
const click_event = () => {
  window.alert("Click event works!");
}

const list = html`
<data-fragment>
  <span onclick="${click_event}"><strong>Click me!</strong></span>
  <span>Element2</span>
  <span>Element3</span>
  <span>Element4</span>
  <span>Element5</span>
  <span>Element6</span>
</data-fragment>`


document.body.appendChild(list);
```
Will just render:
```html
<span><strong>Click me!</strong></span>
<span>Element2</span>
<span>Element3</span>
<span>Element4</span>
<span>Element5</span>
<span>Element6</span>
```

#### Creating an Array of posts with click events
```js
const open_post = () => {
  window.alert("Open!");
}

const array = html`<div id="container">
                      ${["post1", "post2", "post3"].map(item => html`<span onclick="${open_post}">${item}</span>`)}
                   </div>`



document.body.appendChild(array);
```

#### Creating SVG-s also possible
```js

const circle = html`<svg height="100" width="100">
                      <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
                    </svg>`;


document.body.appendChild(circle);
```

# Enjoy

[![Typewriter Gif](https://tjb-webcomponents.github.io/html-template-string/typewriter.gif)](http://thibaultjanbeyer.com/)

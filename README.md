# html-template

Dead simple and insanely powerful JavaScript `template-string` to HTML DOM Elements renderer.

![gzip size](http://img.badgesize.io/https://unpkg.com/kelbas/build/kelbas.min.js?compression=gzip)
![gzip size](http://img.badgesize.io/https://thibaultjanbeyer.github.io/html-template-string/html.min.js?compression=gzip)

## Features

* Small, less than 1kb
* Renders everything
  (as SVG, fragment, regular Dom, what ever you like).
* Fast
* Dead simple easy to use

## How to use 


* Add script tagg to your HTML file.
```HTML
<script src="https://thibaultjanbeyer.github.io/html-template-string/html.min.js"></script>
```

* Start using the library


[View live examples here!](https://thibaultjanbeyer.github.io/html-template-string/)

### Examples

----

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

------

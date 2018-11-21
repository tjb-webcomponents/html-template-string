const click_event = () => {
  window.alert("Click event works!")
}

const select_function = (event) => {
  window.alert(event.target.value)
}

const fragment = html `
<data-fragment>
  <span class="example1" onclick="${click_event}"><strong>Click me!</strong></span>
  <span class="example2">Element2</span>
  <span class="example3">Element3</span>
</data-fragment>
`

const container = html `<section onclick="${click_event}" id="container">
                          <span>element1</span>
                          <span>element2</span>
                          <p>Text example</p>
                       </section>`

const circle = html `<svg height="100" width="100">
                      <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
                    </svg>`

const array = html `<div id="container">
                      ${["data1", "data2", "data3"].map(item => `<span>${item}</span>`).join("")}
                   </div>`

const array2 = html `<div id="container">
                        <h2>tere</h2>
                      ${["data1", "data2", "data3"].map(item => html`<span onclick="${click_event}">${item}</span>`)} </div>`

const selection = html `<select onchange="${select_function}">
                          <option value="1">Value 1</option>
                          <option value="2">Value 2</option>
                          <option value="3">Value 3</option>
                        </select>`

const selection_container = html `<container id="selection-container">'
                                    <h3 style="color:black">Select your options</h3>
                                    ${selection}
                                 '</container>`

document.body.querySelector("#first-example element").appendChild(fragment)

document.body.querySelector("#second-example element").appendChild(container)

document.body.querySelector("#third-example element").appendChild(circle)

document.body.querySelector("#fourth-example element").appendChild(array)

document.body.querySelector("#fifth-example element").appendChild(array2)

document.body.querySelector("#sixth-example element").appendChild(selection_container)

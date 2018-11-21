class Parser {
  constructor(strings, ...values) {
    this.values_map = []
    this.string = this.concat_string(strings, values)
  }

  get UUID() {
    let S4 = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
    }
    return "p" + (S4() + S4() + "-" + S4())
  }

  // Makes a big string from template literals strings and values, also adds ID-s and pushes {id, value} object to values_map,
  // so we can put values to correct places in dom element.
  concat_string(strings, values) {
    return strings
      .map((string, index) => {
        const value = values[index]
        const id = this.UUID
        switch (true) {
          case typeof value === "function":
            // the string part that replaces the ${} inside an element: <div onclick=${myFunc}> => becomes => <div onclick=" `" data-${id}="` ">
            string = string.concat(`" data-${id}="`)
            this.values_map.push({
              id,
              value
            })
            break
          case typeof value === "object" || (value && value.nodeType === 1):
            // Add placeholder for the list item
            string = `${string} <template data-${id}=""></template>`
            this.values_map.push({
              id,
              value
            })
            break
          case typeof value === "string":
            string = `${string}${value || ""}`
            break
        }
        return string
      })
      .reduce((prev, current) => prev + current)
  }

  // Returns regular dom element
  get fragment() {

    // create container & place values
    const div = document.createElement('div');
    div.innerHTML = this.string;
    const placedValues = this.place_values(div).firstElementChild;

    if (placedValues.tagName.toLowerCase() !== 'data-fragment')
      return placedValues;

    // create and return the fragment
    const fragment = document.createDocumentFragment();
    while (placedValues.children.length > 0) {
      fragment.appendChild(placedValues.children[0]);
    }
    return fragment;

  }

  // Adds event listeners and appends dom elements if neccesary
  place_values(container) {
    this.values_map.forEach(entry => {

      let element = container.querySelector(`[data-${entry.id}]`);
      if (!element) throw new Error(`Warning: could not match event listener --- could not find element with id ${entry.id} --- Function must be defined between parentheses for example "\${calledFunction}"`);

      if (typeof entry.value == "function") {
        // Find onclick, onmouseover .. etc strings values so we can add event listeners to them.
        const event_type = /(on)\w+/g.exec(element.outerHTML)[0].split("on")[1];
        // Add the event listener to the element
        element.addEventListener(event_type, entry.value.bind(this));
        // Remove the on- event, required if we have multiple events on same element
        element.removeAttribute(`on${event_type}`);
        element.removeAttribute(`data-${entry.id}`);

      } else if (typeof entry.value == "object") {
        // Swap template placeholder with list object
        if (!entry.value.children) {
          const fragment = document.createDocumentFragment();
          entry.value.forEach(child => fragment.appendChild(child));
          element.replaceWith(fragment);

        } else {
          element.replaceWith(entry.value);
        }

      }
    })

    // returns the container back with values added.
    return container
  }
}

function html(strings, ...values) {
  return new Parser(strings, ...values).fragment;
}

export default html;
window.html = html;

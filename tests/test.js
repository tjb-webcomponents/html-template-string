const test = require("tape")
const html = require("../docs/html.min.js")

test("Should create container", t => {
  const element = html `<div id="container"></div>`
  t.equal(element.getAttribute("id"), "container")
  t.pass("Container created correctly")
  t.end()
})

test("Should create fragment", t => {
  const element = html `<data-fragment><div></div><div></div><div></div><div></div></data-fragment>`
  t.equal(element.children.length, 4)
  t.pass("Fragment created with 4 children")
  t.end()
})

test("Test click events", t => {
  let status = false
  const update_state = () => {
    status = true
  }
  const element = html `<div id="test" onclick="${update_state}"></div>`
  element.click()
  t.equal(status, true)
  t.pass("Click event worked")
  t.end()
})

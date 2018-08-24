// import * as size from "element-size"; // Module '"element-size"' resolves to a non-module entity and cannot be imported using this construct.
import size = require('element-size')

const onResize = () => {
  const root = document.getElementById('root')
  const [width, height] = size(root)
  const o = { width, height }
  console.log(Object.entries(o))
}
onResize()

window.addEventListener('resize', onResize)

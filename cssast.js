let { parse, stringify } = require('scss-parser')
let createQueryWrapper = require('query-ast')
let fs = require('fs');

let res = fs.readFileSync('src/app/components/dynamic-form/dynamic-form.component.scss', 'utf8').trim();
// let ast = parse('.hello { color: red; } .world { color: blue; }');
let ast = parse(res);
// Create a function to traverse/modify the AST
let $ = createQueryWrapper(ast)
// Make some modifications
// $('rule').filter((k) => $(k).find('class')
//   .filter((n) => $(n).value() === 'hello')).remove();

// const { $ } = createQueryWrapper(`
//         .r { color: $_r; }
//         .g { color: #{$_g}; }
//         .b { color: $_b; }
//       `)

// const variables = $()
//   .find('class')
// const variablesInsideG = variables.hasParents((n) => {
//   return n.node.type === 'rule' && $(n).has((n) => {
//     return n.node.type === 'class' && $(n).value() === 'hello'
//   }).remove()
// })

const variablesInsideG = $().find('rule').has((n) => {
  return (n.node.type === 'class' || n.node.type === 'identifier') && $(n).value() === 'hello'
}).remove();

console.log(variablesInsideG);

// Convert the modified AST back to a string
let scss = stringify($().get(0));
console.log(scss);

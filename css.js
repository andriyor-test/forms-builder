// let { parse, stringify } = require('scss-parser');
// let createQueryWrapper = require('query-ast');
let fs = require('fs');
//
// let res = fs.readFileSync('src/app/components/dynamic-form/dynamic-form.component.scss', 'utf8').trim();
// // console.log(res);
//
// let ast = parse(res);
// // Create a function to traverse/modify the AST
// let $ = createQueryWrapper(ast);
// console.log($('types'));
// // Convert the modified AST back to a string
// let scss = stringify($().get(0));
// console.log(scss);



let { parse, stringify } = require('scss-parser')
let createQueryWrapper = require('query-ast')

// Create an AST
let res = fs.readFileSync('src/app/components/dynamic-form/dynamic-form.component.scss', 'utf8').trim();
let ast = parse('.hello { color: red; } .world { color: blue; }')
// let ast = parse(res);
//    type: 'identifier',
// console.log('log');
// Create a function to traverse/modify the AST
// console.log('ast');
// console.log(ast);
// console.log('ast.value[0]');
// console.log(ast.value[0]);
// console.log('ast.value[0].value[0].value[0].value');
// console.log(ast.value[0].value[0].value[0].value);
//     value: 'types',

let $ = createQueryWrapper(ast);
// Make some modifications
// console.log("$('rule')");
// console.log($('rule'));
// console.log($('rule').find('selector'));
// console.log("$('rule').find('selector')");
// console.log($('rule').find('identifier'));
// console.log("$('rule').find('identifier').nodes[0].node");
// console.log($('rule').find('identifier').nodes[0].node);

// console.log($('rule').find('identifier').filter('types'));
// $('rule').find('.types ').remove();

// console.log($().find('class').value());
const className = $()
  .find('class')
  .filter((n) => $(n).value() === 'hello');

console.log(className.remove());

// console.log($((n) => n.node.value === 'types').remove());
// Convert the modified AST back to a string
let scss = stringify($().get(0));
console.log(scss);

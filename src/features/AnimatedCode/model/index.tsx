export const codeExample = [
  `const res = false || 0 && '0';
console.log(res);`,
  `(function() {
    var x = 1;
    function x(){};
    console.log(x);
})()`,
  `console.log('1');
setTimeout(function timeout() {
  console.log('2');
}, 0);

const p = new Promise(
  (resolve, reject) => {
    console.log('3');
    resolve();
});

p.then(function(){
  console.log('4');
});

console.log('5');`,
];

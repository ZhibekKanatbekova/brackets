module.exports = function check(str, bracketsConfig) {
 let brackets = str;
 let stack = [];

 for (let bracket of bracketsConfig) {
     let bracketsIndex = brackets.indexOf(bracket);

     if (bracketsIndex === -1) {
         continue;
     }

     if (bracketsIndex % 2 === 0) {
         stack.push(bracketsIndex + 1);
     } else {
         if (stack.pop() !== bracketsIndex) {
             return true;
         }
     }
 }
 return true
}

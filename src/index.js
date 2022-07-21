module.exports = function check(str, bracketsConfig) {
  // your solution

  // const stack = []; 
  // const open = ['(', '{', '['];
  // const close = [ ')', '}', ']'];

  // for (let i = 0; i < str.lenght; i++) {
  //   if(open.includes(str[i])) {
  //     stack.push(str[i]);
  //   } else {
  //     if(close.indexOf(str[i]) === open.indexOf(stack[stack.length - 1])) {
  //       stack.pop();
  //     } else {
  //       return false;
  //     }
  //  }
  // }
  // return stack.length === 0;
 
  let brackets = bracketsConfig.join('').replace(/,/g, '');
  let stack = [];
for (let bracket of str) {
      let bracketsIndex = brackets.indexOf(bracket)

      if (bracketsIndex % 2 === 0) {
          
          if (bracket === brackets[bracketsIndex + 1] && stack[stack.length - 1] === bracketsIndex){
              stack.pop();
          } else if (bracket === brackets[bracketsIndex + 1] && stack[stack.length - 1] !== bracketsIndex) {
              stack.push(bracketsIndex)
          }
          else{
              stack.push(bracketsIndex)
          }
      } 
      else {
          if (stack.pop() !== bracketsIndex-1){
              return false;
          }
      }
      
  }
  return stack.length === 0
}

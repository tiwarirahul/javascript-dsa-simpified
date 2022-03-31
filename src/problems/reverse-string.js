
const prob = "reverse this string";

const reverseString = (inputStr)=> {
  
  const outputStrArr = [];
  
 for(let i=inputStr.length-1;i>=0;i--){
   outputStrArr.push(inputStr[i]);
 }
  return outputStrArr.join("");
  
}

console.log(reverseString(prob));

const reverseEachWordKeepingSameOrder = (inputStr)=> {
  
  const outputStrArr = [];
  
  const strArr = inputStr.split(" ");
  
 for(let i=0;i<=strArr.length-1;i++){
    const output = reverseString(strArr[i]);
   outputStrArr.push(output);
 }
  return outputStrArr.join(" ");
  
}

console.log(reverseEachWordKeepingSameOrder(prob));

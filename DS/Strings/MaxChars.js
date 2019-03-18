function maxchar(str){
    const charMap = {};
   for(let char of str){
        charMap[char] = charMap[char] + 1 || 1;
   }

   let max = 0;
   let value= '';

   for(let key in charMap){
       if(charMap[key]>max){
       max = charMap[key];
        value = key;
       }
   }

   return value;
    
console.log(charMap);


}


maxchar("hello there");

module.exports = maxchar;
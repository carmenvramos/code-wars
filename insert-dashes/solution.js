// Insert dash between two consecutive odd numbers
function insertDash(num) {
    //code me
    let numArr = num.toString().split(''); 
    for(let i = 0; i < numArr.length; i++) {
      if(numArr[i] % 2 === 1 && numArr[i+1] % 2 === 1) {
         numArr.splice(i+1, 0, '-');
       }
     }
     let numString = numArr.join('');
     return numString;
  }
  
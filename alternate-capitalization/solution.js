function capitalize(string){
    var output =[];
    var newString = [];
      for(var j = 0; j < 2; j++) {
         for(var i = j; i < string.length; i++){
            if (i % 2 != 0) {
               output [i] = string[i].toLowerCase();
            }
            else {
               output[i] = string[i].toUpperCase();
            }   
          return output.join('');  
         }
         
      // return output[j];
    }
     
    }
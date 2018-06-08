// Function to check if array is a Nice Array
function isNice( arr) {
    if (arr.length === 0) {
    return false;}
    for(var i = 0; i < arr.length; i++){
        if (arr.includes(arr[i] + 1) || arr.includes(arr[i] - 1)) {
          continue;    
        }
        else      
        return false;
    }
    return true;
}

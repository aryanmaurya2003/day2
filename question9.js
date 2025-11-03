var array = [10, 20, 30, 40, 50];
// var elementIndex = array.indexOf(50);
function linearSearch(array, elementIndex) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === elementIndex) {
            return i;
        }
    }
    return "Element not found";
}
index=linearSearch(array,5610)
console.log(index); 


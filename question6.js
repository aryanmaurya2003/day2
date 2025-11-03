myarray = [1, 2, 1, 2, 5, 6, 5, 4];
function changeElementOccurence(myarray, b) {
        newarrray = myarray.map(a => {
                if (a === b) { return 9; } else { return a; }
        })
        return newarrray
}

console.log(changeElementOccurence(myarray, 1))

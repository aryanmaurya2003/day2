myarray = [1, 2, 1, 2, 5, 6, 5, 4];
newarrray = myarray.map(a => {
        if (a === 2){ return 9; }else { return a; }})
console.log(newarrray)

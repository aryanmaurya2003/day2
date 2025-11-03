var array=[8,1,6,2,4,8,5,2,3,7];


function sortArray(){
    for (var i=0;i<array.length;i++){
    for(var j=i+1;j<array.length;j++){
        if(array[i]>array[j]){
            var e=array[i];
            array[i]=array[j];
            array[j]=e;
        }
    }
}
}
sortArray(array)

console.log(array);
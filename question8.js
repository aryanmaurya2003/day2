var array=[1,2,3,4,5,6,7,8];

function reverseElement(array){
var j=array.length-1;
for (var i=0;i<j;i++){
   var temp=array[i];
   array[i]=array[j];
   array[j]=temp;
   j--;
}
}
reverseElement(array);

console.log(array);
myarray=[5,1,2,3,"arya"];

function arraySplice(index,element_to_delete,element_to_add){
new_array=myarray.splice(index, element_to_delete, element_to_add);
return new_array;
}
console.log(arraySplice(0, 2, 36));
console.log(myarray)
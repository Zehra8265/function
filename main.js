// function cuteded(array){
//     var sum=0;
//     for (let i=0; i< array.length; i++){
//         if (array [i]%2==0){
//             sum+=array[i];
//         }
//     }
//     return sum;
// }
// var array =[2,4,6,8,9];
// var d=cuteded(array);
// console.log(d);
function tekeded (array){
    var mult=1;
    for(let i=1;i<array.length; i++ ){
        if (array [i]%2==1){
            mult*=array[i];
        }
    }
    return mult;
}
var mult=[2,4,5,3];
var d=tekeded (mult);
console.log(d);
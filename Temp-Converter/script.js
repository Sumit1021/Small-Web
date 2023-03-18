var cel=document.getElementById("in1")
var far=document.getElementById("in2")
function celc(){
    let c=cel.value
    let f = c*(9/5)+32
    if(!Number.isInteger(f)){
         f=f.toFixed(2)
    }
    far.value=f;
};
function farh(){
    let f=far.value;
    let c = (f -32)*5/9
    if(!Number.isInteger(c)){
        c=c.toFixed(2)
   }
    cel.value=c;
}


let arr1=[1,2,3]
let arr2=arr1.reverse()
arr2.push(4);
console.log(arr1)
console.log(arr2)
// if condition
function myform(){
    var x =document.getElementById("email").value
var y =document.getElementById("password").value


    if(x=="a" && y==11){
        alert("success validation")
    }else{
        alert("not valid")
    }
 }

 

// for loop
let x= 10;
for(let i=0; i<=x; i++){
    console.log(i);
}

// while loop
 var number=564;
var sum =0;
while(number>0){
    let rem =number%10
    sum=sum+rem;
    number=Math.floor((number/10))
}
console.log(sum);


const age='18';
if(age===18) console.log('you are an adult');
//=== is a strict equality checker
//=== doenot perform type coerision

if(age==18)console.log('you are adult');
const inputAge=prompt('What is you age');
console.log(inputAge);
if(inputAge==18){ //inputAge in number
    console.log('you are an adult');
}else if(inputAge==7){
    console.log('you are an THALA for a reason')
}

const textBox=document.getElementById("textBox");
const tofh=document.getElementById("tofh");
const tocelcius=document.getElementById("tocelcius");
const result=document.getElementById("result");

let temp;
function convert(){
    if(tofh.checked){
        temp=Number(textBox.value);
        temp=temp*9/5 +32;
        result.textContent=temp.toFixed(1)+"F"

    }else if(tocelcius.checked){
        temp=Number(textBox.value);
        temp=(temp-32)*(5/9);
        result.textContent=temp.toFixed(1)+"C"
    }else{
        result.textContent="Select Unit!!"
    }
}
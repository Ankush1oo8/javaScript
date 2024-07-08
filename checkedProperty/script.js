
const cb=document.getElementById("cb")
const visabtn=document.getElementById("visabtn")
const mastercardbtn=document.getElementById("mastercardbtn")
const payPalbtn=document.getElementById("payPalbtn");
const mysubmit=document.getElementById("mysubmit")
const subres=document.getElementById("subres");
const paymentres=document.getElementById("paymentres")

mysubmit.onclick=function(){
    if(cb.checked){
        subres.textContent=`You are subscribed!!`
    }else{
        subres.textContent=`You are not subscribed!!`
    }
    if(visabtn.checked){
        paymentres.textContent=`you are paying with VISA`
    }else if(mastercardbtn.checked){
        paymentres.textContent=`you are paying with mastercard`
    }else if(payPalbtn.checked){
        paymentres.textContent=`you are paying with paypal`
    }else{
        paymentres.textContent="you must select a payment type"
    }
}

let markHeight=1.69;
let markmass=78;

let markBMI=markmass/markHeight**2;

let johnHeight=1.95;
let johnMass=92;
let johnBMI=johnMass/johnHeight**2;

if(markBMI>johnBMI){
    console.log(`Marks's BMI (${markBMI}) is higher than john's BMI (${johnBMI})`);
}else{
    console.log(`Marks's BMI (${markBMI}) is lower than john's BMI (${johnBMI})`);

}
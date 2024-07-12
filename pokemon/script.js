



async function fetchData(){
    try{
    const pokemon=document.getElementById("pokemonName").value.toLowerCase();
    const response=await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    if(!response.ok){
        throw new Error("Doesn't Exist!!");
    }
    const data=await response.json();
    const img=data.sprites.front_default;
    const imgElement=document.getElementById("pokemonImg");
    imgElement.src=img;
    imgElement.style.display="block";
}
catch(error){
    console.error(error);
}
}
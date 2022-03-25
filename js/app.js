
let Name = document.querySelector("#first");
let lastName = document.querySelector("#last");
let country = document.querySelector("#country");
let phone = document.querySelector("#phone");
let email = document.querySelector("#email");
let photo = document.querySelector("#photo"); 

document.querySelector("#btn").addEventListener("click", async function(){

    let response = await fetch("https://randomuser.me/api/");

    let persona = await response.json();
    console.log(persona.results[0]);
    let name1 = persona.results[0].name.first;
    Name.textContent = name1;
    
    let lastName1 = persona.results[0].name.last;
    lastName.textContent = lastName1;

    let country1 = persona.results[0].location.city;
    country.textContent = country1;

    let phone1 = persona.results[0].cell;
    phone.textContent = phone1;

    let email1 = persona.results[0].email;
    email.textContent = email1;

    let photo1 = persona.results[0].picture.large;
    photo.src = photo1;
})
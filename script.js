fetch('https://swapi.dev/api/people/1/')
.then(res => res.json())    
.then(data => {
    document.getElementById('name').innerHTML = data.name;
    document.getElementById('height').innerHTML = data.height;
    document.getElementById('hair_color').innerHTML = data.hair_color;
})


fetch('https://swapi.dev/api/people/1/')
.then(res => res.json())    
.then(data => {
    arrayLength = data.films.length;
    let filmUrl = data.films
    // console.log("\n",data); // array of film title API
    for (let i = 0; i < arrayLength; i++) {
        fetch(data.films[i])
        
        .then(res => res.json())
        .then(data => {
            let newDiv = document.createElement("div"); // create div element
            let newAnchor = document.createElement("a"); // create anchor element
            newAnchor.setAttribute("href", filmUrl[i]); // set attribute
            newAnchor.setAttribute("target", "_blank"); // set attribute

            const newContent = document.createTextNode(data.title); // add the text node to the newly created div

            newDiv.appendChild(newContent); //

            newAnchor.appendChild(newDiv);


            // add the newly created element and its content into the DOM
            const currentDiv = document.getElementById("films");
            
            //document.body.insertBefore(newDiv, currentDiv);
            document.body.insertBefore(newAnchor, currentDiv);

    
        })
    }   

})





/*
let newDiv = document.createElement("div");
const newContent = document.createTextNode("Hi there and greetings!");

fetch('https://www.swapi.tech/api/people/1')
.then(res => res.json())    
.then(data => {
    document.getElementById('name').innerHTML = data.result.properties.name;
    document.getElementById('height').innerHTML = data.result.properties.height;
    document.getElementById('hair_color').innerHTML = data.result.properties.hair_color;
    
    // add the text node to the newly created div
    newDiv.appendChild(newContent);
    
    newDiv.innerHTML = data.result.properties.gender;

   
    console.log(data);
})
*/


//.catch(err => console.error(err)

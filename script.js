async function getCharacters() {
    let result = await fetch("https://character-database.becode.xyz/characters")
    const array = await result.json()

    // data indispensable pour afficher les données du tableau

    var str = '<div>'

    array.forEach(function (element) {
        str += '<div>'
        str += '<img src="data:image/jpeg;base64,' + element.image + '"/>'
        str += '<h1>' + element.name + '</h1>';
        str += '<p>' + element.shortDescription + '</p>';
        str += '<div class="buttons">'
        str += '<button class="viewHero">View</button>'
        str += '<button class="editHero">Edit</button>'
        str += '<button class="deleteHero">Delete</button>'
        str += '</div>'
        str += '</div>'
    });
    str += '</div>';
    //str += '<button id="addHero">Add</button>'
    document.getElementById("list").innerHTML = str;

}




getCharacters();




/* window.onload = function () {
    document.getElementById("addHero").addEventListener("click", () => {
        console.log("yo")
    })
} */
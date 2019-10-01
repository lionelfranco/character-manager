//const axios = require("axios");

window.onload = function () {

    const api = 'https://character-database.becode.xyz'
    async function getCharacters() {
        let result = await axios.get(`${api}/characters`)
        const array = result.data

        // data indispensable pour afficher les données du tableau

        var str = '<div>'

        array.forEach(function (element) {
            //str += '<div id="'+element.id+'">'
            str += `<div>`

            str += '<img src="data:image/jpeg;base64,' + element.image + '"/>'
            str += '<h1>' + element.name + '</h1>';
            str += '<p>' + element.shortDescription + '</p>';
            str += `<div class="buttons"  name="${element.id}">`
            str += `<button class="viewHero">View</button">`
            str += `<button class="editHero">Edit</button">`
            str += `<button class="deleteHero">Delete</button">`
            str += '</div>'
            str += '</div>'



        });

        str += '</div>';
        //str += '<button id="addHero">Add</button>'
        document.getElementById("list").innerHTML = str;
        document.querySelectorAll("#list .viewHero").forEach((element) => {

            element.addEventListener("click", async (e) => {
                let id = e.target.parentElement.getAttribute("name")

                let idHero = await axios.get(`https://character-database.becode.xyz/characters/${id}`)

                console.log(await idHero.data)



            })
        })



        //add even listner pour chaque click

    }

    getCharacters();


}
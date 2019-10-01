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
            str += `<button type="button" class="viewHero"  data-toggle="modal" data-target="#view" >View</button">`
            str += `<button class="editHero">Edit</button">`
            str += `<button class="deleteHero">Delete</button">`
            str += '</div>'
            str += '</div>'



        });

        str += '</div>';
        //str += '<button id="addHero">Add</button>'
        document.getElementById("list").innerHTML = str;
        //viewHero renvoi un tableau
        document.querySelectorAll("#list .viewHero").forEach((element) => {

            element.addEventListener("click", async (e) => {

                document.getElementById("target").innerHTML = "";
                let id = e.target.parentElement.getAttribute("name")

                let idHero = await axios.get(`https://character-database.becode.xyz/characters/${id}`)

                let arrayOfHero = await idHero.data;


                let template = document.getElementById("tpl-hero")
                let infos = document.importNode(template, true).content;





                infos.querySelector("h4").innerHTML = arrayOfHero.name
                infos.querySelector("em").innerHTML = arrayOfHero.description

                infos.querySelector("p").innerHTML = arrayOfHero.shortDescription

                infos.querySelector("span").innerHTML = '<img src="data:image/jpeg;base64,' + arrayOfHero.image + '"/>'



                //lui donne un enfant qui  importe infos , nbre fois de boucle,
                //et true = si il prend les infos dedans ou pas
                document.getElementById("target").appendChild(infos)


            })

        })



        document.querySelectorAll("#list .deleteHero").forEach((element) => {

            element.addEventListener("click", async (e) => {

                let id = e.target.parentElement.getAttribute("name")

                let idHero = await axios.get(`https://character-database.becode.xyz/characters/${id}`)



                let arrayOfHero = await idHero.data;


                if (confirm('Voulez vous supprimer?')) {
                    alert('Vous avez supprimez le héro ' + arrayOfHero.name);

                    await axios.delete(`https://character-database.becode.xyz/characters/${id}`)

                } else {
                    alert("Vous avez sauveer votre hero ");
                }




            })

        })

    }

    /*     if (typeof document.querySelectorAll("img").getAttribute("src") == "undefined") {
            document.querySelectorAll("img").getAttribute("src") = "https: //source.unsplash.com/random"



        } */
    getCharacters();



}
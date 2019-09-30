const axios = require("axios");
const api = 'https://character-database.becode.xyz'

async function getCharacters() {
    let result = await axios.get(`${api}/characters`)
    const array = result.data
    var str = '<div>'

    array.forEach(function(element) {
        str += '<ul>'
        str += '<li>'+ element.name + '</li>';
        str += '<li>'+ element.shortDescription + '</li>';
        str += '<li>'+ element.description + '</li>';
        str += '</ul>'
    }); 
    str += '</div>';
    document.getElementById("list").innerHTML = str;
}
getCharacters();

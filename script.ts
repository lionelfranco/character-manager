const axios = require("axios");
const api = 'https://character-database.becode.xyz'

async function getCharacters() {
    let result = await axios.get(`${api}/characters`)
    const array = result.data
    // data indispensable pour afficher les données du tableau
    
    var str = '<div>'

    array.forEach(function(element) {
        str += '<ul>'
        str += '<li>'+ element.name + '</li>';
        str += '<li>'+ element.shortDescription + '</li>';
        str += '</ul>'
        str += '<img src="data:image/jpeg;base64,'+ element.image + '"/>'
        str += '<button>View</button>'
        str += '<button>Edit</button>'
        str += '<button>Delete</button>'
    }); 
    str += '</div>';
    document.getElementById("list").innerHTML = str;
}
getCharacters();

const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./img/pokemon-sad.gif");
            const pokeNombre = document.getElementById("pokeNombre");
            pokeNombre.innerHTML = 'Pokemon no encontrado';
            const pokeTipo = document.getElementById("pokeTip");
            pokeTipo.innerHTML = '';
            const pokeHabilidad = document.getElementById("pokeHabili");
            pokeHabilidad.innerHTML = '';
            const pokeExp = document.getElementById("pokeExp");
            pokeExp.innerHTML = '';
            const pokeId = document.getElementById("pokeId");
            pokeId.innerHTML = '';
        } else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            //obtenemos la img
            let pokeImg = data.sprites.front_shiny;
            pokeImage(pokeImg);
            console.log(pokeImg);
            //obtenemos el nombre
            let pokeNombre = data.name;
            pokenombre(pokeNombre.toUpperCase());
            //obtenemos el tipo
            let pokeTipo = data.types[0].type.name;
            poketipo(pokeTipo.toUpperCase());
            console.log(pokeTipo);
            //obtenemos las habilidades
            data.abilities.forEach(element => {
                let pokeHabilidad = element.ability.name;
                pokehabilidad(pokeHabilidad.toUpperCase());
            });
            console.log(pokehabilidad);

            //obtenemos experiencia
            let pokeExp = data.base_experience;
            expepoke(pokeExp);
            console.log(pokeExp);
            //obtenemos id
            let pokeId = data.id;
            idpoke(pokeId);

        }
    });
}
const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = "";
    pokePhoto.src = url;
}
const pokenombre = (nombre) => {
    const pokeNombre = document.getElementById("pokeNombre");
    pokeNombre.innerHTML = "";
    pokeNombre.innerHTML = nombre;
}
const poketipo = (tipo) => {
    const pokeTipo = document.getElementById("pokeTip");
    pokeTipo.innerHTML = tipo;
}
const pokehabilidad = (habilidad) => {
    const pokeHabilidad = document.getElementById("pokeHabili");
    pokeHabilidad.innerHTML = habilidad + '<br>';

}
const expepoke = (exp) => {
    const pokeExp = document.getElementById("pokeExp");
    pokeExp.innerHTML = exp;
}
const idpoke = (id) => {
        const pokeId = document.getElementById("pokeId");
        pokeId.innerHTML = id;
    }
    //funcion para detectar la tecla enter
function validar(e) {
    tecla = (document.all) ? e.keyCode : e.which;
    if (tecla == 13) fetchPokemon();
}



//  //hacemos las tarjetas
//  let card = document.createElement('div');
//  card.innerHTML = ` 
//  <div class="tarjeta-pokemon">
//  <img class="img-tarjeta" src="${pokeImg}" alt="">
//  <h6 class="tarjeta-nombre ">${pokeNombre}</h6>
//  <p class="item-datos2">${pokeExp}</p>
//  </div>`;
//  let contenedor = document.getElementById('pokemon-aleatorios');
//  contenedor.appendChild(card);
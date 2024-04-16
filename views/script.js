const datos={
    1:"sdfsaaaaa",
    2:"sdsdsaadsa",
    3:"sdaaaaaaa",
    4:"sdaaaaaa",
    5:"adsada",
    6:"sdafsafsa",
    7:"sdagdaf",
    8:"sdagdaf",
    9:"sdagsdf",
    10:"sdasgd",
    11:"sdadgsag",

}

const ul = document.getElementById('myList');

for (const key in datos) {
    if (datos.hasOwnProperty(key)) {
        const dato = datos[key];
        var li = document.createElement('li');
        li.textContent = dato;
        ul.appendChild(li);
    }
}
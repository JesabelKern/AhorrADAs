// FUNCIONES REUTILIZABLES 

const just = (selector) => document.querySelector(selector)
const all = (selector) => document.querySelectorAll(selector)
const randomId = () => self.crypto.randomUUID();

// TRAER CATEGORÍAS

let categories = [
    {
        id: randomId(),
        nombre: "Comida"
    },
    {
        id: randomId(),
        nombre: "Servicios"
    },
    {
        id: randomId(),
        nombre: "Salidas"
    },
    {
        id: randomId(),
        nombre: "Transporte"
    },
    {
        id: randomId(),
        nombre: "Educacion"
    },
    {
        id: randomId(),
        nombre: "Trabajo"
    },
]

// RECORRER Y AGREGAR CATEGORÍAS

const listaCategorias = (category) => {
    for (let {nombre, id} of category) {
        just('#list-categorie').innerHTML += `
        <li class="tag has-text-weight-semibold is-flex is-justify-content-space-between">
                <p>${nombre}</p>
                <div class="column is-narrow has-text">
                    <a href="#" class="mr-4 is-size-7 edit-link editor-button">Editar</a>
                    <a href="#" class="is-size-7 delete-link">Eliminar</a>
                </div>
        </li>`
    }
}

listaCategorias(categories)





// AGREGAR CATEGORÍA



//EDITAR CATEGORIA

all('.editor-button').forEach( (btn) => {
    btn.addEventListener('click', () => 
    just('#edit-categories').classList.remove("is-hidden"));
    

});

all('#cancel-edit-category-btn').forEach( (btn) => {
    btn.addEventListener('click', () => just('#edit-categories').classList.add ("is-hidden"))
});
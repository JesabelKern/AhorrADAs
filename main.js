// FUNCIONES REUTILIZABLES 

const just = (selector) => document.querySelector(selector)
const all = (selector) => document.querySelectorAll(selector)
const randomId = () => self.crypto.randomUUID();

// TRAER CATEGORÍAS

let categories =[
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
    just('#list-categorie').innerHTML = ''
    for (let {nombre, id} of category) {
        just('#list-categorie').innerHTML += `
        <li class="tag has-text-weight-semibold is-flex is-justify-content-space-between">
                <p>${nombre}</p>
                <div class="column is-narrow has-text">
                <a href="#" onclick="editCategoryList('${id}')" id="${id}" class="mr-4 is-size-7 edit-link editor-button">Editar</a>
                <a href="#" onclick="removeCategoryList('${id}')" id="${id}" class="is-size-7 delete-link">Eliminar</a>
                </div>
        </li>`
    }
}

listaCategorias(categories)





// AGREGAR CATEGORÍA



//EDITAR CATEGORIA
            // AGREGA CLASE HIDDEN
        
all('#cancel-edit-category-btn').forEach( (btn) => {
    btn.addEventListener('click', () => just('#edit-categories').classList.add ("is-hidden"))
});

            // REMUEVE HIDDEN Y EDITA CATEGORÍA

const editCategoryList = (identificador) => {
    just('#edit-categories').classList.remove("is-hidden")
    let categoriaAEditar = categories.filter((categoria) => categoria.id === identificador)
    just('#edition-categoria-input').value = categoriaAEditar[0].nombre
    just('#edit-category-btn').addEventListener('click', ()=> categoriEdition(categoriaAEditar[0].id))
}


// ACTUALIZACIÓN CON EDICIÓN

const categoriEdition = (id) => {
    const userChosenName = just('#edition-categoria-input').value
    let newCategories = {
        id: id,
        nombre: userChosenName
    };
    let newestCategory = categories.map((arrCategorias) => arrCategorias.id === id ? {...newCategories} :arrCategorias)
        listaCategorias(newestCategory)
    }
    
    //FUNCIONALIDAD BOTON ELIMINAR







//rellenar los  SELECT actualizados

console.log(all('.category-select'))

const fillSelect = (category) => {
    all(".category-select").forEach((selection) => {
        selection.innerHTML = ""
        for (let {nombre, id} of category){
            selection.innerHTML += `<option value="${id}">${nombre}</option>`
        }
    })
}

fillSelect(categories)
just("#category-filter").addEventListener("change", () => {
    console.log($("#category-filter").value)
})
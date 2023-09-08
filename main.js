// FUNCIONES REUTILIZABLES 

const just = (selector) => document.querySelector(selector)
const all = (selector) => document.querySelectorAll(selector)
const randomId = () => self.crypto.randomUUID();



//click en boton balance
just('.btn-balance-navbar').onclick = () => {
    just('.main-balance').classList.remove('is-hidden')
    just('.section-new-operation').classList.add('is-hidden')
    just('.section-edit-new-operation').classList.add('is-hidden')
    just('#section-view-categories').classList.add('is-hidden')
    just('.section-edit-categories').classList.add('is-hidden')
    just('#section-view-reports').classList.add('is-hidden')
}   

//click en boton categoias
just('.btn-categories-navbar').onclick = () => {
    just('#section-view-categories').classList.remove('is-hidden')
    just('.main-balance').classList.add('is-hidden')
    just('.section-new-operation').classList.add('is-hidden')
    just('.section-edit-new-operation').classList.add('is-hidden')
    just('.section-edit-categories').classList.add('is-hidden')
    just('#section-view-reports').classList.add('is-hidden')
}

//click en boton reportes
just('.btn-reports-navbar').onclick = () => {
    just('#section-view-reports').classList.remove('is-hidden')
    just('#section-view-categories').classList.add('is-hidden')
    just('.main-balance').classList.add('is-hidden')
    just('.section-new-operation').classList.add('is-hidden')
    just('.section-edit-new-operation').classList.add('is-hidden')
    just('.section-edit-categories').classList.add('is-hidden')
}

//click en boton nueva operacion
just('.btn-new-operation').onclick = () => {
    just('.section-new-operation').classList.remove('is-hidden')
    just('#section-view-reports').classList.add('is-hidden')
    just('#section-view-categories').classList.add('is-hidden')
    just('.main-balance').classList.add('is-hidden')
    just('.section-edit-new-operation').classList.add('is-hidden')
    just('.section-edit-categories').classList.add('is-hidden')
}













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
                <a href="#" onclick="editCategoryList('${id}')" id="${id}" class="mr-4 is-size-7 edit-link btn-edition-category">Editar</a>
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











    //HHHHHHHHHHHHHHHEEEEEEEEEEEEEELLLLLLLLLLLLLLPPPPPPPPPPPPPP
//rellenar los  SELECT actualizados

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

















//OPERACIONES

let operations = [
    {
        id:randomId(),
        description:"Supermercado",
        category:"",
        date:"",
        amount:"",
    },
    {
        id:randomId(),
        description:"Sueldo",
        category:"",
        date:"",
        amount:"",
    },
    {
        id:randomId(),
        description:"Alquiler",
        category:"lkjlk",
        date:"lkjlkj",
        amount:"lklkjlkj",
    },
]

//crea una nueva lista para cada nueva operacion EN OPERACIONES
const listOperations = (operation) => {
    for (let {id, desc, cat, date, amou} of operation) {
        just('.section-operation-created').innerHTML += `
        <div class="column-of-each-operation columns is-justify-content-space-between">
            <div class="column is-flex-wrap-wrap">
                <p>${desc}</p>
            </div>
            <div class="column">
                <p>${cat}</p>
            </div>
            <div class="column">
                <p>${date}</p>
            </div>
            <div class="column">
                <p>${amou}</p>
            </div>
            <div class="column has-text-right">
                <button class="button is-text is-small edit-operation-btn" id="${id}">Editar</button>
                <button class="button is-text is-small delete-operation-btn" id="${id}">Eliminar</button>
            </div>
        </div>`
    }

}
listOperations(operations)







//EDITAR OPERACION BTN
all('.edit-operation-btn').forEach((btn) => {
    btn.addEventListener('click', ()=> just('.section-edit-new-operation').classList.remove('is-hidden') & just('.main-balance').classList.add('is-hidden')
    )
})












//HHHHHHHHHHHHHHHHHHHHEEEEEEEEEELLLLLLLLLLPPPPPPPPPPPP
//agregar nueva operacion

just('#input-text-description').addEventListener('input', (event)=> seeValueInputText(event))
const seeValueInputText = (income) =>{
    income.target.value
} //CAPTURE LO QUE SE ESCRIBE 


just('#input-number-amount').addEventListener('input', (event)=> seeValueInputNumber(event))
const seeValueInputNumber = (income) => {
    income.target.value
}//capture lo el monto

just('.selection-for-type').addEventListener('input', (event)=> seeValueSelect(event))
const seeValueSelect = (income) => {
    income.target.value
}//capture el tipo de gasto o ganancia


just('.btn-add-new-operation').addEventListener('click', ()=> www())
const www = () => {
    just('.section-operation-created').innerHTML += `
        <div class="column-of-each-operation columns is-justify-content-space-between">
            <div class="column is-flex-wrap-wrap">
                <p>${seeValueInputText}</p> 
            </div>
            <div class="column">
                <p>00000</p>
            </div>
            <div class="column">
                <p>000000</p>
            </div>
            <div class="column">
                <p>${seeValueInputNumber}</p>
            </div>
            <div class="column has-text-right">
                <button class="button is-text is-small" id="${operations.id}">Editar</button>
                <button class="button is-text is-small" id="${operations.id}">Eliminar</button>
            </div>
        </div>`
}
//console.log(operations.push(www)) //me devuelve un 4 y no se porque
//esta bien como le pase el id? porque sin el operations. me decia que no esta definido




























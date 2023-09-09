// FUNCIONES REUTILIZABLES 
const just = (selector) => document.querySelector(selector)
const all = (selector) => document.querySelectorAll(selector)
const randomId = () => self.crypto.randomUUID();


//TRAER Y LLEVAR DATOS AL LS  ---NO SE SI FUNCIONA---
const bringData = () => {
    return JSON.parse(localStorage.getItem("data"));
};
const uploadData = (info) => {
    localStorage.setItem("datos", JSON.stringify({ ...traerDatos(), ...info }));
};
const traerCategorias = () => {
    return traerDatos()?.categories;
  };



//MOSTRAR Y OCULTAR VISTAS DEL NAVBAR  ---FUNCIONA ✓---
const mostrarVista = (vistaparametro) => {  
    all('.screen').forEach( view => { 
        view.classList.add('is-hidden')
    })
    just(`.${vistaparametro}`).classList.remove('is-hidden')
}
just('.btn-balance-navbar').addEventListener('click', ()=> mostrarVista('main-balance'))//se muestra vista balance
just('.btn-categories-navbar').addEventListener('click', ()=> mostrarVista('section-view-categories'))//se muestra vista categorias
just('.btn-reports-navbar').addEventListener('click', ()=> mostrarVista('section-view-reports'))// se muestra vista reportes
just('.btn-new-operation').addEventListener('click', ()=> mostrarVista('section-new-operation'))//se muestra vista nueva operacion
just('.btn-edit-category').addEventListener('click', ()=> mostrarVista('section-view-categories'))//apreta btn editar categoria y lo devuelve a view categorias
just('.btn-add-new-operation').addEventListener('click', ()=> mostrarVista('main-balance'))//apreta btn agregar nueva operacion y lo devuelve a view balance 



//FUNCIONALIDAD DE BTN EDITAR OPERACION  ---NO FUNCIONA---
// all('.edit-operation-btn').forEach((btn) => {
//     btn.addEventListener('click', ()=> just('.section-edit-new-operation').classList.remove('is-hidden') & just('.main-balance').classList.add('is-hidden')) & just('.section-new-operation').classList.add('is-hidden')
// })



//BOTON CANCELAR DE NUEVA OPERACION  ---FUNCIONA ✓---
just('.cancel-btn-new-operation').onclick = () =>{
    just('.main-balance').classList.remove('is-hidden')
    just('.section-new-operation').classList.add('is-hidden')
}

//BOTON CANCELAR DE EDITAR UNA OPERACION  ---NO SE SI FUNCIONA---
just('.cancel-btn-edit-operation').onclick = () =>{
    just('.main-balance').classList.remove('is-hidden')
    just('.section-edit-new-operation').classList.add('is-hidden')
}


// BOTON CANCELAR EDITAR CATEGORIA ESCONDE EDITAR Y MUESTRA CATEGORIAS  ---FUNCIONA ✓---
all('#cancel-edit-category-btn').forEach( (btn) => {
    btn.addEventListener('click', () => just('.section-view-categories').classList.remove("is-hidden"))
});



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

// RECORRER Y AGREGAR CATEGORÍAS  ---FUNCIONA ✓---
const listaCategorias = (category) => {
    just('#list-categorie').innerHTML = ''
    for (let {nombre, id} of category) {
        just('#list-categorie').innerHTML += `
        <li class="tag has-text-weight-semibold is-flex is-justify-content-space-between">
                <p>${nombre}</p>
                <div class="column is-narrow has-text">
                <a href="#" onclick="showEditCategory('${id}')" id="${id}" class="mr-4 is-size-7 edit-link btn-edition-category">Editar</a>
                <a href="#" onclick="removeCategoryList('${id}')" id="${id}" class="is-size-7 delete-link">Eliminar</a>
                </div>
        </li>`
    }
}
listaCategorias(categories)




//MUESTRA EDITAR CATEGORIA, OCULTA VIEW CATEGORIA Y TOMA NUEVO VALOR DEL INPUT Y LO EMPUJA A UNA FUNCION  ---FUNCIONA ✓---
const showEditCategory = (identifier) => { //recibe como parametro un ID
    just('#edit-categories').classList.remove("is-hidden") //le sacamos el hidden a la view de editar categoria
    just('.section-view-categories').classList.add('is-hidden') //le ponemos el hidden a la view de categorias principal
    let categorieToEdit = categories.filter((categoria) => categoria.id === identifier) //creamos una variable "categorias a editar" la cual guarde la condicion que del array categorias, filtre *en nuevo array* las categorias que pasen el filtro de que el id sea el mismo === que el que esta entrando como parametro `identifier` y que esas sean las categorias a editar (osea si haces click en comida, que no se modifique otra que no sea solo esa elegida)
    just('#edition-categoria-input').value = categorieToEdit[0].nombre //llamamos al input donde se va a estar escribiendo la modificacion y accedemos a su value y lo ponemos como el reemplazo del item en la posicion 0 ya que nos estaba devolviendo un array
    just('#edit-category-btn').addEventListener('click', ()=> categorieEdition(categorieToEdit[0].id))  //este evento va a ejecutar la funcion editar categoria
}


// FUNCION QUE ACTUALIZA AHORA EL NOMBRE QUE APARECE EN VIEW CATEGORY POR EL CAMBIO HECHO ANTERIORMENTE  ---FUNCIONA ✓---
const categorieEdition = (identifier) => { //creamos una funcion que tome como parametro un id
    const userChosenName = just('#edition-categoria-input').value //dentro creamos una variable que guarde el nuevo valor del input que pide editar la categoria
    let newCategories = { //creamos un nuevo objeto con las categorias que existen
        id: identifier, //conservamos el id que viene como parametro
        nombre: userChosenName //y el nombre le pasamos la info ya obtenida anteriormente 
    };
    let newestCategory = categories.map((categoryOfArr) => categoryOfArr.id === identifier ? {...newCategories} :categoryOfArr) //creamos otra variable que guarde la modificacion y me cree un nuevo array con eso nuevo (todo esto lo hace .map) y dentro del map le decimos que a la categoria que tenga un id que sea igual al que estoy recibiendo como parametro, que modifique esa categoria por la nueva ingresada (osea que si se eligio comidas para modificar, que sea comidas quien se vea afectada y no otro valor -ya que comida original y comida a modificar tendrian el mismo id)
        listaCategorias(newestCategory)
}


// BOTON CANCELAR EDITAR CATEGORIA ESCONDE EDITAR Y MUESTRA CATEGORIAS  ---FUNCIONA ✓---
all('#cancel-edit-category-btn').forEach( (btn) => {
    btn.addEventListener('click', () => just('.section-view-categories').classList.remove("is-hidden"))
});

//FUNCIONALIDAD DE BTN EDITAR OPERACION  ---NO FUNCIONA---

const editOperationList = (indentifier) => {
    just('.section-edit-new-operation').classList.remove('is-hidden')
    just('.main-balance').classList.add('is-hidden')
    let operationToEdit = operations.filter((operation) => operations.id === indentifier)
    just('#input-text-description').value = operationToEdit[0].description
    just('.edit-category-btn').addEventListener('click', ()=> operationsEdition(operationToEdit[0].id))
}
// all('.edit-operation-btn').forEach((btn) => {
//     btn.addEventListener('click', ()=> just('.section-edit-new-operation').classList.remove('is-hidden') & just('.main-balance').classList.add('is-hidden')) & just('.section-new-operation').classList.add('is-hidden')
// })






//HACER QUE TODOS LOS SELECT ESTEN ACTUALIZADOS  ---no funciona yet-necesito el local storage---
const fillSelect = (categories) => {
    all(".category-select").forEach((select) => {
        select.innerHTML = ""
        for (let {nombre, id} of categories){
            select.innerHTML += `<option value="${id}">${nombre}</option>`
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

//CREA UNA NUEVA LISTA PARA CADA NUEVA OPERACION EN OPERACIONES VIEW  ---FUNCIONA ✓---
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









//AGREGAR UNA NUEVA OPERACION
const nuevaOperacion = () => {
    let newOperation = {
        id:randomId(),
        description:just('#input-text-description').value,
        category:"lkjlk",
        date:"lkjlkj",
        amount:"lklkjlkj",
    }
    console.log(newOperation)
}
just('.btn-add-new-operation').addEventListener('click', nuevaOperacion)























// TRASH

// just('#input-text-description').addEventListener('input', (event)=> seeValueInputText(event))
// const seeValueInputText = (income) =>{
//     income.target.value
// } //CAPTURE LO QUE SE ESCRIBE 

// just('#input-number-amount').addEventListener('input', (event)=> seeValueInputNumber(event))
// const seeValueInputNumber = (income) => {
//     income.target.value
// }//capture lo el monto

// just('.selection-for-type').addEventListener('input', (event)=> seeValueSelect(event))
// const seeValueSelect = (income) => {
//     income.target.value
// }//capture el tipo de gasto o ganancia


// const www = () => {
//     just('.section-operation-created').innerHTML += `
//         <div class="column-of-each-operation columns is-justify-content-space-between">
//             <div class="column is-flex-wrap-wrap">
//                 <p>${seeValueInputText()}</p> 
//             </div>
//             <div class="column">
//                 <p>00000</p>
//             </div>
//             <div class="column">
//                 <p>000000</p>
//             </div>
//             <div class="column">
//                 <p>${seeValueInputNumber}</p>
//             </div>
//             <div class="column has-text-right">
//                 <button class="button is-text is-small" id="${operations.id}">Editar</button>
//                 <button class="button is-text is-small" id="${operations.id}">Eliminar</button>
//             </div>
//         </div>`
// }


























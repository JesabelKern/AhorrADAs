const $ = (selector) => document.querySelector(selector)

const newOperationContainer = $(".column-of-each-operation")
console.log(newOperationContainer)

const creationOfNewOperation = (listNewOperations) => {
    listNewOperations.forEach((operation) => {
        newOperationContainer.innerHTML += `<div class="column has-text-left is-flex-wrap-wrap">
        <p>${operation.description}</p>
    </div>
    <div class="column has-text-left">
        <p>${operation.category}</p>
    </div>
    <div class="column has-text-right">
        <p>${operation.date}</p>
    </div>
    <div class="column has-text-right">
        <p>${operation.amount}</p>
    </div>
    <div class="column has-text-right">
        <button class="button is-text is-small" id="${operation.id}">Editar</button>
        <button class="button is-text is-small" id="${operation.id}">Eliminar</button>                          
    </div>`
    })
}

//creationOfNewOperation(newOperations)  PARA EJECUTARLO

const newOperations = [
    {
        id:'',
        description:'',
        category:'',
        date:'',
        amount:'',
    }
];

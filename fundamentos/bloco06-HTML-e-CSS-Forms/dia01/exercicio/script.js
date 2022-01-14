let estado = document.getElementById('state');
let botaoEnviar = document.getElementById('button');
let arrayEstados = ["Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará","Distrito Federal", "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia", "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"]

function creatingStates(){
    for(let i =0; i < 25; i +=1){
        let opcoesEstados = document.createElement('option')
        estado.appendChild(opcoesEstados)
        opcoesEstados.innerHTML = arrayEstados[i]
    }
}

function validatingName() {
    let name = document.querySelector('#name-user')
    
}

function preventDef (event){
    event.preventDefault();
    validatingName();
}

botaoEnviar.addEventListener('click', preventDef)
creatingStates();
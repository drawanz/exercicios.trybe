let estado = document.getElementById('estado');
let botaoEnviar = document.getElementById('botao');
let arrayEstados = ["Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará","Distrito Federal", "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia", "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"]

function criandoEstados(){
    for(let i =0; i < 25; i +=1){
        let opcoesEstados = document.createElement('option')
        estado.appendChild(opcoesEstados)
        opcoesEstados.innerHTML = arrayEstados[i]
    }
}

function preventDef (event){
    event.preventDefault();
    console.log('enviado');
}

botaoEnviar.addEventListener('click', preventDef)
criandoEstados();
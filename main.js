const linksSocialMedia = {
    github: 'marceloicampos',
    linkedin: 'in/marceloicampos',
    twitter: 'marceloicampos',
    facebook: 'marceloicampos',
    instagram: 'marceloicampos',
    youtube: 'user/MICChannel79/playlists'
}
// console.log(linksSocialMedia)

function changeSocialMediaLinks() {
    // const userName = document.getElementById('userName').textContent = 'Marcelo'
    // userName.textContent = 'Marcelo'
    // essas são formas de acessar o DOM pela JavaScript

    // for (let i = 0; i <= 3; i++) {
    // console.log(i)
    // }
    // for é um laço de repetição de código onde uma instrução é comandada até que ocorra o fim de instrução do código, no casa acima o alert irá mostrar de 0 a 10 (onde 10 é o fim da instrução)
    // for segue 3 parâmetros a controlador de instrução inicial, a instrução final con uma condição e o iterador

    for (let li of socialLinks.children) {
        // console.log(li)
        // console.log(li.getAttribute('class'))

        const social = li.getAttribute('class')
        // console.log(social)

        li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
        // console.log(li.children[0].href)
    }
}

function getGitHubUserInfo() {
    const url = `https://api.github.com/users/${linksSocialMedia.github}`
    // console.log(url)

    fetch(url)
        .then(response => response.json())
        .then(data => {
            // console.log(data.avatar_url) OK
            // console.log(data.name) OK
            // console.log(data.login) OK
            // console.log(data.html_url) OK
            // console.log(data.bio) OK
            // console.log(data)
            userImg.src = data.avatar_url
            userName.textContent = data.name
            userLink.href = data.html_url
            userLogin.textContent = data.login
            userBio.textContent = data.bio
        })
    // fetch é uma interface JavaScript para acessar e manipular partes de um HTTP, como pedidos e respostas, o fetch faz o request e coleta os dados na URL e guara a resposta, para utilizar a reposta usamos as promises que pega a resposta do fetch para utilizar
    // promise é uma promessa é um recurso do JS para coletar respostas usando o then() que é promessa de coleta de resposta. Tradução do then é FAÇA (se deu certo tal coisa então faça)
    // arrow function (ou função de flecha). Normalmente a função é construída da seguinte forma function(arguments) {}, com a arrow function (usando o símbolo de =>) podemos contrair a função eliminando a palavra function e deixando ela sem nome (ou anónima) seguindo a seguinte sintaxe =>{} podemos reduzir/contrair as funções, o que vem antes do = é argumento, = é function, > é função sem nome e dentro das chaves inserimos que queremos executar. Nota: sem argumento 1 parênteses ()=>{}, com 1 argumento sem parênteses arg1 => {}, com 2 argumentos ou mais 1 parênteses e os argumento separados por , (arg1, arg2)=>{}
}

changeSocialMediaLinks()

getGitHubUserInfo()

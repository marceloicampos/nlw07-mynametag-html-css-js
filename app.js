// var nome = 'nome: marceloicampos'
// console.log(nome)

// string entre aspas 'marceloicampos'
// number sem aspas 5+5 = 10 e '5'+'5'=55
// boolean dados como true or false

// const userLogin = 'marceloicampos'
// let userPhone = 2587946
// let userAcceptTerms = true

// userPhone = 9999999
// alert('let-pass-new-number ' + userPhone)
// nesse caso o alert irá passar com o novo número

// userLogin = 'marcelo-do-not-pass-with-const'
// alert(userLogin)
// nesse caso não irá passar o novo nome do usuário

// variáveis: let (com o let podemos mudar a variável 'depois', ou seja, será processada até o último let dentro código, ou meio 'deixa passar a let e vai para próxima let) ou const (com o const a variável ficará 'constante', ou seja, não pode haver dois ou mais const nomeados iguais, pois ele é constante e só deve haver um const. Nota: o JS mostra os erro no console)

// let userData = {
//     userLogin,
//     userPhone,
//     userAcceptTerms
// }
// esse é um DADO ESTRUTURADO

// userLogin = 'marcelo'
// esse é um DADO SIMPLES
// alert(userLogin)
// Nota: o nome marcelo só irá passar se o userLogin levar a variável let, caso contrário dá erro por ser uma variável constante

// console.log(userLogin + ' ' + userPhone + ' ' + userAcceptTerms)
// console.log de dados simples
// console.log(userData)
// console.log de dados estruturados

// alert(userData.userLogin + ' ' + userPhone + ' ' + userAcceptTerms)

// Objeto em Js é uma forma de guardar várias dados que tenham correlação a uma mesma variável, nesse caso os dodos passados entre chaves e separados por vírgula estão relacionados a variável objectType

// dataUser(userLogin, userPhone, userAcceptTerms, objectType)

// a chamada de função dataUser "guardou" os dados userLogin, userPhone, userAcceptTerms, objectType

// >>>>> INÍCIO - código da aula 03 - INÍCIO <<<<<

const linksSocialMedia = {
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

    var li = document.getElementById('socialLinks').children
    // console.log(li)

    for (var i = 0; i <= 4; i++) {
        // console.log(li[i])
    }

    for (let li of socialLinks.children) {
        // console.log(li)
        // console.log(li.getAttribute('class'))

        const social = li.getAttribute('class')
        // console.log(social)

        li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
        // console.log(li.children[0].href)
    }
}

// // i = i + 1 incremento
// // i++ incremento abreviado

// // ser humano 12345678910
// // computador 0123456789

// camelCase (padrão do mercado)
// PascalCase
// snake_case

changeSocialMediaLinks()

// >>>>> FIM - código da aula 03 - FIM <<<<<

// function showMe() {
//     // é dado estruturado que executa uma ação agrupada ou não por ações

//     const linksSocialMediaMe = {
//         twitter: 'marceloicampos',
//         facebook: 'marceloicampos',
//         instagram: 'marceloicampos',
//         youtube: 'user/MICChannel79/playlists'
//     }

//     // console.log('showMe ' + linksSocialMediaMe.twitter)

//     showMeToo(linksSocialMediaMe)
// }

// function showMeToo(links) {
//     // a função showMeToo guarda os dados recebidos da sua chamada na forma da variável links e usa quando é executada
//     // console.log('showMeToo Too ' + links.youtube)
// }

// showMe()
// assim chamamos a função e a executamos, e neste caso com escopo local

// showMeToo(linksSocialMedia)
// assim chamamos a função e a executamos MAS AGORA estamos guardando DADOS dentro do chamado da função que serÃO usado quando ela for executada na function, e neste com escopo global

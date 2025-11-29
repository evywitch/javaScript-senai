// // // // setTimeout( ()=> {
// // // // }, 2000)

// // // // console.log("1. iniciando o servidor")
// // // // console.log("2. executando o servidor")
// // // // console.log("3. encerrando o servidor" ) // esse processo é síncrono

// // // function assarPizza() {
// // //     setTimeout( ()=> {
// // //         console.log("Pizza assada")
// // // }, 2000)
// // // }

// // // console.log("Preparando a pizza")
// // // assarPizza()
// // // console.log("comendo a pizza")


// // function assarPizza(callback){
// //      setTimeout( ()=> {
// //         console.log("Pizza pronta")
// //         callback()
// //  }, 2000)}
 
// // function comerPizza() { 
// //     console.log("Comendo a pizza")
    
// // }

// // console.log("preparando a pizza")
// // assarPizza(comerPizza)


// // let nome

// // function darNome(callback) {
// //     setTimeout(() => {
// //         nome = "alvarez"
// //         callback()
// //     }, 2000)
// // }

// // function mostrarNome() {
// //     console.log(nome)
    
// // }

// // darNome(mostrarNome)


// let usuario

// function criarUsuario(callback) {
//     setTimeout(() => {
//         usuario = {
//             nome:"Matheus",
//             idade: 20,
//             email: "mth@gmail.com"
//         }
//         callback()
//     }, 2000)
    
// }

// function mostrarUsuario(){
//     console.log(usuario)
// }

// criarUsuario(mostrarUsuario)

function verificarResultado() {
    let resultado = 1 + 1
    
    if (result == 2){

    } else{

    }
}

function sucesso (){
    console.log("uhuuull numero 2")
}

function erro (){
    console.log("Xiiiii! numero nao é 2")
}

function verificarResultado(callbackSuccess, callbackError) {
    let result = 1 + 1

    if (result == 2){
        callbackSuccess()
    } else {
        callbackError()
    }
    
}

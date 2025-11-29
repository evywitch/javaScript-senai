// // let pizzaChegou = true

// // const pedido = new Promise((resolve, reject) => {
// //     if (pizzaChegou == true) {
// //         resolve("a pizza chegou")
// //     } else {
// //         reject("pedido cancelado")
// //     }
// // })

// // pedido
// //     .then(() => {
// //         console.log("BOA!!!!")
// //     })
// //     .catch(() => {
// //         console.log("DEU RUIM")
// //     })

// const verificarResultado = new Promise((resolve, reject) => {
//     let resultado = 1 + 1

//     if (resultado == 2) {
//         resolve("DEU BOM; NUMERO 2")
//     } else {
//         reject("DEU RUIM paizao :(")
//     }
// })

// verificarResultado
//     .then((res)=> {
//         console.log(res)

//     })
//     .catch(() => {
//         console.log("DEU RUIM")

//     })

const buscarUsuario = new Promise((resolve, reject) => {
    console.log("buscando usuario no banco de dados...")
    setTimeout(() => {
        let encontrado = true

        if (encontrado == true) {
            resolve({nome:"evelyn", idade: 17, profissao: "programadora"})
            
        }else{
            reject("usuário não encontrado")
        }

    }, 2000)
})
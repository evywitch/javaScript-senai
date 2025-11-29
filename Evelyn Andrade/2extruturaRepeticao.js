// // // for(let i = 0; i<=20; i ++){
// // //     if (i %2 == 0){
// // //         console.log(i)
// // //     }
// // // }

// // for(let multiplicador=0; multiplicador<=10; multiplicador++){
// //     console.log(`5 x ${multiplicador} = ${multiplicador *5}`)
// // }

// let i = 1

// while(i<=5){
//     console.log(i)
//     i++
// }


let senha = "abc"
let tentativa = prompt("qual a sua senha? ")
while(senha!= tentativa){
    alert("senha incorreta") 
    tentativa = prompt("informe sua senha: ")
}
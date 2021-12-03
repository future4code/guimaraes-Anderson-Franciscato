/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
console.log ("Bem vindo ao jogo de Blackjack!")
let usuario = []
let computador = []
if (confirm("Quer iniciar uma nova rodada?"))
{ 
   let cartaCerto = false
   while (cartaCerto == false) {
      usuario.push(comprarCarta())
      usuario.push(comprarCarta())
      computador.push(comprarCarta())
      computador.push(comprarCarta())
      if (usuario[0].valor === 11 && usuario[1].valor === 11)
          (computador[0].valor === 11 && computador[1].valor === 11)
            {
               usuario = []
               computador = []
            }
            }
            
      }
      else {
         cartaCerto = true
      }

      let comprando = true 
      while (comprando) {
         let textos = ""
         let pontos = 0
         for (let carta of usuario) {
            textos += carta.texto + " "
            pontos += carta.valor
         }
      if (pontos > 21) {
         alert("O usuário estourou!")
         comprando = false
      }
      else {
         let confirmBuy = confirmarCompra(
            "Suas cartas são " + textos + "\n" + "A carta revelada do computador é " + computador[0].texto + "\n" + "Deseja comprar mais uma carta?"
         )
         if (confirmBuy) {
            usuario.push(comprarCarta())
         }
      else {
         comprando = false
         }
      }
   }

   let pontosComputador = 0
   let pontosUsuario = 0
   let textoComputador = ""
   let textoUsuario = ""
   for (let carta of computador) {
      textoComputador += carta.texto + " "
      pontosComputador += carta.valor
   }
   for (let carta of usuario) {
      textoUsuario += carta.texto + " "
      pontosUsuario += carta.valor
   }

   if (pontosComputador < pontosUsuario && pontosComputador <= 21) {
      computador.push(comprarCarta())
      pontosComputador = 0
      textoComputador = ""
      for (let carta of computador) {
         textoComputador += carta.texto + " "
         pontosComputador += carta.valor
      }
   }

   let resultado = "Resultado final: \n"

   if (pontosUsuario > pontosComputador && pontosUsuario <= 21) {
      resultado += "O usuário ganhou!"
   }
   else if (pontosComputador > pontosUsuario && pontosComputador <= 21) {
      resultado += "O computador ganhou!"
   }
   else if (pontosComputador > 21 && pontosUsuario <= 21) {
      resultado += "O usuário ganhou!"
   }
   else if (pontosUsuario > 21 && pontosComputador <= 21) {
      resultado += "O computador ganhou!"
   }
   else if (pontosComputador === pontosUsuario) {
      resultado += "Empate!"
   }

   alert(
      "Usuario: " + textoUsuario + " - " + pontosUsuario + "\n" +
      "Computador: " + textoComputador + " - " + pontosComputador + "\n" +
      resultado
   )

   alert ("O jogo acabou!")





      

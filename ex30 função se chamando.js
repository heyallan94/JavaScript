/*Uma função pode ser auto chamada e nunca mais ser chamada se envolver toda a função
com um () e em seguida executa-la ()*/

(function (){
    console.log("IIFE função normal")
})() //função normal

(() =>{
    console.log("IIFE função arrow")
})()


/*
================================ IMPORTANTE =============================
========================= SÓ FUNCIONA APENAS UM IIFE ====================
================================ POR CÓDIGO =============================
*/
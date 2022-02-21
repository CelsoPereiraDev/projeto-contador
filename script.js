function contar(){
    var inicio = document.getElementById('nuinicio')
    var fim = document.getElementById ('nufim')
    var passo = document.getElementById('nupasso')
    var I = Number(inicio.value)
    var F = Number(fim.value)
    var P = Number(passo.value)
    var x = I
    res.innerHTML = ''
    if (inicio.value.lenght == 0 || fim.value.lenght == 0 || passo.value == 0){
        window.alert ('[ERRO] Faltam dados!')
    }
    if (I<F){
        for (x ; x <= F ; x += P ) {
        res.innerHTML += `${x} \u{1F449} `
        }    
    } else
        for (x; x>=F ; x-=P)   {
        res.innerHTML += `${x} \u{1F449} `    
        }
}
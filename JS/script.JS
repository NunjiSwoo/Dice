var btn = document.getElementById('org')
btn.addEventListener('click', saas)

function saas(){
    if(organizacao==0){
        organizacao = 1
        return
    }else if(organizacao==1){
        organizacao = 0
        return
    }

}

var btn = document.getElementById('btnDado')
btn.addEventListener('click', resuus)

var organizacao = 0
var numb = [0]
var aux


function getRandomInt(){

    min = Math.ceil(1);
    max = Math.floor(20);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


function resuus(){

    numb = [0]

    var quantidade = document.getElementById('n1').value

    for(let i=0; i<quantidade-1; i++)
    numb.push(0)


    for(var ale=0; ale<numb.length; ale++){
        numb[ale] = getRandomInt()
    }

    if(organizacao==0)
    document.getElementById('resultado').innerText = numb
    else if(organizacao==1){
        for(var q=0; q<numb.length; q++){
            for(var b=0; b <numb.length-1; b++){
                if(numb[b] > numb[b+1]){
                    aux = numb[b]
                    numb[b] = numb[b+1]
                    numb[b+1] = aux
                }
            }
        }
        document.getElementById('resultado').innerText = numb
    }else
        window.alert('Deu ruim')
}
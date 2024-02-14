const buttonligar = document.getElementById ( 'buttonligar' );
const buttondesligar = document.getElementById ( 'buttondesligar' );
const lamp = document.getElementById ( 'lamp' );

function verifQuebra () {
    return lamp.src.indexOf ( 'quebrada' ) > -1
}

function lampOn () {
    if (!verifQuebra ()){
        
        lamp.src = './img/ligada.png'
    }
}

function lampOff () {
    if (!verifQuebra ()) {
        
        lamp.src = './img/desligada.png'
    }
}

function lampQuebra () {
    lamp.src = './img/quebrada.png'
}

buttonligar.addEventListener( 'click', lampOn );
buttondesligar.addEventListener ( 'click', lampOff );
lamp.addEventListener ( 'mouseover', lampOn );
lamp.addEventListener ( 'mouseleave', lampOff );
lamp.addEventListener ( 'dblclick', lampQuebra );
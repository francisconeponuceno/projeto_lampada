const turnOn = document.getElementById('turnOn');
const lamp = document.getElementById('lamp');

function ligaDesliga (){
    let textButton = turnOn.innerText;

    if (textButton == 'Ligar'){
        turnOn.innerText = 'Desligar'
        lampOn()

    }

    else {
        turnOn.innerText = 'Ligar'
        lampOff()
    }

}

function isLampBroken() {
    return lamp.src.indexOf('quebrada') > -1
}

function lampOn (){
    if (!isLampBroken ()){
        lamp.src = './img/ligada.jpg';
    }
    
}

function lampOff () {
    if (!isLampBroken ()) {
        lamp.src = './img/desligada.jpg';
    }
    
}

function lampBroken (){
    lamp.src = './img/quebrada.jpg';
}



turnOn.addEventListener ('click', ligaDesliga);
lamp.addEventListener ('mouseover', lampOn)
lamp.addEventListener ('mouseleave', lampOff)
lamp.addEventListener ('dblclick', lampBroken);
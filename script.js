let button = document.getElementById('button');
let fire = document.getElementById('fire');

button.onmouseover = function () {fire.style.display = 'inline';}
button.onmouseout = function () {fire.style.display = 'none';}

const Calculate = () => {

    let adult = document.getElementById('adult')
    let child = document.getElementById('child')
    let duration = document.getElementById('duration')

    let howMuchBeef = document.getElementById('result1') //use this to show final result
    let howMuchBeer = document.getElementById('result2') //use this to show final result
    let howMuchCoke = document.getElementById('result3') //use this to show final result (.innerHTML = .value)

    if(duration.value < 6){
    let enoughBeefForAdult = 400 
    let enoughBeerForAdult = 1200
    let enoughCokeForAdult = 1000

        let beef = adult.value * enoughBeefForAdult
        let childBeef = child.value * (enoughBeefForAdult/2)
        beef = beef + childBeef

        let beer = adult.value * enoughBeerForAdult

        let coke = adult.value * enoughCokeForAdult
        let childCoke = child.value * (enoughCokeForAdult/2)
        coke = coke + childCoke;

        howMuchBeef.innerHTML = ((beef/1000) + ' KG de Carne');
        howMuchBeer.innerHTML = ((Math.ceil(beer/350) )+ ' Latas de Cerveja');
        howMuchCoke.innerHTML = (Math.ceil(coke/2000) + ' Garrafas de 2L de Bebida');
    } else
    if(duration.value >= 6){
        let enoughBeefForAdult = 650 
        let enoughBeerForAdult = 2000
        let enoughCokeForAdult = 1500
    
            let beef = adult.value * enoughBeefForAdult
            let childBeef = child.value * (enoughBeefForAdult/2)
            beef = beef + childBeef
    
            let beer = adult.value * enoughBeerForAdult
    
            let coke = adult.value * enoughCokeForAdult
            let childCoke = child.value * (enoughCokeForAdult/2)
            coke = coke + childCoke;
    
            howMuchBeef.innerHTML = ((beef/1000) + ' KG de Carne');
            howMuchBeer.innerHTML = ((Math.ceil(beer/350) )+ ' Latas de Cerveja');
            howMuchCoke.innerHTML = (Math.ceil(coke/2000) + ' Garrafas de 2L de Bebida');
        }
}


var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];

function logDairy(){  
    for (let ld of dairy) {
        console.log(ld);
    }
}

logDairy();


const animal = {  
    canJump: true  
};  

const bird = Object.create(animal);  
bird.canFly = true;  
bird.hasFeathers = true;  

function birdCan() {
    for (let key of Object.keys(bird)) {
        console.log(`${key}: ${bird[key]}`);
    }
}

birdCan();

function animalCan(){
    for (let p in bird) {
        console.log(`${p}: ${bird[p]}`);
    }
}

animalCan();

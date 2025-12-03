class Persona {
    constructor(nombre = "Tom", edad = 20, energia = 100) {
        this.nombre = nombre;
        this.edad = edad;
        this.energia = energia;
    }

    sleep() {
        this.energia = Math.min(this.energia + 10, 100);
        console.log(`${this.nombre} durmió. Energía: ${this.energia}`);
    }

    hacerAlgoDivertido() {
        this.energia = Math.max(this.energia - 10, 0);
        console.log(`${this.nombre} hizo algo divertido. Energía: ${this.energia}`);
    }
}

class Trabajador extends Persona {
    constructor(nombre, edad, energia, xP = 0, hourlyWage = 10) {
        super(nombre, edad, energia);
        this.xP = xP;
        this.hourlyWage = hourlyWage;
    }

    goToWork() {
        this.xP += 10;
        console.log(`${this.nombre} fue a trabajar. XP: ${this.xP}`);
    }
}

function intern() {
    const nuevoTrabajador = new Trabajador("Bob", 21, 110, 0, 10);
    return nuevoTrabajador;
}

function manager() {
    const nuevoManager = new Trabajador("Alice", 30, 120, 100, 30);
    nuevoManager.hacerAlgoDivertido(); 
    return nuevoManager;
}





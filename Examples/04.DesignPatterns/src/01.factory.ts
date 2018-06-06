class Engine {
    constructor(volume: number, kind: string) {

    }
}

class Car {
    constructor(
        tires: number,
        engine: Engine,
        color: string,
        wheel: boolean,
        isNew: boolean) {
    }

    static createCar(color: string) {
        return new Car(
            4,
            new Engine(6, 'Maybach'),
            color,
            true,
            true);
    }
}

const { createCar } = Car;
const car = createCar('black');
const car1 = createCar('yellow');
const car2 = createCar('green');
const car3 = createCar('magenta');
const car4 = createCar('blue');

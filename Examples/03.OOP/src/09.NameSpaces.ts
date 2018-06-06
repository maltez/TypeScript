namespace Vikings {
    export interface IWarrior {
    }

    export class Warrior {
        constructor(public name: string, public age: number) {
        }

        attack():void {
            console.log(`Viking ${this.name} Attack !`);
        }
    }
}

namespace Cossacks {    
    export class Warrior {
        constructor(public name: string) {
        }

        attack():void {
            console.log(`Cossack ${this.name} Attack !`);
        }
    }
}


const warriorViking = new Vikings.Warrior('Olaf', 21);
const mykolo = new Cossacks.Warrior('Mykola');
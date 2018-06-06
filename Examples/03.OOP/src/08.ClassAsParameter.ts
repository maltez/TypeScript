class Warrior1 {
    public name: string;
    public age: number;
    private secretName: string;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        this.secretName = `${this.name} + ${this.age}`;
    }

}

class Berserk {
    private __warrior: Warrior1;
    constructor(warrior: Warrior1) {
        this.__warrior = warrior;
    }

    public attack(): void {
        console.log(`Berserk ${this.__warrior.name} Attack !`)
    }
}

const harold = new Warrior1('Harold', 18);
const berserk = new Berserk(harold);
berserk.attack();
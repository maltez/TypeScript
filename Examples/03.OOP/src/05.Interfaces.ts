interface House {
    windows: number,
    doors: number,
    live(man: string): void;
}

const whiteHouse: House = {
    windows: 100,
    doors: 4,
    live(president: string): void {
        console.log(`${president} lives in house with ${this.windows} windows and ${this.doors} doors`)
    }
};

interface Response1 {
    statusMsg: string,
    code: number,
    message: string
}

const res: Response1 = {
    statusMsg: 'OK',
    code: 200,
    message: 'ping'
}

class RedHouse implements House {
    public windows: number;
    public doors: number;

    constructor(windows:number, doors: number) {
        this.windows = windows;
        this.doors = doors;
    }

    live(man: string): void {
        console.log(`Old  ${man} lives in flat with ${this.windows} windows and ${this.doors} doors`);
    }
}

class YellowHouse implements House {
    public windows: number;
    public doors: number;

    constructor(windows:number, doors: number) {
        this.windows = windows;
        this.doors = doors;
    }

    public callSanitattor():void {
        console.log('Medics!!!!');
    }

    public live(man: string): void {
        console.log(`Crazy people, crazy music`);
    }
}

const house1: House = new YellowHouse(1, 1);
const house2: House = new RedHouse(10, 4);

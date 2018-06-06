interface Convertor {
    from(number: number):string;
    to(str: string):number;
}

enum Letters {
    'A' = 10,
    'B' = 11,
    'C'= 12,
    'D' = 13,
    'E' = 14,
    'F' = 15,
}

class BinConvertor implements Convertor {
    protected index: number;
    constructor() {
        this.index = 2;
    }
    from(number: number):string  {
        let result = '';
        let left = number;
        while (left > 0) {
            let item = left%this.index > 9 ? Letters[left%this.index] : left%this.index;
            result = item + result;
            left = Math.floor(left/this.index);
        }
        return result
    }

    to(str:string):number {
        let result = 0;
        let counter = 0;
        for (let i=str.length-1;i>=0; i--) {
            let item = /[A-F]/.test(str[i])? Letters[str[i]] : str[i];
            result += Math.pow(this.index, counter)*Number(str[i]);
            counter++;
        }
        return result;
    }
}

class OctalConvertor  extends BinConvertor implements Convertor {
    constructor() {
        super();
        this.index = 8;
    }
}

class HexConvertor  extends BinConvertor implements Convertor {
    constructor() {
        super();
        this.index = 16;
    }
}

const convertor = new BinConvertor();
const convertor2 = new OctalConvertor();
const convertor3 = new HexConvertor();

console.log(convertor.from(33));
console.log(convertor.to('100001'));
console.log(convertor2.from(56));
console.log(convertor2.to('67'));
console.log(convertor3.from(26));

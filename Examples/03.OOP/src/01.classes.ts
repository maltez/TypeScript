type telNumber = number | string;

class CellPhone {
    static ColorRed: string = 'RED';
    num: telNumber;
    brand: string;
    constructor();
    constructor(number: telNumber);
    constructor(num:telNumber, brand: string);

    constructor(num: telNumber = '3310', brand:string = 'Nokia') {
        this.brand = brand;
        this.num = num;
    }

    callMyFather():void;
    callMyFather(num: telNumber):void;

    callMyFather(num: telNumber = 100500): void {
        console.log(`Hi ${num}  this is your son ${this.num}`);
    }

    static Alert(): void {
        console.log('Alert!!!!!');
    }
}

const cellPhone = new CellPhone()
console.log(cellPhone.callMyFather());
CellPhone.Alert();
CellPhone.ColorRed;

export default CellPhone;
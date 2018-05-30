import CellPhone from './01.classes';

class CellPhoneWithStrazes extends CellPhone {
    shocker: boolean = true;

    constructor(num: number) {
        super(num, 'Vertu');
    }
}
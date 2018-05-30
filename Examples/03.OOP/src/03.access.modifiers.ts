class SuperPhone {
    protected accumulator: number = 100;
    private money: number = 10.00;

    constructor(public button: boolean) {
    }

    public callToFather(min: number):void  {
        this.money -= min * 0.20;
    }
}

const superPhone = new SuperPhone(true);
superPhone.button = true;


class SuperPuperPhone extends SuperPhone {
    rechargeAcc() {
        this.accumulator = 100;
    }
}

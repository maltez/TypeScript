type numStr = number;

interface Resp1 <T extends numStr> {
    value: T;
    code: T;
    message: string;
}

const res2: Resp1<number> = {
    value: 10,
    code: 200,
    message: 'Ok'
}

interface Warrior <T extends Resp1<U>, U extends numStr> {
    kill(req: U): T;
}

class SuperWarrior<N extends Resp1<number>, M extends numStr > implements Warrior<Resp1<number>, number> {
    kill(req: M): Resp1<number> {
        const resp2:Resp1<number>  = {
            value: 100500,
            code: 200,
            message: 'Warior code'
        };

        return resp2;
    }
}
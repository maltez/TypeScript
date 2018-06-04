type newType = string | number | Array<any> | object;

function toNumber<T extends newType>(val:T): number {
    if (typeof val === 'number') {
        return val;
    } else if (typeof val === 'object' && !Array.isArray(val)) {
        return Object.keys(val).length;
    }

    return (val as Array<any> | string).length;
}

console.log(toNumber<string>('boo'));
console.log(toNumber<number>(45));
console.log(toNumber<object>({}));
console.log(toNumber({cat: true}));
console.log(toNumber<Array<any>>([1,5,4,6,8,7]));



const stringFunction = (count: number):string => `request ${count}`;

let promise1 = new Promise((resolve:((val:string) => void), reject: (err: Error) => void):void  => {
    setImmediate(():void =>  resolve(stringFunction(1)));
});

let promise2 = new Promise((resolve:((val:string) => void), reject: (err: Error) => void):void  => {
    setImmediate((): void =>  resolve(stringFunction(2)));
});

Promise.all([promise1, promise2]).then((values: string[]):string[] => {
    values.push(stringFunction(3));
    values.push(stringFunction(4));
    values.push(stringFunction(5));
    console.log(values);
    return values;
});
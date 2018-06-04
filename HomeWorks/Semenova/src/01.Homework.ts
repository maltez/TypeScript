type toStringArgument = string | boolean | number | Array<any> | object | undefined;

function toStringConverter(val: any): string {
    // TODO: ask why this code throws an error;
    // switch (typeof val) {
    //     case 'boolean':
    //         return val ? '1' : '0';
    //     case 'object':
    //         return JSON.stringify(val);
    //     case 'undefined':
    //         return 'undefined';
    //     default:
    //         return val.toString();
    // }
    if (typeof val === 'boolean') {
        return val ? '1' : '0';
    } else if (typeof val === 'object') {
        return JSON.stringify(val);
    }  else if (typeof val === 'undefined') {
        return 'undefined';
    }
        return val.toString();
}

console.log(toStringConverter(true));
console.log(toStringConverter(NaN));
console.log(toStringConverter(undefined));
console.log(toStringConverter('boo'));
console.log(toStringConverter(45));
console.log(toStringConverter({}));
console.log(toStringConverter({cat: true}));



function factorial(val: number): number {
    if (val < 0 || val%1 !== 0 || isNaN(val)) {
        throw new Error(`Accept positive integer only`);
    }

    let result: number = 1;

    for (let i:number = 1; i <= val; i++) {
        result = result * i;
    }
    
    return result;
}


function fib(val: number): number[] {
    if (val % 1 !== 0 || isNaN(val)) {
        throw new Error(`Accept integers only`);
    }
    if (val === 0) {
        return [0];
    }
    let fibArray: number[] = [0, 1];

    for (let i:number = 0;; i++) {
        const nextNumber: number = val > 0 ? fibArray[i] + fibArray[i+1] : fibArray[i] - fibArray[i+1];
        if (Math.abs(nextNumber) > Math.abs(val)) {
            return fibArray;
        }
        fibArray.push(nextNumber);
    }
}

console.log(fib(25));
console.log(factorial(8));



const fn = (function() {
    const a = 12345;
    const calc = function(a: number, b:number): number{
        return a + b;
    };

    const doubleCalc = function(a: number) {
        return calc(a, a);
    }

    return {
        a,
        calc
    }
})();

fn.calc(1,2);
export class MathHelper {
    static factorial(n:number): number {
        if( n < 0 ){
            throw new RangeError('Wrong number range');
        }
        if (n === 0) {
            return 1;
        } else {
            return n * MathHelper.factorial(n - 1);
        }
    }
}
import { MathHelper } from '../src/factorial';
import { expect, assert } from 'chai';

describe('Test factorial functionality', ()=> {
    it('Input 1. Expect 1', () => {
        const input:number = 1;
        const expectRes:number = 1;

        const actual = MathHelper.factorial(input);

        expect(actual).equal(expectRes);
    });

    it('Input 3. Expect 6', () => {
        const input:number = 3;
        const expectRes:number = 6;

        const actual = MathHelper.factorial(input);

        expect(actual).equal(expectRes);
    });

    it('Input -1, Expect throw an error', () => {
        const input: number = -1;
        assert.throw(()=> {
            MathHelper.factorial(input);
        })
    });

    it('Input 0. Expect 1', () => {
        const input:number = 0;
        const expectRes:number = 1;

        const actual = MathHelper.factorial(input);

        expect(actual).equal(expectRes);
    });
});
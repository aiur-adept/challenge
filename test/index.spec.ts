import { describe, it } from 'mocha';
const chai = await import('chai');
import { DFSSolver } from '../src/index.ts';

describe('Test description', function () {
    it('should ...', async function () {
        
        const dfs = new DFSSolver({
            data: [
                [1, 0, 1, 1, 0],
                [1, 0, 0, 1, 0],
                [1, 0, 1, 1, 0],
                [1, 0, 0, 0, 0],
                [1, 1, 1, 1, 1],
            ],
            dimensions: {
                rows: 5,
                cols: 5,
            },
        });

        const soln = dfs.solve();

        const expected = 9;

        chai.expect(soln).to.equal(expected);
    });
});
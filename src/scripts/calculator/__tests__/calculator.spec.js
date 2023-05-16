import { sum, mult } from '../calculator';

it('should return sum', () => {
    expect(sum(5, 6).toBe(11));
});

it('should return mult', () => {
    expect(mult(5, 6).toBe(30));
});
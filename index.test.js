describe('sum of two numbers', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(1 + 2).toBe(3);
    });
    test('adds 5 + 7 to equal 12', () => {
        expect(5 + 7).toBe(12);
    });
    test('adds -1 + 1 to equal 0', () => {
        expect(-1 + 1).toBe(0);
    });
});

describe('subtracting two numbers', () => {
    test('subtracts 5 - 2 to equal 3', () => {
        expect(5 - 2).toBe(3);
    }); 
    test('subtracts 10 - 4 to equal 6', () => {
        expect(10 - 4).toBe(6);
    });
    test('subtracts 0 - 5 to equal -5', () => {
        expect(0 - 5).toBe(-5);
    });
});
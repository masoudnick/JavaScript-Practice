import countBits from '.';


test('number: 4', () => {
    expect(countBits(4)).toStrictEqual(1);
});

test('number: 7', () => {
    expect(countBits(7)).toStrictEqual(3);
});
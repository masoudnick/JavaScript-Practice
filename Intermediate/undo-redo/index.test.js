import countBits from '.';


test('Test 1: ', () => {
    const unRe = undoRedo({x: 1, y: 2});
    expect(unRe.get('x')).toStrictEqual(1);
    unRe.set('x', 3);
    expect(unRe.get('x')).toStrictEqual(3);
});

// test('number: 7', () => {
//     const unRe = undoRedo({x: 1, y: 2});
//     unRe.set('y', 10);
//     expect(unRe.get('y')).toStrictEqual(10);
// });
import arrayDiff from '.';


test('a was [1,2], b was [1]', () => {
    expect(arrayDiff([1,2] , [1])).toStrictEqual([2]);
});

test('a was [1,2,2], b was []', () => {
    expect(arrayDiff([1,2,2], [])).toStrictEqual([1,2,2]);
});

test('a was [], b was [1,2]', () => {
    expect(arrayDiff([], [1,2])).toStrictEqual([]);
});
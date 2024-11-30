import humanReadable from '.';


test('Test 1:', () => {
    expect(humanReadable(60)).toStrictEqual("00:01:00");
});

test('Test 2:', () => {
    expect(humanReadable(3600)).toStrictEqual("01:00:00");
});

test('Test 3:', () => {
    expect(humanReadable(86399)).toStrictEqual("23:59:59");
});
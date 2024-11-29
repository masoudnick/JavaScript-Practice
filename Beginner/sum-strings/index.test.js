import sumStrings from '.';


test('123 + 456 = 579', () => {
    expect(sumStrings('123', '456')).toStrictEqual('579');
});

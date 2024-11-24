const countBits = (n) => n.toString(2).split("").reduce((sum, bit) => sum + +bit, 0);

export default countBits;

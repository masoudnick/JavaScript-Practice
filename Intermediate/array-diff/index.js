const arrayDiff = (a, b) => {
    return a.filter(item => !b.includes(item))
}

export default arrayDiff;

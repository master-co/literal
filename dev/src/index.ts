import $ from '../../src';

console.log($`a ${['b', 0, false, 'c']} d`)
console.log($`
    a
    b
    ${undefined}
    c    d
`)
console.log($`
a
${
    [
        1 && 'b',
        { c: false, d: null },
        ['e', ['f']]
    ]
}
g    h
`)
console.log($`a b ${['c', 'd']} ${{ e: true, f: false }} ${true && 'g'}`)
console.log($('a b', ['c', 'd'], { e: true, f: false }, true && 'g'));
console.log($(['c', 0, false, 'd']))
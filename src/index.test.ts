import $ from './index';

const isTrue = () => true;

test('Strings', () => {
    expect($`a ${true && 'b'} c`).toBe('a b c');
});

test('Objects', () => {
    expect($`a ${{ b: true, c: false, d: isTrue() }} e`).toBe('a b d e');
});

test('Arrays', () => {
    expect($`a ${['b', 0, false, 'c']} d`).toBe('a b c d');
});

test('Resolve types', () => {
    expect($`a ${true} ${false} ${''} ${null} ${undefined} ${0} ${NaN} b`)
        .toBe('a b');
});

test('Trim and clear', () => {
    expect($`
    a
    b
    ${undefined}
    c    d
`).toBe('a b c d');
});

test('Mixed and nested', () => {
    expect($`
    a
    ${[
            1 && 'b',
            { c: false, d: null },
            ['e', ['f']]
        ]
        }
    g    h
`).toBe('a b e f g h');
});

test('Execute like a function', () => {
    expect($`a b ${['c', 'd']} ${{ e: true, f: false }} ${true && 'g'}`).toBe('a b c d e g');
    expect($('a b', ['c', 'd'], { e: true, f: false }, true && 'g')).toBe('a b c d e g');
});
const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let massive = expr.split('');
    let arr1 = [];

    for (let i = 0; i < massive.length; i = i + 10) {
        arr1.push(massive.slice(i, i + 10));
    }

    let arr2 = [];
    arr1.forEach(item => {
        symbol = ''

        for (let i = 9; i > 0; i = i - 2) {
            if (item[i - 1] + item[i] == '10') {
                symbol = '.' + symbol
            }
            if (item[i - 1] + item[i] == '11') {
                symbol = '-' + symbol
            }
            if (item[i - 1] + item[i] == '**') {
                symbol = '' + symbol
            }
        }
        arr2.push(symbol)
    })

    total = '';
    arr2.forEach(symbol => {
        if (!MORSE_TABLE[symbol]) {
            total += ' '
        } else total += MORSE_TABLE[symbol];
    })
    return total
}

module.exports = {
    decode
}
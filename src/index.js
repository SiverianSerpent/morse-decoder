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
    '**********': ' ',
};

function decode(str) {
    
        let arr = [];
        
            for (let i = 0; i < str.length; i+= 10) {
         
           arr.push(str.slice(i, i + 10));
           
        }
        let q = arr.map(key => {
          return key.replace(/00/g, '').replace(/11/g, '-').replace(/10/g, '.')
        } )
        
        let p = q.map(el => MORSE_TABLE[el])
        let v = p.join('')
        return v
        } 


module.exports = {
    decode
}
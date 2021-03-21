//возведение в степень
function pow(x, n) {

    return x ** n;
}

const powResult = pow(10, 3);

console.log('Результат задания 1' + ': ' + powResult);

//репит

function repeat(str, a = 2) {
    let result = '';

    for (let i = 0; i < a; i++) {
        result = result + str;

    }
    return result;
}

const repeatResult = repeat('я повторился ',);

console.log('Результат задания 2' + ': ' + repeatResult);

// меньшее из двух

function min(a, b) {
    if (a >= b) {
        return b;
    }
    return a;
}

const minResult = min(25, 24);

console.log('Результат задания 3' + ': ' + 'Минимальное значение: ' + minResult);

// Наибольшее из массива

function maxArray(array) {
    let max = array[0];
    array.forEach((item) => {
        if (max >= item) {
            return max;
        }
        return max = item;
    });
    return max;
}

let q = maxArray([2, 15, 88, 3, 17]);
console.log('Результат задания 4' + ': ' + q);

// возврат РГБ

function rgb(r, g, b) {
    return a = 'rgb(' + r + ', ' + g + ', ' + b + ')';
}

let rgbResult = rgb(8, 111, 480);

console.log('Результат задания 4' + ': ' + rgbResult);

//форматирование строки N товаров

function getFormatedString(n = 0) {
    const goods = ['товар', 'товара', 'товаров'];

    let remain = n % 100 % 10;

    if (n > 10 && n < 20)
        return n + ' ' + goods[2];
    if (remain === 1)
        return n + ' ' + goods[0];
    if (remain >= 5)
        return n + ' ' + goods[2];
    if (remain === 0)
        return n + ' ' + goods[2];
    if (remain > 1 && remain < 5)
        return n + ' ' + goods[1];
    return n + ' ' + goods[2];
}


let formatedResult = getFormatedString(94);
console.log('Результат задания 5' + ': ' + formatedResult);

//генератор вызова функции


function sequence(start = 0, step = 1) {
    let count = start;

    // возвращаемся к функции
    function counter() {
        return count = count + step;
    }

    return counter;
}

let generator = sequence(10, 25);

console.log('Результат задания 6:');
console.log(generator());
console.log(generator());
console.log(generator());

//смена литер
function example(str) {
    let result = '';

    for (let i = 0; i <= str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            result = result + str[i].toLowerCase();
        } else {
            result = result + str[i].toUpperCase();
        }
    }
    return result
}

let n = example('doNOTunderstandwhyITISWorKing');

console.log('Результат задания 7' + ': ' + n);

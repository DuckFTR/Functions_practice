//возведение в степень
function pow(x, n) {

    return x ** n;
}

const powResult = pow(10, 3);

console.log('Результат первого задания' + ': ' + powResult);

//репит

function repeat(str, a = 2) {
    let result = '';

    for ( let i = 0; i < a; i++) {
        result = result + str;

    }
    return result;
}

const repeatResult = repeat('я повторился', );

console.log(repeatResult);

// меньшее из двух

function min (a, b) {
    if (a >= b) {
        return b;
    }
        return a;
}

const minResult = min (25,24);

console.log('Минимальное значение: ' + minResult);

// Наибольшее из массива

function maxArray (array) {
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
    console.log(q);

    // возврат РГБ

function rgb (r, g, b) {
    return a = 'rgb(' + r +', '+ g + ', ' + b + ')';
    }
let rgbResult = rgb (8,111,480);

console.log(rgbResult);

//форматирование строки N товаров

function getFormatedString(n) {
    return n + ' товаров';
}

let formatedResult = getFormatedString(20);
console.log(formatedResult);








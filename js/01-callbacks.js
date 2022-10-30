/* приклад функції */
// const fnA = function (message, callback) {
//     console.log(message);

//     console.log(callback);
//     callback(100);
// };

// const fnB = function (number) {
//     console.log("Цей лог при виклику fnB", number);
// };

// fnA('qweqw', fnB);


// 2. inline function (анонімна фкнція яка не перевикористовується)
const doMath = function (a, b, callback) {
    const result = callback(a, b);

    console.log(result);
};

// doMath(2, 3, function (x, y) {
//     return x + y;
// });

// doMath(10, 8, function (x, y) {
//     return x - y;
// });

const buttonRef = document.querySelector('.js-button');

const handleBtnClick = function () {
    console.log('Клікни по мені');
};

// buttonRef.addEventListener('click', handleBtnClick);

/* Відкаледний виклик
 */
const callback = function () {
    console.log('Через 2 секунди всередині колбека таймаута');
}
// console.log('В коді перед таймаутом');

// setTimeout(callback, 2000);

// console.log('В коді після таймаута');


/* function filtr*/

const filter = function (array, test) {
    const filteredArray = [];

    for (const el of array) {
        console.log(el);
        const passed = test(el);

        if (passed) {
            filteredArray.push(el);
        }
    }
    return filteredArray;

};
// 1. Потрібно передати функцію
// 2. функцію получає елемент масиву
// 3. 
// 4. 


const callback1 = function (value) {
    return value >= 3;

};

const r1 = filter([1, 2, 3, 4, 5], callback1);
console.log(r1);


const callback2 = function (value) {
    return value <= 4;

};

const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], callback2);
console.log(r2); 

const fruits = [
    { name: 'apples', quantity: 200, isFresh: true },
    { name: 'grapes', quantity: 150, isFresh: false },
    { name: 'bananas', quantity: 100, isFresh: true },


];

const getfruitsWithQuantity = function (fruit) {
    return fruit.quantity >= 120;
}

const r3 = filter(fruits, getfruitsWithQuantity);
console.log(r3);
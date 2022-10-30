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

buttonRef.addEventListener('click', handleBtnClick);






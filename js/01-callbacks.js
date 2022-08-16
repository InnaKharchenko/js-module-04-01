// функція зворотнього виклику
// функція може приймати 

// const fnA = function (message, callback) {
//     console.log(message);

//     console.log(callback);
//     callback(100);
// };

// const fnB = function (number) {
//     console.log('fnB', number);
// }

// fnA('qweqwe, fnB');

// const doMath = function (a, b, callback) {
//     const result = callback(a, b);

//     console.log(result);
// };
// 1 
// const add = function (x, y) {
//     return x + y;

// };

// const sub = function (x, y) {
//     return x - y;
// };

// doMath(2, 3, add);
// doMath(10, 8, sub);
// doMath(2, 3, function (x, y) {
//     return x + y;
// });

// doMath(10, 8, function (x, y) {
//     return x - y;
// });

// const buttonRef = document.querySelector('.js-button');

// const handleBtnClick = function () {
//     console.log('Klick on button');
// };

// buttonRef.addEventListener('click', handleBtnClick);


const onGetPositionSuccesess = function (position) {
    console.log(position);
};

const onGetPositionError = function (error) {
    console.log(error);
};

window.navigator.geolocation.getCurrentPosition(
    onGetPositionSuccesess,
    onGetPositionError,
);

//window.navigator.geolocation.getCurrentPosition

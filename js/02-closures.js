// Замикання , функція яка  повертається може визиватися поза тілом фукції

const fnA = function (parameter) {
    const innerVarible = 'значення внутрішньої перемінної';

    const innerFunction = function () {
        console.log('Це виклик innerFunction');
    };

    return innerFunction;
};

const fnB = fnA();

fnB();
console.log(fnB);


// sheff
const makeDish = function (sheffName, dish) {
    console.log(`${sheffName} готовить ${dish}`);
};

// makeDish('Mango', 'пиріжок');
// makeDish('Mango', 'омлет');
// makeDish('Mango', 'чай');

// makeDish('Poly', 'котлети');
// makeDish('Poly', 'суп');
// makeDish('Poly', 'каву');

const makeSheff = function (name) {
    const makeDish = function (dish) {
        console.log(`${name} готовить ${dish}`);
    }
    return makeDish;
};

// const mango = makeSheff('Mango');

// console.dir(mango);

// mango('котлети');
// mango('пиріжок');
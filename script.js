/* Monday June 13 2022 */

let f;

const g = function () {
    const a = 23;
    f = function () {
        console.log(a * 2);
    };
};

const h = functio () {
    const b = 777;
    f = function () {
        console.log(b * 2);
    };
};

g();
f();
console.dir(f);

// Re-assigning f function
h();
f();
console.dir(f);

// example 2
const boardPassengers = function (n, wait) {
    const perGroup = n / 3;
     setTimeout(function () {}, 1000);

     console.log(`Will start boarding in ${wait} seconds`);
};

setTimeout(function () {
    console.log('TIMER');
    1000;0
};


/* Coding challenge!!! */

(function () {
    const header = document = document.querySelector('h1');
    header.style.color = 'black';

    document.querySelector('body').addEventListener('click', function () {
        header.style.color = 'blue';
    });
})();
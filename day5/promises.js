console.log('start');

setTimeout(() => {
    console.log('timeout');
}, 0);

Promise.resolve('promise!')
    .then(res => console.log(res));

console.log('end');
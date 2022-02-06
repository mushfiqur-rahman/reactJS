let array = [];
increment = 0;
let container = document.querySelector('.container');


//Fast
// while(increment < 10000) {
//     array.push(++increment);
// }

// container.innerHTML = array.join(' ');

//Slow

while(increment < 10000) {
    increment++;
    container.innerHTML += ' ' + increment;
}
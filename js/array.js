//создать массив
let fruit = ["apple", "banana", "orange"];
console.log(fruit);
console.log(fruit[0]);
console.log(fruit[2]);
console.log(fruit[fruit.length-1]);
//FOR Loop - перебрать массив
for(let i = 0; i < 3; i++){
    let message = `${i+1}. ${fruit[i]}`;
    console.log(message);
}

//

function divider(){
  console.log('--------------')
  console.log('--------------')
}

const myArray = [];

const numbers = [1,2,3,5,7];

console.log(numbers);

console.log(numbers[3]);

console.log(numbers[0]);

console.log('Length:', numbers.length);

console.log('Number 3',numbers[numbers.length -3])

numbers.push(25);

console.log(numbers);

numbers.pop();
console.log(numbers);

divider();

const cloudy = true;

const items = [1, 'two', [3, 4], cloudy, null];
console.log(items);

for (let i = 0; i<=items.length; i++) {
   // console.log('Value of i:', i);
    console.log('Item:',items[i]);
}

divider();

for (let item of items) {
    console.log('Item:', item);
}
divider();

const files = ["bundle.js","*js.map", ".c9"];
console.log(files.join(','));
        
const fileNames = "bundles.js, *.js.map, .c9";
console.log(fileNames.split(','));

divider();

const emptyObject= {};

const smallNumbers = {
    one: 1,
    two: 2,
    three: 3
}

console.log('Objects:', emptyObject,smallNumbers);
console.log('Values in our object:',
    smallNumbers.one,
    smallNumbers.two,
    smallnumbers.three,
    smallNumbers['one']
    
    );


divider();
const myObject={
    five:5,
    six:'six'
};
console.log(myObject.five);
console.log(myobject.six);

myobject?????
console.log(items);
items.push(myobject);
console.log(myobject);

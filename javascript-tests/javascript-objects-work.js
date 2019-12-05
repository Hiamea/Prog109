var myObject1 = {
    firstName: "Hiame",
    lastName: "Mohamed"
};

var myObject2 = {
    firstName: "Hiame",
    lastName: "Mohamed",
    fullName: function() { 'use strict';
        return this.firstName + ' ' + this.lastName;
    }
};

var calculator= {
     length.firstName :5
     length.lastName:7
 
    addMe: function() { return length.firstname + length.lastName; }
};

console.log(myObject1.firstName);
console.log(myObject1.lastName);
console.log(myObject2.fullName());
console.log(calculator.addMe());
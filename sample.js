"use strict";

function createObject(FunctionClass, Args) {
    return FunctionClass.apply({},Args);
}

function Student(firstName, lastName) {
    var fullName;

    fullName = firstName + " " + lastName;

    this.name = function() {
        return fullName;
    }

    return this;
}

var s = createObject(Student,['Weerasak', 'Chongnguluam']);
var s2 = createObject(Student,['Kanokon', 'Chansom']);

console.log(s.name());
console.log(s2.name());

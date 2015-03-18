"use strict";
var Student = (function() {
    function Student(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    function name(s) {
        return s.firstName + " " + s.lastName;
    };

    var exported = {
        Student: Student,
        name: name,
    };

    return exported;
})();

var s = new Student.Student("Weerasak", "Chongnguluam");
var s2 = new Student.Student("Kanokon", "Chansom");

console.log(Student.name(s));
console.log(Student.name(s2));

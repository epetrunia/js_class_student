'use strict';

class User {
    /**
     *
     * @param {string} name
     * @param {string} surname
     */
    constructor(name, surname) {
        this._name = name;
        this._surname = surname;
    }

    set name(value) {
        if (typeof value !== 'string') {
            throw new TypeError('Users name must be string type');
        }

        this._name = value;
    }

    get name() {
        return this._name;
    }

    set surname(value) {
        if (typeof value !== 'string') {
            throw new TypeError('Users surname must be string type');
        }

        this._surname = value;
    }

    get surname() {
        return this._surname;
    }

    getFullName() {
        return `${this._name} ${this._surname}`;
    }
}

class Student extends User {
    /**
     *
     * @param {string} name
     * @param {string} surname
     * @param {number} year
     */
    constructor(name, surname, year) {
        super(name, surname);
        this._year = year;
    }

    set year(value) {
        if (typeof value !== 'number') {
            throw new TypeError('Users year must be number type');
        }

        this._year = value;
    }

    get year() {
        return this._year;
    }

    getCourse() {
        const currentYear = new Date().getFullYear();
        const course = currentYear - this._year;

        if (course > 5) {
            throw new RangeError('This student already graduated');
        }
        if (course < 1) {
            throw new RangeError('This student has not entered yet');
        }

        return course;
    }
}

const ivan = new Student('Ivan', 'Ivanov', 2016);
console.log(ivan.getFullName());
console.log(ivan.getCourse());
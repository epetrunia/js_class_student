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


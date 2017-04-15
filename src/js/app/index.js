/**
 * @Description : index.js
 * @Author : Tomi
 * @Email : lintaoming@qq.com
 * @Create : 2017/4/12
 */
'use strict';

document.body.append('Hello HTML5');

class Preson {
    constructor () {
        this.name = 'Tomi';
        this.age = '18';
    }

    showName () {
        console.log(this.name);
    }

    showAge () {
        console.log(this.age);
    }
}

const P = new Preson();
P.showAge();

const hot = (num) => {
    let i = 10;
    return num + i;
};
var num = 5;
console.log(hot(num));
var num2 = 3;
console.log(hot(num2));


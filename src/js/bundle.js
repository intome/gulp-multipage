/**
 * @Description : index.js
 * @Author : Tomi
 * @Email : lintaoming@qq.com
 * @Create : 2017/4/12
 */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

document.body.append('Hello HTML5');

var Preson = function () {
  function Preson() {
    _classCallCheck(this, Preson);

    this.name = 'Tomi';
    this.age = '18';
  }

  _createClass(Preson, [{
    key: 'showName',
    value: function showName() {
      console.log(this.name);
    }
  }, {
    key: 'showAge',
    value: function showAge() {
      console.log(this.age);
    }
  }]);

  return Preson;
}();

var P = new Preson();
P.showAge();

var hot = function hot(num) {
  return num + 10;
};

console.log(hot(5));
//# sourceMappingURL=bundle.js.map

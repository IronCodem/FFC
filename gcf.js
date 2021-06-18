var num1 = prompt("Enter a number:")
var num2 = prompt("Enter another number:")

(function () {
    var gcf = function (a, b) {  
        return function () {
            if (b == 0) {
                return a;
            } else {
                return gcf(b, a % b);
            }
        }();
    };
    console.log(gcf(num1, num2));
  }());

let Calculator = {
    add : function(a,b) {
        return a+b;
    },
    sub : function(a,b) {
        return a-b;
    },
    mul : function(a,b) {
        return a*b;
    },
    div : function(a,b) {
        return a/b;
    }
}

console.log(Calculator.add(1,2));
console.log(Calculator.sub(5,3));
console.log(Calculator.mul(7,2));
console.log(Calculator.div(7,19));
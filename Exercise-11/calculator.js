let Calculator = {
    add : function(value1,value2) {
        return value1+value2;
    },
    sub : function(value1,value2) {
        return value1-value2;
    },
    mul : function(value1,value2) {
        return value1*value2;
    },
    div : function(value1,value2) {
        return value1/value2;
    }
}

console.log(Calculator.add(1,2));
console.log(Calculator.sub(5,3));
console.log(Calculator.mul(7,2));
console.log(Calculator.div(7,19));
var cQuery = function(selector, context){
    return new cQuery.prototype.init();
}

cQuery.prototype = {
    init: function(){
        return this;
    },
    name: function(){
        return this.age
    },
    age: 20
}

cQuery.prototype.init.prototype = cQuery.prototype;

console.log(cQuery().name())
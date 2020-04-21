var cQuery = function(selector, context){
    return new cQuery.prototype.init();
}

cQuery.prototype = {
    init: function(){
        return this;
    },
    name: function(){
        return this
    },
    age: 20
}

cQuery.extend = cQuery.fn.extend = function(){
    
}

cQuery.prototype.init.prototype = cQuery.prototype;

console.log(cQuery().name())
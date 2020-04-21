var cQuery = function(selector, context){
    return cQuery.prototype.init();
}

cQuery.prototype = {
    init: function(){
        return this;
    },
    name: function(){},
    age: function(){}
}

console.log(cQuery())
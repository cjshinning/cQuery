var cQuery = function(selector, context){
    return new cQuery.prototype.init(selector, context);
}

cQuery.prototype = {
    init: function(selector, context, rootjQuery){
        if(!selector){
            return this;
        }
        if(typeof selector === 'string'){
            // 处理id
            var rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
            var match = rquickExpr.exec(selector);
            elem = document.getElementById( match[2] );
            if(elem && elem.parentNode){
                this.length = 1;
                this[0] = elem;
            }
            this.context = document;
            this.selector = selector;
            return this;
        }else if(selector.nodeType){

        }else if(cQuery.isFunction(selector)){
            return rootjQuery.ready(selector);
        }

        if(selector.selector !== undefined){
            this.selector = selector.selector;
            this.context = selector.context;
        }
        // return cQuery.makeArray(selector, this);
    },
    name: function(){
        return this
    },
    age: 20
}

// cQuery.extend = cQuery.fn.extend = function(){
    
// }

cQuery.prototype.init.prototype = cQuery.prototype;

cQuery('#app');
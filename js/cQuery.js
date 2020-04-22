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
    bind: function(type, eventHandle){
        var elem = this[0] || {};
        elem.addEventListener(type, eventHandle, false);
    },
    html: function(value){
        var elem = this[0] || {};
        if ( value === undefined && elem.nodeType === 1 ) {
            return elem.innerHTML;
        }else{
            elem.innerHTML = value;
        }
    },
    css: function(name){
        var elem = this[0] || {};
        return window.getComputedStyle(elem, null).getPropertyValue(name);
    },
    ajax: function(config){
        var doneFn;
        var url = config.url;
        var method = config.method || 'GET';
        var complete = config.complete;
        var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
        xhr.open(method, url);
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    complete(xhr.responseText);
                    doneFn(xhr.responseText);
                }
            }
        };
        xhr.send(xhr.responseText);
        
        return {
            done: function(outfn){
                doneFn = outfn;
            }
        }
    },
    name: function(){
        return this
    },
    age: 20
}

// cQuery.extend = cQuery.fn.extend = function(){
    
// }

cQuery.prototype.init.prototype = cQuery.prototype;

console.log(cQuery('#app').html());
// cQuery('#app').html('<p>我想改一下文字</p>');
// cQuery('#app').bind('click', function(){
//     alert(111)
// })
// console.log(cQuery('#app').css('color'));
cQuery().ajax({
    url: 'http://hdapi.37.com/?c=c_info&a=default&alias_info=zqwzck20200410&f=auto',
    method: 'GET',
    complete: function(data){
        console.log(data);
    }
}).done(function(data){
    console.log(data)
})
// console.log(cQuery.cAjax());
// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  	var strings = "";
  	

  	if(typeof obj === 'string'){
  	return  '"'+obj+'"';
    }
    if(typeof obj === 'number'){
    	return strings + obj;
    }
    if(typeof obj === 'undefined' || obj === null){
      return strings + null;
    }
    if(typeof obj === 'boolean'){
      return strings + obj;
    }
    if (Array.isArray(obj)) {
    return '['+obj.map(function(o) {
    	return stringifyJSON(o)
    }).join(",") + ']';

  }
  	if (typeof obj === 'object'){
        var jayson = [];
        for(var j in obj){
        var k = obj[j]; var l = typeof(k);
        if(l == "string"){ 
          k = '"'+k+'"';
          j = '"'+j+'"';
        }
        else if(l == "boolean"){
          j = '"'+j+'"';
        }
         else if (l == "object" && k == null){ 
          j = '"'+j+'"';
          k = null;
        }
         else if (l == "object" && k !== null){ 
          j = '"'+j+'"';
          k = stringifyJSON(k);
        }
        else if(l == "function"){
           return ("{"+"}");
        } 
        jayson.push(j + ':' + k); 
        }
        return ( "{" + jayson + "}");
        }




        // return '{'+ obj.forEach(function(j)){
        //     console.log(j)
        // }) + '}';
  		
        
    // return strings + obj;
};


 //+ for(var j in obj){
      //       return stringifyJSON()
      //   }


 // obj.map(function(o) {
 //        return stringifyJSON(o)
 //      }).join(“,”)
// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // your code here
  	var elementals = [];
  	function goThruDOM(node, f){
  		f(node);
  		var i = 0;
  		node = node.childNodes[i];
  		i++;
  		while(node != null){
  			goThruDOM(node,f);
  			node = node.nextSibling
  		}
  	}
  	
  	goThruDOM(document.body, function(node){
  		var classy = node.classList;
  		if(classy){
  		 	for(var i = 0; i < classy.length; i++){
  		 		if(classy[i] === className)
  		 			elementals.push(node);
  		 	}
  		}
  	})
  	return elementals;
};
